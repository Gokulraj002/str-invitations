import { Star } from "lucide-react";
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
    <section className="container-x py-20 md:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Kind Words"
          title="What our customers say"
          subtitle="Feedback from families we've had the honour of designing invitations for."
        />
      </Reveal>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <Reveal key={r.name} delay={i * 110} className="h-full">
            <figure className="soft-card review-card">
              <div className="review-stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={16} fill="currentColor" strokeWidth={0} aria-hidden />
                ))}
              </div>
              <blockquote>&ldquo;{r.text}&rdquo;</blockquote>
              <figcaption>
                <span className="review-avatar" aria-hidden>{r.initials}</span>
                <span>
                  <strong>{r.name}</strong>
                  <small>{r.occasion} · {r.location}</small>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
