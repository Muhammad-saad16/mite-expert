"use client";

import { useRouter } from "next/navigation";
import { waLink } from "@/lib/data";
import Reveal from "./Reveal";

export default function ClosingCTA() {
  const router = useRouter();
  return (
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(32px,5vw,70px) clamp(16px,3vw,44px)" }}>
      <Reveal
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 18,
          background: "linear-gradient(125deg,#3A2158,#0A5237 58%,#7B57A6)",
          color: "#fff",
          padding: "clamp(24px,4vw,48px)",
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage: "repeating-linear-gradient(115deg,rgba(255,255,255,.08) 0 1px,transparent 1px 14px),radial-gradient(rgba(255,255,255,.16) 1.2px,transparent 1.3px)",
            backgroundSize: "auto,26px 26px",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -80,
            top: -90,
            width: 320,
            height: 320,
            borderRadius: 999,
            background: "radial-gradient(circle at 50% 50%,rgba(203,182,228,.4),rgba(203,182,228,0) 70%)",
          }}
        />
        <div style={{ position: "relative", maxWidth: 520 }}>
          <h2 style={{ fontWeight: 700, fontSize: "clamp(24px,3.2vw,36px)", lineHeight: 1.06, letterSpacing: "-.03em" }}>Sleep tonight without sneezing</h2>
          <p style={{ marginTop: 10, fontSize: 15.5, lineHeight: "24px", color: "rgba(255,255,255,.85)" }}>
            Order in under a minute — or message us and we&rsquo;ll pick the scent for your rooms.
          </p>
        </div>
        <div style={{ position: "relative", display: "flex", flexWrap: "wrap", gap: 12 }}>
          <button
            onClick={() => router.push("/shop")}
            style={{ padding: "15px 26px", border: "none", borderRadius: 12, background: "#fff", color: "#7B57A6", font: "700 15px var(--font-outfit),sans-serif", cursor: "pointer" }}
          >
            Buy now
          </button>
          <a href={waLink()} target="_blank" rel="noopener" style={{ padding: "15px 24px", borderRadius: 12, background: "#25D366", color: "#2B2440", fontSize: 15, fontWeight: 700 }}>
            WhatsApp us
          </a>
        </div>
      </Reveal>
    </section>
  );
}
