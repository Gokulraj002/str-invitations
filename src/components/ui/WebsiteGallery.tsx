"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { occasions } from "@/data/site";
import type { InvitationWebsite } from "@/data/websites";
import { WebsiteCard } from "./WebsiteCard";
import { softSpring } from "./Reveal";

export function WebsiteGallery({ sites }: { sites: InvitationWebsite[] }) {
  const tabs = [
    { slug: "all", title: "All designs", count: sites.length },
    ...occasions
      .map((o) => ({ slug: o.slug as string, title: o.title, count: sites.filter((s) => s.occasion === o.slug).length }))
      .filter((t) => t.count > 0),
  ];
  const [active, setActive] = useState("all");
  const shown = active === "all" ? sites : sites.filter((s) => s.occasion === active);

  return (
    <div>
      <div className="gallery-tabs" role="group" aria-label="Filter invitation websites">
        {tabs.map((t) => (
          <button
            key={t.slug}
            type="button"
            aria-pressed={active === t.slug}
            className={`gallery-tab ${active === t.slug ? "is-active" : ""}`}
            onClick={() => setActive(t.slug)}
          >
            {active === t.slug && <motion.span layoutId="gallery-pill" className="gallery-tab-pill" transition={softSpring} />}
            <span className="gallery-tab-label">{t.title}</span>
            <span className="gallery-tab-count">{t.count}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="site-grid">
        <AnimatePresence mode="popLayout">
          {shown.map((s, i) => (
            <motion.div
              key={s.slug}
              layout
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1, transition: { ...softSpring, delay: Math.min(i, 8) * 0.04 } }}
              exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.18 } }}
            >
              <WebsiteCard site={s} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
