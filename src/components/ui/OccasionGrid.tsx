import Link from "next/link";
import { occasions, type CategorySlug } from "@/data/site";
import { designs } from "@/data/designs";

type Props = { categorySlug: CategorySlug };

export function OccasionGrid({ categorySlug }: Props) {
  // Only show occasions that have at least one design in this category.
  // Empty occasions auto-appear once you upload videos in those buckets.
  const counts = occasions
    .map((o) => ({
      ...o,
      count: designs.filter((d) => d.category === categorySlug && d.occasion === o.slug).length,
    }))
    .filter((o) => o.count > 0);

  if (counts.length === 0) return null;

  return (
    <div className="occasion-grid grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
      {counts.map((o) => (
        <Link
          key={o.slug}
          href={`/${categorySlug}/${o.slug}`}
          className="group relative rounded-2xl gold-border p-8 text-center hover:-translate-y-1 hover:shadow-elegant transition-all"
        >
          <div className="absolute inset-3 border border-gold/15 rounded-xl pointer-events-none group-hover:border-gold/50 transition-colors" />
          <div className="relative">
            <div className="font-display text-2xl md:text-3xl gold-text mb-2">{o.title}</div>
            {o.count > 0 ? (
              <div className="text-xs text-ivory/50 uppercase tracking-widest">
                {o.count} design{o.count === 1 ? "" : "s"}
              </div>
            ) : (
              <div className="inline-block text-[10px] uppercase tracking-widest text-gold/70 border border-gold/30 rounded-full px-2.5 py-0.5">
                Coming soon
              </div>
            )}
            <div className="mt-4 text-xs text-gold opacity-0 group-hover:opacity-100 transition-opacity">
              {o.count > 0 ? "Browse" : "Enquire"} →
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
