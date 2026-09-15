import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ARTICLES, waLink } from "@/lib/data";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};
  return { title: `${article.title} — MiteXpert Guides`, description: article.lead };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <div>
      <div style={{ height: 5, background: "linear-gradient(90deg,#7B57A6,#8E6BB8,#2FB27A,#7B57A6)" }} />
      <section style={{ maxWidth: 820, margin: "0 auto", padding: "clamp(18px,3vw,34px) clamp(16px,3vw,44px) clamp(30px,4.5vw,70px)" }}>
        <Link href="/blogs" style={{ border: "none", background: "transparent", padding: 0, cursor: "pointer", font: "700 13.5px var(--font-outfit),sans-serif", color: "#7B57A6" }}>
          ← Back to guides
        </Link>

        <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 13 }}>
          <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase" }}>
            <span style={{ color: "#1F7A4A" }}>{article.kicker.split(" — ")[0]}</span> <span style={{ color: "#1F7A4A" }}>{article.kicker.split(" — ")[1]}</span>
          </span>
          <h1 style={{ fontWeight: 800, fontSize: "clamp(28px,4.2vw,46px)", lineHeight: 1.03, letterSpacing: "-.04em" }}>{article.title}</h1>
          <p style={{ fontSize: 17.5, lineHeight: "28px", color: "#3E4A41" }}>{article.lead}</p>
        </div>

        <div style={{ marginTop: 20, borderRadius: 16, overflow: "hidden", background: "linear-gradient(150deg,#F3EAFA,#E4F2EA)" }}>
          <Image src={article.img} alt={article.title} width={820} height={300} style={{ width: "100%", height: "clamp(180px,26vw,300px)", objectFit: "cover", display: "block" }} />
        </div>

        <div style={{ marginTop: "clamp(22px,3vw,36px)", display: "flex", flexDirection: "column", gap: 22 }}>
          {article.sections.map((s, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <h3 style={{ fontSize: 21, fontWeight: 700, lineHeight: 1.25 }}>{s[0]}</h3>
              <p style={{ fontSize: 15.5, lineHeight: "26px", color: "#3E4A41" }}>{s[1]}</p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "clamp(24px,4vw,44px)",
            borderRadius: 16,
            background: "#fff",
            boxShadow: "inset 0 0 0 1px #E4EBE7",
            padding: "clamp(20px,3vw,32px)",
            display: "flex",
            flexWrap: "wrap",
            gap: 18,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ maxWidth: "38ch" }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.2 }}>Treat the cause, not just the symptoms</h3>
            <p style={{ marginTop: 8, fontSize: 14.5, lineHeight: "22px", color: "#3E4A41" }}>
              MiteXpert neutralises dust allergens on contact — Lavender or Rosemary, Rs 1,299 for 250 ml.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <Link
              href="/shop"
              style={{ padding: "14px 22px", border: "none", borderRadius: 12, background: "#7B57A6", color: "#fff", font: "700 14.5px var(--font-outfit),sans-serif", cursor: "pointer", whiteSpace: "nowrap" }}
            >
              Shop now
            </Link>
            <a href={waLink()} target="_blank" rel="noopener" style={{ padding: "14px 20px", borderRadius: 12, background: "#25D366", color: "#2B2440", fontSize: 14.5, fontWeight: 700, whiteSpace: "nowrap" }}>
              Ask us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
