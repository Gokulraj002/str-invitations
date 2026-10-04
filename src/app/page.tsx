import { Gem, Zap, SlidersHorizontal, IndianRupee, Headset, Heart } from "lucide-react";
import { HeroCopy } from "@/components/home/HeroCopy";
import { GoldParticles } from "@/components/ui/GoldParticles";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { FeaturedDesigns } from "@/components/home/FeaturedDesigns";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PricingPreview } from "@/components/home/PricingPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";

const benefits = [
  { icon: Gem, label: "High Quality & Creative Designs" },
  { icon: Zap, label: "Quick Delivery" },
  { icon: SlidersHorizontal, label: "Easy Customization" },
  { icon: IndianRupee, label: "Affordable Pricing" },
  { icon: Headset, label: "Dedicated Support" },
  { icon: Heart, label: "Make Every Moment Special" },
];

export default function HomePage() {
  return <div className="reference-home">
    <section className="reference-hero">
      <GoldParticles count={24} />
      <HeroCopy />
    </section>
    <CategoryShowcase />
    <section className="benefits-strip">{benefits.map(({ icon: Icon, label }) => <div key={label}><Icon size={22} strokeWidth={1.6} aria-hidden /><span>{label}</span></div>)}</section>
    <div className="home-story">
      <FeaturedDesigns />
      <WhyChooseUs />
      <HowItWorks />
      <PricingPreview />
      <Testimonials />
      <FinalCTA />
    </div>
  </div>;
}
