"use client";

import { useCart } from "@/lib/cart-context";
import Reveal from "./Reveal";

export default function SubscribeBanner() {
  const { subEmail, setSubEmail, subCode, subMsg, subscribe } = useCart();

  return (
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px,3vw,44px) clamp(30px,4.5vw,64px)" }}>
      <Reveal
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 20,
          background: "linear-gradient(122deg,#6B4A93,#8E6BB8 52%,#1F7A4A)",
          color: "#fff",
          padding: "clamp(22px,3.4vw,42px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))",
          gap: "clamp(18px,3vw,36px)",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage: "radial-gradient(rgba(255,255,255,.16) 1.2px,transparent 1.3px)",
            backgroundSize: "26px 26px",
            opacity: 0.5,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -70,
            top: -90,
            width: 300,
            height: 300,
            borderRadius: 999,
            background: "radial-gradient(circle at 50% 50%,rgba(255,255,255,.22),rgba(255,255,255,0) 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative" }}>
          <span
            style={{
              padding: "6px 13px",
              borderRadius: 999,
              background: "rgba(255,255,255,.18)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,.3)",
              fontSize: 11.5,
              fontWeight: 700,
              letterSpacing: ".1em",
              textTransform: "uppercase",
            }}
          >
            5% off your second order
          </span>
          <h2 style={{ marginTop: 12, maxWidth: "22ch", fontWeight: 800, fontSize: "clamp(22px,3vw,32px)", lineHeight: 1.06, letterSpacing: "-.03em" }}>
            Come back and save — join the indoor-health list
          </h2>
          <p style={{ marginTop: 10, maxWidth: "46ch", fontSize: 14.5, lineHeight: "23px", color: "rgba(255,255,255,.84)" }}>
            Give us your email and we send a personal code. Use it on your <strong>second order</strong> for 5% off — it is tied to your email,
            so it keeps working whenever you restock. Plus dust allergy tips written for Pakistani homes.
          </p>
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "clamp(16px,2.4vw,22px)",
            borderRadius: 16,
            background: "rgba(255,255,255,.14)",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,.26)",
          }}
        >
          <label htmlFor="pm-sub" style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.8)" }}>
            Your email
          </label>
          <input id="pm-sub" type="email" placeholder="you@example.com" value={subEmail} onChange={(e) => setSubEmail(e.target.value)} />
          <button
            onClick={subscribe}
            style={{ padding: 14, border: "none", borderRadius: 12, background: "#fff", color: "#2B2440", font: "700 15px var(--font-outfit),sans-serif", cursor: "pointer" }}
          >
            Send me the code
          </button>
          {subCode && (
            <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: 14, borderRadius: 12, background: "rgba(255,255,255,.92)", color: "#2B2440" }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#7B57A6" }}>Your second-order code</span>
              <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: ".06em" }}>{subCode}</span>
            </div>
          )}
          <span style={{ fontSize: 12.5, lineHeight: "20px", color: "rgba(255,255,255,.78)" }}>{subMsg}</span>
        </div>
      </Reveal>
    </section>
  );
}
