import { whatsappLink, generalEnquiryMessage } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { FeaturedDesigns } from "@/components/home/FeaturedDesigns";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PricingPreview } from "@/components/home/PricingPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";

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
          <a className="wa-main" href={whatsappLink(generalEnquiryMessage())} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={22} /> Chat on WhatsApp <b>›</b></a>
          <span className="script-note">Let&apos;s Create<br />Your Special Invitation</span>
        </div>
      </div>
    </section>
    <CategoryShowcase />
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
