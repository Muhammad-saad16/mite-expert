"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Reveal from "./Reveal";

const steps = [
  "Open the safety lock and shake well",
  "Mist from 6–8 inches over bedding, sofas, carpets, curtains",
  "No stains, no washing required — just let it air dry",
  "Repeat twice a week for lasting dust allergy relief",
];

export default function HowToPreview() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const p = v.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  }, []);

  return (
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(30px,4.5vw,64px) clamp(16px,3vw,44px) clamp(32px,5vw,70px)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: 16 }}>
        <Reveal style={{ borderRadius: 16, background: "#fff", boxShadow: "inset 0 0 0 1px #E4EBE7", padding: 24 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#7B57A6" }}>Why people re-order</div>
          <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 11 }}>
            {[
              "Works on the mites in bedding, sofas and carpets — not just the smell",
              "Citric acid, plant-oil based — skin and respiratory friendly, no side effects",
              "Lab tested and PCSIR certified — not a repackaged air freshener",
              "Delivery COD and nationwide delivery available",
            ].map((t, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ flexShrink: 0, width: 19, height: 19, marginTop: 2, borderRadius: 999, background: "#E9F6EF", color: "#1F7A4A", fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>✓</span>
                <span style={{ fontSize: 14.5, lineHeight: "22px", color: "#3E4A41" }}>{t}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal style={{ position: "relative", overflow: "hidden", borderRadius: 16, background: "#2B2440", color: "#fff", padding: 24, minHeight: 300, display: "flex", flexDirection: "column" }}>
          <video
            ref={videoRef}
            src="/videos/how-to-use.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.88 }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(150deg,rgba(107,74,147,.55),rgba(31,122,74,.4))" }} />
          <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 0 2px rgba(220,201,240,.7),inset 0 -100px 130px -60px rgba(43,36,64,.92)" }} />
          <div style={{ position: "relative" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#7BE3AF" }}>How to use</div>
              <Link href="/how-to-use" style={{ padding: "9px 15px", border: "none", borderRadius: 999, background: "rgba(255,255,255,.16)", color: "#fff", font: "700 12px var(--font-outfit),sans-serif", cursor: "pointer", whiteSpace: "nowrap" }}>
                Watch the full guide →
              </Link>
            </div>
            <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 12 }}>
              {steps.map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 15, fontWeight: 800, color: "#DCC9F0" }}>{String(i + 1).padStart(2, "0")}</span>
                  <span style={{ fontSize: 14.5, lineHeight: "22px", color: "rgba(255,255,255,.9)" }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
