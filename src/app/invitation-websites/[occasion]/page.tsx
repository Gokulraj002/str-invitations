import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { EmptyState } from "@/components/ui/EmptyState";
import { WebsiteCard } from "@/components/ui/WebsiteCard";
import { Reveal } from "@/components/ui/Reveal";
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
        subtitle={`Tap any ${o.title.toLowerCase()} design to try the live website, exactly as your guests will see it.`}
      />
      <section className="container-x py-16">
        {list.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="site-grid">
            {list.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 80}>
                <WebsiteCard site={s} />
              </Reveal>
            ))}
          </div>
        )}
      </section>
      <FinalCTA />
    </>
  );
}
