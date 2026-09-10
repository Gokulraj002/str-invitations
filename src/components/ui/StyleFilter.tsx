"use client";

import { useState, useMemo } from "react";
import type { Design, DesignStyle } from "@/data/designs";
import { designStyles } from "@/data/designs";
import { DesignCard } from "./DesignCard";

type Props = { designs: Design[] };

export function StyleFilter({ designs }: Props) {
  const [active, setActive] = useState<DesignStyle | "all">("all");

  // Only show chips for styles that actually have designs
  const availableStyles = useMemo(() => {
    const present = new Set(designs.map((d) => d.style).filter(Boolean));
    return designStyles.filter((s) => present.has(s.slug));
  }, [designs]);

  const filtered = useMemo(
    () => (active === "all" ? designs : designs.filter((d) => d.style === active)),
    [designs, active]
  );

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: designs.length };
    designs.forEach((d) => {
      if (d.style) map[d.style] = (map[d.style] ?? 0) + 1;
    });
    return map;
  }, [designs]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        <Chip
          active={active === "all"}
          onClick={() => setActive("all")}
          label="All Styles"
          count={counts.all}
        />
        {availableStyles.map((s) => (
          <Chip
            key={s.slug}
            active={active === s.slug}
            onClick={() => setActive(s.slug)}
            label={s.title}
            count={counts[s.slug] ?? 0}
          />
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-ivory/60">
          No designs match this style. Try a different filter.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((d) => (
            <DesignCard key={d.id} design={d} />
          ))}
        </div>
      )}
    </div>
  );
}

function Chip({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm border transition-all ${
        active
          ? "bg-gold text-obsidian border-gold shadow-gold"
          : "border-white/15 text-ivory/70 hover:border-gold/60 hover:text-ivory"
      }`}
    >
      {label}
      <span
        className={`text-[10px] font-mono rounded-full px-1.5 py-0.5 ${
          active ? "bg-obsidian/20 text-obsidian" : "bg-white/5 text-ivory/50"
        }`}
      >
        {count}
      </span>
    </button>
  );
}
