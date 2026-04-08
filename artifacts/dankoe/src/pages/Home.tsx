import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Resources } from "@/components/sections/Resources";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { Blog } from "@/components/sections/Blog";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Aboubakar Moussa",
  "alternateName": "Aboupreneur",
  "url": "https://aboupreneur.page",
  "jobTitle": "Growth Marketer, Web Designer & AI Automation Strategist",
  "description": "Aboubakar Moussa (Aboupreneur) is a growth marketer, web builder, and AI automation strategist based in Alberta, Canada, helping brands grow through digital marketing, web design, and AI-powered systems.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Alberta",
    "addressCountry": "CA"
  },
  "sameAs": [
    "https://www.linkedin.com/in/aboubakar-moussa-2a0b82124/",
    "https://x.com/aboupreneur",
    "https://aboupreneur.substack.com/",
    "https://youtube.com/@aboupreneur"
  ],
  "knowsAbout": [
    "Growth Marketing",
    "Web Design",
    "AI Automation",
    "Google Ads",
    "Meta Ads",
    "SEO",
    "HubSpot",
    "n8n",
    "Food Brand Marketing",
    "Digital Strategy"
  ]
};

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "person-schema";
    script.text = JSON.stringify(jsonLd);
    if (!document.getElementById("person-schema")) {
      document.head.appendChild(script);
    }
    return () => {
      const el = document.getElementById("person-schema");
      if (el) el.remove();
    };
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Resources />
      <PortfolioPreview />
      <AboutPreview />
      <Testimonials />
      <Blog />
      <Footer />
    </main>
  );
}