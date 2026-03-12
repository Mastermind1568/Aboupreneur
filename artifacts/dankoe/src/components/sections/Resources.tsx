import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const resources = [
  {
    title: "Future Proof - Premium Guides",
    description: "My personal content creation, marketing, and AI systems I used as a creator and founder, updated 2-4x a month.",
    cta: "Join Future Proof",
    link: "#",
  },
  {
    title: "Eden – AI Canvas & Drive",
    description: "Upload files, YouTube links, and more to a better drive that can always find what you need. Connect anything to AI on a visual canvas.",
    cta: "Try Eden",
    link: "#",
  },
  {
    title: "Purpose & Profit",
    description: "Transform your relationship with money and discover your life's work. Download the PDF for free or get the paperback on Amazon.",
    cta: "Get The Book",
    link: "#",
  },
  {
    title: "The Art Of Focus",
    description: "Find meaning, reinvent yourself, and create your ideal future. Now available on Amazon in digital, physical, or audiobook format.",
    cta: "Get The Book",
    link: "#",
  },
];

export function Resources() {
  return (
    <section className="py-32 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <FadeIn>
            <h5 className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4">
              RESOURCES
            </h5>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Join The New 1%
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Become future-proof with these tools
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {resources.map((resource, i) => (
            <FadeIn key={i} delay={i * 0.1} className="h-full">
              <a 
                href={resource.link}
                className="group flex flex-col justify-between h-full bg-card border border-border/50 rounded-3xl p-8 md:p-10 hover-card-effect"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-12">
                    {resource.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground group-hover:text-accent transition-colors">
                  {resource.cta}
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
