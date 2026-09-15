import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ARTICLES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Guides — Dust Allergy 101 | MiteXpert",
  description: "What dust mites are, how they affect your health, and what actually reduces them at home. Six short guides for Pakistani homes.",
};

export default function BlogsPage() {
  return (
    <div>
      <PageHero eyebrow="Guides" title="Dust allergy 101">
        <p style={{ marginTop: 12, maxWidth: 540, fontSize: 16, lineHeight: "25px", color: "#3E4A41" }}>
          What dust mites are, how they affect your health, and what actually reduces them at home. Six short guides, written for Pakistani homes.
        </p>
      </PageHero>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(28px,4vw,64px) clamp(16px,3vw,44px)" }}>
        <Reveal
          style={{
            borderRadius: 16,
            background: "#fff",
            boxShadow: "inset 0 0 0 1px #E4EBE7",
            padding: "clamp(22px,3vw,34px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))",
            gap: "clamp(20px,3vw,44px)",
            alignItems: "center",
          }}
        >
          <div>
            <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#7B57A6" }}>Featured · symptoms</span>
            <h2 style={{ marginTop: 10, fontWeight: 700, fontSize: "clamp(22px,3vw,32px)", lineHeight: 1.08, letterSpacing: "-.03em", color: "#7B57A6" }}>
              The most common symptoms of dust allergy
            </h2>
            <p style={{ marginTop: 12, fontSize: 15.5, lineHeight: "24px", color: "#3E4A41" }}>
              A dust allergy is your immune system reacting to dust — the debris left behind by dust mites. Indoors it shows up as a mix of
              respiratory and skin symptoms.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              "Constant sneezing or a blocked nose on waking",
              "Dry coughing while sweeping, vacuuming or shaking sheets",
              "Wheezing, chest tightness or shortness of breath",
              "Itching or a “biting” sensation at night in bed",
              "Clusters of small, itchy bumps and eczema flare-ups",
            ].map((t, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ flexShrink: 0, width: 8, height: 8, marginTop: 8, borderRadius: 999, background: "#7B57A6" }} />
                <span style={{ fontSize: 15, lineHeight: "23px", color: "#3E4A41" }}>{t}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: 16 }}>
          {ARTICLES.map((a) => (
            <Reveal key={a.slug} style={{ borderRadius: 16, background: "#fff", boxShadow: "inset 0 0 0 1px #E4EBE7", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ height: 150, background: "linear-gradient(150deg,#F3EAFA,#E4F2EA)", overflow: "hidden" }}>
                <Image src={a.img} alt={a.title} width={400} height={150} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: 22, display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase" }}>
                  <span style={{ color: "#1F7A4A" }}>{a.kicker.split(" — ")[0]}</span> <span style={{ color: "#1F7A4A" }}>{a.kicker.split(" — ")[1]}</span>
                </span>
                <h3 style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.28 }}>{a.title}</h3>
                <p style={{ fontSize: 14, lineHeight: "22px", color: "#3E4A41" }}>{a.lead}</p>
                <Link
                  href={`/blogs/${a.slug}`}
                  style={{ marginTop: "auto", alignSelf: "flex-start", border: "none", background: "transparent", padding: 0, cursor: "pointer", font: "700 13.5px var(--font-outfit),sans-serif", color: "#7B57A6", whiteSpace: "nowrap" }}
                >
                  Read the guide →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
