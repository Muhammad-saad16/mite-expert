"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/lib/cart-context";
import { money } from "@/lib/data";

function cityBtnStyle(active: boolean): React.CSSProperties {
  return active
    ? { flex: 1, padding: 12, border: "none", borderRadius: 10, background: "#7B57A6", color: "#fff", font: "700 13.5px var(--font-outfit),sans-serif", cursor: "pointer" }
    : { flex: 1, padding: 12, border: "none", borderRadius: 10, background: "#fff", color: "#2B2440", boxShadow: "inset 0 0 0 1px #E4EBE7", font: "700 13.5px var(--font-outfit),sans-serif", cursor: "pointer" };
}

export default function CartDrawer() {
  const router = useRouter();
  const { cartOpen, closeCart, lineItems, step, city, setCity, subtotal, delivery, total, waOrderLink } = useCart();

  return (
    <AnimatePresence>
      {cartOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 80, display: "flex", justifyContent: "flex-end" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeCart}
            style={{ position: "absolute", inset: 0, background: "rgba(4,22,13,.36)", backdropFilter: "blur(3px)" }}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 340, damping: 36 }}
            style={{
              position: "relative",
              width: "min(420px,100%)",
              height: "100%",
              background: "#fff",
              padding: 22,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              boxShadow: "-30px 0 80px rgba(4,22,13,.3)",
              overflow: "auto",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, paddingBottom: 14, boxShadow: "inset 0 -1px 0 #E4EBE7" }}>
              <div style={{ fontSize: 20, fontWeight: 700 }}>Your cart</div>
              <button onClick={closeCart} style={{ width: 34, height: 34, borderRadius: 8, border: "none", background: "#F4F7F5", fontSize: 15, cursor: "pointer" }}>
                ✕
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {lineItems.length === 0 ? (
                <div style={{ padding: "26px 0", textAlign: "center", fontSize: 14.5, color: "#3E4A41" }}>
                  Your cart is empty — add a bottle or a bundle to get started.
                </div>
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
                      <button onClick={() => step(it.key, -1)} style={{ width: 30, height: 30, borderRadius: 8, border: "none", background: "#E9F6EF", cursor: "pointer", fontSize: 15 }}>
                        −
                      </button>
                      <span style={{ fontSize: 14.5, fontWeight: 700, minWidth: 14, textAlign: "center" }}>{it.qty}</span>
                      <button onClick={() => step(it.key, 1)} style={{ width: 30, height: 30, borderRadius: 8, border: "none", background: "#E9F6EF", cursor: "pointer", fontSize: 15 }}>
                        +
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#5B6C62" }}>Delivery city</span>
              <div style={{ display: "flex", gap: 8 }}>
                <button onClick={() => setCity("karachi")} style={cityBtnStyle(city === "karachi")}>Karachi · Rs 250</button>
                <button onClick={() => setCity("outside")} style={cityBtnStyle(city === "outside")}>Other city · Rs 350</button>
              </div>
            </div>

            <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 9, paddingTop: 14, boxShadow: "inset 0 1px 0 #E4EBE7" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14.5, color: "#3E4A41" }}>
                <span>Subtotal</span>
                <span>{money(subtotal)}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14.5, color: "#3E4A41" }}>
                <span>Delivery</span>
                <span>{lineItems.length ? money(delivery) : "—"}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 19, fontWeight: 700 }}>
                <span>Total</span>
                <span>{money(total)}</span>
              </div>
              <button
                onClick={() => {
                  closeCart();
                  router.push("/checkout");
                }}
                style={{ marginTop: 6, padding: 15, border: "none", borderRadius: 12, background: "#7B57A6", color: "#fff", font: "700 15px var(--font-outfit),sans-serif", cursor: "pointer" }}
              >
                Checkout
              </button>
              <a
                href={waOrderLink}
                target="_blank"
                rel="noopener"
                style={{ padding: 13, borderRadius: 12, background: "#F4F7F5", color: "#2B2440", textAlign: "center", fontSize: 14, fontWeight: 600 }}
              >
                Quick order on WhatsApp
              </a>
              <span style={{ fontSize: 12.5, color: "#5B6C62", textAlign: "center" }}>Cash on delivery available across Pakistan</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
