"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { occasions } from "@/data/site";
import { whatsappLink, generalEnquiryMessage } from "@/lib/whatsapp";

const links = [
  { href: "/", label: "Home" },
  { href: "/person-return-videos", label: "RIP Tribute Videos" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);
  const active = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return <header className="reference-nav"><div className="reference-nav-inner">
    <Link href="/" aria-label="STR Invitations home"><Logo size={72} /></Link>
    <nav className={open ? "nav-links open" : "nav-links"} aria-label="Main navigation">
      <div className="mobile-menu-heading"><span>Explore STR Invitations</span><small>Beautifully made for every celebration</small></div>
      <Link className={active("/") ? "active" : ""} href="/">Home</Link>
      <NavDropdown label="Invitation Videos" href="/invitation-videos" pathname={pathname} />
      <NavDropdown label="Invitation Websites" href="/invitation-websites" pathname={pathname} />
      {links.slice(1).map(({ href, label }) => <Link className={active(href) ? "active" : ""} key={href} href={href}>{label}</Link>)}
      <a className="mobile-menu-cta" href={whatsappLink(generalEnquiryMessage())} target="_blank" rel="noopener noreferrer"><WaIcon /> Chat with our team</a>
    </nav>
    {open && <button className="nav-scrim" aria-label="Close menu" onClick={() => setOpen(false)} />}
    <a className="nav-cta" href={whatsappLink(generalEnquiryMessage())} target="_blank" rel="noopener noreferrer" aria-label="Contact STR Invitations on WhatsApp"><WaIcon /><span>Get in Touch</span></a>
    <button className="menu-button" onClick={() => setOpen(v => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}><span /> <span /> <span /></button>
  </div></header>;
}

function NavDropdown({ label, href, pathname }: { label: string; href: string; pathname: string }) {
  const [expanded, setExpanded] = useState(pathname.startsWith(href));
  useEffect(() => setExpanded(pathname.startsWith(href)), [pathname, href]);
  return <div className={`nav-dropdown ${pathname.startsWith(href) ? "active" : ""} ${expanded ? "expanded" : ""}`}>
    <div className="nav-dropdown-trigger"><Link href={href}>{label}</Link><button type="button" aria-label={`Toggle ${label} categories`} aria-expanded={expanded} onClick={() => setExpanded(value => !value)}><Chevron /></button></div>
    <div className="dropdown-panel">
      <Link className="dropdown-all" href={href}>View all {label.toLowerCase()} <span>→</span></Link>
      <div className="dropdown-grid">{occasions.map(o => <Link key={o.slug} href={`${href}/${o.slug}`}><span className="dropdown-dot" />{o.title}</Link>)}</div>
    </div>
  </div>;
}

function Chevron() { return <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden><path d="m2.5 4.5 3.5 3 3.5-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>; }
function WaIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M20.5 3.5A11 11 0 0 0 3.7 17.3L2 22l4.9-1.6A11 11 0 1 0 20.5 3.5Zm-8.5 18a9 9 0 0 1-4.6-1.3l-.3-.2-2.9 1 .9-2.9-.2-.3A9 9 0 1 1 12 21.5Z" /></svg>; }
