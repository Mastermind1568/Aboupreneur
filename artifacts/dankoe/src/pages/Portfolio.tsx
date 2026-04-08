import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "wouter";
import { useState } from "react";
import { useSEO } from "@/hooks/useSEO";

const projects = [
  {
    name: "The Bitcoin Kids",
    client: "Nzonda Fotsing",
    url: "thebitcoinkids.com",
    screenshot: "https://api.microlink.io/?url=https%3A%2F%2Fthebitcoinkids.com&screenshot=true&meta=false&embed=screenshot.url",
    services: ["Digital Marketing", "Demand Generation", "Content Strategy", "International Outreach"],
    oneLiner: "Led the full sales and promotion strategy for a youth-focused financial literacy comic book, achieving 1,000+ copies sold across 12+ countries.",
    testimonial: "Abou turned a complex idea into a parent-friendly brand and funnel. The site is fast, trustworthy, and the ads brought real sign-ups, not vanity clicks."
  },
  {
    name: "Asabis",
    client: "Niba Emmanuel",
    url: "asabis.ca",
    screenshot: "https://api.microlink.io/?url=https%3A%2F%2Fasabis.ca&screenshot=true&meta=false&embed=screenshot.url",
    services: ["Web Design", "Social Content", "Google Ads", "GA4", "Email"],
    oneLiner: "Professional website for an accounting firm with a social-to-client funnel.",
    testimonial: "Clean design, clear story, and a funnel that turns social traffic into bookings. Exactly what we needed."
  },
  {
    name: "Miratus Ltd",
    client: "Mirabelle Nchangwi",
    url: "miratusltd.ca",
    screenshot: "/images/miratus-screenshot.png",
    services: ["Web Design", "Meta Ads", "Google Ads", "GA4", "SEO"],
    oneLiner: "Professional website for a staffing agency, built with clear service packages and an intake funnel.",
    testimonial: "Our inquiries went from sporadic to steady. The packages, intake forms, and ads captured the right families, not random traffic."
  },
  {
    name: "FA Law Office",
    client: "Ferdinand N. Anomah",
    url: "falawoffice.com",
    screenshot: "https://api.microlink.io/?url=https%3A%2F%2Ffalawoffice.com&screenshot=true&meta=false&embed=screenshot.url",
    services: ["Web Design"],
    oneLiner: "Professional law-firm website with practice pages and credibility elements.",
    testimonial: "Professional sites, focused practice pages, and ads that bring qualified inquiries, plus tracking we actually trust."
  },
  {
    name: "FA Global Energy",
    client: "Ferdinand N. Anomah",
    url: "faglobalenergy.com",
    screenshot: "https://api.microlink.io/?url=https%3A%2F%2Ffaglobalenergy.com&screenshot=true&meta=false&embed=screenshot.url",
    services: ["Web Design"],
    oneLiner: "Corporate energy company site with professional presence.",
    testimonial: null
  }
];

function ProjectImage({ screenshot, name, url }: { screenshot: string; name: string; url: string }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-900 group">
      {/* Browser chrome bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800 border-b border-white/10 shrink-0">
        <span className="w-3 h-3 rounded-full bg-red-500/70"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500/70"></span>
        <span className="w-3 h-3 rounded-full bg-green-500/70"></span>
        <div className="flex-1 mx-3 bg-zinc-700 rounded-md px-3 py-1 text-xs text-zinc-400 truncate">
          {url}
        </div>
      </div>

      {/* Screenshot area — fixed height, scroll-style overflow */}
      <div className="relative w-full overflow-hidden" style={{ height: "280px" }}>
        {!error ? (
          <>
            {!loaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10 bg-zinc-900">
                <div className="w-7 h-7 border-2 border-accent/40 border-t-accent rounded-full animate-spin mb-3"></div>
                <p className="text-xs text-muted-foreground">Loading preview…</p>
              </div>
            )}
            <img
              src={screenshot}
              alt={`${name} website screenshot`}
              className={`w-full object-cover object-top transition-all duration-700 group-hover:scale-[1.02] origin-top ${loaded ? "opacity-100" : "opacity-0"}`}
              style={{ height: "280px" }}
              onLoad={() => setLoaded(true)}
              onError={() => setError(true)}
            />
            {loaded && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-zinc-900">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
            <h3 className="text-2xl font-serif font-bold mb-2 relative z-10">{name}</h3>
            <p className="text-muted-foreground text-sm relative z-10">{url}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Portfolio() {
  useSEO({
    title: "Portfolio | Selected Work by Aboupreneur — Real Brands, Real Results",
    description: "Browse Aboupreneur's portfolio of web design, digital marketing, and AI automation projects. Real results for small businesses and entrepreneurs across Canada and beyond.",
    canonical: "https://aboupreneur.page/portfolio",
  });

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
                  <ProjectImage
                    screenshot={project.screenshot}
                    name={project.name}
                    url={project.url}
                  />
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
