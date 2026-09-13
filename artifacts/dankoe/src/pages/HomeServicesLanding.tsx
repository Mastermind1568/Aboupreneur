import { useState, useRef, useEffect } from "react";
import { useSearch } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useSEO } from "@/hooks/useSEO";
import { trackEvent, getCampaignAttribution } from "@/lib/analytics";
import { Check, Shield, Zap, Wrench } from "lucide-react";

type NicheKey = "default" | "hvac" | "plumbing" | "roofing" | "landscaping";

const NICHES: Record<NicheKey, { h1: string; sub: string; image: string }> = {
  default: {
    h1: "Websites & Ads for Trades & Home Services.",
    sub: "Stop relying purely on word-of-mouth. Get found online fast.",
    image: "/images/niches/default.jpg",
  },
  hvac: {
    h1: "Keep Your HVAC Trucks on the Road.",
    sub: "High-converting websites and Google Ads management for heating and cooling specialists.",
    image: "/images/niches/hvac.jpg",
  },
  plumbing: {
    h1: "More Emergency Plumbing Calls, Less Wasted Ad Spend.",
    sub: "Rank higher when homeowners in your city have a leak.",
    image: "/images/niches/plumbing.jpg",
  },
  roofing: {
    h1: "Book More Roof Replacements & Repairs.",
    sub: "Dominate local search and get qualified roofing leads consistently.",
    image: "/images/niches/roofing.jpg",
  },
  landscaping: {
    h1: "Grow Your Landscaping Business This Season.",
    sub: "Attract high-value residential and commercial landscaping projects.",
    image: "/images/niches/landscaping.jpg",
  },
};

