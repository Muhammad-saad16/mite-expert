"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { PRODUCTS, ProductKey } from "@/lib/data";

export default function ScentFinder() {
  const { add } = useCart();
  const [step, setStep] = useState(0);
  const [room, setRoom] = useState<"bedroom" | "living" | "">("");
  const [scent, setScent] = useState<"calm" | "fresh" | "">("");

  const pick: ProductKey = scent === "fresh" ? "rosemary" : scent === "calm" ? "lavender" : room === "living" ? "rosemary" : "lavender";
  const rec = PRODUCTS[pick];

  const reset = () => {
    setStep(0);
    setRoom("");
    setScent("");
  };

  return (
    <div
      style={{
        marginTop: "clamp(26px,4vw,44px)",
        borderRadius: 16,
        background: "#fff",
        boxShadow: "inset 0 0 0 1px #E4EBE7",
        padding: "clamp(20px,3vw,30px)",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "baseline", justifyContent: "space-between" }}>
        <div>
          <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#7B57A6" }}>Scent finder</span>
          <h2 style={{ marginTop: 8, maxWidth: "20ch", fontWeight: 700, fontSize: "clamp(20px,2.6vw,28px)", lineHeight: 1.12, letterSpacing: "-.02em" }}>Not sure which one?</h2>
        </div>
        {step >= 2 && (
          <button onClick={reset} style={{ border: "none", background: "transparent", padding: 0, cursor: "pointer", font: "700 13px var(--font-outfit),sans-serif", color: "#7B57A6" }}>
            Start again
          </button>
        )}
      </div>

      {step === 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <span style={{ fontSize: 14.5, color: "#3E4A41" }}>Which room bothers you most?</span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <button
              onClick={() => {
                setRoom("bedroom");
                setStep(1);
              }}
              style={{ padding: "13px 20px", border: "none", borderRadius: 10, background: "#F3EAFA", color: "#2B2440", font: "700 14.5px var(--font-outfit),sans-serif", cursor: "pointer", whiteSpace: "nowrap" }}
            >
              Bedroom &amp; bedding
            </button>
            <button
              onClick={() => {
                setRoom("living");
                setStep(1);
              }}
              style={{ padding: "13px 20px", border: "none", borderRadius: 10, background: "#E9F6EF", color: "#2B2440", font: "700 14.5px var(--font-outfit),sans-serif", cursor: "pointer", whiteSpace: "nowrap" }}
            >
              Sofas, carpets &amp; curtains
            </button>
          </div>
        </div>
      )}

      {step === 1 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <span style={{ fontSize: 14.5, color: "#3E4A41" }}>And the scent you prefer?</span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <button
              onClick={() => {
                setScent("calm");
                setStep(2);
              }}
              style={{ padding: "13px 20px", border: "none", borderRadius: 10, background: "#F3EAFA", color: "#2B2440", font: "700 14.5px var(--font-outfit),sans-serif", cursor: "pointer", whiteSpace: "nowrap" }}
            >
              Calm and soft
            </button>
            <button
              onClick={() => {
                setScent("fresh");
                setStep(2);
              }}
              style={{ padding: "13px 20px", border: "none", borderRadius: 10, background: "#E9F6EF", color: "#2B2440", font: "700 14.5px var(--font-outfit),sans-serif", cursor: "pointer", whiteSpace: "nowrap" }}
            >
              Fresh and herbal
            </button>
          </div>
        </div>
      )}

      {step >= 2 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 18, alignItems: "center", justifyContent: "space-between", padding: 18, borderRadius: 12, background: rec.tint }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Image src={rec.gallery[0]} alt={rec.name} width={70} height={88} style={{ width: 70, height: 88, objectFit: "contain" }} />
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#5B6C62" }}>We recommend</div>
              <div style={{ marginTop: 5, fontSize: 22, fontWeight: 700 }}>{rec.name}</div>
              <div style={{ marginTop: 3, fontSize: 13.5, color: "#3E4A41" }}>{rec.tagline}</div>
            </div>
          </div>
          <button
            onClick={() => add(pick, rec.name + " 250ml")}
            style={{ padding: "13px 22px", border: "none", borderRadius: 10, background: "#7B57A6", color: "#fff", font: "700 14.5px var(--font-outfit),sans-serif", cursor: "pointer", whiteSpace: "nowrap" }}
          >
            Add it to cart
          </button>
        </div>
      )}
    </div>
  );
}
