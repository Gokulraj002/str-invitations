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
  },
  {
    slug: "invitation-websites",
    title: "Invitation Websites",
  },
  {
    slug: "person-return-videos",
    title: "RIP Tribute Videos",
  },
] as const;

export const occasions = [
  { slug: "wedding", title: "Wedding" },
  { slug: "engagement", title: "Engagement" },
  { slug: "save-the-date", title: "Save the Date" },
  { slug: "baby-shower", title: "Baby Shower" },
  { slug: "house-warming", title: "House Warming" },
  { slug: "dhothi-ceremony", title: "Dhothi Ceremony" },
  { slug: "naming-ceremony", title: "Naming Ceremony" },
  { slug: "other-ceremonies", title: "Other Ceremonies" },
] as const;

export type CategorySlug = (typeof mainCategories)[number]["slug"];
export type OccasionSlug = (typeof occasions)[number]["slug"];
