import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "wouter";

const projects = [
  {
    name: "The Bitcoin Kids",
    url: "thebitcoinkids.com",
    services: ["Web Design", "Meta Ads", "Google Ads", "GA4", "SEO"],
    oneLiner: "Built a trust-first website for a youth-focused learning brand.",
  },
  {
    name: "Asabis",
    url: "asabis.ca",
    services: ["Web Design", "Social Content", "Google Ads", "GA4", "Email"],
    oneLiner: "Modern small-business site with a social-to-booking funnel.",
  },
  {
    name: "Miratus Ltd",
    url: "miratusltd.ca",
    services: ["Web Design", "Meta Ads", "Google Ads", "GA4", "SEO"],
    oneLiner: "Service website for a household support agency with clear packages.",
  },
];

export function PortfolioPreview() {
  return (
    <section id="portfolio" className="py-32 bg-background relative z-10 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <FadeIn>
            <h5 className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4">
              PORTFOLIO
            </h5>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Selected Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Real brands. Real results. Built from strategy to execution.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <FadeIn key={i} delay={i * 0.1} className="h-full">
              <div className="group flex flex-col h-full bg-card border border-border/50 rounded-2xl p-6 hover-card-effect">
                <div className="w-full aspect-[4/3] bg-background border border-border/30 rounded-xl mb-6 flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h3 className="text-2xl font-serif font-bold mb-2 relative z-10">{project.name}</h3>
                  <p className="text-sm text-muted-foreground relative z-10">{project.url}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.services.slice(0, 3).map((service, j) => (
                    <span key={j} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-md border border-border/50">
                      {service}
                    </span>
                  ))}
                  {project.services.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-md border border-border/50">
                      +{project.services.length - 3}
                    </span>
                  )}
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-grow">
                  {project.oneLiner}
                </p>
                
                <a 
                  href={`https://${project.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-foreground group-hover:text-accent transition-colors mt-auto"
                >
                  View Site →
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="mt-16 text-center">
          <Link 
            href="/portfolio"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            See All Work →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}