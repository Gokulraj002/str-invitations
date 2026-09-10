import { PageHero } from "@/components/ui/PageHero";
import { FinalCTA } from "@/components/home/FinalCTA";

const faqs = [
  {
    q: "How much do the invitations cost?",
    a: "Starting prices are shown on each design card and on the Pricing page. Final quotation depends on the level of customisation and is confirmed on WhatsApp.",
  },
  {
    q: "Can I fully customise the design?",
    a: "Yes. Names, dates, venue, family members, colours and specific cultural elements can all be customised. Share your requirements on WhatsApp and we'll walk you through the options.",
  },
  {
    q: "How fast is delivery?",
    a: "Most invitation videos are delivered within 2–3 working days after your details and payment are received. Invitation websites take 3–5 days depending on scope.",
  },
  {
    q: "How many revisions do I get?",
    a: "Every package includes 2 free revisions. Additional revisions can be requested — we'll never surprise you with hidden charges.",
  },
  {
    q: "What format do I receive?",
    a: "Invitation videos are delivered as HD 1080p MP4 files — perfect for WhatsApp, Instagram Stories and family groups. Invitation websites come as a shareable custom URL.",
  },
  {
    q: "How do I pay?",
    a: "We accept UPI, bank transfer and all major cards. Payment details are shared on WhatsApp.",
  },
  {
    q: "Do you handle print invitations?",
    a: "We specialise in digital invitations. For print, we can recommend trusted partners.",
  },
];

export const metadata = { title: "FAQ", description: "Answers to common questions about STR Invitations." };

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="Frequently Asked"
        title="Everything you need to know"
        accentWord="Everything"
        subtitle="Can't find an answer? Message us on WhatsApp — we usually reply within minutes."
      />

      <section className="container-x py-16 max-w-3xl">
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group rounded-2xl gold-border p-6 open:shadow-elegant transition-all"
            >
              <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                <h3 className="font-display text-lg md:text-xl text-ivory pr-4">{f.q}</h3>
                <span className="text-gold text-2xl leading-none flex-shrink-0 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 text-ivory/70 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