export default function HomeServicesLanding() {
  const searchString = useSearch();
  const searchParams = new URLSearchParams(searchString);
  const nicheParam = (searchParams.get("niche")?.toLowerCase() || "default") as string;
  
  const nicheKey: NicheKey = NICHES.hasOwnProperty(nicheParam) 
    ? (nicheParam as NicheKey) 
    : "default";
    
  const content = NICHES[nicheKey];

  useSEO({
    title: "Marketing & Websites for Home Services | Aboupreneur",
    description: "High-converting websites and Google Ads management for trades and home services. Stop relying purely on word-of-mouth.",
    canonical: "https://aboupreneur.page/home-services-trades",
  });

  useEffect(() => {
    trackEvent("landing_page_view", { 
      landing_page: "home-services-trades",
      niche: nicheKey 
    });
  }, [nicheKey]);

  return (
    <main className="min-h-screen bg-[#0A0A0A] selection:bg-[#F09C00] selection:text-[#0A0A0A] flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="flex-1 grid grid-cols-1 lg:grid-cols-2 mt-[72px] lg:mt-[80px]">
        {/* Left Side: Copy & Form */}
        <div className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-20 xl:px-24">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#333] text-[#F09C00] text-xs font-bold tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 bg-[#F09C00]" />
              Trade & Home Services
            </div>
            
            <h1 
              className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white mb-6 opacity-0 animate-fade-up"
              style={{ animationFillMode: "both" }}
            >
              {content.h1}
            </h1>
            
            <p 
              className="text-lg sm:text-xl text-[#A0A0A0] leading-relaxed mb-12 opacity-0 animate-fade-up"
              style={{ animationFillMode: "both", animationDelay: "150ms" }}
            >
              {content.sub}
            </p>

            <div 
              className="opacity-0 animate-fade-up border border-[#222] bg-[#111] p-6 sm:p-8"
              style={{ animationFillMode: "both", animationDelay: "300ms" }}
            >
              <h2 className="text-sm font-bold text-white tracking-widest uppercase mb-6 flex items-center gap-3">
                Request a Consultation
                <span className="flex-1 h-px bg-[#333]" />
              </h2>
              <LeadCaptureForm niche={nicheKey} />
            </div>
          </div>
        </div>

        {/* Right Side: Visual Asset */}
        <div className="relative min-h-[400px] lg:min-h-full hidden md:block">
          <div className="absolute inset-0 bg-[#0A0A0A]">
            <img 
              src={content.image} 
              alt={`${nicheKey} specialist marketing`} 
              className="w-full h-full object-cover opacity-60 grayscale contrast-125 mix-blend-luminosity"
              loading="eager"
            />
            {/* Gradient Overlay for seamless blend on edges */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent lg:w-1/4" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent h-1/4 top-auto bottom-0" />
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="bg-white px-6 py-20 sm:px-12 lg:px-20 border-t-8 border-[#F09C00]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 flex items-center justify-center bg-[#F09C00] text-[#0A0A0A] mb-6">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-[#0A0A0A] mb-3">Built for the Trades</h3>
              <p className="text-[#444] leading-relaxed">
                No marketing jargon. We focus on the metrics that actually matter: qualified calls, form fills, and booked jobs in your service area.
              </p>
            </div>
            
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0A0A0A] text-white mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-[#0A0A0A] mb-3">No Long-Term Contracts</h3>
              <p className="text-[#444] leading-relaxed">
                We earn your business every month. Clear project scopes, straightforward pricing, and performance-driven retainers.
              </p>
            </div>
            
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 flex items-center justify-center border-2 border-[#0A0A0A] text-[#0A0A0A] mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-[#0A0A0A] mb-3">Fast Turnaround</h3>
              <p className="text-[#444] leading-relaxed">
                Time is money. We deploy targeted landing pages and search campaigns quickly so you can start capturing demand without delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function LeadCaptureForm({ niche }: { niche: NicheKey }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const hasStarted = useRef(false);

  const markFormStarted = () => {
    if (hasStarted.current) return;
    hasStarted.current = true;
    trackEvent("consulting_form_started", {
      landing_page: "home-services-trades",
      niche
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const attribution = getCampaignAttribution();
      
      const response = await fetch("https://formspree.io/f/xojkwbvq", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          ...attribution,
          landing_page: "home-services-trades",
          niche,
          _subject: `New Lead: ${niche.toUpperCase()} Landing Page`,
        }),
      });

      if (response.ok) {
        trackEvent("consulting_form_submitted", {
          landing_page: "home-services-trades",
          niche,
          form_provider: "formspree"
        });
        setStatus("success");
        setFormData({ name: "", email: "", phone: "" });
      } else {
        trackEvent("consulting_form_failed", {
          landing_page: "home-services-trades",
          niche,
          reason: "provider_error"
        });
        setStatus("error");
      }
    } catch (error) {
      trackEvent("consulting_form_failed", {
        landing_page: "home-services-trades",
        niche,
        reason: "network_error"
      });
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-[#1A1A1A] border-l-4 border-[#F09C00] p-6 opacity-0 animate-fade-up" style={{ animationFillMode: "both" }}>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-full bg-[#F09C00]/10 flex items-center justify-center text-[#F09C00]">
            <Check className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-white text-lg">Request Received</h3>
        </div>
        <p className="text-[#888] text-sm leading-relaxed pl-11">
          I will review your information and follow up shortly to discuss how we can generate more qualified calls for your business.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} onFocusCapture={markFormStarted} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-[10px] font-bold tracking-widest text-[#888] uppercase">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-[#0A0A0A] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#F09C00] transition-colors"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-[10px] font-bold tracking-widest text-[#888] uppercase">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-[#0A0A0A] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#F09C00] transition-colors"
            placeholder="(555) 555-5555"
          />
        </div>
      </div>
      
      <div className="space-y-1.5">
        <label htmlFor="email" className="text-[10px] font-bold tracking-widest text-[#888] uppercase">
            Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-[#0A0A0A] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#F09C00] transition-colors"
          placeholder="john@example.com"
        />
      </div>

      {status === "error" && (
        <div className="text-red-500 text-xs font-medium bg-red-500/10 border border-red-500/20 px-4 py-2">
          Something went wrong. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full mt-2 bg-[#F09C00] text-[#0A0A0A] font-bold uppercase tracking-widest text-sm py-4 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Get Started"}
      </button>
    </form>
  );
}
