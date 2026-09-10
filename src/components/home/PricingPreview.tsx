import Link from "next/link";
import { mainCategories } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/ui/Reveal";
import { generalEnquiryMessage } from "@/lib/whatsapp";

const startingPrices: Record<string, number> = {
  "invitation-videos": 999,
  "invitation-websites": 1499,
  "person-return-videos": 799,
};

export function PricingPreview() {
  return (
    <section className="pricing-section bg-onyx py-20 md:py-28 border-y border-gold/20">
      <div className="container-x">
        <SectionHeading
          eyebrow="Packages & Pricing"
          title="Transparent starting prices"
          subtitle="Every package is fully customised — final quotation confirmed on WhatsApp based on your specific requirements."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {mainCategories.map((c, i) => (
            <Reveal key={c.slug} delay={i * 120} as="article" className="h-full">
            <div className="relative rounded-2xl gold-border p-8 flex flex-col h-full">
              <div className="text-4xl mb-4">{c.icon}</div>
              <h3 className="font-display text-2xl text-ivory mb-2">{c.title}</h3>
              <p className="text-sm text-ivory/60 mb-6">{c.short}</p>
              <div className="mb-6">
                <div className="text-[10px] uppercase tracking-widest text-ivory/50">Starting from</div>
                <div className="font-display text-4xl gold-text">
                  ₹{startingPrices[c.slug].toLocaleString("en-IN")}
                </div>
              </div>
              <ul className="space-y-2 text-sm text-ivory/70 mb-8 flex-1">
                <li>✓ Full customisation</li>
                <li>✓ HD delivery</li>
                <li>✓ Fast turnaround</li>
                <li>✓ WhatsApp support</li>
              </ul>
              <div className="flex gap-2">
                <Link
                  href={`/${c.slug}`}
                  className="flex-1 text-center rounded-full border border-gold/50 text-gold px-4 py-2.5 text-sm hover:bg-gold hover:text-obsidian transition-colors"
                >
                  Browse
                </Link>
                <WhatsAppButton
                  size="md"
                  variant="green"
                  message={`Hi STR Invitations, I would like a quote for ${c.title}.`}
                >
                  Quote
                </WhatsAppButton>
              </div>
            </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <WhatsAppButton size="lg" variant="gold" message={generalEnquiryMessage()}>
            Get a Custom Quote
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
