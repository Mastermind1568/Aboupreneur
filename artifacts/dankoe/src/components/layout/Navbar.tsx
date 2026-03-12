import { motion } from "framer-motion";
import { Twitter, Youtube, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function Navbar() {
  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/thedankoe" },
    { icon: Youtube, href: "https://youtube.com/c/DanKoeTalks" },
    { icon: Linkedin, href: "https://linkedin.com/in/thedankoe" },
    { icon: Instagram, href: "https://instagram.com/thedankoe" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link
            href="/"
            className="font-serif text-2xl tracking-widest font-semibold hover:text-accent transition-colors duration-300"
          >
            DAN KOE
          </Link>
          <a
            href="https://letters.thedankoe.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            Read The Koe Letters
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <nav className="flex items-center gap-5">
          <div className="hidden sm:flex items-center gap-4 mr-4">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-all hover:scale-110 duration-300"
              >
                <social.icon className="w-5 h-5 stroke-[1.5]" />
              </a>
            ))}
          </div>
          <a
            href="https://letters.thedankoe.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          >
            Join The Letters
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
