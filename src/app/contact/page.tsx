import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { generalEnquiryMessage } from "@/lib/whatsapp";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact STR Invitations",
  description:
    "Talk to STR Invitations — WhatsApp us on +91 63626 17878, call, email or visit our YouTube channel.",
};

const channels = [
  {
    tone: "green",
    icon: "◉",
    label: "WhatsApp",
    value: site.phoneDisplay,
    subtitle: "Fastest — usually replies within minutes",
    href: `https://wa.me/${site.whatsappNumber}`,
    action: "Chat now",
    external: true,
  },
  {
    tone: "rose",
    icon: "☎",
    label: "Phone Call",
    value: site.phoneDisplay,
    subtitle: "10 AM – 8 PM · every day",
    href: `tel:${site.phoneDisplay.replaceAll(" ", "")}`,
    action: "Call now",
    external: false,
  },
  {
    tone: "mint",
    icon: "✉",
    label: "Email",
    value: site.email,
    subtitle: "For briefs, quotes and larger orders",
    href: `mailto:${site.email}`,
    action: "Send email",
    external: false,
  },
  {
    tone: "blue",
    icon: "▶",
    label: "YouTube",
    value: "@strinvitations",
    subtitle: "Watch our full portfolio",
    href: site.youtubeChannel,
    action: "Visit channel",
    external: true,
  },
] as const;

const enquiryTypes = [
  {
    title: "Wedding Video Invitation",
    href: "/invitation-videos/wedding",
    message: "Hi STR Invitations, I'd like a quote for a wedding invitation video. My event details:",
  },
  {
    title: "Invitation Website",
    href: "/invitation-websites",
    message: "Hi STR Invitations, I'd like to enquire about a digital invitation website. My event details:",
  },
  {
    title: "RIP Tribute Video",
    href: "/person-return-videos",
    message: "Hi STR Invitations, I'd like to enquire about a RIP tribute video. Kindly share details.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's design something beautiful together"
        accentWord="beautiful"
        subtitle="WhatsApp is our fastest channel — most families receive design recommendations and a custom quote within an hour."
      />

      {/* Channels */}
      <section className="contact-channels">
        <div className="ornament-title"><span /> <b>How to reach us</b> <span /></div>
        <div className="contact-channels-grid">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noopener noreferrer" : undefined}
              className={`contact-channel-card ${c.tone}`}
            >
              <span className="contact-channel-icon">{c.icon}</span>
              <div className="contact-channel-label">{c.label}</div>
              <div className="contact-channel-value">{c.value}</div>
              <p className="contact-channel-sub">{c.subtitle}</p>
              <span className="contact-channel-action">{c.action} →</span>
            </a>
          ))}
        </div>
      </section>

      {/* Quick enquiry by type */}
      <section className="contact-enquiry">
        <div className="ornament-title"><span /> <b>Start a specific enquiry</b> <span /></div>
        <p className="contact-enquiry-sub">Pick what you&apos;re looking for — we&apos;ll open WhatsApp with a starting message ready.</p>
        <div className="contact-enquiry-grid">
          {enquiryTypes.map((e) => (
            <div key={e.title} className="contact-enquiry-card">
              <h3>{e.title}</h3>
              <div className="contact-enquiry-actions">
                <WhatsAppButton size="md" variant="green" message={e.message}>
                  Enquire on WhatsApp
                </WhatsAppButton>
                <Link href={e.href} className="contact-enquiry-link">Browse designs →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="contact-closing">
        <p className="script-note">Talk to us<br />anytime</p>
        <h2>We&apos;d love to hear about your celebration.</h2>
        <WhatsAppButton size="lg" variant="green" message={generalEnquiryMessage()}>
          Message us on WhatsApp
        </WhatsAppButton>
      </section>
    </>
  );
}
