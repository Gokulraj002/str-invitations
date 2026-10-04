import { Sparkles } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { generalEnquiryMessage } from "@/lib/whatsapp";

export function EmptyState({ title = "More designs coming soon", subtitle }: { title?: string; subtitle?: string }) {
  return (
    <div className="soft-card empty-state">
      <span className="icon-chip"><Sparkles size={24} strokeWidth={1.6} aria-hidden /></span>
      <h3>{title}</h3>
      <p>
        {subtitle ??
          "We are constantly adding new designs to this collection. Message us on WhatsApp — we may have unlisted samples that match what you are looking for."}
      </p>
      <WhatsAppButton size="lg" message={generalEnquiryMessage()}>
        Ask us on WhatsApp
      </WhatsAppButton>
    </div>
  );
}
