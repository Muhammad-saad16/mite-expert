"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { BUNDLES, CATALOG, PRICE, ProductKey, money, waLink, BRAND_EMAIL } from "./data";

type LineItem = {
  key: string;
  name: string;
  img: string;
  price: number;
  qty: number;
  sub?: string;
};

type Subscriber = { email: string; code: string; joined: string; used: boolean };

type CheckoutFields = {
  coName: string;
  coPhone: string;
  coPhone2: string;
  coEmail: string;
  coAddress: string;
  coArea: string;
  coCity: string;
  coPostal: string;
  coNotes: string;
  coCode: string;
  coPay: "cod" | "online";
};

type CartContextValue = {
  cart: Record<string, number>;
  add: (key: string, label: string) => void;
  step: (key: string, delta: number) => void;
  lineItems: LineItem[];
  count: number;
  subtotal: number;
  delivery: number;
  discount: number;
  total: number;
  city: "karachi" | "outside";
  setCity: (c: "karachi" | "outside") => void;
  cartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  toast: string;
  subEmail: string;
  setSubEmail: (v: string) => void;
  subCode: string;
  subMsg: string;
  subscribe: () => void;
  checkout: CheckoutFields;
  setCheckoutField: <K extends keyof CheckoutFields>(field: K, value: CheckoutFields[K]) => void;
  codeMsg: string;
  codeOk: boolean;
  applyCode: () => void;
  orderNo: string;
  ensureOrderNo: () => string;
  waOrderLink: string;
  waCheckoutLink: string;
  mailCheckoutLink: string;
};

const CartContext = createContext<CartContextValue | null>(null);

function readSubs(): Subscriber[] {
  try {
    return JSON.parse(window.localStorage.getItem("mx_subscribers") || "[]");
  } catch {
    return [];
  }
}

function makeCode(email: string) {
  const e = (email || "").trim().toLowerCase();
  let hash = 0;
  for (let i = 0; i < e.length; i++) hash = (hash * 31 + e.charCodeAt(i)) % 2176782336;
  return "MITES-" + hash.toString(36).toUpperCase().padStart(6, "0").slice(-6);
}

function makeOrderNo() {
  const d = new Date();
  const p = (n: number) => (n < 10 ? "0" + n : "" + n);
  return "MX-" + String(d.getFullYear()).slice(2) + p(d.getMonth() + 1) + p(d.getDate()) + "-" + Math.floor(1000 + Math.random() * 9000);
}

function loadCart(): Record<string, number> {
  if (typeof window === "undefined") return {};
  try {
    const saved = JSON.parse(window.localStorage.getItem("mx_cart") || "{}");
    return saved && typeof saved === "object" ? saved : {};
  } catch {
    return {};
  }
}

