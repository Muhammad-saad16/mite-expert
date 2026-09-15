"use client";

import { useState } from "react";
import { BRAND_EMAIL } from "@/lib/data";
import Reveal from "./Reveal";

export default function ContactClient() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Reveal
      as="form"
      style={{
        borderRadius: 16,
        background: "#fff",
        boxShadow: "inset 0 0 0 1px #E4EBE7",
        padding: "clamp(20px,3vw,32px)",
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#7B57A6" }}>Free guidance form</span>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label htmlFor="pm-name" style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", color: "#5B6C62" }}>Name</label>
        <input id="pm-name" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Your name" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label htmlFor="pm-phone" style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", color: "#5B6C62" }}>WhatsApp number</label>
        <input id="pm-phone" value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" placeholder="+92 3XX XXXXXXX" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label htmlFor="pm-city" style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", color: "#5B6C62" }}>City</label>
        <input id="pm-city" value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder="Karachi" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label htmlFor="pm-msg" style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", color: "#5B6C62" }}>Symptoms &amp; rooms</label>
        <textarea id="pm-msg" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} placeholder="e.g. sneezing every morning, bedroom + sofa" />
      </div>
      <a
        href={`mailto:${BRAND_EMAIL}?subject=${encodeURIComponent("Free guidance request")}&body=${encodeURIComponent(
          `Name: ${name}\nWhatsApp: ${phone}\nCity: ${city}\nSymptoms & rooms: ${message}`
        )}`}
        style={{ padding: 14, border: "none", borderRadius: 12, background: "#7B57A6", color: "#fff", font: "700 15px var(--font-outfit),sans-serif", cursor: "pointer", textAlign: "center", display: "block" }}
      >
        Send request
      </a>
    </Reveal>
  );
}
