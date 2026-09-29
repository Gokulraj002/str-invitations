import type { Design } from "@/data/designs";
import { videoTypes, type VideoType } from "@/data/pricing";
import { DesignCard } from "./DesignCard";
import { PriceTag } from "./PriceTag";
import { WhatsAppButton } from "./WhatsAppButton";

type Props = { type: VideoType; designs: Design[] };

export function VideoTypeSection({ type, designs }: Props) {
  if (designs.length === 0) return null;
  const t = videoTypes[type];

  return (
    <section id={type} className="type-section container-x">
      <header className="type-section-head">
        <div>
          <p className="eyebrow">{t.short} · {designs.length} design{designs.length === 1 ? "" : "s"}</p>
          <h2>{t.title}</h2>
          <p className="type-section-desc">{t.description}</p>
        </div>
        <div className="type-section-price">
          <PriceTag price={t.price} label="Every design" size="lg" />
          <WhatsAppButton size="md" message={`Hi STR Invitations, I'm interested in ${t.title}. Please share details.`}>
            Enquire now
          </WhatsAppButton>
        </div>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {designs.map((d) => (
          <DesignCard key={d.id} design={d} />
        ))}
      </div>
    </section>
  );
}
