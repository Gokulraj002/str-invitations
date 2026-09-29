import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { PriceTag } from "@/components/ui/PriceTag";
import { VideoTypeSection } from "@/components/ui/VideoTypeSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { getByType } from "@/data/designs";
import { videoTypes, type VideoType } from "@/data/pricing";

export const metadata = {
  title: "Invitation Videos",
  description: "Wedding invitation videos and 3D save-the-date shorts by STR Invitations.",
};

const TYPES: VideoType[] = ["long", "3d-short"];

export default function InvitationVideosPage() {
  return (
    <>
      <PageHero
        eyebrow="Invitation Videos"
        title="Cinematic invitation videos"
        accentWord="Cinematic"
        subtitle="Choose a video type below — every design is fully customised with your names, dates and venue, delivered in HD for WhatsApp."
      />

      <nav className="type-jump container-x" aria-label="Video types">
        {TYPES.map((type) => (
          <Link key={type} href={`#${type}`} className="type-jump-card">
            <span className="type-jump-title">{videoTypes[type].title}</span>
            <span className="type-jump-sub">{getByType(type).length} designs</span>
            <PriceTag price={videoTypes[type].price} size="sm" />
          </Link>
        ))}
      </nav>

      {TYPES.map((type) => (
        <VideoTypeSection key={type} type={type} designs={getByType(type)} />
      ))}

      <FinalCTA />
    </>
  );
}
