import Link from "next/link";
import { featuredDesigns } from "@/data/designs";
import { DesignCard } from "@/components/ui/DesignCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function FeaturedDesigns() {
  const featured = featuredDesigns();
  return (
    <section className="bg-onyx py-20 md:py-28 border-y border-gold/10">
      <div className="container-x">
        <SectionHeading
          eyebrow="Featured Designs"
          title="Loved by families across India"
          subtitle="A selection of our most popular invitation designs — every video is delivered in HD, fully customised with your details."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((d, i) => (
            <Reveal key={d.id} delay={(i % 3) * 100} className="h-full">
              <DesignCard design={d} />
            </Reveal>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link
            href="/invitation-videos"
            className="inline-flex items-center gap-2 rounded-full border border-gold/60 text-gold px-8 py-3.5 font-medium hover:bg-gold hover:text-obsidian transition-colors"
          >
            View all designs
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
