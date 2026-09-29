"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsappLink, generalEnquiryMessage } from "@/lib/whatsapp";

const videoMenu = [
  { href: "/invitation-videos#long", label: "Wedding Invitation Videos" },
  { href: "/invitation-videos#3d-short", label: "3D Short Videos" },
];
const websiteMenu = [{ href: "/invitation-websites", label: "Website Demos" }];

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
      <NavDropdown label="Invitation Videos" href="/invitation-videos" items={videoMenu} pathname={pathname} />
      <NavDropdown label="Invitation Websites" href="/invitation-websites" items={websiteMenu} pathname={pathname} />
      {links.slice(1).map(({ href, label }) => <Link className={active(href) ? "active" : ""} key={href} href={href}>{label}</Link>)}
      <a className="mobile-menu-cta" href={whatsappLink(generalEnquiryMessage())} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Chat with our team</a>
    </nav>
    {open && <button className="nav-scrim" aria-label="Close menu" onClick={() => setOpen(false)} />}
    <a className="nav-cta" href={whatsappLink(generalEnquiryMessage())} target="_blank" rel="noopener noreferrer" aria-label="Contact STR Invitations on WhatsApp"><WhatsAppIcon /><span>Get in Touch</span></a>
    <button className="menu-button" onClick={() => setOpen(v => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}><span /> <span /> <span /></button>
  </div></header>;
}

function NavDropdown({ label, href, items, pathname }: { label: string; href: string; items: { href: string; label: string }[]; pathname: string }) {
  const [expanded, setExpanded] = useState(pathname.startsWith(href));
  useEffect(() => setExpanded(pathname.startsWith(href)), [pathname, href]);
  return <div className={`nav-dropdown ${pathname.startsWith(href) ? "active" : ""} ${expanded ? "expanded" : ""}`}>
    <div className="nav-dropdown-trigger"><Link href={href}>{label}</Link><button type="button" aria-label={`Toggle ${label} categories`} aria-expanded={expanded} onClick={() => setExpanded(value => !value)}><Chevron /></button></div>
    <div className="dropdown-panel">
      <Link className="dropdown-all" href={href}>View all {label.toLowerCase()} <span>→</span></Link>
      <div className="dropdown-grid">{items.map(i => <Link key={i.href} href={i.href}><span className="dropdown-dot" />{i.label}</Link>)}</div>
    </div>
  </div>;
}

function Chevron() { return <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden><path d="m2.5 4.5 3.5 3 3.5-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>; }
