import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { DesignCard } from "@/components/ui/DesignCard";
import { EmptyState } from "@/components/ui/EmptyState";
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
    title: `${o.title} Invitation Websites`,
    description: `${o.title} invitation website designs by STR Invitations.`,
  };
}

export default async function OccasionWebsitePage({ params }: { params: Promise<{ occasion: string }> }) {
  const { occasion } = await params;
  const o = occasions.find((x) => x.slug === occasion);
  if (!o) notFound();

  const designs = getByOccasion("invitation-websites", o.slug as OccasionSlug);

  return (
    <>
      <PageHero
        eyebrow="Invitation Websites"
        title={`${o.title} Invitation Websites`}
        accentWord={o.title}
        subtitle={`Elegant, mobile-first ${o.title.toLowerCase()} invitation websites — RSVP, gallery, map and more.`}
      />
      <section className="container-x py-16">
        {designs.length === 0 ? (
          <EmptyState />
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
