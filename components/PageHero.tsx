import React from "react";

export default function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section
      style={{
        position: "relative",
        background: "linear-gradient(118deg,#F3EAFA 0%,#FBF7FE 44%,#E9F5EF 100%)",
        borderRadius: "0 0 clamp(28px,5vw,64px) clamp(28px,5vw,64px)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(26px,4vw,54px) clamp(16px,3vw,44px)" }}>
        <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#7B57A6" }}>{eyebrow}</span>
        <h1 style={{ marginTop: 10, fontWeight: 800, fontSize: "clamp(30px,4.6vw,54px)", lineHeight: 1, letterSpacing: "-.04em" }}>{title}</h1>
        {children}
      </div>
    </section>
  );
}
