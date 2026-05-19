import { Link } from "wouter";
import { Linkedin, Youtube, Instagram } from "lucide-react";

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A]" style={{ borderTop: "1px solid #F2A900" }}>
      <div className="max-w-7xl mx-auto px-10 py-16">

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-12">
          <div>
            <Link href="/" className="font-display font-bold text-xl text-white block mb-2" style={{ letterSpacing: "0.04em" }}>
              ABOUPRENEUR
            </Link>
            <p className="text-sm" style={{ color: "#888888", letterSpacing: "0.04em" }}>
              Build. Stack. Sovereign.
            </p>
          </div>

          <nav className="flex items-center gap-6">
            {[
              { href: "/story", label: "STORY" },
              { href: "/ecosystem", label: "ECOSYSTEM" },
              { href: "/writing", label: "WRITING" },
              { href: "/ecosystem#consulting-form", label: "WORK WITH ME" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs transition-colors duration-200 hover:text-white"
                style={{ color: "#888888", letterSpacing: "0.08em" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/aboupreneur"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors duration-200 hover:text-accent"
              style={{ color: "#888888" }}
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/aboupreneur"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-colors duration-200 hover:text-accent"
              style={{ color: "#888888" }}
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com/@aboupreneur"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="transition-colors duration-200 hover:text-accent"
              style={{ color: "#888888" }}
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/aboupreneur"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="transition-colors duration-200 hover:text-accent"
              style={{ color: "#888888" }}
            >
              <XIcon />
            </a>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #1A1A1A", paddingTop: "24px" }}>
          <p className="text-xs" style={{ color: "#888888" }}>
            © {currentYear} Aboubakar Moussa — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
