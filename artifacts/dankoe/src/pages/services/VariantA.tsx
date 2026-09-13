import { useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";
import { LandingNavbar } from "@/components/layout/LandingNavbar";
import { ConsultingInquiryForm } from "@/components/forms/ConsultingInquiryForm";
import {
  trackLandingCtaClick,
  trackLandingPageView,
} from "@/lib/analytics";

export default function VariantA() {
  useSEO({
    title: "Digital Infrastructure for Operators | ABOUPRENEUR",
    description:
      "Stop relying on tactics. Build digital infrastructure that scales.",
  });

  useEffect(() => {
    trackLandingPageView("variant-a");
  }, []);

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#F2A900] selection:text-black font-sans">
      <LandingNavbar hideLink />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#F2A900] text-xs font-bold tracking-[0.2em] uppercase mb-6 block animate-fade-up">
            Digital Infrastructure
          </span>
          <h1
            className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            SCALE <br />
            <span className="text-[#444444]">WITHOUT</span> <br />
            COMPROMISE
          </h1>
          <p
            className="text-[#888888] text-lg md:text-xl max-w-md leading-relaxed mb-10 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Tactics expire. Infrastructure compounds. We build the websites,
            acquisition systems, and AI workflows that elite operators use to
            dominate their markets.
          </p>
          <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="#apply"
              onClick={() => trackLandingCtaClick("variant-a", "hero")}
              className="inline-flex items-center justify-center px-10 py-5 bg-[#F2A900] text-[#0A0A0A] font-bold text-sm tracking-widest uppercase hover:bg-white transition-colors duration-300"
            >
              Start the build
            </a>
          </div>
        </div>
        <div
          className="hidden lg:block relative animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="aspect-square bg-[#111111] border border-[#222222] relative overflow-hidden flex items-center justify-center">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(#F2A900 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            ></div>
            <div className="w-64 h-64 border border-[#F2A900] rotate-45 flex items-center justify-center">
              <div className="w-32 h-32 bg-[#F2A900] -rotate-45 transition-transform duration-700 hover:rotate-90"></div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem / Solution */}
      <section className="py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#222222] pt-16">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4 text-white">
              01 // The Liability
            </h3>
            <p className="text-[#888888] leading-relaxed">
              A slow, generic website isn't just a missed opportunity—it
              actively repels high-value clients and sabotages your ad spend.
              It's time to stop bleeding trust.
            </p>
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold mb-4 text-[#F2A900]">
              02 // The Foundation
            </h3>
            <p className="text-[#888888] leading-relaxed">
              Custom-built digital infrastructure designed strictly for
              performance, speed, and conversion. No templates, no bloat. Just
              systems that work.
            </p>
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold mb-4 text-white">
              03 // The Scale
            </h3>
            <p className="text-[#888888] leading-relaxed">
              Once the foundation is solid, we pump targeted Google and Meta ads
              through it. Predictable, measurable acquisition for operators who
              demand ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section
        id="apply"
        className="py-24 md:py-32 px-6 md:px-10 bg-[#111111] border-t border-[#222222]"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
              Demand More From Your Digital Presence
            </h2>
            <p className="text-[#888888] text-lg max-w-xl mx-auto">
              Submit your details below. We'll review your current setup and
              follow up to discuss whether we're the right fit.
            </p>
          </div>

          <div className="bg-[#0A0A0A] p-8 md:p-12 border border-[#222222]">
            <ConsultingInquiryForm
              variant="variant-a"
              buttonClassName="bg-[#F2A900] text-[#0A0A0A] hover:bg-white uppercase tracking-widest"
              inputClassName="bg-[#111111] border-[#333333] focus:border-[#F2A900] text-white"
              labelClassName="text-[#888888] text-xs font-bold tracking-widest uppercase"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-[#222222] text-[#444444] text-xs font-bold tracking-widest uppercase">
        © {new Date().getFullYear()} Aboupreneur. All Rights Reserved.
      </footer>
    </main>
  );
}
