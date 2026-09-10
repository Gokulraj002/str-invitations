import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { n: "01", t: "Choose a design", d: "Browse our catalog and pick a design you love." },
  { n: "02", t: "Share your details", d: "Send us your event details via WhatsApp." },
  { n: "03", t: "We customise", d: "Our team designs your personalised invitation." },
  { n: "04", t: "Final approval", d: "You review and approve every element." },
  { n: "05", t: "Delivered", d: "Receive your HD invitation ready to share." },
];

export function HowItWorks() {
  return (
    <section className="process-section container-x py-20 md:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="How It Works"
          title="Simple. Beautiful. Delivered."
          subtitle="A transparent 5-step process — from picking a design to sharing your final invitation on WhatsApp."
        />
      </Reveal>
      <div className="grid md:grid-cols-5 gap-4">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 100}>
            <div className="relative p-6 rounded-2xl gold-border h-full">
              <div className="font-display text-5xl gold-text mb-3 leading-none">{s.n}</div>
              <h4 className="font-display text-lg text-ivory mb-1.5">{s.t}</h4>
              <p className="text-sm text-ivory/60 leading-relaxed">{s.d}</p>
              {i < steps.length - 1 && (
                <span className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gold/30" />
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
