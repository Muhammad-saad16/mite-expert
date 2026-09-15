import Image from "next/image";
import Link from "next/link";
import { waLink } from "@/lib/data";

const linkStyle: React.CSSProperties = {
  border: "none",
  background: "transparent",
  textAlign: "left",
  padding: 0,
  cursor: "pointer",
  font: "400 14px var(--font-outfit),sans-serif",
  color: "rgba(255,255,255,.75)",
};

const headStyle: React.CSSProperties = {
  fontSize: 11.5,
  fontWeight: 700,
  letterSpacing: ".1em",
  textTransform: "uppercase",
  color: "#7BE3AF",
};

export default function Footer() {
  return (
    <footer style={{ background: "#2B2440", color: "#fff" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "clamp(26px,4vw,52px) clamp(16px,3vw,44px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,190px),1fr))",
          gap: 26,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Image src="/images/logo-footer.png" alt="MiteXpert" width={110} height={34} style={{ height: 34, width: "auto", objectFit: "contain", alignSelf: "flex-start" }} />
          <div style={{ fontSize: 15, fontWeight: 700, color: "#7BE3AF" }}>Health Begins Indoors</div>
          <p style={{ fontSize: 14, lineHeight: "22px", color: "rgba(255,255,255,.7)", maxWidth: 240 }}>
            Dust allergy relief spray — made and lab-tested in Pakistan.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <span style={headStyle}>Shop</span>
          <Link href="/shop" style={linkStyle}>Lavender 250ml</Link>
          <Link href="/shop" style={linkStyle}>Rosemary 250ml</Link>
          <Link href="/shop" style={linkStyle}>Bundles</Link>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <span style={headStyle}>Learn</span>
          <Link href="/blogs" style={linkStyle}>Dust allergy 101</Link>
          <Link href="/contact" style={linkStyle}>FAQ</Link>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <span style={headStyle}>Company</span>
          <Link href="/about" style={linkStyle}>About us</Link>
          <Link href="/contact" style={linkStyle}>Contact</Link>
          <a href={waLink()} target="_blank" rel="noopener" style={{ fontSize: 14, color: "rgba(255,255,255,.75)" }}>
            WhatsApp
          </a>
        </div>
      </div>
      <div style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,.12)" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "14px clamp(16px,3vw,44px)",
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "space-between",
            fontSize: 12.5,
            color: "rgba(255,255,255,.65)",
          }}
        >
          <span>© 2026 MiteXpert · Made in Pakistan</span>
          <span>PCSIR tested &amp; certified · mitexpert4@gmail.com</span>
        </div>
      </div>
    </footer>
  );
}
