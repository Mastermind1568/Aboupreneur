import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const navLinks = [
    { href: "/story", label: "STORY" },
    { href: "/ecosystem", label: "SERVICES" },
    { href: "/portfolio", label: "WORK" },
    { href: "/writing", label: "WRITING" },
  ];

  const isActive = (href: string) => location === href || (href === "/ecosystem" && location === "/services");

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]"
      style={{ height: "64px", borderBottom: "1px solid #1A1A1A" }}
    >
      <div className="h-full max-w-7xl mx-auto px-10 flex items-center justify-between">

        <Link
          href="/"
          aria-label="Aboupreneur home"
          className="cursor-pointer font-display text-white font-bold text-lg hover:text-accent transition-colors duration-200"
          style={{ letterSpacing: "0.04em" }}
        >
          ABOUPRENEUR
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{
                color: isActive(link.href) ? "#F2A900" : "#888888",
                letterSpacing: "0.06em",
              }}
              onMouseEnter={(e) => { if (!isActive(link.href)) (e.target as HTMLAnchorElement).style.color = "#FFFFFF"; }}
              onMouseLeave={(e) => { if (!isActive(link.href)) (e.target as HTMLAnchorElement).style.color = "#888888"; }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="text-sm font-bold transition-all duration-200 px-5 py-2"
            style={{
              border: "1px solid #F2A900",
              color: "#F2A900",
              letterSpacing: "0.06em",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#F2A900";
              el.style.color = "#0A0A0A";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "transparent";
              el.style.color = "#F2A900";
            }}
          >
            WORK WITH ME
          </Link>
        </div>

        <button
          className="md:hidden text-white hover:text-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div
          className="md:hidden fixed inset-0 top-[64px] bg-[#0A0A0A] flex flex-col items-center justify-center gap-10 z-40"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-display font-bold transition-colors duration-200"
              style={{
                color: isActive(link.href) ? "#F2A900" : "#888888",
                letterSpacing: "0.08em",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 text-sm font-bold px-8 py-3"
            style={{ border: "1px solid #F2A900", color: "#F2A900", letterSpacing: "0.06em" }}
          >
            WORK WITH ME
          </Link>
        </div>
      )}
    </header>
  );
}
