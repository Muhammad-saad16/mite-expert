import Image from "next/image";

const stats = [
  { n: "500+", l: "Homes treated" },
  { n: "400+", l: "Mattresses de-mited" },
  { n: "96%", l: "Fewer symptoms" },
];

export default function StatsBar() {
  return (
    <section style={{ background: "#2B2440", color: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))" }}>
        {stats.map((s, i) => (
          <div key={i} style={{ padding: "clamp(22px,3vw,34px) clamp(16px,2vw,26px)", textAlign: "center", boxShadow: "inset -1px 0 0 rgba(255,255,255,.08)" }}>
            <div style={{ fontSize: "clamp(26px,3.6vw,40px)", fontWeight: 800, letterSpacing: "-.03em", color: "#7BE3AF" }}>{s.n}</div>
            <div style={{ marginTop: 4, fontSize: 11, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.68)" }}>{s.l}</div>
          </div>
        ))}
        <div style={{ padding: "clamp(20px,3vw,30px) clamp(16px,2vw,26px)", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <Image src="/images/pcsir-badge.jpg" alt="PCSIR" width={52} height={52} style={{ width: 52, height: 52, borderRadius: 999, background: "#fff", padding: 4, objectFit: "cover" }} />
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.68)" }}>PCSIR tested &amp; certified</div>
        </div>
      </div>
    </section>
  );
}
