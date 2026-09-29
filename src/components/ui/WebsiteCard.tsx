import { occasions } from "@/data/site";
import { startingPrices } from "@/data/pricing";
import { websiteThumbnail, type InvitationWebsite } from "@/data/websites";
import { PriceTag } from "./PriceTag";
import { WhatsAppButton } from "./WhatsAppButton";

export function WebsiteCard({ site }: { site: InvitationWebsite }) {
  const occasion = occasions.find((o) => o.slug === site.occasion)?.title;

  return (
    <article className="design-card site-card group rounded-2xl overflow-hidden flex flex-col h-full">
      <a href={site.url} target="_blank" rel="noopener noreferrer" className="site-card-media" aria-label={`Open live demo of ${site.title}`}>
        <div className="site-card-browser" aria-hidden><span /><span /><span /></div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={websiteThumbnail(site)} alt={`${site.title} preview`} loading="lazy" />
        <span className="site-card-live">View live demo ↗</span>
      </a>
      <div className="design-card-body p-6 flex flex-col flex-1">
        {occasion && <p className="eyebrow mb-2">{occasion}</p>}
        <h3 className="leading-snug font-semibold mb-3">{site.title}</h3>
        {site.features && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {site.features.slice(0, 4).map((f) => (
              <span key={f} className="design-tag text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full">{f}</span>
            ))}
          </div>
        )}
        <div className="design-card-footer mt-auto flex items-end justify-between gap-3 pt-5">
          <PriceTag price={site.price ?? startingPrices["invitation-websites"]} size="sm" />
          <WhatsAppButton size="sm" message={`Hi STR Invitations, I like the invitation website "${site.title}" (${site.id}). Please share details.`}>
            Enquire
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
}
