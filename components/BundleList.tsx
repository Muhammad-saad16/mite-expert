"use client";

import Image from "next/image";
import { useCart } from "@/lib/cart-context";
import { BUNDLES } from "@/lib/data";
import Reveal from "./Reveal";

export default function BundleList() {
  const { add } = useCart();
  return (
    <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 12 }}>
      {BUNDLES.map((b) => (
        <Reveal
          key={b.key}
          style={{ borderRadius: 14, background: "#fff", boxShadow: "inset 0 0 0 1px #E4EBE7", padding: "16px 22px", display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center", justifyContent: "space-between" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16, minWidth: 230 }}>
            <div style={{ flexShrink: 0, width: 84, height: 84, borderRadius: 12, overflow: "hidden", background: "#F5F3F0", boxShadow: "inset 0 0 0 1px rgba(92,59,126,.14)" }}>
              <Image src={b.img} alt={b.name} width={84} height={84} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <div style={{ fontSize: 17, fontWeight: 700 }}>{b.name}</div>
              <div style={{ marginTop: 3, fontSize: 13.5, color: "#5B6C62" }}>{b.contents}</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <span style={{ padding: "6px 12px", borderRadius: 999, background: "#E9F6EF", fontSize: 12.5, fontWeight: 700, color: "#7B57A6" }}>{b.save}</span>
            <span style={{ fontSize: 19, fontWeight: 700 }}>{b.price}</span>
            <button
              onClick={() => add(b.key, b.name)}
              style={{ padding: "11px 20px", border: "none", borderRadius: 10, background: "#2B2440", color: "#fff", font: "700 13.5px var(--font-outfit),sans-serif", cursor: "pointer", whiteSpace: "nowrap" }}
            >
              Add to cart
            </button>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
