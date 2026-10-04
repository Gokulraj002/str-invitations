import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { designs } from "@/data/designs";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;
  const pages = ["", "/invitation-videos", "/invitation-websites", "/person-return-videos", "/pricing", "/how-it-works", "/about", "/contact", "/faq"];
  const designPages = designs.map((d) => (d.occasion ? `/${d.category}/${d.occasion}/${d.id}` : `/${d.category}/${d.id}`));
  return [...pages, ...designPages].map((path) => ({ url: `${base}${path}` }));
}
