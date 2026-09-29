import Link from "next/link";
import { priceOf, type Design } from "@/data/designs";
import { videoTypes } from "@/data/pricing";
import { WhatsAppButton } from "./WhatsAppButton";
import { VideoThumb } from "./VideoThumb";
import { PriceTag } from "./PriceTag";
import { designEnquiryMessage } from "@/lib/whatsapp";

const designHref = (d: Design) =>
  d.occasion ? `/${d.category}/${d.occasion}/${d.id}` : `/${d.category}/${d.id}`;

export function DesignCard({ design }: { design: Design }) {
  const type = videoTypes[design.videoType];
  const href = designHref(design);

  return (
    <article className="design-card group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 flex flex-col h-full">
      <Link href={href} className="design-card-media relative block aspect-video overflow-hidden">
        <VideoThumb videoId={design.youtubeId} alt={design.title} className="transition-transform duration-700 group-hover:scale-[1.035]" />
        <span className="design-type-badge absolute top-3 left-3 text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full">
          {type.short}
        </span>
        {design.duration && (
          <span className="design-duration absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full">
            {design.duration}
          </span>
        )}
        <span className="absolute inset-0 grid place-items-center">
          <span className="design-play w-14 h-14 rounded-full grid place-items-center scale-95 group-hover:scale-105 transition-all duration-300">
            <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </span>
      </Link>

      <div className="design-card-body p-6 flex flex-col flex-1">
        <Link href={href} className="block mb-4"><h3 className="leading-snug clamp-2 font-semibold">{design.title}</h3></Link>

        {design.tags && design.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {design.tags.slice(0, 3).map((t) => (
              <span key={t} className="design-tag text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="design-card-footer mt-auto flex items-end justify-between gap-3 pt-5">
          <PriceTag price={priceOf(design)} size="sm" />
          <WhatsAppButton
            size="sm"
            variant="green"
            message={designEnquiryMessage({ designId: design.id, title: design.title, categoryTitle: type.title })}
          >
            Enquire
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
}
