"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import { PRODUCTS, ProductKey } from "@/lib/data";
import Reveal from "./Reveal";

const bullets: Record<ProductKey, string[]> = {
  lavender: ["Reduces & treats dust allergies", "Eliminates dust mites", "Citric-acid based · skin friendly", "Softer scent — best for bedrooms"],
  rosemary: ["Reduces & treats dust allergies", "Eliminates dust mites", "Citric-acid based · skin friendly", "Fresh herbal scent — best for living areas"],
};

export default function ProductBuyCard({ productKey }: { productKey: ProductKey }) {
  const router = useRouter();
  const { add } = useCart();
  const p = PRODUCTS[productKey];

  return (
    <Reveal style={{ borderRadius: 16, background: "#fff", boxShadow: "inset 0 0 0 1px #E4EBE7", padding: 24, display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ height: "clamp(240px,26vw,320px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image
          src={p.shopImg}
          alt={`MiteXpert ${p.name} 250ml bottles`}
          width={280}
          height={320}
          style={{ height: "100%", width: "auto", maxWidth: "100%", objectFit: "contain", borderRadius: 12, boxShadow: "0 16px 34px -20px rgba(4,22,13,.45)", display: "block" }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700 }}>{p.name} 250ml</h2>
        <span style={{ fontSize: 20, fontWeight: 700 }}>Rs 1,299</span>
      </div>
      <div style={{ fontSize: 13, fontWeight: 600, color: "#3E4A41" }}>★★★★★ 4.9 · 200 reviews</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 14.5, lineHeight: "22px", color: "#3E4A41" }}>
        {bullets[productKey].map((b, i) => (
          <div key={i}>{b}</div>
        ))}
      </div>
      <div style={{ marginTop: "auto", display: "flex", gap: 9, flexWrap: "wrap" }}>
        <button
          onClick={() => add(productKey, p.name + " 250ml")}
          style={{ flex: "1 1 150px", padding: 14, border: "none", borderRadius: 12, background: "#7B57A6", color: "#fff", font: "700 15px var(--font-outfit),sans-serif", cursor: "pointer", whiteSpace: "nowrap" }}
        >
          Add to cart
        </button>
        <button
          onClick={() => router.push(`/shop/${productKey}`)}
          style={{ padding: "14px 18px", border: "none", borderRadius: 12, background: "#F4F7F5", color: "#2B2440", font: "700 15px var(--font-outfit),sans-serif", cursor: "pointer", whiteSpace: "nowrap" }}
        >
          Details
        </button>
      </div>
    </Reveal>
  );
}
