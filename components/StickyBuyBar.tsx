"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { waLink } from "@/lib/data";

export default function StickyBuyBar() {
  const router = useRouter();
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 65,
        background: "rgba(255,255,255,.96)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 -1px 0 #E4EBE7",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "12px clamp(16px,3vw,44px)",
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Image src="/images/lavender-card.jpg" alt="" width={34} height={44} style={{ width: 34, height: 44, objectFit: "cover", borderRadius: 6 }} />
          <div>
            <div style={{ fontSize: 13.5, fontWeight: 700, whiteSpace: "nowrap" }}>MiteXpert 250ml · Rs 1,299</div>
            <div style={{ fontSize: 12, color: "#5B6C62", whiteSpace: "nowrap" }}>★★★★★ 4.9 · 200 reviews</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={() => router.push("/shop")}
            className="pm-btn"
            style={{ padding: "12px 22px", border: "none", borderRadius: 999, background: "#7B57A6", color: "#fff", font: "700 14px var(--font-outfit),sans-serif", cursor: "pointer" }}
          >
            Buy now
          </button>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            style={{ padding: "12px 20px", borderRadius: 999, background: "#25D366", color: "#2B2440", fontSize: 14, fontWeight: 700 }}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
