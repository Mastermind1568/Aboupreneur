import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export function Hero() {
  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient / Noise */}
      <div className="absolute inset-0 z-0 bg-background">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIi8+PC9zdmc+')] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center mt-12">
        <FadeIn delay={0.1}>
          <h5 className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-6">
            ABOUPRENEUR
          </h5>
        </FadeIn>

        <FadeIn delay={0.2} duration={1}>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.1] mb-8 text-glow font-serif">
            Crafting Digital <br className="hidden md:block" />
            Strategies That <br className="hidden md:block" />
            <span className="text-muted-foreground/80 italic">Move People.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-balance leading-relaxed">
            Growth marketer. Builder. Agriculture & food obsessed.
          </p>
        </FadeIn>

        <FadeIn delay={0.6} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://www.linkedin.com/newsletters/farm-to-funnel-7409350357295923200"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-base font-semibold rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] w-full sm:w-auto"
          >
            Read Farm to Funnel
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          
          <button
            onClick={scrollToPortfolio}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-border text-foreground text-base font-semibold rounded-full hover:border-foreground transition-all duration-300 w-full sm:w-auto"
          >
            See My Work
            <ArrowDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
          </button>
        </FadeIn>
      </div>
    </section>
  );
}