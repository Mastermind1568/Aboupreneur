import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "wouter";

const projects = [
  {
    name: "The Bitcoin Kids",
    client: "Nzonda Fotsing",
    url: "thebitcoinkids.com",
    services: ["Web Design", "Meta Ads", "Google Ads", "GA4", "SEO"],
    oneLiner: "Built a trust-first website for a youth-focused learning brand.",
    testimonial: "Abou turned a complex idea into a parent-friendly brand and funnel. The site is fast, trustworthy, and the ads brought real sign-ups — not vanity clicks."
  },
  {
    name: "Asabis",
    client: "Niba Emmanuel",
    url: "asabis.ca",
    services: ["Web Design", "Social Content", "Google Ads", "GA4", "Email"],
    oneLiner: "Modern small-business site with a social-to-booking funnel.",
    testimonial: "Clean design, clear story, and a funnel that turns social traffic into bookings. Exactly what we needed."
  },
  {
    name: "Miratus Ltd",
    client: "Mirabelle Nchangwi",
    url: "miratusltd.ca",
    services: ["Web Design", "Meta Ads", "Google Ads", "GA4", "SEO"],
    oneLiner: "Service website for a household support agency with clear packages.",
    testimonial: "Our inquiries went from sporadic to steady. The packages, intake forms, and ads captured the right families — not random traffic."
  },
  {
    name: "FA Law Offices",
    client: "Ferdinand N. Anomah",
    url: "falawoffices.com",
    services: ["Web Design"],
    oneLiner: "Professional law-firm website with practice pages and credibility elements.",
    testimonial: "Professional sites, focused practice pages, and ads that bring qualified inquiries — plus tracking we actually trust."
  },
  {
    name: "FA Global Energy",
    client: "Ferdinand N. Anomah",
    url: "faglobalenergy.com",
    services: ["Web Design"],
    oneLiner: "Corporate energy company site with professional presence.",
    testimonial: null
  }
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <Navbar />
      
      <div className="max-w-5xl mx-auto px-6 py-20">
        <FadeIn>
          <h5 className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4">
            PORTFOLIO
          </h5>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Selected Work
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-20">
            Real brands. Real results. Built from strategy to execution.
          </p>
        </FadeIn>

        <div className="space-y-32">
          {projects.map((project, i) => (
            <FadeIn key={i} delay={0.1}>
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="w-full lg:w-3/5">
                  <div className="w-full aspect-[4/3] bg-card border border-border/50 rounded-2xl flex flex-col items-center justify-center text-center p-8 relative overflow-hidden shadow-xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
                    <h3 className="text-3xl md:text-5xl font-serif font-bold mb-4 relative z-10">{project.name}</h3>
                    <p className="text-lg text-muted-foreground relative z-10">{project.url}</p>
                  </div>
                </div>
                
                <div className="w-full lg:w-2/5 flex flex-col justify-center h-full pt-4">
                  <h2 className="text-3xl font-serif font-bold mb-2">{project.name}</h2>
                  <p className="text-muted-foreground mb-6">Client: {project.client}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.services.map((service, j) => (
                      <span key={j} className="text-xs px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md border border-border/50 font-medium tracking-wide">
                        {service}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-lg leading-relaxed mb-8">
                    {project.oneLiner}
                  </p>
                  
                  {project.testimonial && (
                    <div className="bg-card/50 border-l-4 border-accent p-6 rounded-r-xl mb-8">
                      <p className="italic text-muted-foreground mb-4">"{project.testimonial}"</p>
                    </div>
                  )}
                  
                  <div>
                    <a 
                      href={`https://${project.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    >
                      Visit Site →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-32 text-center bg-card border border-border/50 rounded-3xl p-12 md:p-20">
          <h2 className="text-4xl font-serif font-bold mb-6">Ready to grow your brand?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let's discuss how we can build a strategy that moves people and drives results.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground text-lg font-semibold rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            Start a Project →
          </Link>
        </FadeIn>
      </div>
      
      <Footer />
    </main>
  );
}