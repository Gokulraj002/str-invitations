import { PageHero } from "@/components/ui/PageHero";
import { PricingPreview } from "@/components/home/PricingPreview";
import { VideoPriceList } from "@/components/ui/VideoPriceList";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata = {
  title: "Pricing",
  description: "Special offer prices for invitation videos, 3D shorts, invitation websites and RIP tribute videos.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Packages & Pricing"
        title="Simple, transparent pricing"
        accentWord="transparent"
        subtitle="Special offer prices on every package — the final quotation is shared on WhatsApp once we understand your requirements."
      />
      <PricingPreview />
      <VideoPriceList />
      <FinalCTA />
    </>
  );
}
