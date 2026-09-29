import Image from "next/image";
import Link from "next/link";
import { getByType } from "@/data/designs";
import { videoTypes, startingPrices, type Price } from "@/data/pricing";
import { websites, websiteThumbnail } from "@/data/websites";
import { PriceTag } from "@/components/ui/PriceTag";

type Card = { title: string; description: string; href: string; image: string; count: string; price: Price; priceLabel: string };

const ytThumb = (id?: string) => (id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : "");

const cards: Card[] = [
  {
    title: videoTypes.long.title,
    description: "Traditional & cinematic Telugu wedding invitation videos.",
    href: videoTypes.long.href,
    image: ytThumb(getByType("long")[1]?.youtubeId),
    count: `${getByType("long").length} designs`,
    price: videoTypes.long.price,
    priceLabel: "Every design",
  },
  {
    title: videoTypes["3d-short"].title,
    description: "Premium 3D save-the-date shorts for WhatsApp status & Reels.",
    href: videoTypes["3d-short"].href,
    image: ytThumb(getByType("3d-short")[0]?.youtubeId),
    count: `${getByType("3d-short").length} designs`,
    price: videoTypes["3d-short"].price,
    priceLabel: "Every design",
  },
  {
    title: "Invitation Websites",
    description: "Tap-to-open websites with RSVP, countdown, map & gallery.",
    href: "/invitation-websites",
    image: websites[0]
      ? websiteThumbnail(websites[0])
      : "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
    count: websites.length ? `${websites.length} live demos` : "Live demos",
    price: startingPrices["invitation-websites"],
    priceLabel: "Starting from",
  },
  {
    title: videoTypes.rip.title,
    description: "Memorial tributes & AI person-return videos for loved ones.",
    href: videoTypes.rip.href,
    image: ytThumb(getByType("rip")[0]?.youtubeId),
    count: "Handled with care",
    price: startingPrices["person-return-videos"],
    priceLabel: "Starting from",
  },
];

export function CategoryShowcase() {
  return (
    <section className="cat-showcase" aria-labelledby="cat-showcase-title">
      <div className="ornament-title"><span /> <b id="cat-showcase-title">Our Categories</b> <span /></div>
      <p className="cat-showcase-sub">Choose what you&apos;re looking for — every design is fully customised for you.</p>
      <div className="cat-grid">
        {cards.map((c) => (
          <Link key={c.title} href={c.href} className="cat-card">
            <div className="cat-card-media">
              {c.image.startsWith("https://s.wordpress.com") ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={c.image} alt="" loading="lazy" />
              ) : (
                <Image src={c.image} alt="" fill sizes="(min-width: 1100px) 25vw, (min-width: 640px) 50vw, 100vw" />
              )}
              <span className="cat-card-count">{c.count}</span>
            </div>
            <div className="cat-card-body">
              <h3>{c.title}</h3>
              <p>{c.description}</p>
              <PriceTag price={c.price} label={c.priceLabel} size="md" />
              <span className="cat-card-cta">View designs →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
