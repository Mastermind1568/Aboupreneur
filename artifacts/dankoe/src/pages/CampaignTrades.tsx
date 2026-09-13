import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import { Check, ArrowUpRight } from "lucide-react";
import { getCampaignAttribution, trackEvent } from "@/lib/analytics";
import { useSEO } from "@/hooks/useSEO";

type Niche = "default" | "hvac" | "plumbing" | "newcomer" | "agri-food";

const CAMPAIGNS: Record<Niche, {
  h1: string;
  subhead: string;
  context: string;
  valueProps: [string, string, string];
  title: string;
  description: string;
  canonical: string;
}> = {
  default: {
    h1: "Fill Your Schedule & Your Crew",
    subhead: "Websites, ads, and recruiting help for Alberta trades businesses — one operator, one trade per city.",
    context: "We work with one HVAC company and one plumbing company per city — book a call to see if your city is still open.",
    valueProps: ["Fill Your Schedule", "Fill Your Crew", "Direct Access, No Overhead"],
    title: "Fill Your Schedule & Your Crew | Aboupreneur",
    description: "Websites, ads, and recruiting help for Alberta trades businesses — one operator, one trade per city.",
    canonical: "https://aboupreneur.page/get-in-touch",
  },
  hvac: {
    h1: "Keep Your HVAC Trucks on the Road — and Staffed",
    subhead: "High-converting websites, Google Ads, and recruiting support for heating and cooling specialists.",
    context: "We work with one HVAC company and one plumbing company per city — book a call to see if your city is still open.",
    valueProps: ["Fill Your Schedule", "Fill Your Crew", "Direct Access, No Overhead"],
    title: "Keep Your HVAC Trucks on the Road | Aboupreneur",
    description: "High-converting websites, Google Ads, and recruiting support for heating and cooling specialists.",
    canonical: "https://aboupreneur.page/get-in-touch/hvac",
  },
  plumbing: {
    h1: "More Emergency Calls. Fewer Empty Trucks",
    subhead: "Websites and Google Ads that bring in the calls — and help you find the crew to answer them.",
    context: "We work with one HVAC company and one plumbing company per city — book a call to see if your city is still open.",
    valueProps: ["Fill Your Schedule", "Fill Your Crew", "Direct Access, No Overhead"],
    title: "More Emergency Plumbing Calls | Aboupreneur",
    description: "Websites and Google Ads that bring in the calls — and help you find the crew to answer them.",
    canonical: "https://aboupreneur.page/get-in-touch/plumbing",
  },
  newcomer: {
    h1: "Build a Professional Presence That Opens Doors",
    subhead: "Clear websites and practical digital systems for newcomer entrepreneurs building trust and growing in Canada.",
    context: "You bring the experience and ambition. We turn it into a credible digital presence your customers can understand and trust.",
    valueProps: ["Build Credibility", "Explain Your Value", "Create a Growth Foundation"],
    title: "Websites for Newcomer Entrepreneurs | Aboupreneur",
    description: "Professional websites and practical digital systems for newcomer-owned businesses in Edmonton, Alberta, and Western Canada.",
    canonical: "https://aboupreneur.page/get-in-touch/newcomer",
  },
  "agri-food": {
    h1: "Turn a Strong Operation Into Market Demand",
    subhead: "Websites, go-to-market clarity, and measurable demand generation for agribusinesses, food producers, and specialty brands.",
    context: "Agribusiness-informed marketing built around your real product, route to market, seasonality, and operational capacity.",
    valueProps: ["Clarify Your Position", "Reach the Right Buyers", "Measure Real Demand"],
    title: "Agri-Food Marketing & Websites | Aboupreneur",
    description: "Websites and practical demand generation for Canadian agribusinesses, food producers, and specialty brands.",
    canonical: "https://aboupreneur.page/get-in-touch/agri-food",
  },
};

const nicheFromPath = (path: string): Niche => {
  const segment = path.split("/").filter(Boolean).at(-1);
  return segment === "hvac" ||
    segment === "plumbing" ||
    segment === "newcomer" ||
    segment === "agri-food"
    ? segment
    : "default";
};

