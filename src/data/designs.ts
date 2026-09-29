import type { CategorySlug, OccasionSlug } from "./site";
import { videoTypes, type Price, type VideoType } from "./pricing";

export type Design = {
  id: string;
  title: string;
  category: CategorySlug;
  occasion?: OccasionSlug;
  videoType: VideoType;
  youtubeId: string;
  duration?: string;
  tags?: string[];
  description?: string;
  features?: string[];
  price?: Price; // optional override — otherwise the price comes from pricing.ts
};

// Synced from YouTube channel @strinvitations (UCq2YI9-skURaFfn_xraPiTQ).
// To re-sync after uploading new videos: npm run sync:yt
export const designs: Design[] = [
  {
    "id": "STR-3D-001",
    "title": "Luxury 3D Save The Date",
    "category": "invitation-videos",
    "occasion": "wedding",
    "videoType": "3d-short",
    "youtubeId": "dWD72U2JExg",
    "duration": "0:34",
    "tags": [
      "3D",
      "Luxury",
      "Save The Date"
    ]
  },
  {
    "id": "STR-3D-002",
    "title": "3D Save The Date · vol. I",
    "category": "invitation-videos",
    "occasion": "wedding",
    "videoType": "3d-short",
    "youtubeId": "NdVnIDHs2mM",
    "duration": "0:34",
    "tags": [
      "3D",
      "Save The Date"
    ]
  },
  {
    "id": "STR-3D-003",
    "title": "3D Save The Date · vol. II",
    "category": "invitation-videos",
    "occasion": "wedding",
    "videoType": "3d-short",
    "youtubeId": "g5YdyvHJCvQ",
    "duration": "0:30",
    "tags": [
      "3D",
      "Save The Date"
    ]
  },
  {
    "id": "STR-RIP-001",
    "title": "AI Person Return Tribute Video",
    "category": "person-return-videos",
    "videoType": "rip",
    "youtubeId": "Wm7r8ScBN_A",
    "duration": "2:29",
    "tags": [
      "AI",
      "Person Return",
      "Emotional"
    ]
  },
  {
    "id": "STR-W-001",
    "title": "Traditional Hindu Telugu Wedding Invitation 2025",
    "category": "invitation-videos",
    "occasion": "wedding",
    "videoType": "long",
    "youtubeId": "ONaGFtgygr0",
    "duration": "1:12",
    "tags": [
      "Traditional",
      "Telugu"
    ]
  },
  {
    "id": "STR-W-002",
    "title": "Trending Cinematic Hindu Telugu Wedding Invitation",
    "category": "invitation-videos",
    "occasion": "wedding",
    "videoType": "long",
    "youtubeId": "cnI7Kb9KM5E",
    "duration": "1:06",
    "tags": [
      "Cinematic",
      "Telugu",
      "Trending"
    ]
  },
  {
    "id": "STR-W-003",
    "title": "Telugu Cinematic Wedding Invitation",
    "category": "invitation-videos",
    "occasion": "wedding",
    "videoType": "long",
    "youtubeId": "3gIqK4rO7Bo",
    "duration": "1:00",
    "tags": [
      "Cinematic",
      "Telugu"
    ]
  },
  {
    "id": "STR-W-004",
    "title": "Telugu Wedding Invitation · Design 13",
    "category": "invitation-videos",
    "occasion": "wedding",
    "videoType": "long",
    "youtubeId": "fs6erimRKR4",
    "duration": "1:05",
    "tags": [
      "Telugu"
    ]
  },
  {
    "id": "STR-W-005",
    "title": "Telugu Wedding Invitation · Design 12",
    "category": "invitation-videos",
    "occasion": "wedding",
    "videoType": "long",
    "youtubeId": "y5Ctnzyo7pU",
    "duration": "1:17",
    "tags": [
      "Telugu"
    ]
  },
  {
    "id": "STR-W-006",
    "title": "Telugu Wedding Invitation · Design 11",
    "category": "invitation-videos",
    "occasion": "wedding",
    "videoType": "long",
    "youtubeId": "_RGirouIgSM",
    "duration": "1:04",
    "tags": [
      "Telugu"
    ]
  },
  {
    "id": "STR-W-007",
    "title": "Telugu Wedding Invitation · Design 10",
    "category": "invitation-videos",
    "occasion": "wedding",
    "videoType": "long",
    "youtubeId": "rMWwiLQfEPQ",
    "duration": "1:13",
    "tags": [
      "Telugu"
    ]
  },
  {
    "id": "STR-W-008",
    "title": "Telugu Wedding Invitation · Design 9",
    "category": "invitation-videos",
    "occasion": "wedding",
    "videoType": "long",
    "youtubeId": "uv86e5AzK_c",
    "duration": "1:15",
    "tags": [
      "Telugu"
    ]
  },
  {
    "id": "STR-W-009",
    "title": "Telugu Wedding Invitation · Design 8",
    "category": "invitation-videos",
    "occasion": "wedding",
    "videoType": "long",
    "youtubeId": "xpzFqphpY2A",
    "duration": "1:08",
    "tags": [
      "Telugu"
    ]
  },
  {
    "id": "STR-W-010",
    "title": "Telugu Wedding Invitation · Design 7",
    "category": "invitation-videos",
    "occasion": "wedding",
    "videoType": "long",
    "youtubeId": "prJNJX5lR3w",
    "duration": "1:08",
    "tags": [
      "Telugu"
    ]
  },
  {
    "id": "STR-W-011",
    "title": "Telugu Wedding Invitation · Design 6",
    "category": "invitation-videos",
    "occasion": "wedding",
    "videoType": "long",
    "youtubeId": "kmH7QDPNj7U",
    "duration": "0:58",
    "tags": [
      "Telugu"
    ]
  },
  {
    "id": "STR-W-012",
    "title": "Telugu Wedding Invitation · Design 5",
    "category": "invitation-videos",
    "occasion": "wedding",
    "videoType": "long",
    "youtubeId": "4FDM5QZ8kBU",
    "duration": "1:03",
    "tags": [
      "Telugu"
    ]
  },
  {
    "id": "STR-W-013",
    "title": "Telugu Wedding Invitation · Budget 3",
    "category": "invitation-videos",
    "occasion": "wedding",
    "videoType": "long",
    "youtubeId": "2xV6SNrDnAY",
    "duration": "1:31",
    "tags": [
      "Telugu",
      "Budget"
    ]
  },
  {
    "id": "STR-W-014",
    "title": "Telugu Wedding Invitation · Budget 2",
    "category": "invitation-videos",
    "occasion": "wedding",
    "videoType": "long",
    "youtubeId": "I1IlEqX5sMs",
    "duration": "1:29",
    "tags": [
      "Telugu",
      "Budget"
    ]
  },
  {
    "id": "STR-W-015",
    "title": "Telugu Wedding Invitation · Budget 1",
    "category": "invitation-videos",
    "occasion": "wedding",
    "videoType": "long",
    "youtubeId": "eR41UI-3aAs",
    "duration": "0:35",
    "tags": [
      "Telugu",
      "Budget"
    ]
  }
];

export const priceOf = (d: Design): Price => d.price ?? videoTypes[d.videoType].price;
export const getById = (id: string) => designs.find((d) => d.id === id);
export const getByType = (type: VideoType) => designs.filter((d) => d.videoType === type);
export const getByOccasion = (category: CategorySlug, occasion: OccasionSlug) =>
  designs.filter((d) => d.category === category && d.occasion === occasion);

export const featuredDesigns = () => [
  ...getByType("3d-short").slice(0, 2),
  ...getByType("rip").slice(0, 1),
  ...getByType("long").slice(0, 3),
];
