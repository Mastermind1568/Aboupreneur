import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
            alt="Hero Background"
            className="w-full h-full object-cover object-center opacity-40"
          />
        </motion.div>
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center mt-12">
        <FadeIn delay={0.2} duration={1}>
          <h1 className="text-5xl sm:text-7xl md:text-[6rem] font-bold tracking-tighter leading-[1.1] mb-8 text-glow font-serif">
            Work Less.<br />
            Earn More.<br />
            <span className="text-muted-foreground/80 italic">Enjoy Life.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-balance leading-relaxed">
            Join <span className="text-foreground font-medium">196,000+</span> getting mindf*cked twice a week reading about the mind, the internet, and the future.
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <a
            href="https://letters.thedankoe.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-lg font-semibold rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:-translate-y-1"
          >
            Receive 2 free letters a week
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <motion.div 
          className="w-[1px] h-12 bg-foreground origin-top"
          animate={{ scaleY: [0, 1, 0], translateY: [0, 0, 24] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
