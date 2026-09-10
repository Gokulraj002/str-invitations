import Link from "next/link";
import { whatsappLink, generalEnquiryMessage } from "@/lib/whatsapp";
import { designs, designStyles } from "@/data/designs";
import { FeaturedDesigns } from "@/components/home/FeaturedDesigns";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PricingPreview } from "@/components/home/PricingPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";

// Show the 5 wedding sub-styles that actually exist as tiles inside the
// Invitation Videos card, each linking to the wedding page.
const videoStyleTiles = designStyles
  .map((s) => {
    const first = designs.find((d) => d.category === "invitation-videos" && d.style === s.slug);
    return first ? { title: s.title, youtubeId: first.youtubeId } : null;
  })
  .filter((x): x is { title: string; youtubeId: string } => Boolean(x))
  .slice(0, 5);

const benefits = [["◇", "High Quality & Creative Designs"], ["⚙", "Quick Delivery"], ["⟳", "Easy Customization"], ["₹", "Affordable Pricing"], ["♧", "Dedicated Support"], ["♡", "Make Every Moment Special"]];

export default function HomePage() {
  return <div className="reference-home">
    <section className="reference-hero">
      <div className="hero-copy">
        <p className="hero-kicker">TRADITION&nbsp;&nbsp; | &nbsp;&nbsp;TECHNOLOGY&nbsp;&nbsp; | &nbsp;&nbsp;TIMELESS MEMORIES</p>
        <h1>Beautiful Invitations<br />for Life&apos;s Special Moments</h1>
        <p className="hero-subtitle">Video Invitations&nbsp;&nbsp; | &nbsp;&nbsp;Invitation Websites&nbsp;&nbsp; | &nbsp;&nbsp;RIP Tribute Videos</p>
        <div className="hero-services">
          <div><span className="line-icon">▣</span><strong>Premium<br />Video Invitations</strong></div>
          <div><span className="line-icon">▤</span><strong>Modern<br />Invitation Websites</strong></div>
          <div><span className="line-icon">♡</span><strong>Heartfelt<br />RIP Tribute Videos</strong></div>
        </div>
        <div className="hero-actions">
          <a className="wa-main" href={whatsappLink(generalEnquiryMessage())} target="_blank" rel="noopener noreferrer"><span>◉</span> Chat on WhatsApp <b>›</b></a>
          <span className="script-note">Let&apos;s Create<br />Your Special Invitation</span>
        </div>
      </div>
    </section>
    <section className="category-section">
      <div className="ornament-title"><span /> <b>Our Categories</b> <span /></div>
      <div className="category-grid">
        <CategoryCard tone="rose" icon="▣" title="Invitation Videos" description="Beautifully crafted video invitations for every special occasion" href="/invitation-videos" variant="tiles" />
        <CategoryCard tone="mint" icon="▤" title="Invitation Websites" description="Elegant and personalized invitation websites for your special occasions" href="/invitation-websites" variant="soon" />
        <CategoryCard tone="blue" icon="❧" title="RIP Tribute Videos" description="A respectful way to remember and celebrate their life" href="/person-return-videos" variant="tribute" />
      </div>
    </section>
    <section className="benefits-strip">{benefits.map(([icon, label]) => <div key={label}><b>{icon}</b><span>{label}</span></div>)}</section>
    <div className="home-story">
      <FeaturedDesigns />
      <WhyChooseUs />
      <HowItWorks />
      <PricingPreview />
      <Testimonials />
      <FinalCTA />
    </div>
  </div>;
}

type CardVariant = "tiles" | "soon" | "tribute";
function CategoryCard({ tone, icon, title, description, href, variant }: { tone: string; icon: string; title: string; description: string; href: string; variant: CardVariant }) {
  return <article className={`category-card ${tone}`}>
    <div className="category-head"><span className="category-icon">{icon}</span><div><h2>{title}</h2><p>{description}</p></div></div>
    {variant === "tiles" && <div className="occasion-row">
      {videoStyleTiles.map(({ title: styleTitle, youtubeId }) => <Link href="/invitation-videos/wedding" key={styleTitle} className="occasion-mini"><img src={`https://i.ytimg.com/vi/${youtubeId}/mqdefault.jpg`} alt="" /><span>{styleTitle}</span></Link>)}
      <Link href={href} className="view-all"><b>›</b><span>View All</span></Link>
    </div>}
    {variant === "soon" && <div className="tribute-row"><img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=80" alt="Elegant invitation website preview" /><Link href={href} className="view-all"><b>›</b><span>Coming Soon · Enquire</span></Link></div>}
    {variant === "tribute" && <div className="tribute-row"><img src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=700&q=80" alt="Memorial candle at sunset" /><Link href={href} className="view-all"><b>›</b><span>View Details</span></Link></div>}
  </article>;
}
