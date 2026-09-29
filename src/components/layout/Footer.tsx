import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { occasions, site } from "@/data/site";
import { designs } from "@/data/designs";
import { generalEnquiryMessage, whatsappLink } from "@/lib/whatsapp";

// Only celebrations we actually have content for.
const activeOccasions = occasions.filter((o) =>
  designs.some((d) => d.occasion === o.slug)
);

const companyLinks = [["About Us", "/about"], ["How It Works", "/how-it-works"], ["Pricing", "/pricing"], ["FAQs", "/faq"], ["Contact", "/contact"]] as const;

export function Footer() {
  return <footer id="site-footer" className="site-footer">
    <div className="footer-ornament" aria-hidden><span />✦<span />✦<span />✦<span /></div>
    <div className="footer-grid">
      <div className="footer-brand">
        <Link href="/" aria-label="STR Invitations home"><Logo size={68} /></Link>
        <p>Beautifully crafted digital invitations that bring Indian traditions and modern storytelling together.</p>
        <a className="footer-whatsapp" href={whatsappLink(generalEnquiryMessage())} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={20} /> Chat on WhatsApp</a>
      </div>
      <div className="footer-column"><h2>Our Services</h2><Link href="/invitation-videos">Invitation Videos</Link><Link href="/invitation-websites">Invitation Websites</Link><Link href="/person-return-videos">RIP Tribute Videos</Link></div>
      <div className="footer-column"><h2>Celebrations</h2>{activeOccasions.map(occasion => <Link key={occasion.slug} href={`/invitation-videos/${occasion.slug}`}>{occasion.title}</Link>)}</div>
      <div className="footer-column footer-contact"><h2>Let&apos;s Create Together</h2><a href={`tel:${site.phoneDisplay.replaceAll(" ", "")}`}><span>Call</span>{site.phoneDisplay}</a><a href={`mailto:${site.email}`}><span>Email</span>{site.email}</a><p><span>Serving</span>Families across India</p></div>
    </div>
    <div className="footer-bottom"><p>© {new Date().getFullYear()} STR Invitations. All rights reserved.</p><p className="footer-motto">Moments That Matter, Beautifully Yours</p><nav aria-label="Footer navigation">{companyLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav></div>
  </footer>;
}

