import { PageHero } from "@/components/ui/PageHero";
import { OccasionGrid } from "@/components/ui/OccasionGrid";
import { DesignCard } from "@/components/ui/DesignCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { StyleFilter } from "@/components/ui/StyleFilter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getByCategory } from "@/data/designs";
import { occasions } from "@/data/site";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata = {
  title: "Invitation Videos",
  description: "Cinematic invitation videos for weddings, engagements, house warmings and more.",
};

export default function InvitationVideosPage() {
  const designs = getByCategory("invitation-videos");
  const filledOccasions = occasions.filter((o) =>
    designs.some((d) => d.occasion === o.slug)
  );
  const showOccasionGrid = filledOccasions.length > 1;
  const distinctStyles = new Set(designs.map((d) => d.style).filter(Boolean));
  const hasStyles = distinctStyles.size > 1;

  return (
    <>
      <PageHero
        eyebrow="Video Invitations"
        title="Cinematic invitation videos"
        accentWord="Cinematic"
        subtitle="Beautifully animated HD video invitations — perfect for WhatsApp, Instagram and family groups."
      />

      {showOccasionGrid && (
        <section className="container-x py-16">
          <SectionHeading eyebrow="Browse by Occasion" title="Pick your celebration" />
          <OccasionGrid categorySlug="invitation-videos" />
        </section>
      )}

      <section className="container-x py-16">
        <SectionHeading
          eyebrow="All Designs"
          title={showOccasionGrid ? "The full collection" : "Wedding invitation collection"}
        />
        {designs.length === 0 ? (
          <EmptyState />
        ) : hasStyles ? (
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
