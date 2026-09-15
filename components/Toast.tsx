"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/lib/cart-context";

export default function Toast() {
  const { toast } = useCart();
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.28, ease: [0.16, 0.84, 0.28, 1] }}
          style={{
            position: "fixed",
            left: "50%",
            bottom: 100,
            zIndex: 90,
            transform: "translateX(-50%)",
            padding: "13px 22px",
            borderRadius: 999,
            background: "#2B2440",
            color: "#fff",
            fontSize: 14,
            fontWeight: 700,
            boxShadow: "0 20px 44px rgba(4,22,13,.4)",
            whiteSpace: "nowrap",
          }}
        >
          {toast}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
