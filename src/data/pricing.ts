import type { CategorySlug, OccasionSlug } from "./site";

// ─────────────────────────────────────────────────────────────
// ALL PRICES ON THE WEBSITE COME FROM THIS FILE.
// `original` is shown with a strikethrough, `price` is the final price.
// The "% OFF" badge is calculated automatically.
// ─────────────────────────────────────────────────────────────

export type Price = { original: number; price: number };

export type VideoType = "long" | "3d-short" | "rip";

export const videoTypes: Record<
  VideoType,
  { title: string; short: string; description: string; price: Price; href: string }
> = {
  long: {
    title: "Wedding Invitation Videos",
    short: "Long Videos",
    description:
      "Traditional and cinematic Telugu wedding invitation videos (about 1 minute), fully customised with your names, dates, venue and family details.",
    price: { original: 2000, price: 899 },
    href: "/invitation-videos#long",
  },
  "3d-short": {
    title: "3D Short Videos",
    short: "3D Save The Date",
    description:
      "Premium 3D animated save-the-date shorts (about 30 seconds) — made for WhatsApp status, Instagram Reels and YouTube Shorts.",
    price: { original: 3000, price: 1500 },
    href: "/invitation-videos#3d-short",
  },
  rip: {
    title: "RIP Tribute Videos",
    short: "Person Return Videos",
    description:
      "Heartfelt memorial tributes — including AI person-return videos that lovingly bring a departed family member back on screen.",
    price: { original: 15000, price: 7000 },
    href: "/person-return-videos",
  },
};

// "Starting from" prices shown on category cards and the pricing section.
export const startingPrices: Record<CategorySlug, Price> = {
  "invitation-videos": { original: 2000, price: 899 },
  "invitation-websites": { original: 5999, price: 1999 },
  "person-return-videos": { original: 10000, price: 5000 },
};

// Invitation website prices by type — kept identical to str-inivitations.vercel.app.
export const websitePrices: Partial<Record<OccasionSlug, Price>> = {
  wedding: { original: 5999, price: 2999 },
  engagement: { original: 5999, price: 2499 },
  "save-the-date": { original: 5999, price: 1999 },
  "baby-shower": { original: 5999, price: 1999 },
};

export const discountPercent = ({ original, price }: Price) =>
  Math.round((1 - price / original) * 100);

export const formatINR = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;
