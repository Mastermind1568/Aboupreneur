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
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[160px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">

          {/* Left: Text content */}
          <div className="flex-1 max-w-2xl">
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
              style={{ fontSize: "clamp(2.8rem, 7vw, 6.5rem)" }}
            >
              Crafting Digital<br />
              Strategies That<br />
              <span className="text-muted-foreground/60 italic">Move People.</span>
            </motion.h1>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-9 py-4 bg-accent text-accent-foreground text-sm font-bold rounded-full hover:brightness-110 transition-all duration-300 shadow-[0_0_32px_rgba(212,175,55,0.25)]"
              >
                Work With Me
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Headshot */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-[380px] xl:w-[420px] shrink-0 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 md:w-80 lg:w-full">
              {/* Glow behind photo */}
              <div className="absolute inset-0 rounded-2xl bg-accent/8 blur-[50px] scale-105 pointer-events-none"></div>

              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[3/4]">
                <img
                  src="/images/headshot.jpg"
                  alt="Aboubakar Moussa — Aboupreneur, Growth Marketer & Web Designer based in Alberta, Canada"
                  className="w-full h-full object-cover object-top"
                />
                {/* Gradient for card readability */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"></div>

                {/* Name card — overlaid at bottom of photo */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute bottom-4 left-4 right-4 flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-bold text-white leading-tight">Aboubakar Moussa</p>
                    <p className="text-xs text-white/60 mt-0.5">Growth Marketer · Web Builder · AI Strategist</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 shrink-0 ml-3 bg-black/40 rounded-full px-2.5 py-1">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
                    </span>
                    Available
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
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
