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
    <section className="process-section container-x py-20 md:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="How It Works"
          title="Simple. Beautiful. Delivered."
          subtitle="A transparent 5-step process — from picking a design to sharing your final invitation on WhatsApp."
        />
      </Reveal>
      <ol className="steps">
        {steps.map((s, i) => (
          <Reveal as="li" key={s.n} delay={i * 90} className="soft-card step-card">
            <span className="step-num">STEP {s.n}</span>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
