import { Youtube, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-card/30 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <FadeIn>
            <Link href="/" className="font-serif text-3xl font-bold tracking-wide mb-6 inline-block">
              ABOUPRENEUR
            </Link>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Crafting Digital Strategies That Move People.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
              <Link href="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio</Link>
              <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="md:justify-self-end">
            <div className="bg-card border border-border/50 rounded-2xl p-8 max-w-sm">
              <h3 className="text-2xl font-serif mb-4">Stay in the loop.</h3>
              <p className="text-sm text-muted-foreground mb-8">
                Subscribe to my Substack for long-form personal essays, reflections on building, and growth.
              </p>
              <a
                href="https://aboupreneur.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 w-full px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
              >
                Subscribe <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 gap-6">
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com/in/aboupreneur" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://youtube.com/@aboupreneur?si=sF-M-FLRM8BMrNRN" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="https://aboupreneur.substack.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors font-serif font-bold text-lg leading-none">
              S
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
            <a href="mailto:hello@aboupreneur.page" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              hello@aboupreneur.page
            </a>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Aboupreneur. All rights reserved.
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}