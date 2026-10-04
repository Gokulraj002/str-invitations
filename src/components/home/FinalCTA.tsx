import Link from "next/link";
import { Sparkles } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { GoldParticles } from "@/components/ui/GoldParticles";
import { Reveal } from "@/components/ui/Reveal";
import { generalEnquiryMessage } from "@/lib/whatsapp";

export function FinalCTA() {
  return (
    <section className="container-x pb-20 md:pb-28">
      <Reveal className="final-cta-panel">
        <GoldParticles count={16} seed={31} />
        <div className="final-cta-frame" aria-hidden />
        <Sparkles className="final-cta-icon" size={30} strokeWidth={1.4} aria-hidden />
        <h2>Found a design you love?</h2>
        <p>Let&apos;s craft your perfect invitation. Message us on WhatsApp — we usually reply within minutes.</p>
        <div className="final-cta-actions">
          <WhatsAppButton size="lg" message={generalEnquiryMessage()}>
            Start on WhatsApp
          </WhatsAppButton>
          <Link href="/pricing" className="final-cta-secondary">See pricing</Link>
        </div>
      </Reveal>
    </section>
  );
}
