import { Twitter, Youtube, Linkedin, Instagram } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-card/30 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <FadeIn>
            <h5 className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-6">
              About Me
            </h5>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Dan Koe is a writer and creator of The Koe Letter, a newsletter for
              those who want to reinvent themselves and build a meaningful life. He is
              also the founder of Future Proof, Eden AI, and author of The Art Of
              Focus and Purpose & Profit.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="md:justify-self-end">
            <div className="bg-card border border-border/50 rounded-2xl p-8 max-w-sm">
              <h3 className="text-2xl font-serif mb-4">Stay Connected</h3>
              <p className="text-sm text-muted-foreground mb-8">
                Join 196,000+ others receiving highly actionable insights on human
                potential and digital business.
              </p>
              <a
                href="https://letters.thedankoe.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-accent transition-colors duration-300"
              >
                Receive 2 free letters a week
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 gap-6">
          <div className="flex items-center gap-6">
            <a href="https://twitter.com/thedankoe" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://youtube.com/c/DanKoeTalks" className="text-muted-foreground hover:text-foreground transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/thedankoe" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/thedankoe" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Dan Koe. All rights reserved.
          </p>
        </FadeIn>
      </div>
    </footer>
  );
}
