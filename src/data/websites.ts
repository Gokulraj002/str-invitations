import type { OccasionSlug } from "./site";
import type { Price } from "./pricing";

export type InvitationWebsite = {
  id: string;
  title: string;
  occasion: OccasionSlug;
  url: string; // live demo link — opens in a new tab
  image?: string; // optional screenshot in /public (e.g. "/websites/ravi-priya.webp"); auto-screenshot if omitted
  features?: string[];
  price?: Price; // optional override — otherwise "starting from" price in pricing.ts
};

// ADD YOUR INVITATION WEBSITE DEMOS HERE. Example:
// {
//   id: "WEB-001",
//   title: "Royal Telugu Wedding Website",
//   occasion: "wedding",
//   url: "https://example.com/ravi-weds-priya",
//   features: ["RSVP", "Countdown", "Venue map", "Photo gallery"],
// },
export const websites: InvitationWebsite[] = [];

export const websiteThumbnail = (site: InvitationWebsite) =>
  site.image ?? `https://s.wordpress.com/mshots/v1/${encodeURIComponent(site.url)}?w=1200&h=900`;
