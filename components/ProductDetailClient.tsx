"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import { PRODUCTS, ProductKey, money, PRICE, waLink } from "@/lib/data";

export default function ProductDetailClient({ productKey }: { productKey: ProductKey }) {
  const router = useRouter();
  const { add } = useCart();
  const p = PRODUCTS[productKey];

  return (
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(18px,3vw,34px) clamp(16px,3vw,44px) clamp(30px,4vw,64px)" }}>
      <button
        onClick={() => router.push("/shop")}
        style={{ border: "none", background: "transparent", padding: 0, cursor: "pointer", font: "700 13.5px var(--font-outfit),sans-serif", color: "#7B57A6" }}
      >
        ← Back to shop
      </button>

      <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "clamp(22px,4vw,48px)", alignItems: "start" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {p.gallery.map((src, i) => (
            <div
              key={i}
              style={{
                gridColumn: i === 0 ? "1 / -1" : "auto",
                height: i === 0 ? 400 : 150,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={src}
                alt={`${p.name} 250ml dust allergy relief spray`}
                width={i === 0 ? 400 : 150}
                height={i === 0 ? 400 : 150}
                style={{ height: "100%", width: "auto", maxWidth: "100%", objectFit: "contain", borderRadius: 12, boxShadow: "0 18px 36px -22px rgba(4,22,13,.45)", display: "block" }}
              />
            </div>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 15, alignItems: "flex-start" }}>
          <span style={{ padding: "6px 13px", borderRadius: 999, background: p.tint, fontSize: 11.5, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: p.accent }}>
            Dust allergy relief spray
          </span>
          <h1 style={{ fontWeight: 800, fontSize: "clamp(30px,4.4vw,50px)", lineHeight: 1.01, letterSpacing: "-.04em" }}>{p.name} 250ml</h1>
          <div style={{ fontSize: 16.5, lineHeight: "26px", color: "#3E4A41" }}>{p.tagline}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
            <span style={{ fontSize: 24, fontWeight: 700 }}>{money(PRICE)}</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#3E4A41" }}>★★★★★ 4.9 · 200 reviews</span>
          </div>
          <p style={{ maxWidth: "48ch", fontSize: 15.5, lineHeight: "25px", color: "#3E4A41" }}>{p.body}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <button
              onClick={() => add(productKey, p.name + " 250ml")}
              className="pm-btn"
              style={{ padding: "15px 26px", border: "none", borderRadius: 12, background: "#7B57A6", color: "#fff", font: "700 15px var(--font-outfit),sans-serif", cursor: "pointer", whiteSpace: "nowrap" }}
            >
              Add to cart
            </button>
            <a href={waLink()} target="_blank" rel="noopener" style={{ padding: "15px 22px", borderRadius: 12, background: "#25D366", color: "#2B2440", fontSize: 15, fontWeight: 700, whiteSpace: "nowrap" }}>
              Ask before buying
            </a>
          </div>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 9 }}>
            <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#5B6C62" }}>Where to use it</span>
            {p.rooms.map((r, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "center", padding: "11px 14px", borderRadius: 10, background: "#fff", boxShadow: "inset 0 0 0 1px #E4EBE7", fontSize: 14.5 }}>
                <span style={{ width: 7, height: 7, borderRadius: 999, background: p.accent }} />
                <span>{r}</span>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 13.5, color: "#3E4A41" }}>COD and nationwide delivery available</div>
        </div>
      </div>
    </section>
  );
}
