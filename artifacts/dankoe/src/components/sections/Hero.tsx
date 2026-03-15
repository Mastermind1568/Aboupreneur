import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16">

      {/* Background */}
      <div className="absolute inset-0 z-0 bg-background">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIi8+PC9zdmc+')] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/4 rounded-full blur-[140px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-muted-foreground uppercase border border-border/50 rounded-full px-4 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block"></span>
            Alberta, Canada
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif font-bold leading-[1.05] tracking-tighter mb-8"
          style={{ fontSize: "clamp(3rem, 9vw, 7.5rem)" }}
        >
          Crafting Digital<br />
          Strategies That<br />
          <span className="text-muted-foreground/60 italic">Move People.</span>
        </motion.h1>

        {/* Sub copy + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16"
        >
          <p className="text-base md:text-lg text-muted-foreground max-w-sm leading-relaxed">
            Growth marketing, web design, and AI automation — built for brands ready to stop guessing and start scaling.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
            <a
              href="https://www.linkedin.com/newsletters/farm-to-funnel-7409350357295923200"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-foreground text-background text-sm font-bold rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 whitespace-nowrap"
            >
              Read Farm to Funnel
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              Work With Me
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom scroll line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent origin-left"
      />
    </section>
  );
}
