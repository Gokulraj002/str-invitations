export const site = {
  name: "STR Invitations",
  tagline: "Premium Digital Invitations for Every Celebration",
  shortDescription:
    "Beautifully crafted invitation videos, invitation websites and heartfelt RIP tribute videos — designed to make every moment unforgettable.",
  domain: "strinvitations.in",
  whatsappNumber: "916362617878", // country code + number, no + or spaces
  phoneDisplay: "+91 63626 17878",
  email: "hello@strinvitations.in",
  youtubeChannel: "https://youtube.com/@strinvitations",
  instagram: "",
  facebook: "",
  address: "India",
} as const;

export const mainCategories = [
  {
    slug: "invitation-videos",
    title: "Invitation Videos",
    short: "Cinematic video invitations",
    description:
      "Cinematic, animated invitation videos delivered as HD MP4 — perfect for WhatsApp, Instagram and family groups.",
    icon: "🎬",
  },
  {
    slug: "invitation-websites",
    title: "Invitation Websites",
    short: "Interactive digital invites",
    description:
      "Beautiful mobile-first invitation websites with event details, map, RSVP, gallery and countdown timer.",
    icon: "💻",
  },
  {
    slug: "person-return-videos",
    title: "RIP Tribute Videos",
    short: "Heartfelt memorial tributes",
    description:
      "A respectful way to remember and celebrate the life of a loved one — cinematic memorial tribute videos with photos, memories and prayer.",
    icon: "❧",
  },
] as const;

export const occasions = [
  { slug: "wedding", title: "Wedding" },
  { slug: "engagement", title: "Engagement" },
  { slug: "house-warming", title: "House Warming" },
  { slug: "dhothi-ceremony", title: "Dhothi Ceremony" },
  { slug: "naming-ceremony", title: "Naming Ceremony" },
  { slug: "other-ceremonies", title: "Other Ceremonies" },
] as const;

export type CategorySlug = (typeof mainCategories)[number]["slug"];
export type OccasionSlug = (typeof occasions)[number]["slug"];
