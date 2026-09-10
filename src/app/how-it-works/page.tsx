import { PageHero } from "@/components/ui/PageHero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata = {
  title: "How It Works",
  description: "Our simple 5-step process — from choosing a design to receiving your final invitation.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Process"
        title="From concept to celebration"
        accentWord="celebration"
        subtitle="A simple, transparent 5-step process that gets your invitation ready to share in days, not weeks."
      />
      <HowItWorks />
      <FinalCTA />
    </>
  );
}
