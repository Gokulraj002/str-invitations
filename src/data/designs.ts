import type { CategorySlug, OccasionSlug } from "./site";

export type DesignStyle =
  | "save-the-date"
  | "traditional"
  | "cinematic"
  | "affordable"
  | "ai"
  | "luxury";

export const designStyles: { slug: DesignStyle; title: string }[] = [
  { slug: "save-the-date", title: "Save The Date" },
  { slug: "traditional", title: "Traditional" },
  { slug: "cinematic", title: "Cinematic" },
  { slug: "luxury", title: "Luxury" },
  { slug: "ai", title: "AI / Emotional" },
  { slug: "affordable", title: "Affordable" },
];

export type Design = {
  id: string;
  title: string;
  category: CategorySlug;
  occasion?: OccasionSlug;
  style?: DesignStyle;
  youtubeId: string;
  duration?: string;
  price?: number;
  tags?: string[];
  description?: string;
  features?: string[];
};

// Synced from YouTube channel @strinvitations
// Channel ID: UCq2YI9-skURaFfn_xraPiTQ
// To re-sync: npm run sync:yt (needs YOUTUBE_API_KEY env var)
export const designs: Design[] = [
  {
    "id": "STR-W-001",
    "title": "Luxury Save The Date",
    "category": "invitation-videos",
    "occasion": "wedding",
    "youtubeId": "dWD72U2JExg",
    "price": 1999,
    "tags": [
      "Luxury",
      "Save The Date"
    ],
    "style": "luxury"
  },
  {
    "id": "STR-W-002",
    "title": "Dead Person Alive Again with AI",
    "category": "invitation-videos",
    "occasion": "wedding",
    "youtubeId": "Wm7r8ScBN_A",
    "price": 3499,
    "tags": [
      "AI"
    ],
    "style": "ai"
  },
  {
    "id": "STR-W-003",
    "title": "Save The Date · vol. I",
    "category": "invitation-videos",
    "occasion": "wedding",
    "youtubeId": "NdVnIDHs2mM",
    "price": 1799,
    "tags": [
      "Save The Date"
    ],
    "style": "save-the-date"
  },
  {
    "id": "STR-W-004",
    "title": "Save The Date · vol. II",
    "category": "invitation-videos",
    "occasion": "wedding",
    "youtubeId": "g5YdyvHJCvQ",
    "price": 1799,
    "tags": [
      "Save The Date"
    ],
    "style": "save-the-date"
  },
  {
    "id": "STR-W-005",
    "title": "Traditional Hindu Telugu Wedding Invitation Video 2025",
    "category": "invitation-videos",
    "occasion": "wedding",
    "youtubeId": "ONaGFtgygr0",
    "price": 1499,
    "tags": [
      "Traditional",
      "Telugu"
    ],
    "style": "traditional"
  },
  {
    "id": "STR-W-006",
    "title": "Trending Hindu Telugu Wedding Invitation Video",
    "category": "invitation-videos",
    "occasion": "wedding",
    "youtubeId": "cnI7Kb9KM5E",
    "price": 1499,
    "tags": [
      "Traditional",
      "Telugu",
      "Trending"
    ],
    "style": "traditional"
  },
  {
    "id": "STR-W-007",
    "title": "Telugu Wedding Invitation Video 13",
    "category": "invitation-videos",
    "occasion": "wedding",
    "youtubeId": "fs6erimRKR4",
    "price": 1299,
    "tags": [
      "Telugu"
    ],
    "style": "traditional"
  },
  {
    "id": "STR-W-008",
    "title": "Telugu Wedding Invitation Video 12",
    "category": "invitation-videos",
    "occasion": "wedding",
    "youtubeId": "y5Ctnzyo7pU",
    "price": 1299,
    "tags": [
      "Telugu"
    ],
    "style": "traditional"
  },
  {
    "id": "STR-W-009",
    "title": "Telugu Wedding Invitation Video 10",
    "category": "invitation-videos",
    "occasion": "wedding",
    "youtubeId": "rMWwiLQfEPQ",
    "price": 1299,
    "tags": [
      "Telugu"
    ],
    "style": "traditional"
  },
  {
    "id": "STR-W-010",
    "title": "Telugu Wedding Invitation Video 11",
    "category": "invitation-videos",
    "occasion": "wedding",
    "youtubeId": "_RGirouIgSM",
    "price": 1299,
    "tags": [
      "Telugu"
    ],
    "style": "traditional"
  },
  {
    "id": "STR-W-011",
    "title": "Telugu Wedding Invitation Video 9",
    "category": "invitation-videos",
    "occasion": "wedding",
    "youtubeId": "uv86e5AzK_c",
    "price": 1299,
    "tags": [
      "Telugu"
    ],
    "style": "traditional"
  },
  {
    "id": "STR-W-012",
    "title": "Telugu Wedding Invitation Video 8",
    "category": "invitation-videos",
    "occasion": "wedding",
    "youtubeId": "xpzFqphpY2A",
    "price": 1299,
    "tags": [
      "Telugu"
    ],
    "style": "traditional"
  },
  {
    "id": "STR-W-013",
    "title": "Telugu Wedding Invitation Video · vol. I",
    "category": "invitation-videos",
    "occasion": "wedding",
    "youtubeId": "prJNJX5lR3w",
    "price": 1299,
    "tags": [
      "Telugu"
    ],
    "style": "traditional"
  },
  {
    "id": "STR-W-014",
    "title": "Telugu Wedding Invitation Video Very Affordable Rate · vol. I",
    "category": "invitation-videos",
    "occasion": "wedding",
    "youtubeId": "eR41UI-3aAs",
    "price": 999,
    "tags": [
      "Affordable",
      "Telugu"
    ],
    "style": "affordable"
  },
  {
    "id": "STR-W-015",
    "title": "Telugu Wedding Invitation Video Very Affordable Rate · vol. II",
    "category": "invitation-videos",
    "occasion": "wedding",
    "youtubeId": "I1IlEqX5sMs",
    "price": 999,
    "tags": [
      "Affordable",
      "Telugu"
    ],
    "style": "affordable"
  },
  {
    "id": "STR-W-016",
    "title": "Telugu Wedding Invitation Video Very Affordable Rate · vol. III",
    "category": "invitation-videos",
    "occasion": "wedding",
    "youtubeId": "2xV6SNrDnAY",
    "price": 999,
    "tags": [
      "Affordable",
      "Telugu"
    ],
    "style": "affordable"
  },
  {
    "id": "STR-W-017",
    "title": "Telugu Wedding Invitation",
    "category": "invitation-videos",
    "occasion": "wedding",
    "youtubeId": "4FDM5QZ8kBU",
    "price": 1299,
    "tags": [
      "Telugu"
    ],
    "style": "traditional"
  },
  {
    "id": "STR-W-018",
    "title": "Telugu Wedding Invitation Video · vol. II",
    "category": "invitation-videos",
    "occasion": "wedding",
    "youtubeId": "kmH7QDPNj7U",
    "price": 1299,
    "tags": [
      "Telugu"
    ],
    "style": "traditional"
  },
  {
    "id": "STR-W-019",
    "title": "Telugu Cinematic Wedding Invitation Video",
    "category": "invitation-videos",
    "occasion": "wedding",
    "youtubeId": "3gIqK4rO7Bo",
    "price": 1799,
    "tags": [
      "Cinematic",
      "Telugu"
    ],
    "style": "cinematic"
  }
];

export const getByCategory = (category: CategorySlug) => designs.filter((d) => d.category === category);
export const getByOccasion = (category: CategorySlug, occasion: OccasionSlug) =>
  designs.filter((d) => d.category === category && d.occasion === occasion);
export const getById = (id: string) => designs.find((d) => d.id === id);
export const featuredDesigns = () => designs.slice(0, 6);
