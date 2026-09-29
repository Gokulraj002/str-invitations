import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { EmptyState } from "@/components/ui/EmptyState";
import { WebsiteCard } from "@/components/ui/WebsiteCard";
import { FinalCTA } from "@/components/home/FinalCTA";
import { websites } from "@/data/websites";
import { occasions } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return occasions.map((o) => ({ occasion: o.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ occasion: string }> }) {
  const { occasion } = await params;
  const o = occasions.find((x) => x.slug === occasion);
  if (!o) return {};
  return { title: `${o.title} Invitation Websites`, description: `${o.title} invitation website demos by STR Invitations.` };
}

export default async function OccasionWebsitePage({ params }: { params: Promise<{ occasion: string }> }) {
  const { occasion } = await params;
  const o = occasions.find((x) => x.slug === occasion);
  if (!o) notFound();

  const list = websites.filter((s) => s.occasion === o.slug);

  return (
    <>
      <PageHero
        eyebrow="Invitation Websites"
        title={`${o.title} Invitation Websites`}
        accentWord={o.title}
        subtitle={`Elegant, mobile-first ${o.title.toLowerCase()} invitation websites — tap any design to preview it live.`}
      />
      <section className="container-x py-16">
        {list.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((s) => <WebsiteCard key={s.id} site={s} />)}
          </div>
        )}
      </section>
      <FinalCTA />
    </>
  );
}
