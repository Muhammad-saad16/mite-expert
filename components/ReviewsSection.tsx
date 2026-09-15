"use client";

import Link from "next/link";
import { REVIEWS } from "@/lib/data";
import Reveal from "./Reveal";

export default function ReviewsSection() {
  const marquee = [...REVIEWS, ...REVIEWS];

  return (
    <section style={{ background: "#fff", padding: "clamp(32px,5vw,72px) 0" }}>
      <Reveal
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 clamp(16px,3vw,44px)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <h2 style={{ fontWeight: 700, fontSize: "clamp(26px,3.6vw,42px)", lineHeight: 1.04, letterSpacing: "-.03em" }}>200 reviews. 4.9 average.</h2>
        <span style={{ fontSize: 13.5, color: "#3E4A41" }}>Karachi · Gujranwala · Lahore · Islamabad</span>
      </Reveal>

      <Reveal
        style={{
          maxWidth: 1200,
          margin: "22px auto 0",
          padding: "0 clamp(16px,3vw,44px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))",
          gap: 16,
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            borderRadius: 18,
            overflow: "hidden",
            padding: 5,
            background: "linear-gradient(130deg,#8E6BB8,#1F7A4A)",
            boxShadow: "0 26px 54px -26px rgba(107,74,147,.75)",
          }}
        >
          <div style={{ borderRadius: 14, overflow: "hidden", background: "#2B2440" }}>
            <audio controls style={{ width: "100%", display: "block" }} preload="metadata">
              <source src="/audio/testimonial-2.ogg" type="audio/ogg" />
            </audio>
          </div>
        </div>
        <div>
          <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#7B57A6" }}>Customer voice note · Lahore</span>
          <h3 style={{ marginTop: 10, maxWidth: "22ch", fontWeight: 700, fontSize: "clamp(20px,2.6vw,28px)", lineHeight: 1.1, letterSpacing: "-.02em" }}>
            &ldquo;My mornings are calm again&rdquo;
          </h3>
          <p style={{ marginTop: 10, maxWidth: "44ch", fontSize: 14.5, lineHeight: "23px", color: "#3E4A41" }}>
            Hira Tanveer, Lahore — a quick spray over the mattress and sofa twice a week, and the daily dust allergy flare-ups stopped.
          </p>
          <Link
            href="/how-to-use"
            style={{ marginTop: 14, display: "inline-block", padding: "13px 22px", border: "none", borderRadius: 12, background: "linear-gradient(120deg,#7B57A6,#1F7A4A)", color: "#fff", font: "700 14px var(--font-outfit),sans-serif", cursor: "pointer", whiteSpace: "nowrap" }}
          >
            Watch how to use it →
          </Link>
        </div>
      </Reveal>

      <div
        style={{
          marginTop: 26,
          overflow: "hidden",
          WebkitMaskImage: "linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)",
          maskImage: "linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)",
        }}
      >
        <div style={{ display: "flex", gap: 16, width: "max-content", padding: "0 clamp(16px,3vw,44px)", animation: "pmScroll 48s linear infinite" }}>
          {marquee.map((r, i) => (
            <div key={i} style={{ flex: "0 0 auto", width: "min(78vw,330px)", borderRadius: 16, background: "#F4F7F5", padding: 22, display: "flex", flexDirection: "column", gap: 12 }}>
              <span style={{ letterSpacing: 2, color: "#E0A32B" }}>★★★★★</span>
              <p style={{ fontSize: 14.5, lineHeight: "22px", color: "#3E4A41" }}>&ldquo;{r.text}&rdquo;</p>
              <div style={{ marginTop: "auto", fontSize: 13, fontWeight: 700 }}>
                {r.name}
                <span style={{ fontWeight: 500, color: "#5B6C62" }}> · {r.city}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
