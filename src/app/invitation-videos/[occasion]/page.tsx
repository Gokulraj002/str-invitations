import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { EmptyState } from "@/components/ui/EmptyState";
import { VideoTypeSection } from "@/components/ui/VideoTypeSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { getByOccasion } from "@/data/designs";
import { occasions, type OccasionSlug } from "@/data/site";
import type { VideoType } from "@/data/pricing";

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

const TYPES: VideoType[] = ["long", "3d-short"];

export default async function OccasionPage({ params }: { params: Promise<{ occasion: string }> }) {
  const { occasion } = await params;
  const o = occasions.find((x) => x.slug === occasion);
  if (!o) notFound();

  const designs = getByOccasion("invitation-videos", o.slug as OccasionSlug);

  return (
    <>
      <PageHero
        eyebrow="Invitation Videos"
        title={`${o.title} Video Invitations`}
        accentWord={o.title}
        subtitle={`Browse our ${o.title.toLowerCase()} invitation videos by type — every design fully customisable.`}
      />

      {designs.length === 0 ? (
        <section className="container-x py-16">
          <EmptyState />
        </section>
      ) : (
        TYPES.map((type) => (
          <VideoTypeSection key={type} type={type} designs={designs.filter((d) => d.videoType === type)} />
        ))
      )}

      <FinalCTA />
    </>
  );
}
