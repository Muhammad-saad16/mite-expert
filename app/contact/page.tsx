import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactClient from "@/components/ContactClient";
import Reveal from "@/components/Reveal";
import { FAQ, waLink, BRAND_EMAIL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — MiteXpert",
  description: "Place an order, ask about a scent, or send your symptoms for free guidance. WhatsApp is fastest.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHero eyebrow="Contact" title="We're ready to help">
        <p style={{ marginTop: 12, maxWidth: 520, fontSize: 16, lineHeight: "25px", color: "#3E4A41" }}>
          Place an order, ask about a scent, or send your symptoms for free guidance. WhatsApp is fastest.
        </p>
      </PageHero>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(28px,4vw,64px) clamp(16px,3vw,44px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "clamp(20px,4vw,48px)", alignItems: "start" }}>
          <Reveal style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              style={{ padding: "18px 20px", borderRadius: 14, background: "#25D366", color: "#2B2440", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}
            >
              <span style={{ fontSize: 15.5, fontWeight: 700 }}>WhatsApp · 0331 729 4872</span>
              <span style={{ fontSize: 13.5, fontWeight: 700 }}>Chat →</span>
            </a>
            <a
              href={`mailto:${BRAND_EMAIL}`}
              style={{ padding: "18px 20px", borderRadius: 14, background: "#fff", boxShadow: "inset 0 0 0 1px #E4EBE7", color: "#2B2440", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}
            >
              <span style={{ fontSize: 15.5, fontWeight: 600 }}>{BRAND_EMAIL}</span>
              <span style={{ fontSize: 13.5, color: "#7B57A6" }}>Email →</span>
            </a>
            <a
              href="https://www.instagram.com/mitexpertpk"
              target="_blank"
              rel="noopener"
              style={{ padding: "18px 20px", borderRadius: 14, background: "#fff", boxShadow: "inset 0 0 0 1px #E4EBE7", color: "#2B2440", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}
            >
              <span style={{ fontSize: 15.5, fontWeight: 600 }}>Instagram · @mitexpertpk</span>
              <span style={{ fontSize: 13.5, color: "#7B57A6" }}>Follow →</span>
            </a>
            <div style={{ marginTop: 6, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: 14 }}>
              <div style={{ borderRadius: 14, background: "#fff", boxShadow: "inset 0 0 0 1px #E4EBE7", padding: 20 }}>
                <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#7B57A6" }}>Delivery</div>
                <p style={{ marginTop: 7, fontSize: 14, lineHeight: "22px", color: "#3E4A41" }}>COD and nationwide delivery available</p>
              </div>
              <div style={{ borderRadius: 14, background: "#fff", boxShadow: "inset 0 0 0 1px #E4EBE7", padding: 20 }}>
                <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#7B57A6" }}>Hours</div>
                <p style={{ marginTop: 7, fontSize: 14, lineHeight: "22px", color: "#3E4A41" }}>Mon–Sat, 9:00am – 6:00pm PKT · replies within a few hours</p>
              </div>
            </div>
          </Reveal>

          <ContactClient />
        </div>

        <h2 data-pm-reveal="" style={{ marginTop: "clamp(28px,4vw,52px)", fontWeight: 700, fontSize: "clamp(22px,3.2vw,34px)", lineHeight: 1.04, letterSpacing: "-.03em" }}>
          Questions people ask before ordering
        </h2>
        <Reveal style={{ marginTop: 18, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: 14 }}>
          {FAQ.map((f, i) => (
            <div key={i} style={{ borderRadius: 14, background: "#fff", boxShadow: "inset 0 0 0 1px #E4EBE7", padding: 20 }}>
              <div style={{ fontSize: 15.5, fontWeight: 700 }}>{f.q}</div>
              <p style={{ marginTop: 7, fontSize: 14, lineHeight: "22px", color: "#3E4A41" }}>{f.a}</p>
            </div>
          ))}
        </Reveal>
      </section>
    </div>
  );
}
