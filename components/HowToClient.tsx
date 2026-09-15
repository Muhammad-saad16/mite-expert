"use client";

import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import { waLink } from "@/lib/data";
import Reveal from "./Reveal";

const steps = [
  { n: "01", t: "Shake & unlock", d: "Turn the nozzle to unlock the safety catch and shake the bottle well." },
  { n: "02", t: "Mist from 6–8 inches", d: "Lightly cover mattress, pillows, bedsheets, sofas, carpets and curtains — an even mist, not a soak." },
  { n: "03", t: "No stains, no washing required", d: "Let the fabric air dry. Nothing to rinse, wipe or wash afterwards." },
  { n: "04", t: "Repeat twice a week", d: "Most customers feel their dust allergy easing within the first week of regular use." },
];

export default function HowToClient() {
  const router = useRouter();
  const { subEmail, setSubEmail, subCode, subMsg, subscribe } = useCart();

  return (
    <section
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "clamp(28px,4vw,60px) clamp(16px,3vw,44px)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))",
        gap: "clamp(22px,4vw,44px)",
        alignItems: "start",
      }}
    >
      <Reveal
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 20,
          padding: 6,
          background: "linear-gradient(130deg,#8E6BB8,#1F7A4A)",
          boxShadow: "0 30px 60px -28px rgba(107,74,147,.8)",
          height: "clamp(300px,38vw,440px)",
          display: "flex",
        }}
      >
        <div style={{ flex: 1, minHeight: 0, borderRadius: 15, overflow: "hidden", background: "#2B2440", display: "flex" }}>
          <video
            src="/videos/how-to-use.mp4"
            controls
            playsInline
            preload="metadata"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
      </Reveal>

      <Reveal>
        {steps.map((s, i) => (
          <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "16px 0", boxShadow: "inset 0 1px 0 #E4EBE7" }}>
            <span style={{ fontSize: 17, fontWeight: 800, color: "#7B57A6" }}>{s.n}</span>
            <div>
              <div style={{ fontSize: 16.5, fontWeight: 700 }}>{s.t}</div>
              <p style={{ marginTop: 4, fontSize: 14.5, lineHeight: "22px", color: "#3E4A41" }}>{s.d}</p>
            </div>
          </div>
        ))}

        <div style={{ marginTop: 18, padding: 18, borderRadius: 16, background: "linear-gradient(130deg,#F3EAFA,#EAF6F0)", boxShadow: "inset 0 0 0 1px #E6DAF3", display: "flex", flexDirection: "column", gap: 9 }}>
          <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#7B57A6" }}>Get 5% discount on your second order</span>
          <p style={{ fontSize: 14.5, lineHeight: "22px", color: "#3E4A41" }}>
            Subscribe with your email and your discount code arrives by email. The code is saved against your first order, so it is confirmed and
            applied when you order again.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 9, alignItems: "center" }}>
            <input type="email" placeholder="you@example.com" value={subEmail} onChange={(e) => setSubEmail(e.target.value)} style={{ flex: "1 1 190px" }} />
            <button
              onClick={subscribe}
              style={{ padding: "13px 20px", border: "none", borderRadius: 10, background: "#7B57A6", color: "#fff", font: "700 14px var(--font-outfit),sans-serif", cursor: "pointer", whiteSpace: "nowrap" }}
            >
              Send me the code
            </button>
          </div>
          {subCode && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center", padding: "12px 14px", borderRadius: 10, background: "#fff" }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#1F7A4A" }}>Your code</span>
              <strong style={{ fontSize: 18, letterSpacing: ".06em", color: "#2B2440" }}>{subCode}</strong>
            </div>
          )}
          <span style={{ fontSize: 12.5, color: "#5B6C62" }}>{subMsg}</span>
        </div>

        <div style={{ marginTop: 18, display: "flex", flexWrap: "wrap", gap: 10 }}>
          <button
            onClick={() => router.push("/shop")}
            className="pm-btn"
            style={{ padding: "14px 24px", border: "none", borderRadius: 12, background: "#7B57A6", color: "#fff", font: "700 15px var(--font-outfit),sans-serif", cursor: "pointer", whiteSpace: "nowrap" }}
          >
            Shop now — Rs 1,299
          </button>
          <a href={waLink()} target="_blank" rel="noopener" style={{ padding: "14px 22px", borderRadius: 12, background: "#25D366", color: "#2B2440", fontSize: 15, fontWeight: 700, whiteSpace: "nowrap" }}>
            Ask us anything
          </a>
        </div>
      </Reveal>
    </section>
  );
}
