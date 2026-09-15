import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import HowToClient from "@/components/HowToClient";

export const metadata: Metadata = {
  title: "How to Use — MiteXpert Dust Allergy Relief Spray",
  description: "MiteXpert is a spray-and-leave treatment — no washing, no wiping, no stains. Here is the full routine for dust allergy relief at home.",
};

export default function HowToUsePage() {
  return (
    <div>
      <PageHero eyebrow="How to use" title="Three minutes, twice a week">
        <p style={{ marginTop: 12, maxWidth: "54ch", fontSize: 16, lineHeight: "25px", color: "#3E4A41" }}>
          MiteXpert is a spray-and-leave treatment — no washing, no wiping, no stains. Here is the full routine for dust allergy relief at home.
        </p>
      </PageHero>
      <HowToClient />
    </div>
  );
}
