import { useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";
import { LandingNavbar } from "@/components/layout/LandingNavbar";
import { ConsultingInquiryForm } from "@/components/forms/ConsultingInquiryForm";
import {
  trackLandingCtaClick,
  trackLandingPageView,
} from "@/lib/analytics";

export default function VariantB() {
  useSEO({
    title: "Professional Marketing Support | ABOUPRENEUR",
    description:
      "Accountable, founder-led digital marketing and web development for small businesses.",
  });

  useEffect(() => {
    trackLandingPageView("variant-b");
  }, []);

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-white selection:text-black">
      <LandingNavbar hideLink />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-10 max-w-4xl mx-auto text-center animate-fade-up">
        <span className="text-[#F2A900] text-sm font-semibold tracking-widest uppercase mb-6 block">
          For Ambitious Small Businesses
        </span>
        <h1 className="font-display font-medium text-4xl md:text-5xl lg:text-6xl leading-[1.15] mb-8 text-[#EFEFEF] tracking-tight">
          Marketing that makes sense.
          <br />
          Systems that actually work
        </h1>
        <p className="text-[#A0A0A0] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          Skip the anonymous agency experience. Get direct, accountable,
          founder-led support to build a credible website and predictable paid
          acquisition.
        </p>
        <a
          href="#consultation"
          onClick={() => trackLandingCtaClick("variant-b", "hero")}
          className="inline-flex items-center justify-center px-8 py-4 border border-[#333333] hover:border-white hover:text-white text-[#CCCCCC] font-semibold text-sm tracking-wide transition-all duration-300 rounded-sm bg-[#111111]"
        >
          Request a Consultation
        </a>
      </section>

      {/* Trust Builders */}
      <section className="py-16 px-6 md:px-10 border-y border-[#1A1A1A] bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div
            className="flex flex-col items-center md:items-start animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-6 text-[#F2A900]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-medium mb-3 text-white">
              Founder-Led Accountability
            </h3>
            <p className="text-[#888888] leading-relaxed text-sm">
              You work directly with the person building your systems. No junior
              account managers, no communication silos, no disappearing acts.
            </p>
          </div>
          <div
            className="flex flex-col items-center md:items-start animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-6 text-[#F2A900]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 12h4l3-9 5 18 3-9h5" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-medium mb-3 text-white">
              Measurable Acquisition
            </h3>
            <p className="text-[#888888] leading-relaxed text-sm">
              We focus on metrics that actually matter to your bottom
              line—qualified leads, booked appointments, and revenue. Not vanity
              metrics.
            </p>
          </div>
          <div
            className="flex flex-col items-center md:items-start animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-6 text-[#F2A900]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-medium mb-3 text-white">
              Credible Web Presence
            </h3>
            <p className="text-[#888888] leading-relaxed text-sm">
              Websites engineered for trust and speed. We build fast,
              professional platforms that position you as the definitive choice
              in your market.
            </p>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-24 px-6 md:px-10 max-w-4xl mx-auto">
        <h2 className="font-display text-3xl font-medium mb-12 text-center text-white">
          How we work together
        </h2>
        <div className="space-y-0">
          <div className="flex gap-6 md:gap-10">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border border-[#333333] flex items-center justify-center text-[#888888] text-sm shrink-0 bg-[#0A0A0A]">
                1
              </div>
              <div className="w-px h-full bg-[#1A1A1A] mt-2 mb-2"></div>
            </div>
            <div className="pb-12 pt-1">
              <h4 className="text-xl font-medium mb-3 text-[#EFEFEF]">
                The Conversation
              </h4>
              <p className="text-[#888888] leading-relaxed">
                We start with a frank discussion about where your business is,
                where you want it to go, and whether we're the right fit to get
                you there. No high-pressure sales.
              </p>
            </div>
          </div>
          <div className="flex gap-6 md:gap-10">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border border-[#333333] flex items-center justify-center text-[#888888] text-sm shrink-0 bg-[#0A0A0A]">
                2
              </div>
              <div className="w-px h-full bg-[#1A1A1A] mt-2 mb-2"></div>
            </div>
            <div className="pb-12 pt-1">
              <h4 className="text-xl font-medium mb-3 text-[#EFEFEF]">
                The Blueprint
              </h4>
              <p className="text-[#888888] leading-relaxed">
                If we proceed, we design a clear, actionable plan. Whether
                that's a new web architecture or a Google Ads campaign, you'll
                know exactly what's being built and why.
              </p>
            </div>
          </div>
          <div className="flex gap-6 md:gap-10">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border border-[#333333] flex items-center justify-center text-[#888888] text-sm shrink-0 bg-[#0A0A0A]">
                3
              </div>
            </div>
            <div className="pb-8 pt-1">
              <h4 className="text-xl font-medium mb-3 text-[#EFEFEF]">
                The Execution
              </h4>
              <p className="text-[#888888] leading-relaxed">
                We build, launch, and manage the systems. You receive
                transparent reporting and direct communication throughout the
                lifecycle of the project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section
        id="consultation"
        className="py-24 px-6 md:px-10 bg-[#0D0D0D] border-t border-[#1A1A1A]"
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-medium mb-4 text-white">
              Let's discuss your business
            </h2>
            <p className="text-[#888888] text-lg">
              Fill out the brief form below. I will personally review your
              inquiry and follow up to schedule a call.
            </p>
          </div>

          <div className="bg-[#111111] p-8 md:p-10 rounded-lg border border-[#1A1A1A] shadow-2xl">
            <ConsultingInquiryForm
              variant="variant-b"
              buttonClassName="bg-white text-black hover:bg-[#F2A900] rounded-md tracking-wide"
              inputClassName="bg-[#0A0A0A] border-[#222222] focus:border-[#444444] text-white rounded-md shadow-inner"
              labelClassName="text-[#A0A0A0] text-sm font-medium mb-1 tracking-wide"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-[#1A1A1A] text-[#666666] text-sm">
        © {new Date().getFullYear()} Aboupreneur. All Rights Reserved.
      </footer>
    </main>
  );
}
