"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import { BUNDLES } from "@/lib/data";
import Reveal from "./Reveal";

export default function RoomPicker() {
  const router = useRouter();
  const { add } = useCart();

  return (
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(32px,5vw,74px) clamp(16px,3vw,44px)" }}>
      <Reveal style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 12 }}>
        <div>
          <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#7B57A6" }}>Pick your room</span>
          <h2 style={{ marginTop: 10, fontWeight: 700, fontSize: "clamp(26px,3.6vw,42px)", lineHeight: 1.04, letterSpacing: "-.03em" }}>Which one first?</h2>
        </div>
        <span style={{ fontSize: 13.5, color: "#3E4A41" }}>Same formula · different scent · Rs 1,299 each</span>
      </Reveal>

      <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,290px),1fr))", gap: 16 }}>
        <Reveal className="pm-hover-lift" style={{ borderRadius: 16, background: "#fff", boxShadow: "inset 0 0 0 1px #E4EBE7", padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ padding: "5px 11px", borderRadius: 999, background: "#F3EAFA", fontSize: 11.5, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#7B57A6" }}>Bedroom pick</span>
            <span style={{ fontSize: 12.5, fontWeight: 600, color: "#3E4A41" }}>★★★★★ 4.9</span>
          </div>
          <div style={{ height: 220, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image src="/images/lavender-card.jpg" alt="MiteXpert Lavender 250ml dust allergy relief spray" width={220} height={220} style={{ height: "100%", width: "auto", maxWidth: "100%", objectFit: "contain", borderRadius: 12, boxShadow: "0 16px 34px -20px rgba(4,22,13,.45)", display: "block" }} />
          </div>
          <div style={{ fontSize: 18, fontWeight: 700 }}>Lavender 250ml</div>
          <p style={{ fontSize: 14, lineHeight: "21px", color: "#3E4A41" }}>Mattress, pillows, kids&rsquo; room. Softer scent for night use.</p>
          <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
            <span style={{ fontSize: 19, fontWeight: 700 }}>Rs 1,299</span>
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => router.push("/shop/lavender")} style={{ padding: "12px 16px", border: "none", borderRadius: 10, background: "#F4F7F5", color: "#2B2440", font: "700 14px var(--font-outfit),sans-serif", cursor: "pointer", whiteSpace: "nowrap" }}>
                Details
              </button>
              <button onClick={() => add("lavender", "Lavender 250ml")} style={{ padding: "12px 20px", border: "none", borderRadius: 10, background: "#7B57A6", color: "#fff", font: "700 14px var(--font-outfit),sans-serif", cursor: "pointer", whiteSpace: "nowrap" }}>
                Add to cart
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal className="pm-hover-lift" style={{ borderRadius: 16, background: "#fff", boxShadow: "inset 0 0 0 1px #E4EBE7", padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ padding: "5px 11px", borderRadius: 999, background: "#E9F6EF", fontSize: 11.5, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#7B57A6" }}>Living room pick</span>
            <span style={{ fontSize: 12.5, fontWeight: 600, color: "#3E4A41" }}>★★★★★ 4.9</span>
          </div>
          <div style={{ height: 220, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image src="/images/rosemary-card.jpg" alt="MiteXpert Rosemary 250ml dust allergy relief spray" width={220} height={220} style={{ height: "100%", width: "auto", maxWidth: "100%", objectFit: "contain", borderRadius: 12, boxShadow: "0 16px 34px -20px rgba(4,22,13,.45)", display: "block" }} />
          </div>
          <div style={{ fontSize: 18, fontWeight: 700 }}>Rosemary 250ml</div>
          <p style={{ fontSize: 14, lineHeight: "21px", color: "#3E4A41" }}>Sofas, carpets, curtains. Fresh scent for daytime cleaning.</p>
          <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
            <span style={{ fontSize: 19, fontWeight: 700 }}>Rs 1,299</span>
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => router.push("/shop/rosemary")} style={{ padding: "12px 16px", border: "none", borderRadius: 10, background: "#F4F7F5", color: "#2B2440", font: "700 14px var(--font-outfit),sans-serif", cursor: "pointer", whiteSpace: "nowrap" }}>
                Details
              </button>
              <button onClick={() => add("rosemary", "Rosemary 250ml")} style={{ padding: "12px 20px", border: "none", borderRadius: 10, background: "#7B57A6", color: "#fff", font: "700 14px var(--font-outfit),sans-serif", cursor: "pointer", whiteSpace: "nowrap" }}>
                Add to cart
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal style={{ borderRadius: 16, background: "linear-gradient(150deg,#2E1A46,#0E4B33 62%,#125F41)", color: "#fff", padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
          <span style={{ alignSelf: "flex-start", padding: "5px 11px", borderRadius: 999, background: "rgba(255,255,255,.16)", fontSize: 11.5, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#DCC9F0" }}>
            Best value
          </span>
          <div style={{ fontSize: 18, fontWeight: 700 }}>Bundles — save up to Rs 298</div>
          {BUNDLES.map((b) => (
            <div key={b.key} style={{ display: "flex", justifyContent: "space-between", gap: 10, paddingBottom: 9, boxShadow: "inset 0 -1px 0 rgba(255,255,255,.12)", fontSize: 13.5, color: "rgba(255,255,255,.82)" }}>
              <span>{b.name}</span>
              <span style={{ color: "#fff", fontWeight: 700 }}>{b.price}</span>
            </div>
          ))}
          <button
            onClick={() => router.push("/shop")}
            style={{ marginTop: "auto", padding: 13, border: "none", borderRadius: 10, background: "#7BE3AF", color: "#2B2440", font: "700 14px var(--font-outfit),sans-serif", cursor: "pointer" }}
          >
            See all bundles
          </button>
        </Reveal>
      </div>
    </section>
  );
}
