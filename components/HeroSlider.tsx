"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { SLIDES } from "@/lib/data";

export default function HeroSlider() {
  const router = useRouter();
  const [slide, setSlide] = useState(0);
  const holdRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [holding, setHolding] = useState(false);

  useEffect(() => {
    if (holding) return;
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 4500);
    return () => clearInterval(t);
  }, [holding]);

  const jump = useCallback((i: number) => {
    setSlide(((i % SLIDES.length) + SLIDES.length) % SLIDES.length);
    setHolding(true);
    clearTimeout(holdRef.current);
    holdRef.current = setTimeout(() => setHolding(false), 9000);
  }, []);

  const sl = SLIDES[slide];

  const goSlide = () => {
    if (sl.go === "lavender" || sl.go === "rosemary") router.push(`/shop/${sl.go}`);
    else if (sl.go === "shop") router.push("/shop");
    else if (sl.go === "blogs") router.push("/blogs");
    else if (sl.go === "howto") router.push("/how-to-use");
    else router.push("/");
  };

  return (
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(12px,2.2vw,24px) clamp(16px,3vw,44px) clamp(24px,3.5vw,46px)" }}>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 24,
          background: sl.bg,
          boxShadow: "0 34px 70px -40px rgba(4,22,13,.75)",
          transition: "background 700ms",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-8%",
            top: "-30%",
            width: "min(560px,62%)",
            height: "min(560px,120%)",
            borderRadius: 999,
            background: "radial-gradient(circle at 50% 50%,rgba(255,255,255,.16),rgba(255,255,255,0) 68%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -60,
            bottom: -120,
            width: 340,
            height: 340,
            borderRadius: 999,
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,.14)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage:
              "repeating-linear-gradient(118deg,rgba(255,255,255,.07) 0 1px,transparent 1px 16px),radial-gradient(rgba(255,255,255,.14) 1.1px,transparent 1.2px)",
            backgroundSize: "auto,24px 24px",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))",
            gap: "clamp(18px,3vw,40px)",
            alignItems: "center",
            padding: "clamp(24px,3.4vw,46px) clamp(22px,3.4vw,52px) clamp(18px,2.6vw,32px)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "7px 14px",
                borderRadius: 999,
                background: "rgba(255,255,255,.14)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,.28)",
                color: "#fff",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: ".14em",
                textTransform: "uppercase",
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: 999, background: sl.dot }} />
              {sl.badge}
            </span>
            <h1 key={"t" + slide} style={{ maxWidth: "18ch", fontWeight: 800, fontSize: "clamp(30px,4.8vw,58px)", lineHeight: 0.98, letterSpacing: "-.045em", color: "#fff" }}>
              {sl.title}
            </h1>
            <p style={{ maxWidth: "38ch", fontSize: 15.5, lineHeight: "24px", color: "rgba(255,255,255,.82)" }}>{sl.sub}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", marginTop: 4 }}>
              <button
                onClick={goSlide}
                className="pm-btn"
                style={{
                  padding: "15px 26px",
                  border: "none",
                  borderRadius: 999,
                  background: "#fff",
                  color: "#2B2440",
                  font: "700 15px var(--font-outfit),sans-serif",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                {sl.cta}
              </button>
              <span
                style={{
                  padding: "11px 16px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,.12)",
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,.24)",
                  fontSize: 15,
                  fontWeight: 800,
                  letterSpacing: "-.01em",
                  color: "#fff",
                  whiteSpace: "nowrap",
                }}
              >
                {sl.price}
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 16px", alignItems: "center", marginTop: 8, fontSize: 12.5, fontWeight: 600, letterSpacing: ".02em", color: "rgba(255,255,255,.7)" }}>
              <span style={{ whiteSpace: "nowrap" }}>★ 4.9 · 200 reviews</span>
              <span style={{ whiteSpace: "nowrap" }}>500+ homes</span>
              <span style={{ whiteSpace: "nowrap" }}>PCSIR certified</span>
              <span style={{ whiteSpace: "nowrap" }}>Cash on delivery</span>
            </div>
          </div>

          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "clamp(230px,26vw,340px)" }}>
            <Image
              key={slide}
              src={sl.img}
              alt={sl.title}
              width={330}
              height={330}
              style={{
                position: "relative",
                height: "clamp(220px,25vw,330px)",
                width: "auto",
                maxWidth: "100%",
                objectFit: "contain",
                borderRadius: 18,
                boxShadow: "0 30px 60px -26px rgba(0,0,0,.7)",
                display: "block",
                animation: "pmSlide .7s cubic-bezier(.16,.84,.28,1) both",
              }}
            />
          </div>
        </div>

        <div style={{ position: "relative", display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", justifyContent: "space-between", padding: "0 clamp(22px,3.4vw,52px) clamp(18px,2.4vw,26px)" }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => jump(i)}
                aria-label={`Banner ${i + 1}`}
                style={{
                  width: i === slide ? 28 : 9,
                  height: 9,
                  border: "none",
                  borderRadius: 999,
                  cursor: "pointer",
                  background: i === slide ? "#fff" : "rgba(255,255,255,.35)",
                  transition: "width 320ms, background 320ms",
                  padding: 0,
                }}
              />
            ))}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={() => jump(slide - 1)}
              aria-label="Previous banner"
              style={{ width: 42, height: 42, border: "none", borderRadius: 999, background: "rgba(255,255,255,.14)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,.3)", color: "#fff", font: "700 18px var(--font-outfit),sans-serif", cursor: "pointer" }}
            >
              ‹
            </button>
            <button
              onClick={() => jump(slide + 1)}
              aria-label="Next banner"
              className="pm-btn"
              style={{ width: 42, height: 42, border: "none", borderRadius: 999, background: "#fff", color: "#2B2440", font: "700 18px var(--font-outfit),sans-serif", cursor: "pointer" }}
            >
              ›
            </button>
          </div>
        </div>

        <div style={{ position: "relative", height: 3, background: "rgba(255,255,255,.16)" }}>
          <div key={slide + (holding ? "-h" : "")} style={{ position: "absolute", left: 0, top: 0, height: "100%", background: sl.dot, animation: holding ? "none" : "pmProgress 4.5s linear both", width: holding ? "100%" : undefined }} />
        </div>
      </div>
    </section>
  );
}
