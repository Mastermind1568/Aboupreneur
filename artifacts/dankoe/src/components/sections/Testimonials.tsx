import { FadeIn } from "@/components/ui/FadeIn";

const testimonials = [
  {
    quote: "Abou turned a complex idea into a parent-friendly brand and funnel. The site is fast, trustworthy, and the ads brought real sign-ups — not vanity clicks.",
    name: "Nzonda Fotsing",
    title: "Founder, The Bitcoin Kids",
  },
  {
    quote: "Our inquiries went from sporadic to steady. The packages, intake forms, and ads captured the right families — not random traffic.",
    name: "Mirabelle Nchangwi",
    title: "Director, Miratus Ltd",
  },
  {
    quote: "Clean design, clear story, and a funnel that turns social traffic into bookings. Exactly what we needed.",
    name: "Niba Emmanuel",
    title: "Owner, Asabis",
  },
  {
    quote: "Professional sites, focused practice pages, and ads that bring qualified inquiries — plus tracking we actually trust.",
    name: "Ferdinand N. Anomah",
    title: "Managing Partner, FA Law Offices & FA Global Energy",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 bg-background relative z-10 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
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
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-10 h-full flex flex-col relative">
                <div className="text-4xl text-accent/20 font-serif absolute top-6 left-6 leading-none select-none">"</div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 relative z-10 italic">
                  {testimonial.quote}
                </p>
                <div className="mt-auto pt-6 border-t border-border/30">
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}