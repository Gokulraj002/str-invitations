import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const features = [
  {
    title: "Premium Design",
    desc: "Elegant, cinema-grade visuals crafted for Indian celebrations by experienced designers.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l2.4 6.9L21 10l-5.4 4.4L17.4 22 12 18l-5.4 4 1.8-7.6L3 10l6.6-1.1L12 2z" />
      </svg>
    ),
  },
  {
    title: "Full Customisation",
    desc: "Names, venue, dates, family details — every element personalised down to the finest cultural nuance.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21l4-1 12-12-3-3L4 17l-1 4z" />
        <path d="M14 4l3 3" />
      </svg>
    ),
  },
  {
    title: "Fast Delivery",
    desc: "Most designs delivered in 2–3 working days. Rush delivery available on request.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
      </svg>
    ),
  },
  {
    title: "Direct WhatsApp",
    desc: "Talk to our team directly — no forms, no wait. Replies typically within minutes.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 12a9 9 0 1 1-4.5-7.8L21 3l-1.2 4.5A9 9 0 0 1 21 12z" />
      </svg>
    ),
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-onyx py-20 md:py-28 border-y border-gold/10">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Why STR Invitations"
            title="Details that make your day unforgettable"
            subtitle="Every design decision, every animation frame, every word of copy — considered."
          />
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <div className="p-8 rounded-2xl gold-border h-full">
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 grid place-items-center text-gold mb-5">
                  {f.icon}
                </div>
                <h4 className="font-display text-xl text-ivory mb-2">{f.title}</h4>
                <p className="text-sm text-ivory/60 leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