export default function CampaignTrades() {
  const [location] = useLocation();
  const niche = nicheFromPath(location);
  const campaign = CAMPAIGNS[niche];

  useSEO({
    title: campaign.title,
    description: campaign.description,
    canonical: campaign.canonical,
  });

  useEffect(() => {
    trackEvent("landing_page_view", { landing_page: "get-in-touch", niche });
  }, [niche]);

  return (
    <main className="min-h-[100dvh] bg-[#0A0A0A] text-white selection:bg-[#B5FF3A] selection:text-[#0A0A0A]">
      <section className="grid min-h-[100dvh] grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-16 xl:px-24">
          <div className="mx-auto w-full max-w-xl">
            <h1 data-testid="text-campaign-h1" className="max-w-2xl font-display text-[clamp(2.75rem,5.2vw,5.6rem)] font-bold leading-[0.96] tracking-[-0.045em] text-white">
              {campaign.h1}
            </h1>
            <p data-testid="text-campaign-subhead" className="mt-7 max-w-lg text-lg leading-relaxed text-gray-300 sm:text-xl">
              {campaign.subhead}
            </p>
            <p data-testid="text-campaign-exclusivity" className="mt-7 max-w-md border-l-2 border-[#B5FF3A] pl-4 text-sm leading-relaxed text-gray-400">
              {campaign.context}
            </p>
            <LeadForm niche={niche} />
          </div>
        </div>

        <div
          aria-label="Placeholder visual area"
          data-testid="visual-campaign-placeholder"
          className="relative min-h-[360px] overflow-hidden border-t border-[#272727] bg-[#151515] lg:min-h-full lg:border-l lg:border-t-0"
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(181,255,58,.08) 0%, transparent 38%), linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)",
            backgroundSize: "100% 100%, 56px 56px, 56px 56px",
          }}
        >
          <div className="absolute inset-8 border border-[#3b3b3b] sm:inset-14 lg:inset-20" />
          <div className="absolute bottom-10 left-10 text-xs uppercase tracking-[0.2em] text-[#707070] sm:bottom-16 sm:left-16 lg:bottom-24 lg:left-24">
            Visual placeholder
          </div>
          <div className="absolute right-10 top-10 h-16 w-16 border-r border-t border-[#B5FF3A] sm:right-16 sm:top-16 lg:right-24 lg:top-24" />
        </div>
      </section>

      <section className="border-t-8 border-[#B5FF3A] bg-white px-6 py-16 text-[#0A0A0A] sm:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {campaign.valueProps.map((label, index) => (
            <div key={label} data-testid={`value-prop-${index + 1}`}>
              <span className="mb-6 block text-xs font-bold tracking-[0.2em] text-[#5f5f5f]">0{index + 1}</span>
              <h2 className="max-w-xs font-display text-2xl font-bold leading-tight sm:text-3xl">{label}</h2>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function LeadForm({ niche }: { niche: Niche }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ email: "", phone: "" });
  const started = useRef(false);

  const markStarted = () => {
    if (started.current) return;
    started.current = true;
    trackEvent("consulting_form_started", { landing_page: "get-in-touch", niche });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("https://formspree.io/f/xojkwbvq", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          ...getCampaignAttribution(),
          landing_page: "get-in-touch",
          niche,
          _subject: `New Lead: ${niche.toUpperCase()} Landing Page`,
        }),
      });
      if (!response.ok) {
        trackEvent("consulting_form_failed", { landing_page: "get-in-touch", niche, reason: "provider_error" });
        setStatus("error");
        return;
      }
      trackEvent("consulting_form_submitted", { landing_page: "get-in-touch", niche, form_provider: "formspree" });
      setForm({ email: "", phone: "" });
      setStatus("success");
    } catch {
      trackEvent("consulting_form_failed", { landing_page: "get-in-touch", niche, reason: "network_error" });
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div data-testid="status-form-success" role="status" className="mt-10 border border-[#B5FF3A] bg-[#151515] p-6">
        <Check className="mb-5 h-6 w-6 text-[#B5FF3A]" aria-hidden="true" />
        <h2 className="font-display text-xl font-bold text-white">Request received</h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-400">Thanks. We will be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} onFocusCapture={markStarted} className="mt-10 space-y-4" aria-busy={status === "loading"}>
      <input type="hidden" name="niche" value={niche} />
      <div>
        <label className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
          Phone
          <input data-testid="input-phone" type="tel" name="phone" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-2 w-full border border-[#3a3a3a] bg-[#111] px-4 py-3 text-base font-normal normal-case tracking-normal text-white outline-none transition-colors placeholder:text-[#666] focus:border-[#B5FF3A]" placeholder="Your phone" />
        </label>
      </div>
      <label className="block text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
        Email
        <input data-testid="input-email" type="email" name="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-2 w-full border border-[#3a3a3a] bg-[#111] px-4 py-3 text-base font-normal normal-case tracking-normal text-white outline-none transition-colors placeholder:text-[#666] focus:border-[#B5FF3A]" placeholder="you@company.com" />
      </label>
      {status === "error" && <p data-testid="status-form-error" role="alert" className="border border-red-400/50 bg-red-950/30 px-4 py-3 text-sm text-red-200">Something went wrong. Please try again.</p>}
      <button data-testid="button-submit-campaign" type="submit" disabled={status === "loading"} className="inline-flex w-full items-center justify-center gap-3 bg-[#B5FF3A] px-5 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#0A0A0A] transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-60">
        {status === "loading" ? "Sending..." : "Get in touch"}
        {status !== "loading" && <ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
      </button>
    </form>
  );
}