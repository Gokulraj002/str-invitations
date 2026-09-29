#!/usr/bin/env node
// Sync videos from the STR Invitations YouTube channel.
// Usage: npm run sync:yt   (needs YOUTUBE_API_KEY in .env.local)
// Writes src/data/designs.generated.ts — review it, then copy the entries you
// want into src/data/designs.ts. Existing titles/tags in designs.ts are kept.
//
// How videos are classified:
//   • in the "RIP PERSON RETURN VIDEO" playlist → rip
//   • title contains "3D"                       → 3d-short
//   • everything else                           → long
//   • gaming / non-invitation videos are skipped

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const envPath = path.join(root, ".env.local");
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.+?)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}

const CHANNEL_ID = "UCq2YI9-skURaFfn_xraPiTQ";
const API_KEY = process.env.YOUTUBE_API_KEY;
const SKIP = /gaming|free fire|stream|marvel|intro like|pirates/i;
if (!API_KEY) {
  console.error("❌ Add YOUTUBE_API_KEY=... to .env.local first.");
  process.exit(1);
}

const api = async (endpoint, params) => {
  const url = new URL(`https://www.googleapis.com/youtube/v3/${endpoint}`);
  Object.entries({ ...params, key: API_KEY }).forEach(([k, v]) => url.searchParams.set(k, v));
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${endpoint}: ${res.status} ${await res.text()}`);
  return res.json();
};

async function playlistVideoIds(playlistId) {
  const ids = [];
  let pageToken = "";
  do {
    const d = await api("playlistItems", { part: "contentDetails", maxResults: 50, playlistId, ...(pageToken && { pageToken }) });
    ids.push(...d.items.map((i) => i.contentDetails.videoId));
    pageToken = d.nextPageToken ?? "";
  } while (pageToken);
  return ids;
}

const seconds = (iso) => {
  const [, h = 0, m = 0, s = 0] = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/) ?? [];
  return +h * 3600 + +m * 60 + +s;
};

async function main() {
  const channel = await api("channels", { part: "contentDetails", id: CHANNEL_ID });
  const uploads = await playlistVideoIds(channel.items[0].contentDetails.relatedPlaylists.uploads);

  const playlists = (await api("playlists", { part: "snippet", channelId: CHANNEL_ID, maxResults: 50 })).items;
  const ripPlaylist = playlists.find((p) => /rip|person return/i.test(p.snippet.title));
  const ripIds = new Set(ripPlaylist ? await playlistVideoIds(ripPlaylist.id) : []);

  const videos = [];
  for (let i = 0; i < uploads.length; i += 50) {
    const d = await api("videos", { part: "snippet,contentDetails", id: uploads.slice(i, i + 50).join(",") });
    videos.push(...d.items);
  }

  const existing = fs.readFileSync(path.join(root, "src/data/designs.ts"), "utf8");
  const entries = videos
    .filter((v) => !SKIP.test(v.snippet.title) && seconds(v.contentDetails.duration) > 0)
    .map((v, i) => {
      const s = seconds(v.contentDetails.duration);
      const videoType = ripIds.has(v.id) ? "rip" : /3d/i.test(v.snippet.title) ? "3d-short" : "long";
      return {
        id: `STR-NEW-${String(i + 1).padStart(3, "0")}`,
        title: v.snippet.title.split("|")[0].replace(/[💍#].*$/u, "").trim(),
        category: videoType === "rip" ? "person-return-videos" : "invitation-videos",
        ...(videoType !== "rip" && { occasion: "wedding" }),
        videoType,
        youtubeId: v.id,
        duration: `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`,
        tags: [],
        alreadyOnWebsite: existing.includes(`"${v.id}"`),
      };
    });

  const fresh = entries.filter((e) => !e.alreadyOnWebsite).map(({ alreadyOnWebsite, ...e }) => e);
  const out = `// Generated ${new Date().toISOString()} — ${fresh.length} NEW video(s) not yet on the website.\n// Copy the entries you want into the designs array in src/data/designs.ts.\nexport const newDesigns = ${JSON.stringify(fresh, null, 2)};\n`;
  fs.writeFileSync(path.join(root, "src/data/designs.generated.ts"), out);
  console.log(`✅ ${videos.length} videos on channel · ${fresh.length} new → src/data/designs.generated.ts`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
