"use client";

import Image from "next/image";
import { TEAM } from "@/lib/data";
import Reveal from "./Reveal";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function TeamGrid() {
  return (
    <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,230px),1fr))", gap: 16 }}>
      {TEAM.map((m, i) => (
        <Reveal
          key={i}
          className="pm-team"
          style={{ position: "relative", overflow: "hidden", borderRadius: 16, background: "#fff", boxShadow: "inset 0 0 0 1px #E4EBE7", cursor: "pointer" }}
        >
          <div
            style={{
              background: "linear-gradient(150deg,#FFFFFF,#F6EFFC 58%,#EAF6F0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "clamp(230px,26vw,290px)",
            }}
          >
            {m.img ? (
              <Image
                src={m.img}
                alt={m.name}
                width={290}
                height={290}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 20%", display: "block" }}
              />
            ) : (
              <div
                style={{
                  width: 108,
                  height: 108,
                  borderRadius: 999,
                  background: "linear-gradient(135deg,#7B57A6,#1F7A4A)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 34,
                  fontWeight: 700,
                  letterSpacing: "-.02em",
                }}
              >
                {initials(m.name)}
              </div>
            )}
          </div>
          <div style={{ padding: "16px 18px 18px" }}>
            <div style={{ fontSize: 17, fontWeight: 700 }}>{m.name}</div>
            <div style={{ marginTop: 3, fontSize: 11.5, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#7B57A6" }}>{m.role}</div>
          </div>
          <div className="pm-team-overlay">
            <div style={{ borderRadius: 14, background: "#14603C", color: "#fff", padding: 16, boxShadow: "0 22px 42px -20px rgba(0,0,0,.6)" }}>
              <div style={{ fontSize: 17, fontWeight: 700 }}>{m.name}</div>
              <div style={{ marginTop: 3, fontSize: 11, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#A9E8C6" }}>{m.role}</div>
              <p style={{ marginTop: 8, fontSize: 13.5, lineHeight: "21px", color: "rgba(255,255,255,.92)" }}>{m.quote}</p>
              <a
                href={m.li}
                target="_blank"
                rel="noopener"
                style={{ marginTop: 10, display: "inline-flex", alignItems: "center", gap: 7, padding: "8px 14px", borderRadius: 999, background: "#fff", color: "#14603C", fontSize: 12.5, fontWeight: 700, whiteSpace: "nowrap" }}
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
