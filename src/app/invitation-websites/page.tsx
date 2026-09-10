import { PageHero } from "@/components/ui/PageHero";
import { OccasionGrid } from "@/components/ui/OccasionGrid";
import { DesignCard } from "@/components/ui/DesignCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getByCategory } from "@/data/designs";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata = {
  title: "Invitation Websites",
  description: "Interactive digital invitation websites with RSVP, gallery, map and countdown.",
};

export default function InvitationWebsitesPage() {
  const designs = getByCategory("invitation-websites");
  const hasDesigns = designs.length > 0;

  return (
    <>
      <PageHero
        eyebrow="Digital Invitation Websites"
        title="Interactive digital invitations"
        accentWord="Interactive"
        subtitle="Beautifully crafted, mobile-first invitation websites with RSVP, event schedule, venue map, gallery and live countdown."
      />

      {hasDesigns ? (
        <>
          <section className="container-x py-16">
            <SectionHeading eyebrow="Browse by Occasion" title="Pick your celebration" />
            <OccasionGrid categorySlug="invitation-websites" />
          </section>

          <section className="container-x py-16">
            <SectionHeading eyebrow="All Websites" title="The full collection" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {designs.map((d) => (
                <DesignCard key={d.id} design={d} />
              ))}
            </div>
          </section>
        </>
      ) : (
        <section className="container-x py-16">
          <EmptyState
            title="Website samples launching soon"
            subtitle="We're preparing a stunning collection of digital invitation websites — with RSVP, gallery, map and countdown features. Message us on WhatsApp to see private samples and reserve your slot."
          />
        </section>
      )}

      <FinalCTA />
    </>
  );
}
