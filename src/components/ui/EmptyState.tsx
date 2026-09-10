import { WhatsAppButton } from "./WhatsAppButton";
import { generalEnquiryMessage } from "@/lib/whatsapp";

export function EmptyState({ title = "More designs coming soon", subtitle }: { title?: string; subtitle?: string }) {
  return (
    <div className="rounded-2xl gold-border p-10 md:p-14 text-center">
      <div className="text-5xl text-gold mb-4">✦</div>
      <h3 className="font-display text-2xl md:text-3xl text-ivory mb-3">{title}</h3>
      <p className="text-ivory/60 max-w-md mx-auto mb-6">
        {subtitle ??
          "We are constantly adding new designs to this collection. Message us on WhatsApp — we may have unlisted samples that match what you are looking for."}
      </p>
      <WhatsAppButton size="lg" variant="gold" message={generalEnquiryMessage()}>
        Ask us on WhatsApp
      </WhatsAppButton>
    </div>
  );
}
