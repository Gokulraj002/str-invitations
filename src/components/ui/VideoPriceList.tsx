import Link from "next/link";
import { videoTypes, type VideoType } from "@/data/pricing";
import { PriceTag } from "./PriceTag";
import { SectionHeading } from "./SectionHeading";

const TYPES: VideoType[] = ["long", "3d-short", "rip"];

export function VideoPriceList() {
  return (
    <section className="container-x py-16 md:py-20">
      <SectionHeading eyebrow="Price per video" title="Video prices by type" />
      <div className="price-list">
        {TYPES.map((type) => {
          const t = videoTypes[type];
          return (
            <Link key={type} href={t.href} className="price-list-row">
              <div>
                <h3>{t.title}</h3>
                <p>{t.description}</p>
              </div>
              <PriceTag price={t.price} label="Every design" size="md" />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
