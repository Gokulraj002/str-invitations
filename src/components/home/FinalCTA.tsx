import Link from "next/link";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { generalEnquiryMessage } from "@/lib/whatsapp";

export function FinalCTA() {
  return (
    <section className="container-x pb-20 md:pb-28">
      <div className="final-cta-panel relative rounded-3xl text-ivory p-10 md:p-16 text-center overflow-hidden gold-border">
        <div className="absolute inset-6 border border-gold/30 rounded-2xl pointer-events-none" />
        <div className="text-gold text-2xl mb-4 tracking-[0.5em]">✦ ✦ ✦</div>
        <h2 className="font-display text-4xl md:text-5xl leading-tight">
          Found a design you love?
        </h2>
        <p className="mt-4 text-ivory/70 max-w-xl mx-auto">
          Let&apos;s craft your perfect invitation. Message us on WhatsApp — we usually reply within minutes.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
          <WhatsAppButton size="lg" variant="green" message={generalEnquiryMessage()}>
            Start on WhatsApp
          </WhatsAppButton>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-full border border-gold/40 text-gold px-8 py-3.5 hover:bg-gold hover:text-obsidian transition-colors"
          >
            See Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
