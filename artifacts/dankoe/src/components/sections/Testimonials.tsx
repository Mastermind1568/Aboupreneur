import { FadeIn } from "@/components/ui/FadeIn";
import {
  getApprovedTestimonial,
  type TestimonialId,
} from "@/content/testimonialApprovals";

const testimonialIds: TestimonialId[] = [
  "bitcoin-kids-nzonda",
  "miratus-ltd-mirabelle",
  "asabis-niba",
  "fa-law-ferdinand",
];

export function Testimonials() {
  const testimonials = testimonialIds
    .map(getApprovedTestimonial)
    .filter((testimonial): testimonial is NonNullable<typeof testimonial> =>
      Boolean(testimonial),
    );

  if (testimonials.length === 0) return null;

  return (
    <section className="py-20 md:py-32 bg-background relative z-10 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 md:mb-16 text-center">
          <FadeIn>
            <h5 className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4">
              TESTIMONIALS
            </h5>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              What Clients Say
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <FadeIn key={testimonial.id} delay={i * 0.1}>
              <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-10 h-full flex flex-col relative">
                <div className="text-4xl text-accent/20 font-serif absolute top-6 left-6 leading-none select-none">"</div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 relative z-10 italic">
                  {testimonial.approvedQuote}
                </p>
                <div className="mt-auto pt-6 border-t border-border/30">
                  <div className="font-bold text-foreground">{testimonial.approvedAttribution}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}