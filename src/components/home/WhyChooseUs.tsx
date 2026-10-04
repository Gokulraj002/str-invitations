import { Gem, PenLine, Zap, MessageCircleHeart } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const features = [
  { icon: Gem, title: "Premium Design", desc: "Elegant, cinema-grade visuals crafted for Indian celebrations by experienced designers." },
  { icon: PenLine, title: "Full Customisation", desc: "Names, venue, dates, family details — every element personalised down to the finest cultural nuance." },
  { icon: Zap, title: "Fast Delivery", desc: "Most designs delivered in 2–3 working days. Rush delivery available on request." },
  { icon: MessageCircleHeart, title: "Direct WhatsApp", desc: "Talk to our team directly — no forms, no wait. Replies typically within minutes." },
];

export function WhyChooseUs() {
  return (
    <section className="section-tint py-20 md:py-24">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Why STR Invitations"
            title="Details that make your day unforgettable"
            subtitle="Every design decision, every animation frame, every word of copy — considered."
          />
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 90} className="h-full">
              <div className="soft-card feature-card">
                <span className="icon-chip"><Icon size={24} strokeWidth={1.6} aria-hidden /></span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
