import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const fabrics = [
  { t: "Mattress & pillows", d: "Eight hours of skin contact every night — the densest mite habitat in the house." },
  { t: "Sofas & cushions", d: "Deep upholstery that vacuuming alone never reaches." },
  { t: "Carpets, rugs & curtains", d: "Where household dust settles first and returns to the air daily." },
  { t: "Kids’ rooms & cupboard linen", d: "Skin friendly and residue free, so it is safe for everyday use." },
];

export default function EducationSection() {
  return (
    <section style={{ background: "#fff", padding: "clamp(30px,4.5vw,68px) clamp(16px,3vw,44px)", boxShadow: "inset 0 1px 0 #E4EBE7,inset 0 -1px 0 #E4EBE7" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "clamp(22px,4vw,48px)", alignItems: "start" }}>
        <Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <div>
              <div style={{ borderRadius: 14, overflow: "hidden", background: "#EFE3F8" }}>
                <Image src="/images/dust-mites-macro.jpg" alt="Dust mites magnified in household fabric fibres" width={300} height={210} style={{ width: "100%", height: "clamp(150px,18vw,210px)", objectFit: "cover", display: "block" }} />
              </div>
              <span style={{ display: "block", marginTop: 8, fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#7B57A6" }}>Before · dust mites in fabric</span>
            </div>
            <div>
              <div style={{ borderRadius: 14, overflow: "hidden", background: "#DCEFE4" }}>
                <Image src="/images/clean-linen-after.jpg" alt="Clean fabric after MiteXpert dust allergy relief spray treatment" width={300} height={210} style={{ width: "100%", height: "clamp(150px,18vw,210px)", objectFit: "cover", display: "block" }} />
              </div>
              <span style={{ display: "block", marginTop: 8, fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#1F7A4A" }}>After · clean, mite-free fabric</span>
            </div>
          </div>
          <p style={{ marginTop: 10, maxWidth: "44ch", fontSize: 15, lineHeight: "24px", color: "#3E4A41" }}>
            Invisible to the naked eye, dust mites live deep inside the fabrics you use every day and feed on shed skin cells. Washing and
            vacuuming remove some; MiteXpert treats what they leave behind.
          </p>
        </Reveal>

        <div>
          <Reveal style={{ paddingBottom: 6 }}>
            <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#7B57A6" }}>Where it works</span>
            <h2 style={{ marginTop: 10, maxWidth: "20ch", fontWeight: 700, fontSize: "clamp(26px,3.6vw,40px)", lineHeight: 1.04, letterSpacing: "-.03em" }}>Every fabric you touch all day</h2>
          </Reveal>
          {fabrics.map((f, i) => (
            <Reveal key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "15px 0", boxShadow: "inset 0 1px 0 #E4EBE7" }}>
              <span style={{ flexShrink: 0, width: 19, height: 19, marginTop: 2, borderRadius: 999, background: "#E9F6EF", color: "#1F7A4A", fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>✓</span>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700 }}>{f.t}</div>
                <p style={{ marginTop: 4, fontSize: 14, lineHeight: "22px", color: "#3E4A41" }}>{f.d}</p>
              </div>
            </Reveal>
          ))}
          <Reveal style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
            <Link
              href="/blogs"
              style={{ padding: "13px 22px", border: "none", borderRadius: 12, background: "linear-gradient(120deg,#7B57A6,#1F7A4A)", color: "#fff", font: "700 14px var(--font-outfit),sans-serif", cursor: "pointer", whiteSpace: "nowrap" }}
            >
              Learn more about dust allergy →
            </Link>
            <span style={{ fontSize: 13.5, color: "#3E4A41" }}>Twice a week · mist from 6–8 inches · let it air dry</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
