import { Check } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { EmptyState } from "@/components/ui/EmptyState";
import { PriceTag } from "@/components/ui/PriceTag";
import { WebsiteGallery } from "@/components/ui/WebsiteGallery";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { FinalCTA } from "@/components/home/FinalCTA";
import { websites } from "@/data/websites";
import { startingPrices } from "@/data/pricing";

export const metadata = {
  title: "Invitation Websites",
  description: `${websites.length} live invitation website designs for weddings, engagements, save the dates and baby showers — with RSVP, music, countdown, maps and gallery.`,
};

const features = ["Animated envelope opening", "RSVP on WhatsApp", "Couple music player", "Live countdown", "Google Maps directions", "Photo gallery"];

export default function InvitationWebsitesPage() {
  return (
    <>
      <PageHero
        eyebrow="Invitation Websites"
        title="Interactive digital invitations"
        accentWord="Interactive"
        subtitle={`Tap any of our ${websites.length} live designs to try it exactly as your guests will — then we personalise it with your names, photos, music and venue.`}
      />

      <section className="type-section container-x">
        <header className="type-section-head">
          <div>
            <p className="eyebrow">Every website includes</p>
            <h2>One link your guests will remember</h2>
            <ul className="site-features">
              {features.map((f) => (
                <li key={f}><Check size={14} strokeWidth={3} aria-hidden />{f}</li>
              ))}
            </ul>
          </div>
          <div className="type-section-price">
            <PriceTag price={startingPrices["invitation-websites"]} label="Starting from" size="lg" />
            <WhatsAppButton size="md" message="Hi STR Invitations, I'd like an invitation website for my event. Please share details.">
              Enquire now
            </WhatsAppButton>
          </div>
        </header>

        {websites.length === 0 ? <EmptyState title="Website demos launching soon" /> : <WebsiteGallery sites={websites} />}
      </section>

      <FinalCTA />
    </>
  );
}
