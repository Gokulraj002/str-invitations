"use client";

import { useState } from "react";
import { VideoThumb } from "./VideoThumb";

type Props = {
  videoId: string;
  title?: string;
  className?: string;
};

// Lite YouTube embed — HD thumbnail poster + branded play button until click.
// Saves ~500KB JS on first load and hides YT chrome once playing.
export function YouTubeEmbed({ videoId, title = "Video", className = "" }: Props) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`relative w-full aspect-video overflow-hidden rounded-xl bg-black shadow-elegant ${className}`}
    >
      {active ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&color=white`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`Play ${title}`}
          className="group absolute inset-0 w-full h-full"
        >
          <VideoThumb videoId={videoId} alt={title} priority sizes="(min-width: 1024px) 50vw, 100vw" />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
          <span className="absolute inset-0 grid place-items-center">
            <span className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gold text-obsidian grid place-items-center shadow-gold scale-90 group-hover:scale-100 transition-transform duration-500">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
