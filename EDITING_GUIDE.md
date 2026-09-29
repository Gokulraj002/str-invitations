# STR Invitations — Website Editing Guide

This guide shows how to make everyday changes to the website yourself: prices, videos, text, images, categories and invitation website links.

---

## 1. Your access

| What | Where | Login |
|---|---|---|
| **Website files** (the "admin") | https://github.com/Gokulraj002/str-invitations | Your GitHub account (`Gokulraj002`) |
| **Hosting** (after going live) | https://vercel.com, connected to the GitHub repo | Sign in to Vercel **with GitHub**, using the same account |
| **YouTube API key** | `.env.local` on your computer (never uploaded to GitHub) | Google Cloud Console → APIs & Services → Credentials |

The website has **no separate admin panel or password**. You edit files on GitHub, and Vercel publishes each saved change automatically in about 1–2 minutes.

> Once the site is live on Vercel, open **Vercel → your project → Settings → Environment Variables** and add `YOUTUBE_API_KEY` with the same key that's in `.env.local`.

---

## 2. How to edit any file (no software needed)

1. Open the repo on github.com and click into the file (for example `src/data/pricing.ts`).
2. Click the **pencil icon ✏️** (Edit this file).
3. Make your change.
4. Click **Commit changes…** → **Commit changes**.
5. Wait 1–2 minutes and refresh the website.

**Rules so nothing breaks:**
- Change only text **inside quotes** `"like this"` and **numbers**.
- Keep every comma `,`, bracket `{ } [ ]` and quote `"` in place.
- Numbers have no commas or ₹ sign: write `1499`, not `₹1,499`.

**If something breaks:** on GitHub, open **Commits**, click the last change, then **Revert**. The previous version goes live again.

---

## 3. Where everything lives

| To change… | Edit this file |
|---|---|
| Any price | `src/data/pricing.ts` |
| Phone, WhatsApp number, email, YouTube link | `src/data/site.ts` |
| Videos (add, remove, rename) | `src/data/designs.ts` |
| Invitation website demo links | `src/data/websites.ts` |
| Home page text | `src/app/page.tsx` |
| About / Contact / FAQ page text | `src/app/about/page.tsx`, `src/app/contact/page.tsx`, `src/app/faq/page.tsx` |
| Images, logo | the `public/` folder |

---

## 4. Change prices

Open `src/data/pricing.ts`. Each price has two numbers:

```ts
price: { original: 2000, price: 899 },
```

- `original` shows with a strikethrough (~~₹2,000~~)
- `price` is the highlighted final price (**₹899**)
- The **"% OFF"** badge is calculated automatically

| Section | What it controls |
|---|---|
| `long` | Every wedding invitation (long) video |
| `"3d-short"` | Every 3D short video |
| `rip` | Every RIP tribute video |
| `startingPrices` | "Starting from" prices on the category cards and pricing page |

Change a number once here and it updates everywhere on the site.

---

## 5. Add a new video

**Easiest way (automatic):**

1. Upload the video to the STR YouTube channel. For RIP videos, also add it to the **"RIP PERSON RETURN VIDEO"** playlist. Put **"3D"** in the title of 3D short videos.
2. On your computer, in the project folder, run:
   ```
   npm run sync:yt
   ```
3. It creates `src/data/designs.generated.ts` containing only the new videos. Copy those entries into the list in `src/data/designs.ts`.

**By hand (on GitHub):** copy an existing entry in `src/data/designs.ts` and change it:

```ts
{
  "id": "STR-W-016",                 // unique ID, never reuse one
  "title": "Royal Telugu Wedding Invitation",
  "category": "invitation-videos",   // or "person-return-videos" for RIP
  "occasion": "wedding",             // leave this line out for RIP videos
  "videoType": "long",               // "long", "3d-short" or "rip"
  "youtubeId": "ONaGFtgygr0",        // the part after watch?v= or /shorts/
  "duration": "1:12",
  "tags": ["Traditional", "Telugu"]
},
```

**Finding the YouTube ID:** in `https://youtube.com/watch?v=ONaGFtgygr0` the ID is `ONaGFtgygr0`. In `https://youtube.com/shorts/dWD72U2JExg` it's `dWD72U2JExg`.

**Remove a video:** delete its whole `{ … },` block from `src/data/designs.ts`.

**Special price for one video:** add `"price": { "original": 2500, "price": 1199 },` to that video's entry.

---

## 6. Add invitation website demos

Open `src/data/websites.ts` and add entries inside the `[ ]`:

```ts
export const websites: InvitationWebsite[] = [
  {
    id: "WEB-001",
    title: "Royal Telugu Wedding Website",
    occasion: "wedding",
    url: "https://your-demo-link.com",
    features: ["RSVP", "Countdown", "Venue map", "Photo gallery"],
  },
  {
    id: "WEB-002",
    title: "Minimal Engagement Website",
    occasion: "engagement",
    url: "https://another-demo-link.com",
  },
];
```

A preview screenshot is generated automatically from the link. To use your own screenshot, put the image in `public/websites/` and add `image: "/websites/my-picture.webp",` to the entry.

Visitors click **"View live demo ↗"** to open the website in a new tab.

---

## 7. Update images

- **Replace an image:** upload a new file with the **exact same name** into `public/`. It replaces the old one everywhere.
  - Logo: `public/logo-str.PNG`
  - Home banner (desktop): `public/str-home-banner-v3.webp`
  - Home banner (mobile): `public/str-home-banner-mobile-v1.webp`
  - Page header background: `public/str-ceremony-hero-v2.webp`
- On GitHub: open the `public` folder → **Add file → Upload files**.
- Use `.webp` or `.jpg` under 500 KB so pages load quickly.

---

## 8. Edit text

Open the page file (see the table in section 3), find the sentence, change it, and commit. Contact details (phone, email) live in `src/data/site.ts` and update across the whole site at once.

---

## 9. Add a new category

- **New occasion** (for example Engagement or House Warming): these already exist. A category appears on the site automatically as soon as a video or website uses it (`"occasion": "engagement"`). The full list is in `src/data/site.ts` under `occasions`.
- **New video type** (a fourth type besides Long, 3D Short and RIP): this touches several files (`pricing.ts`, the videos page, the home page cards). Ask a developer, or ask Claude to "add a new video type called …".

---

## 10. Font (PolySans)

The website is set up for **PolySans**. PolySans is a paid font from Grey Tales, so its files can't be included for free. After you buy the web licence, put these four files in `public/fonts/`:

```
PolySans-Slim.woff2
PolySans-Neutral.woff2
PolySans-Median.woff2
PolySans-Bulky.woff2
```

The whole site switches to PolySans automatically. Until then it uses Manrope, a free font with a similar clean look.

---

## 11. Preview changes on your computer (optional)

```
cd strinvitations
npm install
npm run dev
```

Then open http://localhost:3000.
