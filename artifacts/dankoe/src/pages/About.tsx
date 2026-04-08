import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "wouter";
import SocialButtons from "@/components/ui/SocialButtons";
import { ArrowRight, GraduationCap } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

export default function About() {
  useSEO({
    title: "About Aboupreneur | The Story of Aboubakar Moussa — Growth Marketer Alberta",
    description: "From importing phones in Cameroon to building digital brands in Canada. Learn the story behind Aboupreneur — growth marketer, web designer, and AI automation strategist based in Alberta.",
    canonical: "https://aboupreneur.page/about",
  });
  const currentServices = [
    "Brand Strategy & Positioning",
    "Web Design & Development (WordPress + AI-built sites)",
    "AI Workflow Automation (n8n, HubSpot, Make)",
    "Search Advertising (Google Ads)",
    "Social Advertising (Meta, LinkedIn, TikTok, Pinterest, Snapchat)",
    "Social Media Strategy & Management",
    "Content Marketing & Copywriting",
    "Email Marketing (Mailchimp, HubSpot)",
    "SEO & On-Page Optimization (Semrush)",
    "Analytics & Reporting (GA4, Looker Studio)",
    "CRM Setup & Management (HubSpot)",
    "Conversion Rate Optimization",
  ];

  const certifications = [
    { name: "Google Ads Search Certification", year: "2026" },
    { name: "SEO Essentials with Semrush", year: "2026" },
    { name: "Hootsuite: Social Listening & Social Media Marketing", year: "2026" },
    { name: "Marketing Analytics: Decoding the Conversion Funnel for Revenue Growth", year: "2026" },
    { name: "Marketing Analytics Foundations", year: "2025" },
    { name: "Marketing Analytics in Action: Drive Growth with Data Insights", year: "2025" },
    { name: "Marketing Analytics: Setting and Measuring KPIs", year: "2025" },
    { name: "Google Digital Marketing & E-Commerce Professional Certificate", year: "2025" },
    { name: "Data Analytics (IBM): Visualization, Wrangling, Essentials & ETL", year: "2023" },
    { name: "Digital Marketing & SEO: Vision, Strategy & Metrics | Analytics | Growth", year: "2020" },
    { name: "Web Development: WordPress", year: "2018" },
    { name: "Jelly Academy Bootcamp", year: "In Progress" },
  ];

  return (
    <main className="min-h-screen bg-background pt-24 selection:bg-accent selection:text-accent-foreground">
      <Navbar />

      {/* Section 1 - Hero */}
      <section className="relative border-b border-border/50 bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIi8+PC9zdmc+')] mix-blend-overlay opacity-[0.03]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-16">

            {/* Photo */}
            <FadeIn className="flex justify-center md:justify-start shrink-0">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-accent/10 blur-[40px] scale-110 pointer-events-none"></div>
                <div className="relative w-56 md:w-64 lg:w-72 aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="/images/headshot.jpg"
                    alt="Aboubakar Moussa — Aboupreneur"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/50 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </FadeIn>

            {/* Text */}
            <FadeIn delay={0.15}>
              <h5 className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-5">ABOUT</h5>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-5 leading-tight">The Story Behind Aboupreneur</h1>
              <p className="text-lg md:text-xl text-muted-foreground/90 max-w-xl font-light italic mb-8">
                From importing phones in Cameroon to building digital empires in Canada.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                Work With Me <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>

          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-24 space-y-32">
        
        {/* Section 2 - The Origin */}
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <h2 className="text-xs font-bold tracking-[0.2em] text-accent uppercase sticky top-32">WHERE IT STARTED</h2>
            </div>
            <div className="md:col-span-8">
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">Hustle Before Funnels</h3>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Before WordPress, before Google Ads, before growth frameworks, the education started on the ground.
                </p>
                <p>
                  I grew up in Cameroon, where entrepreneurship isn't a career choice. It's survival. My first real business was importing phones and electronics from China and the United States and selling them in Cameroon. No ad platform. No CRM. No analytics dashboard. Just understanding what people want, figuring out how to source it, negotiating margins, and moving product.
                </p>
                <p>
                  That was the first masterclass in positioning, demand, and distribution. Everything I do now in digital marketing? It started there: reading markets, not dashboards.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Section 3 - The Pivot */}
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <h2 className="text-xs font-bold tracking-[0.2em] text-accent uppercase sticky top-32">THE TRANSITION</h2>
            </div>
            <div className="md:col-span-8">
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">From Physical Products to Digital Strategy</h3>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6 mb-12">
                <p>
                  The move to Canada changed everything. New country. New language dynamics. New market. But the instinct was the same: find what people need, build the bridge to get it to them.
                </p>
                <p>
                  The transition from physical product sales to digital marketing was natural. Same instinct, bigger toolkit. I started learning web design, then SEO, then paid ads, then analytics, then automation. Each skill unlocked the next. Each client project became a live laboratory.
                </p>
                <p>
                  I didn't just collect certificates. Every certification became a real project, a case study, a portfolio piece, and proof of work. That rule hasn't changed.
                </p>
              </div>

              {/* Timeline */}
              <div className="relative mt-8">
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border/50 -translate-y-1/2 z-0"></div>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-2 relative z-10">
                  {["Cameroon", "Import/Export", "Canada", "Web Design", "Digital Marketing", "AI Automation"].map((step, i) => (
                    <div key={i} className="flex items-center gap-4 md:gap-0 md:flex-col group">
                      <div className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center text-xs font-bold md:mb-3 group-hover:bg-accent group-hover:text-accent-foreground transition-colors z-10 shadow-lg">
                        {i + 1}
                      </div>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Section 4 - What I Do Now */}
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <h2 className="text-xs font-bold tracking-[0.2em] text-accent uppercase sticky top-32">THE PRESENT</h2>
            </div>
            <div className="md:col-span-8">
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">Growth Marketer. Web Builder. AI Automation Strategist.</h3>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6 mb-12">
                <p>
                  Today, I operate at the intersection of three things: digital marketing strategy, website development, and AI-powered business automation.
                </p>
                <p>
                  For clients, that means I don't just build a website and walk away. I build the site, set up the ads, wire the analytics, design the funnel, and automate the follow-up, so the whole system works while you sleep.
                </p>
                <p>
                  I'm also a member of the Canadian Marketing Association (CMA) and CAMA, actively building toward elite growth marketer status through a rigorous certification path across Google, HubSpot, and advanced platforms.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentServices.map((service, i) => (
                  <div key={i} className="bg-card border border-border/50 rounded-xl p-5 hover:border-accent/50 transition-colors">
                    <span className="text-sm font-medium text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Section 5 - The Vision */}
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <h2 className="text-xs font-bold tracking-[0.2em] text-accent uppercase sticky top-32">THE LONG GAME</h2>
            </div>
            <div className="md:col-span-8">
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">Agriculture. Food. Leverage.</h3>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Digital marketing is the craft. Agriculture and food are the destination.
                </p>
                <p>
                  Not because it's trending, but because it's one of the most enduring industries on earth. People will always eat. Land will always produce. And the intersection of modern marketing with the agricultural world is still largely untapped, especially across the African continent.
                </p>
                <p>
                  I'm drawn to industries that matter. Industries that feed people, sustain communities, and create generational value. That's the longer arc, and everything I'm building in marketing is the foundation for what comes next.
                </p>
                <p>
                  For now, the work is the proof. Every client served, every campaign built, every system designed. It all compounds toward something larger.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Section 6 - Content Ecosystem */}
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <h2 className="text-xs font-bold tracking-[0.2em] text-accent uppercase sticky top-32">WHERE I SHOW UP</h2>
            </div>
            <div className="md:col-span-8">
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">Where You'll Find Me.</h3>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6 mb-12">
                <p>
                  I show up in a few different places, depending on what you're looking for.
                </p>
                <p>
                  <strong className="text-foreground">Farm to Funnel</strong> on LinkedIn is where I write about marketing strategy for food and agricultural brands. Real company breakdowns, GTM frameworks, and tactical thinking, grounded in an industry I genuinely care about.
                </p>
                <p>
                  <strong className="text-foreground">Abou Speaks</strong> on YouTube is where I talk about mindset, growth, and the journey of building something from nothing. Honest, unfiltered, and personal.
                </p>
                <p>
                  <strong className="text-foreground">Substack</strong> is where I write longer, slower. Essays on the process of building, immigrating, learning, and figuring out what actually matters.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href="https://www.linkedin.com/newsletters/farm-to-funnel-7409350357295923200" target="_blank" rel="noopener noreferrer" className="group block bg-card border border-border/50 rounded-2xl p-6 hover:-translate-y-1 hover:border-accent transition-all duration-300">
                  <h4 className="font-serif font-bold text-xl mb-2 group-hover:text-accent transition-colors">Farm to Funnel</h4>
                  <p className="text-sm text-muted-foreground mb-6">Marketing strategy for ag & food</p>
                  <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-foreground">
                    Read on LinkedIn <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
                
                <a href="https://youtube.com/@aboupreneur" target="_blank" rel="noopener noreferrer" className="group block bg-card border border-border/50 rounded-2xl p-6 hover:-translate-y-1 hover:border-[#FF0000] transition-all duration-300">
                  <h4 className="font-serif font-bold text-xl mb-2 group-hover:text-[#FF0000] transition-colors">Abou Speaks</h4>
                  <p className="text-sm text-muted-foreground mb-6">Self-development & elevation</p>
                  <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-foreground">
                    Watch on YouTube <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>

                <a href="https://aboupreneur.substack.com/" target="_blank" rel="noopener noreferrer" className="group block bg-card border border-border/50 rounded-2xl p-6 hover:-translate-y-1 hover:border-[#FF6719] transition-all duration-300">
                  <h4 className="font-serif font-bold text-xl mb-2 group-hover:text-[#FF6719] transition-colors">Substack</h4>
                  <p className="text-sm text-muted-foreground mb-6">Deep dives & personal essays</p>
                  <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-foreground">
                    Read on Substack <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Section 7 - Certifications */}
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <h2 className="text-xs font-bold tracking-[0.2em] text-accent uppercase sticky top-32">THE CRAFT</h2>
            </div>
            <div className="md:col-span-8">
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">Always Learning. Always Building.</h3>
              
              <blockquote className="border-l-4 border-accent pl-6 py-2 my-8 text-xl font-serif italic text-muted-foreground/90 bg-secondary/20 rounded-r-lg">
                "No certificate without application. Every course becomes a project, a case study, and a portfolio piece. Mastery over collection."
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-start gap-3 bg-secondary/30 p-4 rounded-lg border border-border/30">
                    <GraduationCap className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-medium text-foreground/90 block">{cert.name}</span>
                      <span className="text-xs text-accent/80 font-semibold mt-1 block">{cert.year}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-border/50">
                <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-muted-foreground tracking-wide uppercase">
                  <span>Jelly Academy</span>
                  <span className="text-border">|</span>
                  <span>Google Skillshop</span>
                  <span className="text-border">|</span>
                  <span>Semrush Academy</span>
                  <span className="text-border">|</span>
                  <span>Hootsuite Academy</span>
                  <span className="text-border">|</span>
                  <span>IBM SkillsBuild</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>

      {/* Section 9 - Social Buttons Bar */}
      <section className="py-20 border-y border-border/50 bg-secondary/20">
        <FadeIn className="flex justify-center px-6">
          <SocialButtons variant="icon-label" includeEmail={true} />
        </FadeIn>
      </section>

      {/* Section 10 - CTA */}
      <section className="py-32 flex flex-col items-center justify-center text-center px-6">
        <FadeIn className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Let's Build Something Together</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Whether you need a website, a campaign, or a full growth strategy, I'd love to hear what you're working on.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-lg font-semibold rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </FadeIn>
      </section>
      
      <Footer />
    </main>
  );
}