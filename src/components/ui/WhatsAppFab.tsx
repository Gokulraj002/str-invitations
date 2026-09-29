import { whatsappLink, generalEnquiryMessage } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink(generalEnquiryMessage())}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="wa-fab"
    >
      <WhatsAppIcon size={32} />
      <span className="wa-fab-label">Chat with us</span>
    </a>
  );
}
