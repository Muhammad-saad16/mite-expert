"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useCart } from "@/lib/cart-context";
import { money } from "@/lib/data";

function payBtnStyle(active: boolean): React.CSSProperties {
  return active
    ? { flex: "1 1 150px", padding: 13, border: "none", borderRadius: 10, background: "#2B2440", color: "#fff", font: "700 13.5px var(--font-outfit),sans-serif", cursor: "pointer" }
    : { flex: "1 1 150px", padding: 13, border: "none", borderRadius: 10, background: "#fff", color: "#2B2440", boxShadow: "inset 0 0 0 1px #E4EBE7", font: "700 13.5px var(--font-outfit),sans-serif", cursor: "pointer" };
}

function cityBtnStyle(active: boolean): React.CSSProperties {
  return active
    ? { flex: 1, padding: 12, border: "none", borderRadius: 10, background: "#7B57A6", color: "#fff", font: "700 13.5px var(--font-outfit),sans-serif", cursor: "pointer" }
    : { flex: 1, padding: 12, border: "none", borderRadius: 10, background: "#fff", color: "#2B2440", boxShadow: "inset 0 0 0 1px #E4EBE7", font: "700 13.5px var(--font-outfit),sans-serif", cursor: "pointer" };
}

export default function CheckoutClient() {
  const router = useRouter();
  const {
    lineItems,
    step,
    city,
    setCity,
    subtotal,
    delivery,
    discount,
    total,
    checkout,
    setCheckoutField,
    codeMsg,
    codeOk,
    applyCode,
    orderNo,
    ensureOrderNo,
    waCheckoutLink,
    mailCheckoutLink,
  } = useCart();

  const [ready, setReady] = useState(false);

  useEffect(() => {
    ensureOrderNo();
    setReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const displayOrderNo = orderNo || "—";

  return (
    <div>
      <section
        style={{
          position: "relative",
          background: "linear-gradient(118deg,#F3EAFA 0%,#FBF7FE 44%,#E9F5EF 100%)",
          borderRadius: "0 0 clamp(28px,5vw,64px) clamp(28px,5vw,64px)",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(24px,4vw,48px) clamp(16px,3vw,44px)" }}>
          <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#7B57A6" }}>Checkout · order {displayOrderNo}</span>
          <h1 style={{ marginTop: 10, fontWeight: 800, fontSize: "clamp(26px,4vw,44px)", lineHeight: 1.02, letterSpacing: "-.04em" }}>Your details, then confirm</h1>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(24px,4vw,56px) clamp(16px,3vw,44px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: "clamp(20px,3vw,36px)", alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ borderRadius: 16, background: "#fff", boxShadow: "inset 0 0 0 1px #E4EBE7", padding: "clamp(20px,3vw,28px)", display: "flex", flexDirection: "column", gap: 13 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#7B57A6" }}>Delivery details</div>

            <Field label="Full name" id="co-name" value={checkout.coName} onChange={(v) => setCheckoutField("coName", v)} placeholder="Your name" />
            <Field label="WhatsApp number" id="co-phone" value={checkout.coPhone} onChange={(v) => setCheckoutField("coPhone", v)} placeholder="03XX XXXXXXX" type="tel" />
            <Field label="Alternate phone (courier backup)" id="co-phone2" value={checkout.coPhone2} onChange={(v) => setCheckoutField("coPhone2", v)} placeholder="Optional second number" type="tel" />
            <Field label="Email (order confirmation)" id="co-email" value={checkout.coEmail} onChange={(v) => setCheckoutField("coEmail", v)} placeholder="you@example.com" type="email" />
            <FieldArea label="Full address" id="co-addr" value={checkout.coAddress} onChange={(v) => setCheckoutField("coAddress", v)} placeholder="House / street / area" rows={3} />
            <Field label="Area / nearest landmark" id="co-area" value={checkout.coArea} onChange={(v) => setCheckoutField("coArea", v)} placeholder="e.g. DHA Phase 6, near Nishat Commercial" />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 10 }}>
              <Field label="City" id="co-city" value={checkout.coCity} onChange={(v) => setCheckoutField("coCity", v)} placeholder="Karachi" />
              <Field label="Postal code" id="co-postal" value={checkout.coPostal} onChange={(v) => setCheckoutField("coPostal", v)} placeholder="75500" />
            </div>

            <FieldArea label="Delivery notes (optional)" id="co-notes" value={checkout.coNotes} onChange={(v) => setCheckoutField("coNotes", v)} placeholder="Best time to deliver, gate instructions…" rows={2} />

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <button onClick={() => setCity("karachi")} style={cityBtnStyle(city === "karachi")}>Karachi · Rs 250</button>
              <button onClick={() => setCity("outside")} style={cityBtnStyle(city === "outside")}>Other city · Rs 350</button>
            </div>
          </div>

          <div style={{ borderRadius: 16, background: "#fff", boxShadow: "inset 0 0 0 1px #E4EBE7", padding: "clamp(20px,3vw,28px)", display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#7B57A6" }}>Payment method</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <button onClick={() => setCheckoutField("coPay", "cod")} style={payBtnStyle(checkout.coPay === "cod")}>Cash on delivery</button>
              <button onClick={() => setCheckoutField("coPay", "online")} style={payBtnStyle(checkout.coPay === "online")}>Online transfer</button>
            </div>
            {checkout.coPay === "online" && (
              <div style={{ borderRadius: 12, background: "linear-gradient(150deg,#F3EAFA,#E4F2EA)", padding: 18, display: "flex", flexDirection: "column", gap: 7 }}>
                <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#7B57A6" }}>MiteXpert bank account</div>
                <div style={{ fontSize: 14.5, lineHeight: "23px", color: "#2B2440" }}>
                  Account title: <strong>MITEXPERT</strong>
                  <br />
                  Bank: Meezan Bank
                  <br />
                  Account no: 99700114859511
                </div>
                <div style={{ marginTop: 4, fontSize: 13.5, lineHeight: "21px", fontWeight: 700, color: "#7B57A6" }}>
                  Send the payment screenshot to WhatsApp 0331 729 4872 to confirm your order.
                </div>
              </div>
            )}
          </div>
        </div>

        <div style={{ borderRadius: 16, background: "#fff", boxShadow: "inset 0 0 0 1px #E4EBE7", padding: "clamp(20px,3vw,28px)", display: "flex", flexDirection: "column", gap: 13 }}>
          <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#7B57A6" }}>Order {displayOrderNo}</div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {lineItems.length === 0 ? (
              <div style={{ padding: "26px 0", textAlign: "center", fontSize: 14.5, color: "#3E4A41" }}>Your cart is empty — add a bottle or a bundle to get started.</div>
            ) : (
              lineItems.map((it) => (
                <div key={it.key} style={{ display: "flex", gap: 12, alignItems: "center", padding: 12, borderRadius: 12, background: "#F4F7F5" }}>
                  <Image src={it.img} alt={it.name} width={50} height={58} style={{ width: 50, height: 58, objectFit: "cover", borderRadius: 8 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 14.5, fontWeight: 700 }}>{it.name}</div>
                    <div style={{ fontSize: 13, color: "#5B6C62" }}>
                      {money(it.price)}
                      {it.sub ? ` · ${it.sub}` : ""}
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <button onClick={() => step(it.key, -1)} style={{ width: 30, height: 30, borderRadius: 8, border: "none", background: "#E9F6EF", cursor: "pointer", fontSize: 15 }}>−</button>
                    <span style={{ fontSize: 14.5, fontWeight: 700, minWidth: 14, textAlign: "center" }}>{it.qty}</span>
                    <button onClick={() => step(it.key, 1)} style={{ width: 30, height: 30, borderRadius: 8, border: "none", background: "#E9F6EF", cursor: "pointer", fontSize: 15 }}>+</button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label htmlFor="co-code" style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", color: "#5B6C62" }}>Discount code</label>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <input id="co-code" type="text" placeholder="MITES-XXXXXX" value={checkout.coCode} onChange={(e) => setCheckoutField("coCode", e.target.value)} style={{ flex: "1 1 150px" }} />
              <button onClick={applyCode} style={{ padding: "13px 20px", border: "none", borderRadius: 10, background: "#7B57A6", color: "#fff", font: "700 14px var(--font-outfit),sans-serif", cursor: "pointer", whiteSpace: "nowrap" }}>
                Apply
              </button>
            </div>
            <span style={{ fontSize: 12.5, color: codeOk ? "#7B57A6" : "#5B6C62" }}>{codeMsg}</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14.5, color: "#3E4A41" }}>
            <span>Subtotal</span>
            <span>{money(subtotal)}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14.5, color: "#7B57A6", fontWeight: 700 }}>
            <span>Discount</span>
            <span>{discount ? "−" + money(discount) : "—"}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14.5, color: "#3E4A41" }}>
            <span>Delivery</span>
            <span>{lineItems.length ? money(delivery) : "—"}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, fontWeight: 800, paddingTop: 10, boxShadow: "inset 0 1px 0 #E4EBE7" }}>
            <span>Total</span>
            <span>{money(total)}</span>
          </div>

          <a
            href={ready ? waCheckoutLink : undefined}
            target="_blank"
            rel="noopener"
            style={{ marginTop: 6, padding: 15, borderRadius: 12, background: "#25D366", color: "#2B2440", textAlign: "center", fontSize: 15, fontWeight: 700 }}
          >
            Confirm on WhatsApp
          </a>
          <a href={ready ? mailCheckoutLink : undefined} style={{ padding: 14, borderRadius: 12, background: "#2B2440", color: "#fff", textAlign: "center", fontSize: 14.5, fontWeight: 700 }}>
            Email the order to MiteXpert
          </a>
          <span style={{ fontSize: 12.5, lineHeight: "20px", color: "#5B6C62", textAlign: "center" }}>
            Order number <strong style={{ color: "#7B57A6" }}>{displayOrderNo}</strong> is generated automatically and sent with your full order —
            items, address, payment method — to mitexpert4@gmail.com and to your email.
          </span>
          <button onClick={() => router.push("/shop")} style={{ border: "none", background: "transparent", padding: 0, cursor: "pointer", font: "700 13px var(--font-outfit),sans-serif", color: "#7B57A6" }}>
            ← Keep shopping
          </button>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label htmlFor={id} style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", color: "#5B6C62" }}>
        {label}
      </label>
      <input id={id} type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

function FieldArea({
  label,
  id,
  value,
  onChange,
  placeholder,
  rows,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows: number;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label htmlFor={id} style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", color: "#5B6C62" }}>
        {label}
      </label>
      <textarea id={id} rows={rows} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}
