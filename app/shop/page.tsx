import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScentFinder from "@/components/ScentFinder";
import BundleList from "@/components/BundleList";
import ProductBuyCard from "@/components/ProductBuyCard";
import { waLink } from "@/lib/data";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Shop — MiteXpert Dust Allergy Relief Spray",
  description: "Lavender and Rosemary 250ml dust allergy relief spray, plus five bundles. Cash on delivery across Pakistan.",
};

export default function ShopPage() {
  return (
    <div>
      <PageHero eyebrow="Shop" title="Everything, with prices">
        <p style={{ marginTop: 12, maxWidth: 520, fontSize: 16, lineHeight: "25px", color: "#3E4A41" }}>
          Two 250 ml sprays and five bundles. Cash on delivery across Pakistan.
        </p>
        <Link
          href="/how-to-use"
          style={{ marginTop: 14, display: "inline-block", padding: "13px 22px", border: "none", borderRadius: 12, background: "linear-gradient(120deg,#7B57A6,#1F7A4A)", color: "#fff", font: "700 14px var(--font-outfit),sans-serif", cursor: "pointer", whiteSpace: "nowrap" }}
        >
          See how to use it →
        </Link>
      </PageHero>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(28px,4vw,64px) clamp(16px,3vw,44px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: 16 }}>
          <ProductBuyCard productKey="lavender" />
          <ProductBuyCard productKey="rosemary" />
        </div>

        <ScentFinder />

        <h2 data-pm-reveal="" style={{ marginTop: "clamp(30px,4vw,54px)", fontWeight: 700, fontSize: "clamp(24px,3.4vw,38px)", lineHeight: 1.04, letterSpacing: "-.03em" }}>
          Bundles — save up to Rs 298
        </h2>
        <BundleList />

        <Reveal style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))", gap: 16 }}>
          <div style={{ borderRadius: 14, background: "#fff", boxShadow: "inset 0 0 0 1px #E4EBE7", padding: 22 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#7B57A6" }}>Delivery</div>
            <p style={{ marginTop: 8, fontSize: 14.5, lineHeight: "23px", color: "#3E4A41" }}>COD and nationwide delivery available.</p>
          </div>
          <div style={{ borderRadius: 14, background: "#fff", boxShadow: "inset 0 0 0 1px #E4EBE7", padding: 22 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#7B57A6" }}>Certification</div>
            <p style={{ marginTop: 8, fontSize: 14.5, lineHeight: "23px", color: "#3E4A41" }}>Tested and certified by PCSIR — Pakistan Council of Scientific &amp; Industrial Research.</p>
          </div>
          <div style={{ borderRadius: 14, background: "#fff", boxShadow: "inset 0 0 0 1px #E4EBE7", padding: 22 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#7B57A6" }}>Not sure?</div>
            <p style={{ marginTop: 8, fontSize: 14.5, lineHeight: "23px", color: "#3E4A41" }}>
              Send your symptoms and rooms — we&rsquo;ll choose for you.{" "}
              <a href={waLink()} target="_blank" rel="noopener">
                WhatsApp →
              </a>
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
