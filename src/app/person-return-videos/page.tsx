import { PageHero } from "@/components/ui/PageHero";
import { DesignCard } from "@/components/ui/DesignCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { getByCategory } from "@/data/designs";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata = {
  title: "RIP Tribute Videos",
  description:
    "Cinematic memorial tribute videos — a respectful way to remember and celebrate the life of a loved one.",
};

export default function RipTributeVideosPage() {
  const designs = getByCategory("person-return-videos");
  return (
    <>
      <PageHero
        variant="tribute"
        eyebrow="RIP Tribute Videos"
        title="Heartfelt tributes to remember them by"
        accentWord="Heartfelt"
        subtitle="A respectful, beautifully crafted memorial video with photos, memories and prayer — a keepsake for family and friends."
      />
      <section className="container-x py-16">
        {designs.length === 0 ? (
          <EmptyState
            title="Tribute samples coming soon"
            subtitle="We're preparing a curated collection of memorial tribute samples. In the meantime, please message us on WhatsApp — we can share private samples and start crafting your tribute right away."
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {designs.map((d) => (
              <DesignCard key={d.id} design={d} />
            ))}
          </div>
        )}
      </section>
      <FinalCTA />
    </>
  );
}
