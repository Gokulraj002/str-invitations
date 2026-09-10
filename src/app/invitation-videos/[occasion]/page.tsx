import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { DesignCard } from "@/components/ui/DesignCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { StyleFilter } from "@/components/ui/StyleFilter";
import { FinalCTA } from "@/components/home/FinalCTA";
import { getByOccasion } from "@/data/designs";
import { occasions, type OccasionSlug } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return occasions.map((o) => ({ occasion: o.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ occasion: string }> }) {
  const { occasion } = await params;
  const o = occasions.find((x) => x.slug === occasion);
  if (!o) return {};
  return {
    title: `${o.title} Invitation Videos`,
    description: `${o.title} invitation video designs by STR Invitations.`,
  };
}

export default async function OccasionPage({ params }: { params: Promise<{ occasion: string }> }) {
  const { occasion } = await params;
  const o = occasions.find((x) => x.slug === occasion);
  if (!o) notFound();

  const designs = getByOccasion("invitation-videos", o.slug as OccasionSlug);
  const distinctStyles = new Set(designs.map((d) => d.style).filter(Boolean));
  const hasMultipleStyles = distinctStyles.size > 1;

  return (
    <>
      <PageHero
        eyebrow="Invitation Videos"
        title={`${o.title} Video Invitations`}
        accentWord={o.title}
        subtitle={`Browse our ${o.title.toLowerCase()} invitation video collection — every design fully customisable.`}
      />

      <section className="container-x py-16">
        {designs.length === 0 ? (
          <EmptyState />
        ) : hasMultipleStyles ? (
          <StyleFilter designs={designs} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {designs.map((d) => (
              <DesignCard key={d.id} design={d} />
            ))}
          </div>
        )}
      </section>

      <FinalCTA />
    </>
  );
}
