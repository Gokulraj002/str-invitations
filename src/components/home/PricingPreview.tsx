import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PriceTag } from "@/components/ui/PriceTag";
import { Reveal } from "@/components/ui/Reveal";
import { startingPrices } from "@/data/pricing";
import type { CategorySlug } from "@/data/site";

const plans: { slug: CategorySlug; title: string; tagline: string; includes: string[]; featured?: boolean }[] = [
  {
    slug: "invitation-videos",
    title: "Invitation Videos",
    tagline: "Wedding invitation videos & 3D shorts",
    includes: ["Full customisation", "HD video for WhatsApp", "2 free revisions", "Delivery in 48–72 hours"],
    featured: true,
  },
  {
    slug: "invitation-websites",
    title: "Invitation Websites",
    tagline: "Your own shareable invitation website",
    includes: ["RSVP & live countdown", "Venue map & gallery", "Mobile-first design", "Personal shareable link"],
  },
  {
    slug: "person-return-videos",
    title: "RIP Tribute Videos",
    tagline: "Memorial & AI person-return tributes",
    includes: ["Photos, memories & prayer", "AI person-return option", "Handled with care", "Private preview first"],
  },
];

export function PricingPreview() {
  return (
    <section className="pricing-section py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Packages & Pricing"
          title="Special offer prices"
          subtitle="Limited-period discounts on every package. Final quotation is confirmed on WhatsApp based on your requirements."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <Reveal key={p.slug} delay={i * 120} as="article" className="h-full">
              <div className={`plan-card ${p.featured ? "plan-card--featured" : ""}`}>
                {p.featured && <span className="plan-card-ribbon">Most popular</span>}
                <h3>{p.title}</h3>
                <p className="plan-card-tagline">{p.tagline}</p>
                <PriceTag price={startingPrices[p.slug]} label="Starting from" size="lg" />
                <ul className="plan-card-list">
                  {p.includes.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div className="plan-card-actions">
                  <Link href={`/${p.slug}`} className="plan-card-browse">View designs</Link>
                  <WhatsAppButton size="md" message={`Hi STR Invitations, I'd like a quote for ${p.title}.`}>
                    Get quote
                  </WhatsAppButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
