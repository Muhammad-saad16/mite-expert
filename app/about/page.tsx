import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TeamGrid from "@/components/TeamGrid";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our Story — MiteXpert",
  description: "MiteXpert is a dust allergy relief spray built for Pakistan's dusty environment. Meet the team and learn how it started.",
};

export default function AboutPage() {
  return (
    <div>
      <PageHero eyebrow="About us" title={<span style={{ maxWidth: 780, display: "inline-block" }}>Built for Pakistan&rsquo;s dust</span>}>
        <p style={{ marginTop: 12, maxWidth: 560, fontSize: 16, lineHeight: "25px", color: "#3E4A41" }}>
          MiteXpert is a dust allergy relief spray that kills and neutralises dust mites in everyday household spaces — bedding, sofas, carpets and
          curtains.
        </p>
        <Image
          src="/images/pair-about.jpg"
          alt="MiteXpert Lavender and Rosemary 250ml bottles"
          width={900}
          height={420}
          style={{ marginTop: 22, width: "100%", height: "auto", maxHeight: "clamp(260px,34vw,420px)", objectFit: "contain", borderRadius: 16, display: "block" }}
        />
      </PageHero>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(28px,4vw,64px) clamp(16px,3vw,44px)" }}>
        <Reveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "clamp(20px,3vw,44px)" }}>
          <p style={{ fontSize: 16, lineHeight: "26px", color: "#3E4A41" }}>
            In cities like Karachi, dust is a constant part of daily life — construction, traffic and dry weather. It settles into bedsheets,
            sofas, curtains and carpets, and often leads to allergies, respiratory discomfort and skin irritation.
          </p>
          <p style={{ fontSize: 16, lineHeight: "26px", color: "#3E4A41" }}>
            Two of our own team struggled with dust allergies despite regular cleaning. That search for something that actually worked — suited
            to Pakistan&rsquo;s dusty environment — became MiteXpert.
          </p>
        </Reveal>

        <Reveal
          style={{
            marginTop: "clamp(26px,4vw,48px)",
            position: "relative",
            overflow: "hidden",
            borderRadius: 18,
            background: "linear-gradient(135deg,#3B2259,#0E5137 60%,#14764F)",
            color: "#fff",
            padding: "clamp(24px,4vw,48px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))",
            gap: "clamp(20px,3vw,42px)",
            alignItems: "center",
          }}
        >
          <Image src="/images/pcsir-badge.jpg" alt="" width={360} height={360} style={{ position: "absolute", right: -60, bottom: -80, width: "min(360px,46vw)", opacity: 0.1, pointerEvents: "none" }} />
          <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 18 }}>
            <Image
              src="/images/pcsir-badge.jpg"
              alt="PCSIR"
              width={116}
              height={116}
              style={{ width: "clamp(84px,10vw,116px)", height: "auto", borderRadius: 999, background: "#fff", padding: 6, flexShrink: 0, animation: "pmFloat 9s ease-in-out infinite", objectFit: "cover" }}
            />
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#7BE3AF" }}>Tested and certified by</div>
              <div style={{ marginTop: 6, fontSize: "clamp(17px,2.2vw,24px)", fontWeight: 700, lineHeight: 1.2 }}>Pakistan Council of Scientific &amp; Industrial Research</div>
            </div>
          </div>
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "12px 26px" }}>
            {[
              "Scientifically formulated mite-control spray",
              "Fabric-safe, skin friendly, easy application spray",
              "Reduces and treats dust allergy at home",
              "Developed with research and lab testing",
            ].map((t, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ flexShrink: 0, width: 18, height: 18, marginTop: 3, borderRadius: 999, background: "rgba(123,227,175,.18)", color: "#7BE3AF", fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  ✓
                </span>
                <span style={{ fontSize: 14.5, lineHeight: "22px", color: "rgba(255,255,255,.85)" }}>{t}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <h2 data-pm-reveal="" style={{ marginTop: "clamp(28px,4vw,52px)", fontWeight: 700, fontSize: "clamp(24px,3.4vw,38px)", lineHeight: 1.04, letterSpacing: "-.03em" }}>
          Meet our leadership
        </h2>
        <TeamGrid />

        <Reveal style={{ marginTop: "clamp(26px,4vw,48px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: 16 }}>
          <div style={{ borderRadius: 16, background: "linear-gradient(150deg,#EFE3F8,#E9E2F3 70%)", boxShadow: "inset 0 0 0 2px #CDB4E8", padding: 24 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#7B57A6" }}>Mission</div>
            <p style={{ marginTop: 8, fontSize: 15, lineHeight: "24px", color: "#3E4A41" }}>
              Help families create healthier homes by reducing dust mites and indoor allergens with effective, scientifically developed solutions.
            </p>
          </div>
          <div style={{ borderRadius: 16, background: "linear-gradient(150deg,#E4F2EA,#FFFFFF 70%)", boxShadow: "inset 0 0 0 2px #9FCFB8", padding: 24 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#7B57A6" }}>Vision</div>
            <p style={{ marginTop: 8, fontSize: 15, lineHeight: "24px", color: "#3E4A41" }}>
              A Pakistan where every home can be a low-allergen space — locally made, lab-tested indoor health products within reach of every
              family.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
