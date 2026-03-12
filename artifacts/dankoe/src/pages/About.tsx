import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "wouter";

const services = [
  "Brand Strategy", 
  "Web Design & Development", 
  "Google & Meta Ads", 
  "Social Media Strategy", 
  "Content Marketing", 
  "Email Marketing & Automation", 
  "Analytics & Reporting (GA4)", 
  "On-Page SEO"
];

export default function About() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-20">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            The Story Behind Aboupreneur
          </h1>
          <p className="text-xl text-muted-foreground border-l-4 border-accent pl-6 py-2 mb-20 italic">
            From Cameroon to Canada. From phones to funnels.
          </p>
        </FadeIn>

        <div className="space-y-24">
          <FadeIn>
            <h2 className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-6">01 — The Origin</h2>
            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6">
              <p>
                I started in business early — importing phones and electronics from China and the U.S. into Cameroon. That's where I learned real commerce: logistics, margins, customer trust, and hustle.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <h2 className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-6">02 — The Pivot</h2>
            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6">
              <p>
                When I moved to Canada, I made a full pivot into digital marketing — putting everything I knew about business into the digital world. Web design. Google Ads. Meta Ads. Content strategy. Analytics.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <h2 className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-6">03 — The Vision</h2>
            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6">
              <p>
                My long-term play is agriculture and food. I believe the future of wealth lies in producing real things — and in telling their story better. Farm to Funnel is the bridge.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <h2 className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-8">What I Do Now</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, i) => (
                <div key={i} className="bg-card border border-border/50 rounded-xl p-6 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-accent mr-4"></div>
                  <span className="font-medium text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn className="pt-10">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground text-lg font-semibold rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              Let's Build Something Together →
            </Link>
          </FadeIn>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}