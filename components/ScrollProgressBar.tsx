"use client";

import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setScale(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        right: 0,
        height: 3,
        zIndex: 70,
        transformOrigin: "0 50%",
        background: "var(--green)",
        pointerEvents: "none",
        transform: `scaleX(${scale})`,
        transition: "transform 80ms linear",
      }}
    />
  );
}
