import { PageHero } from "@/components/ui/PageHero";
import { EmptyState } from "@/components/ui/EmptyState";
import { VideoTypeSection } from "@/components/ui/VideoTypeSection";
import { getByType } from "@/data/designs";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata = {
  title: "RIP Tribute Videos",
  description:
    "Memorial tribute and AI person-return videos — a respectful way to remember and celebrate the life of a loved one.",
};

export default function RipTributeVideosPage() {
  const designs = getByType("rip");
  return (
    <>
      <PageHero
        variant="tribute"
        eyebrow="RIP Tribute Videos"
        title="Heartfelt tributes to remember them by"
        accentWord="Heartfelt"
        subtitle="A respectful, beautifully crafted memorial video with photos, memories and prayer — including AI person-return videos that bring a loved one back on screen."
      />
      {designs.length === 0 ? (
        <section className="container-x py-16">
          <EmptyState
            title="Tribute samples coming soon"
            subtitle="Please message us on WhatsApp — we can share private samples and start crafting your tribute right away."
          />
        </section>
      ) : (
        <VideoTypeSection type="rip" designs={designs} />
      )}
      <FinalCTA />
    </>
  );
}
