import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const reviews = [
  {
    name: "Priya & Karthik",
    occasion: "Wedding",
    location: "Hyderabad",
    text: "The team captured every element of our tradition beautifully. Our families across the country loved the invitation — many said it was the most elegant one they had received.",
    initials: "PK",
  },
  {
    name: "Ramesh Family",
    occasion: "House Warming",
    location: "Bangalore",
    text: "Superb work. Very quick delivery and the team was patient with every revision. Highly recommend for anyone looking for a premium digital invitation.",
    initials: "RF",
  },
  {
    name: "Anitha & Rohan",
    occasion: "Engagement",
    location: "Chennai",
    text: "The AI comeback video brought tears to everyone's eyes. Absolutely one of a kind. Worth every rupee — the STR team is exceptional at what they do.",
    initials: "AR",
  },
];

export function Testimonials() {
  return (
    <section className="container-x py-20 md:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Kind Words"
          title="What our customers say"
          subtitle="Real feedback from families we've had the honour of designing invitations for."
        />
      </Reveal>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <Reveal key={r.name} delay={i * 120}>
            <figure className="relative rounded-2xl gold-border p-8 h-full flex flex-col">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, k) => (
                  <svg key={k} width="16" height="16" viewBox="0 0 24 24" fill="#D4AF37">
                    <path d="M12 2l3 6.5 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-ivory/80 leading-relaxed text-[15px] flex-1">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-white/5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold to-gold-dark grid place-items-center text-obsidian font-display font-semibold shrink-0">
                  {r.initials}
                </div>
                <div>
                  <div className="font-display text-lg text-ivory leading-tight">{r.name}</div>
                  <div className="text-xs text-gold/80 uppercase tracking-widest">
                    {r.occasion} · {r.location}
                  </div>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
