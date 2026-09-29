import { PageHero } from "@/components/ui/PageHero";
import { EmptyState } from "@/components/ui/EmptyState";
import { PriceTag } from "@/components/ui/PriceTag";
import { WebsiteCard } from "@/components/ui/WebsiteCard";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { FinalCTA } from "@/components/home/FinalCTA";
import { websites } from "@/data/websites";
import { startingPrices } from "@/data/pricing";

export const metadata = {
  title: "Invitation Websites",
  description: "Interactive digital invitation websites with RSVP, gallery, map and countdown.",
};

const features = ["RSVP form", "Live countdown", "Venue map & directions", "Photo gallery", "Event schedule", "Your own shareable link"];

export default function InvitationWebsitesPage() {
  return (
    <>
      <PageHero
        eyebrow="Invitation Websites"
        title="Interactive digital invitations"
        accentWord="Interactive"
        subtitle="Mobile-first invitation websites your guests open with one tap — tap any design below to preview the live website."
      />

      <section className="type-section container-x">
        <header className="type-section-head">
          <div>
            <p className="eyebrow">What every website includes</p>
            <h2>Invitation Website Demos</h2>
            <ul className="site-features">
              {features.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
          <div className="type-section-price">
            <PriceTag price={startingPrices["invitation-websites"]} label="Starting from" size="lg" />
            <WhatsAppButton size="md" message="Hi STR Invitations, I'd like an invitation website. Please share details.">
              Enquire now
            </WhatsAppButton>
          </div>
        </header>

        {websites.length === 0 ? (
          <EmptyState
            title="Website demos launching soon"
            subtitle="Message us on WhatsApp to see private demo links and reserve your slot."
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {websites.map((s) => <WebsiteCard key={s.id} site={s} />)}
          </div>
        )}
      </section>

      <FinalCTA />
    </>
  );
}