function loadCity(): "karachi" | "outside" {
  if (typeof window === "undefined") return "karachi";
  const saved = window.localStorage.getItem("mx_city");
  return saved === "outside" ? "outside" : "karachi";
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [city, setCity] = useState<"karachi" | "outside">("karachi");
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [subEmail, setSubEmail] = useState("");
  const [subCode, setSubCode] = useState("");
  const [subMsg, setSubMsg] = useState("");
  const [discountOn, setDiscountOn] = useState(false);
  const [codeMsg, setCodeMsg] = useState("");
  const [codeOk, setCodeOk] = useState(false);
  const [orderNo, setOrderNo] = useState("");
  const toastTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const [checkout, setCheckout] = useState<CheckoutFields>({
    coName: "",
    coPhone: "",
    coPhone2: "",
    coEmail: "",
    coAddress: "",
    coArea: "",
    coCity: "",
    coPostal: "",
    coNotes: "",
    coCode: "",
    coPay: "cod",
  });

  useEffect(() => {
    setCart(loadCart());
    setCity(loadCity());
  }, []);

  const persistCart = useCallback((next: Record<string, number>) => {
    try {
      window.localStorage.setItem("mx_cart", JSON.stringify(next));
    } catch {}
  }, []);

  const add = useCallback(
    (key: string, label: string) => {
      setCart((c) => {
        const next = { ...c, [key]: (c[key] || 0) + 1 };
        persistCart(next);
        return next;
      });
      setToast(label + " added to cart");
      clearTimeout(toastTimer.current);
      toastTimer.current = setTimeout(() => setToast(""), 2200);
    },
    [persistCart]
  );

  const step = useCallback(
    (key: string, delta: number) => {
      setCart((c) => {
        const next = { ...c };
        const n = (next[key] || 0) + delta;
        if (n <= 0) delete next[key];
        else next[key] = n;
        persistCart(next);
        return next;
      });
    },
    [persistCart]
  );

  const setCityAndPersist = useCallback((c: "karachi" | "outside") => {
    setCity(c);
    try {
      window.localStorage.setItem("mx_city", c);
    } catch {}
  }, []);

  const lineItems: LineItem[] = useMemo(() => {
    const out: LineItem[] = [];
    Object.keys(cart).forEach((k) => {
      const qty = cart[k];
      if (!qty) return;
      if (k in CATALOG) {
        const c = CATALOG[k as ProductKey];
        out.push({ key: k, name: c.name, img: c.img, price: c.price, qty });
      } else {
        const b = BUNDLES.find((bd) => bd.key === k);
        if (b) {
          const priceNum = parseInt(b.price.replace(/[^0-9]/g, ""), 10);
          out.push({ key: k, name: b.name, img: b.img, price: priceNum, qty, sub: b.contents });
        }
      }
    });
    return out;
  }, [cart]);

  const count = lineItems.reduce((n, it) => n + it.qty, 0);
  const subtotal = lineItems.reduce((n, it) => n + it.qty * it.price, 0);
  const delivery = count ? (city === "karachi" ? 250 : 350) : 0;
  const discount = discountOn ? Math.round((subtotal * 5) / 100) : 0;
  const total = Math.max(0, subtotal - discount) + delivery;

  const subscribe = useCallback(() => {
    const email = subEmail.trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setSubCode("");
      setSubMsg("Please enter a valid email address.");
      return;
    }
    const code = makeCode(email);
    const subs = readSubs();
    if (!subs.some((s) => s.email === email)) {
      subs.push({ email, code, joined: new Date().toISOString(), used: false });
      try {
        window.localStorage.setItem("mx_subscribers", JSON.stringify(subs));
      } catch {}
    }
    setSubCode(code);
    setSubMsg("Your second-order code is ready — we have also emailed it to you.");
  }, [subEmail]);

  const applyCode = useCallback(() => {
    const code = checkout.coCode.trim().toUpperCase();
    if (!code) {
      setDiscountOn(false);
      setCodeMsg("Enter your second-order code to see the discount.");
      setCodeOk(false);
      return;
    }
    const match = readSubs().find((s) => s.code === code);
    if (!match) {
      setDiscountOn(false);
      setCodeMsg("That code is not recognised. Subscribe with your email to get one.");
      setCodeOk(false);
      return;
    }
    setDiscountOn(true);
    setCodeMsg(`5% second-order discount applied for ${match.email}`);
    setCodeOk(true);
    setCheckout((c) => ({ ...c, coEmail: c.coEmail || match.email }));
  }, [checkout.coCode]);

  const ensureOrderNo = useCallback(() => {
    if (orderNo) return orderNo;
    const n = makeOrderNo();
    setOrderNo(n);
    return n;
  }, [orderNo]);

  const setCheckoutField = useCallback(<K extends keyof CheckoutFields>(field: K, value: CheckoutFields[K]) => {
    setCheckout((c) => ({ ...c, [field]: value }));
  }, []);

  const orderText = count
    ? "Hi MiteXpert! I'd like to order:\n" +
      lineItems.map((it) => `• ${it.qty} × ${it.name}`).join("\n") +
      `\nSubtotal ${money(subtotal)} + delivery ${money(delivery)} = ${money(total)}` +
      `\nCity: ${city === "karachi" ? "Karachi" : "Outside Karachi"}`
    : "Hi MiteXpert! I have a question about the dust allergy relief spray.";

  const checkoutText =
    `MiteXpert order ${orderNo || ""}\n\nItems:\n` +
    (lineItems.length ? lineItems.map((it) => `• ${it.qty} × ${it.name} — ${money(it.qty * it.price)}`).join("\n") : "(cart empty)") +
    `\n\nSubtotal: ${money(subtotal)}` +
    (discount ? `\nDiscount (${checkout.coCode.toUpperCase()}): -${money(discount)}` : "") +
    `\nDelivery: ${money(delivery)}` +
    `\nTotal: ${money(total)}` +
    `\n\nName: ${checkout.coName || "-"}` +
    `\nWhatsApp: ${checkout.coPhone || "-"}` +
    `\nAlternate phone: ${checkout.coPhone2 || "-"}` +
    `\nEmail: ${checkout.coEmail || "-"}` +
    `\nAddress: ${checkout.coAddress || "-"}` +
    `\nArea / nearest landmark: ${checkout.coArea || "-"}` +
    `\nCity: ${checkout.coCity || (city === "karachi" ? "Karachi" : "-")}` +
    `\nPostal code: ${checkout.coPostal || "-"}` +
    `\nDelivery notes: ${checkout.coNotes || "-"}` +
    `\nPayment: ${checkout.coPay === "online" ? "Online transfer (screenshot to follow)" : "Cash on delivery"}`;

  const value: CartContextValue = {
    cart,
    add,
    step,
    lineItems,
    count,
    subtotal,
    delivery,
    discount,
    total,
    city,
    setCity: setCityAndPersist,
    cartOpen,
    openCart: () => setCartOpen(true),
    closeCart: () => setCartOpen(false),
    toggleCart: () => setCartOpen((v) => !v),
    toast,
    subEmail,
    setSubEmail,
    subCode,
    subMsg: subMsg || "One email a month. Your code arrives instantly and works on your second order.",
    subscribe,
    checkout,
    setCheckoutField,
    codeMsg: codeMsg || "Second-order code from your subscription email.",
    codeOk,
    applyCode,
    orderNo,
    ensureOrderNo,
    waOrderLink: waLink(orderText),
    waCheckoutLink: waLink(checkoutText),
    mailCheckoutLink: `mailto:${BRAND_EMAIL}?subject=${encodeURIComponent("MiteXpert order " + (orderNo || ""))}&body=${encodeURIComponent(checkoutText)}`,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export { PRICE };
