import type { OccasionSlug } from "./site";
import { websitePrices, startingPrices, type Price } from "./pricing";

export type InvitationWebsite = {
  slug: string; // used in the page address: /invitation-websites/<occasion>/<slug>
  title: string;
  occasion: OccasionSlug; // "wedding", "engagement", "save-the-date" or "baby-shower"
  style: string; // short design name shown on the card, e.g. "Royal Gold"
  colours?: string;
  description: string;
  url: string; // live demo page on str-inivitations.vercel.app
  image?: string; // preview picture in /public/websites; auto-screenshot if omitted
  features: string[];
  price?: Price; // optional override — otherwise the price for its type in pricing.ts
};

// Live invitation website demos. To add one, copy an entry and change it.
export const websites: InvitationWebsite[] = [
  {
    "slug": "rushikesh-prajakta",
    "title": "Rushikesh & Prajakta",
    "occasion": "wedding",
    "style": "Royal Gold",
    "colours": "Regal Gold & Cream",
    "description": "Luxury royal wedding invitation featuring custom music backdrop, countdown timer & guest photo gallery.",
    "url": "https://str-inivitations.vercel.app/invitations/rushikesh-prajakta",
    "image": "/websites/rushikesh-prajakta.webp",
    "features": [
      "Royal Mandap & Ceremony Timelines",
      "Interactive Mobile RSVP Form",
      "One-Touch Google Maps Navigation",
      "Couples Music Player with Autoplay",
      "Live Days-Hours-Mins Countdown"
    ]
  },
  {
    "slug": "deeksha-chetan",
    "title": "Deeksha & Chetan",
    "occasion": "wedding",
    "style": "Elegant Pastel",
    "colours": "Pastel Rose & Sage Green",
    "description": "Pastel floral aesthetic with interactive ceremony timeline, location maps & RSVP management.",
    "url": "https://str-inivitations.vercel.app/invitations/deeksha-chetan",
    "image": "/websites/deeksha-chetan.webp",
    "features": [
      "Blooming Floral Entry Animation",
      "Complete Multi-Day Itinerary",
      "Interactive RSVP & Dietary Notes",
      "Navigation Pins for All Venues",
      "Romantic Background Soundscape"
    ]
  },
  {
    "slug": "ananya-vartika",
    "title": "Ananya & Vartika",
    "occasion": "wedding",
    "style": "Floral Gold",
    "colours": "Gilded Gold & Ivory",
    "description": "Grand wedding theme with golden borders, music playback, event schedule & animated envelope opening.",
    "url": "https://str-inivitations.vercel.app/invitations/ananya-vartika",
    "image": "/websites/ananya-vartika.webp",
    "features": [
      "Custom 3D Envelope Wax Seal Opening",
      "Multi-Event Schedule (Haldi, Mehendi, Sangeet, Wedding)",
      "Smart RSVP with Guest Counter",
      "Interactive Map with Venue Directions",
      "Curated Couple Song Playback"
    ]
  },
  {
    "slug": "harshjot-karanpreet",
    "title": "Harshjot Kaur & Karanpreet Singh",
    "occasion": "wedding",
    "style": "Sikh Royal",
    "colours": "Imperial Emerald & Gold",
    "description": "Regal Anand Karaj ceremony theme with traditional motifs, photo gallery & instant RSVP.",
    "url": "https://str-inivitations.vercel.app/invitations/harshjot-karanpreet",
    "image": "/websites/harshjot-karanpreet.webp",
    "features": [
      "Traditional Anand Karaj Visual Motifs",
      "Gurdwara Navigation Pin & Timing Details",
      "Interactive Guest Attendance Form",
      "Shabad / Music Backdrop Integration",
      "Family & Blessing Section"
    ]
  },
  {
    "slug": "jinal-hitarth",
    "title": "Jinal & Hitarth",
    "occasion": "wedding",
    "style": "Traditional Heritage",
    "colours": "Heritage Crimson & Marigold",
    "description": "Rich cultural wedding website with custom event schedule, venue location pins & guest greetings.",
    "url": "https://str-inivitations.vercel.app/invitations/jinal-hitarth",
    "image": "/websites/jinal-hitarth.webp",
    "features": [
      "Ornate Heritage Border Patterns",
      "Interactive Mobile RSVP Form",
      "Venue Map Directions with Transit Info",
      "Custom Couple Audio Playback",
      "Milestone Journey Timeline"
    ]
  },
  {
    "slug": "swapnil-ritu",
    "title": "Swapnil & Ritu",
    "occasion": "wedding",
    "style": "Velvet Luxury",
    "colours": "Midnight Velvet & Champagne Gold",
    "description": "Grand celebration website with dark velvet aesthetic, live countdown & music player.",
    "url": "https://str-inivitations.vercel.app/invitations/swapnil-ritu",
    "image": "/websites/swapnil-ritu.webp",
    "features": [
      "Ultra-Luxe Dark Velvet UI",
      "Smooth Animated Envelope Opening",
      "Digital RSVP with Meal Preference",
      "Live Precision Countdown",
      "Ambient Romantic Audio Track"
    ]
  },
  {
    "slug": "roopa-anoop",
    "title": "Roopa & Anoop",
    "occasion": "wedding",
    "style": "Modern Minimal",
    "colours": "Warm Sand & Charcoal",
    "description": "Sleek contemporary design with clean typography, interactive map pins & instant WhatsApp sharing.",
    "url": "https://str-inivitations.vercel.app/invitations/roopa-anoop",
    "image": "/websites/roopa-anoop.webp",
    "features": [
      "Editorial Clean Typography Layout",
      "Instant 1-Click RSVP via WhatsApp",
      "Interactive Venue Route Guidance",
      "Live Event Countdown Widget",
      "Couple Story Highlights"
    ]
  },
  {
    "slug": "bhushan-pragyansa",
    "title": "Bhushan & Pragyansa",
    "occasion": "wedding",
    "style": "Classic Romance",
    "colours": "Blush Pink & Vintage Gold",
    "description": "Timeless romantic invitation featuring couple story timeline & interactive venue directions.",
    "url": "https://str-inivitations.vercel.app/invitations/bhushan-pragyansa",
    "image": "/websites/bhushan-pragyansa.webp",
    "features": [
      "Love Journey Milestone Timeline",
      "Interactive RSVP & Confirmation",
      "Google Maps Venue Coordinates",
      "Romantic Background Music Track",
      "Live Wedding Day Countdown"
    ]
  },
  {
    "slug": "saiyam-jenny",
    "title": "Saiyam & Jenny",
    "occasion": "wedding",
    "style": "Bespoke Glamour",
    "colours": "Champagne Sparkle & Slate",
    "description": "High-end wedding experience with smooth animations, custom music & live guest book.",
    "url": "https://str-inivitations.vercel.app/invitations/saiyam-jenny",
    "image": "/websites/saiyam-jenny.webp",
    "features": [
      "Bespoke Micro-Animations & Glows",
      "Live Guest Book & Blessings",
      "Interactive Mobile RSVP Form",
      "Venue Maps with Parking Notes",
      "Audio Player with Custom Playlist"
    ]
  },
  {
    "slug": "saheba-apramit",
    "title": "Saheba & Apramit",
    "occasion": "save-the-date",
    "style": "Quick Announcement",
    "colours": "Minimal Ivory & Espresso",
    "description": "Chic and modern Save the Date announcement with countdown timer & add-to-calendar feature.",
    "url": "https://str-inivitations.vercel.app/invitations/saheba-apramit",
    "image": "/websites/saheba-apramit.webp",
    "features": [
      "Save the Date Countdown Timer",
      "1-Click Google Calendar & Apple Calendar Sync",
      "Instant WhatsApp Broadcast Card",
      "Couple Milestone Portrait",
      "City & Destination Preview"
    ]
  },
  {
    "slug": "shreya-shubham",
    "title": "Shreya & Shubham",
    "occasion": "save-the-date",
    "style": "Modern Card",
    "colours": "Soft Coral & Peach",
    "description": "Beautiful digital Save the Date card with animated floral accents & instant WhatsApp sharing.",
    "url": "https://str-inivitations.vercel.app/invitations/shreya-shubham",
    "image": "/websites/shreya-shubham.webp",
    "features": [
      "Animated Botanical Flourishes",
      "Live Countdown to Wedding Date",
      "Digital Save-the-Date Pass",
      "Direct WhatsApp Sharing Link",
      "Destination Information"
    ]
  },
  {
    "slug": "viraj-vithika",
    "title": "Viraj & Vithika",
    "occasion": "save-the-date",
    "style": "Minimalist",
    "colours": "Monochrome Black & Silver",
    "description": "Clean, elegant Save the Date website featuring couple portraits & venue date reminder.",
    "url": "https://str-inivitations.vercel.app/invitations/viraj-vithika",
    "image": "/websites/viraj-vithika.webp",
    "features": [
      "Contemporary Minimal Typography",
      "Interactive Date Countdown",
      "Calendar Integration (Google/Apple)",
      "High-Resolution Photo Reel",
      "Direct WhatsApp Share Buttons"
    ]
  },
  {
    "slug": "manav-drashti",
    "title": "Manav & Drashti",
    "occasion": "engagement",
    "style": "Rings Ceremony",
    "colours": "Emerald Green & Gold",
    "description": "Stylish engagement invitation featuring ring exchange countdown, venue map & RSVP.",
    "url": "https://str-inivitations.vercel.app/invitations/manav-drashti",
    "image": "/websites/manav-drashti.webp",
    "features": [
      "Ring Exchange Special Animation",
      "Interactive Guest RSVP Form",
      "Google Maps Venue Directions",
      "Engagement Ceremony Timeline",
      "Celebration Music Player"
    ]
  },
  {
    "slug": "rishav-ranjeeta",
    "title": "Rishav & Ranjeeta",
    "occasion": "engagement",
    "style": "Chic Celebration",
    "colours": "Warm Amber & Cream",
    "description": "Modern engagement website with elegant gold accents, background music & event details.",
    "url": "https://str-inivitations.vercel.app/invitations/rishav-ranjeeta",
    "image": "/websites/rishav-ranjeeta.webp",
    "features": [
      "Golden Shimmer Entry Effect",
      "Event Venue Navigation & Timings",
      "Interactive Mobile RSVP Form",
      "Engagement Music Backdrop",
      "Couple Journey Timeline"
    ]
  },
  {
    "slug": "abhedya-anku",
    "title": "Abhedya & Anku",
    "occasion": "engagement",
    "style": "Floral Sparkle",
    "colours": "Ruby Rose & Champagne",
    "description": "Vibrant floral engagement invite with interactive itinerary & venue navigation.",
    "url": "https://str-inivitations.vercel.app/invitations/abhedya-anku",
    "image": "/websites/abhedya-anku.webp",
    "features": [
      "Floral Petal Fall Animation",
      "Interactive RSVP & Attendance",
      "Complete Event Program Itinerary",
      "Navigation Links for Google Maps",
      "Couple Photo Collage"
    ]
  },
  {
    "slug": "rumit-mahek",
    "title": "Rumit & Mahek",
    "occasion": "engagement",
    "style": "Royal Engagement",
    "colours": "Sapphire Blue & Silver",
    "description": "Grand engagement celebration theme with photo gallery & guest RSVP form.",
    "url": "https://str-inivitations.vercel.app/invitations/rumit-mahek",
    "image": "/websites/rumit-mahek.webp",
    "features": [
      "Virtual Envelope Opening Effect",
      "Real-Time RSVP Tracking",
      "Interactive Venue Map Pins",
      "Custom Couple Audio Backdrop",
      "Countdown Clock Widget"
    ]
  },
  {
    "slug": "gayathri-baranitharan",
    "title": "Gayathri & Baranitharan",
    "occasion": "engagement",
    "style": "Traditional Ring",
    "colours": "South Indian Temple Gold & Red",
    "description": "Cultural engagement website with music, traditional motifs & event timeline.",
    "url": "https://str-inivitations.vercel.app/invitations/gayathri-baranitharan",
    "image": "/websites/gayathri-baranitharan.webp",
    "features": [
      "Traditional South Indian Design Motifs",
      "Muhurtham Timing & Ceremony Schedule",
      "Google Maps Route Guide",
      "Interactive RSVP Form",
      "Nadaswaram & Music Integration"
    ]
  },
  {
    "slug": "krishna-baby-shower",
    "title": "Krishna Baby Shower",
    "occasion": "baby-shower",
    "style": "Joyful Arrival",
    "colours": "Sky Blue & Cloud White",
    "description": "Adorable baby shower invitation with soft pastel illustrations, venue map & RSVP.",
    "url": "https://str-inivitations.vercel.app/invitations/krishna-baby-shower",
    "image": "/websites/krishna-baby-shower.webp",
    "features": [
      "Cute Animated Baby Motifs",
      "Interactive RSVP with Guest Notes",
      "Event Venue Directions",
      "Lullaby / Sweet Music Background",
      "Mom & Dad-to-be Highlights"
    ]
  },
  {
    "slug": "nidhi-baby-shower",
    "title": "Nidhi Baby Shower",
    "occasion": "baby-shower",
    "style": "Pastel Celebration",
    "colours": "Blush Pink & Mint",
    "description": "Cute digital baby shower invite with cheerful animations, countdown & music player.",
    "url": "https://str-inivitations.vercel.app/invitations/nidhi-baby-shower",
    "image": "/websites/nidhi-baby-shower.webp",
    "features": [
      "Cheerful Pastels & Balloon Animations",
      "Celebration Date Countdown",
      "Guest Attendance & Dietary Notes",
      "One-Touch Location Directions",
      "Sweet Welcome Audio"
    ]
  },
  {
    "slug": "simoni-rushabh",
    "title": "Simoni & Rushabh",
    "occasion": "baby-shower",
    "style": "Cute Theme",
    "colours": "Soft Sunshine Yellow & Ivory",
    "description": "Sweet Godh Bharai / Baby Shower invite with photo gallery & guest blessings form.",
    "url": "https://str-inivitations.vercel.app/invitations/simoni-rushabh",
    "image": "/websites/simoni-rushabh.webp",
    "features": [
      "Traditional Godh Bharai Ceremony Details",
      "Interactive Blessings & Wishes Wall",
      "Guest RSVP Tracker",
      "Google Maps Venue Coordinates",
      "Maternity Photo Showcase"
    ]
  },
  {
    "slug": "sinita-baby-shower",
    "title": "Sinita Baby Shower",
    "occasion": "baby-shower",
    "style": "Warm Blessings",
    "colours": "Lavender & Warm Beige",
    "description": "Charming baby shower celebration website with instant WhatsApp location directions.",
    "url": "https://str-inivitations.vercel.app/invitations/sinita-baby-shower",
    "image": "/websites/sinita-baby-shower.webp",
    "features": [
      "Playful Animations & Confetti",
      "Celebration Program Timings",
      "Instant WhatsApp Directions Link",
      "Guest Confirmation Form",
      "Gentle Melody Soundscape"
    ]
  }
];

export const websitePrice = (w: InvitationWebsite): Price =>
  w.price ?? websitePrices[w.occasion] ?? startingPrices["invitation-websites"];

export const websiteThumbnail = (w: InvitationWebsite) =>
  w.image ?? `https://s.wordpress.com/mshots/v1/${encodeURIComponent(w.url)}?w=640&h=960`;
