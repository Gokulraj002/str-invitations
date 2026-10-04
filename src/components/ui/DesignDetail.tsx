import Link from "next/link";
import { notFound } from "next/navigation";
import { getById, priceOf, designs as allDesigns } from "@/data/designs";
import { videoTypes } from "@/data/pricing";
import { PriceTag } from "@/components/ui/PriceTag";
import { mainCategories, occasions } from "@/data/site";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { DesignCard } from "@/components/ui/DesignCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { designEnquiryMessage } from "@/lib/whatsapp";

type Props = { designId: string };

export function DesignDetail({ designId }: Props) {
  const design = getById(designId);
  if (!design) notFound();

  const cat = mainCategories.find((c) => c.slug === design.category)!;
  const occ = design.occasion ? occasions.find((o) => o.slug === design.occasion) : null;

  const related = allDesigns
    .filter((d) => d.id !== design.id && d.videoType === design.videoType)
    .slice(0, 3);

  const type = videoTypes[design.videoType];
  const message = designEnquiryMessage({
    designId: design.id,
    title: design.title,
    categoryTitle: type.title,
  });

  return (
    <>
      {/* Breadcrumbs */}
      <div className="detail-breadcrumb">
        <div className="container-x py-4 text-xs text-ivory/50 flex flex-wrap items-center gap-x-2 gap-y-1">
          <Link href="/" className="hover:text-gold whitespace-nowrap">Home</Link>
          <span>/</span>
          <Link href={`/${cat.slug}`} className="hover:text-gold whitespace-nowrap">{cat.title}</Link>
          {occ && (
            <>
              <span>/</span>
              <Link href={`/${cat.slug}/${occ.slug}`} className="hover:text-gold whitespace-nowrap">{occ.title}</Link>
            </>
          )}
          <span>/</span>
          <span className="text-gold whitespace-nowrap">{design.id}</span>
        </div>
      </div>

      <section className="container-x py-10 md:py-16 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3">
          <YouTubeEmbed videoId={design.youtubeId} title={design.title} />
        </div>

        <aside className="lg:col-span-2">
          <div className="text-xs uppercase tracking-[0.35em] text-gold mb-3">{type.title}</div>
          <h1 className="detail-title">
            {design.title}
          </h1>
          <div className="mt-3 text-sm text-gold/80">Design ID: {design.id}{design.duration ? ` · ${design.duration} min` : ""}</div>

          {design.description && (
            <p className="mt-6 text-ivory/70 leading-relaxed">{design.description}</p>
          )}

          {design.tags && (
            <div className="flex flex-wrap gap-2 mt-6">
              {design.tags.map((t) => (
                <span
                  key={t}
                  className="design-tag text-[10px] uppercase tracking-wider px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          <div className="detail-price mt-8">
            <PriceTag price={priceOf(design)} label="Special offer price" size="lg" />
            <p>Fully customised with your details · Final confirmation on WhatsApp</p>
          </div>

          {design.features && (
            <div className="mt-8">
              <h2 className="detail-subtitle">Included</h2>
              <ul className="space-y-2 text-sm text-ivory/70">
                {design.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8 flex flex-col gap-3">
            <WhatsAppButton size="lg" variant="green" message={message}>
              Enquire on WhatsApp
            </WhatsAppButton>
            <a
              href={`https://youtube.com/watch?v=${design.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Watch on YouTube
            </a>
          </div>
        </aside>
      </section>

      {related.length > 0 && (
        <section className="section-tint py-16 md:py-20">
          <div className="container-x">
            <SectionHeading eyebrow="You may also like" title="Related designs" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((d) => (
                <DesignCard key={d.id} design={d} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
