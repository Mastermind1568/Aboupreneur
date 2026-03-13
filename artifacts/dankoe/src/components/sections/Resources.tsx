import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "wouter";

const resources = [
  {
    title: "Farm to Funnel — LinkedIn Newsletter",
    description: "Marketing strategy for food and agricultural products. GTM frameworks, case studies, and real company breakdowns.",
    cta: "Read on LinkedIn →",
    link: "https://www.linkedin.com/newsletters/farm-to-funnel-7409350357295923200",
    external: true,
  },
  {
    title: "Abou Speaks — YouTube",
    description: "Self-development, motivation, and elevation. Everything is possible — so long as you put your mind to it.",
    cta: "Watch on YouTube →",
    link: "https://youtube.com/@aboupreneur?si=sF-M-FLRM8BMrNRN",
    external: true,
  },
  {
    title: "Substack — Deep Dives",
    description: "Long-form personal essays. Reflections on the journey — building, immigrating, growing.",
    cta: "Read on Substack →",
    link: "https://aboupreneur.substack.com/",
    external: true,
  },
  {
    title: "Digital Marketing & AI Services",
    description: "Web design, AI-built websites, automated workflows, Google Ads, Meta Ads, SEO, analytics, and full-funnel growth strategy.",
    cta: "Let's Talk →",
    link: "/contact",
    external: false,
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
              Where I Think Out Loud
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {resources.map((resource, i) => (
            <FadeIn key={i} delay={i * 0.1} className="h-full">
              {resource.external ? (
                <a 
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between h-full bg-card border border-border/50 rounded-2xl p-8 md:p-10 hover-card-effect"
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
                  </div>
                </a>
              ) : (
                <Link 
                  href={resource.link}
                  className="group flex flex-col justify-between h-full bg-card border border-border/50 rounded-2xl p-8 md:p-10 hover-card-effect"
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
                  </div>
                </Link>
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}