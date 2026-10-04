import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { occasions } from "@/data/site";
import { websitePrice, websiteThumbnail, type InvitationWebsite } from "@/data/websites";
import { PriceTag } from "./PriceTag";
import { WhatsAppButton } from "./WhatsAppButton";

const websiteEnquiry = (w: InvitationWebsite) =>
  `Hi STR Invitations, I like the invitation website design "${w.style}" (${w.title} demo). Please share details to make one for my event.`;

export function WebsiteCard({ site }: { site: InvitationWebsite }) {
  const occasion = occasions.find((o) => o.slug === site.occasion)?.title;
  const thumb = websiteThumbnail(site);

  return (
    <article className="site-card group">
      <a href={site.url} target="_blank" rel="noopener noreferrer" className="site-card-media" aria-label={`View live demo of ${site.title} (opens in a new tab)`}>
        {thumb.startsWith("/") ? (
          <Image src={thumb} alt="" fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={thumb} alt="" loading="lazy" />
        )}
        <span className="site-card-style">{site.style}</span>
        <span className="site-card-live"><ExternalLink size={15} aria-hidden /> View live demo</span>
      </a>
      <div className="site-card-body">
        {occasion && <p className="eyebrow">{occasion} website</p>}
        <h3><a href={site.url} target="_blank" rel="noopener noreferrer">{site.title}</a></h3>
        <p className="site-card-desc">{site.description}</p>
        <div className="site-card-footer">
          <PriceTag price={websitePrice(site)} size="sm" />
          <WhatsAppButton size="sm" message={websiteEnquiry(site)}>Order</WhatsAppButton>
        </div>
      </div>
    </article>
  );
}
