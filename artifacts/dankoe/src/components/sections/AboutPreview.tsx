import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "wouter";
import SocialButtons from "@/components/ui/SocialButtons";

export function AboutPreview() {
  return (
    <section className="py-32 bg-secondary/30 relative z-10 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h5 className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4">
              ABOUT ME
            </h5>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Who Is Aboupreneur?
            </h2>
            <h3 className="text-xl md:text-2xl text-accent font-medium mb-8">
              Just a builder obsessed with food, agriculture, and leverage.
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>Hey, I'm Aboubakar.</p>
              <p>
                I'm a growth marketer, web builder, and AI automation strategist based in Alberta, Canada — originally from Cameroon.
              </p>
              <p>
                Before funnels and frameworks, I was importing phones and electronics from China and the U.S. into Cameroon. That was the first real education in positioning, margins, and moving product. No ad platform required — just understanding what people want and figuring out how to get it to them.
              </p>
              <p>
                Now I build websites, run digital campaigns, and design AI-powered workflows for brands that want to grow. The long game? Agriculture and food — building wealth through the most durable industries on earth, with marketing as the leverage.
              </p>
            </div>
            
            <div className="mt-8">
              <SocialButtons variant="icon-label" includeEmail={false} />
            </div>
            
            <div className="mt-10">
              <Link 
                href="/about"
                className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-foreground hover:text-accent transition-colors"
              >
                Read My Full Story →
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="left">
            <div className="bg-card border border-border/50 rounded-3xl p-10 md:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="grid grid-cols-2 gap-8 relative z-10">
                <div>
                  <div className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">5+</div>
                  <div className="text-sm font-bold tracking-widest text-muted-foreground uppercase">Clients</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">3</div>
                  <div className="text-sm font-bold tracking-widest text-muted-foreground uppercase">Content Channels</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">2</div>
                  <div className="text-sm font-bold tracking-widest text-muted-foreground uppercase">Countries</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">1</div>
                  <div className="text-sm font-bold tracking-widest text-muted-foreground uppercase">Mission</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}