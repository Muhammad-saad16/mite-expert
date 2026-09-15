"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  as: Tag = "div",
  style,
  className,
}: {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  style?: React.CSSProperties;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [seen, setSeen] = useState<"0" | "1" | undefined>(undefined);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSeen("1");
            io.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.01 }
    );
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || 800;
    if (r.top < vh * 0.94 && r.bottom > 0) {
      setSeen("1");
    } else {
      setSeen("0");
      io.observe(el);
    }
    return () => io.disconnect();
  }, []);

  return React.createElement(
    Tag,
    { ref, "data-pm-reveal": "", "data-seen": seen, style, className },
    children
  );
}
