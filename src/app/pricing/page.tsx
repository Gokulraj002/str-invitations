import { PageHero } from "@/components/ui/PageHero";
import { PricingPreview } from "@/components/home/PricingPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata = {
  title: "Pricing",
  description: "Transparent starting prices for STR Invitations video invitations, invitation websites and return videos.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Packages & Pricing"
        title="Simple, transparent pricing"
        accentWord="transparent"
        subtitle="Every package is fully customised. These are starting prices — the final quotation is shared on WhatsApp once we understand your exact requirements."
      />
      <PricingPreview />
      <FinalCTA />
    </>
  );
}
