"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { PAGES } from "@/lib/data";
import { useCart } from "@/lib/cart-context";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { count, toggleCart } = useCart();

  return (
    <>
      <div
        style={{
          height: 6,
          background: "linear-gradient(90deg,#7B57A6,#8E6BB8,#2FB27A,#7B57A6,#7B57A6)",
          backgroundSize: "300% 100%",
          animation: "pmBrand 18s linear infinite alternate",
        }}
      />

      <div style={{ background: "#2B2440", color: "#fff" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "9px clamp(16px,3vw,44px)",
            display: "flex",
            gap: 10,
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              lineHeight: "18px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Free scent guidance on WhatsApp · Nationwide delivery · cash on delivery
          </span>
        </div>
      </div>

      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 60,
          background: "rgba(255,255,255,.94)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 1px 0 #E4EBE7",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "10px clamp(16px,3vw,44px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 14,
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => router.push("/")}
            aria-label="MiteXpert home"
            style={{ border: "none", background: "transparent", padding: 0, cursor: "pointer", lineHeight: 0 }}
          >
            <Image src="/images/logo-nav.png" alt="MiteXpert" width={140} height={40} style={{ height: 40, width: "auto", objectFit: "contain" }} priority />
          </button>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(10px,1.8vw,22px)", alignItems: "center" }}>
            {PAGES.map((p) => {
              const active = pathname === p.href;
              return (
                <Link
                  key={p.href}
                  href={p.href}
                  style={{
                    border: "none",
                    background: active ? "#E9F6EF" : "transparent",
                    cursor: "pointer",
                    font: "600 14px var(--font-outfit),sans-serif",
                    color: active ? "#7B57A6" : "#3E4A41",
                    padding: "8px 14px",
                    borderRadius: 999,
                    transition: "background 250ms, color 250ms",
                  }}
                >
                  {p.label}
                </Link>
              );
            })}
          </div>

          <button
            onClick={toggleCart}
            className="pm-btn"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              padding: "11px 20px",
              border: "none",
              borderRadius: 10,
              background: "#7B57A6",
              color: "#fff",
              font: "700 13.5px var(--font-outfit),sans-serif",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Cart
            <span
              style={{
                minWidth: 20,
                height: 20,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 6,
                background: "#fff",
                color: "#7B57A6",
                fontSize: 11.5,
              }}
            >
              {count}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}
