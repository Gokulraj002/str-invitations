import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { site } from "@/data/site";
import { designs } from "@/data/designs";
import { generalEnquiryMessage } from "@/lib/whatsapp";

export const metadata = {
  title: "About STR Invitations",
  description:
    "STR Invitations — a boutique digital invitation studio for wedding video invitations, invitation websites and heartfelt RIP tribute videos.",
};

const values = [
  {
    icon: "❋",
    title: "Craft",
    text: "Every frame, every animation, every word — considered and hand-refined for your family.",
  },
  {
    icon: "❦",
    title: "Culture",
    text: "Deeply rooted in Indian traditions while embracing modern cinematic storytelling.",
  },
  {
    icon: "❥",
    title: "Care",
    text: "Direct WhatsApp support — you always know exactly who is working on your invitation.",
  },
];

const stats = [
  { label: "Wedding designs", value: `${designs.filter((d) => d.category === "invitation-videos").length}+` },
  { label: "Happy families", value: "500+" },
  { label: "Delivery", value: "48–72h" },
  { label: "Star rating", value: "4.9★" },
];

const services = [
  {
    href: "/invitation-videos",
    title: "Wedding Video Invitations",
    text: "Traditional, cinematic and modern wedding invitation videos — delivered as HD MP4, ready to share on WhatsApp.",
  },
  {
    href: "/invitation-websites",
    title: "Invitation Websites",
    text: "Mobile-first invitation websites with RSVP, live countdown, map and gallery — coming soon.",
  },
  {
    href: "/person-return-videos",
    title: "RIP Tribute Videos",
    text: "Heartfelt memorial tributes — a respectful way to remember and celebrate the life of a loved one.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Crafting invitations that matter"
        accentWord="matter"
        subtitle="STR Invitations is a boutique digital invitation studio for families who care about how they invite the people they love."
      />

      {/* Story + Logo */}
      <section className="about-story">
        <div className="about-story-inner">
          <div className="about-logo-frame">
            <Image src="/logo-str.PNG" alt="STR Invitations logo" width={260} height={260} className="about-logo" unoptimized priority />
          </div>
          <div className="about-copy">
            <p className="eyebrow">A boutique studio</p>
            <h2>Every family. Every celebration. <em>Every detail.</em></h2>
            <p>
              We started STR Invitations with a simple belief: the way you invite people sets the
              tone for the entire celebration. From cinematic wedding invitation videos to heartfelt
              RIP tribute videos, every design is crafted with intention.
            </p>
            <p>
              Our team specialises in <strong>cinematic Telugu wedding invitations</strong>, luxury
              save-the-date animations, AI-emotional wedding videos, and dignified memorial
              tributes — delivered in HD, ready for WhatsApp and Instagram.
            </p>
            <div className="about-actions">
              <Link href="/invitation-videos/wedding" className="about-btn-primary">Explore Wedding Designs →</Link>
              <WhatsAppButton size="md" variant="green" message={generalEnquiryMessage()}>
                Chat on WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="about-stats">
        {stats.map((s) => (
          <div key={s.label}>
            <span className="about-stat-value">{s.value}</span>
            <span className="about-stat-label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* Services grid */}
      <section className="about-services">
        <div className="ornament-title"><span /> <b>What we create</b> <span /></div>
        <div className="about-services-grid">
          {services.map((s) => (
            <Link key={s.href} href={s.href} className="about-service-card">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="about-service-link">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="ornament-title"><span /> <b>What we stand for</b> <span /></div>
        <div className="about-values-grid">
          {values.map((v) => (
            <div key={v.title} className="about-value-card">
              <span className="about-value-icon">{v.icon}</span>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="about-closing">
        <p className="script-note">Let&apos;s Create<br />Something Beautiful</p>
        <h2>Every moment deserves an invitation as beautiful as the memory.</h2>
        <div className="about-closing-actions">
          <WhatsAppButton size="lg" variant="green" message={generalEnquiryMessage()}>
            Start your invitation on WhatsApp
          </WhatsAppButton>
          <a href={`tel:${site.phoneDisplay.replaceAll(" ", "")}`} className="about-btn-outline">
            Call {site.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
