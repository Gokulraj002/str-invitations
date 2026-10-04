import Link from "next/link";
import { Compass } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { generalEnquiryMessage } from "@/lib/whatsapp";

export const metadata = { title: "Page not found" };

const links = [
  { href: "/invitation-videos", label: "Invitation Videos" },
  { href: "/invitation-websites", label: "Invitation Websites" },
  { href: "/person-return-videos", label: "RIP Tribute Videos" },
  { href: "/pricing", label: "Pricing" },
];

export default function NotFound() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="soft-card empty-state not-found">
        <span className="icon-chip"><Compass size={24} strokeWidth={1.6} aria-hidden /></span>
        <p className="eyebrow">Error 404</p>
        <h1>This page could not be found</h1>
        <p>The link may be old or mistyped. Here are some places to continue:</p>
        <nav className="not-found-links" aria-label="Helpful links">
          {links.map((l) => <Link key={l.href} href={l.href} className="btn-outline">{l.label}</Link>)}
        </nav>
        <WhatsAppButton size="lg" message={generalEnquiryMessage()}>Ask us on WhatsApp</WhatsAppButton>
      </div>
    </section>
  );
}
