import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBuyBar from "@/components/StickyBuyBar";
import CartDrawer from "@/components/CartDrawer";
import Toast from "@/components/Toast";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import SubscribeBanner from "@/components/SubscribeBanner";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MiteXpert — Dust Allergy Relief Spray | Health Begins Indoors",
  description:
    "MiteXpert is Pakistan's dust allergy relief spray — kills and neutralises dust mites in bedding, sofas, carpets and curtains. PCSIR tested, plant-oil based. Rs 1,299 for 250ml.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <body>
        <CartProvider>
          <div style={{ width: "100%", background: "#F4F7F5", overflowX: "clip", paddingBottom: 78 }}>
            <ScrollProgressBar />
            <Header />
            {children}
            <SubscribeBanner />
            <Footer />
            <StickyBuyBar />
            <CartDrawer />
            <Toast />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
