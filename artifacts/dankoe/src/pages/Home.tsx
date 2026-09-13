import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";

const recentPosts = [
  {
    date: "APR 2026",
    title: "Why Personal Brand Is the New Resume (And What Most People Get Wrong About It)",
    excerpt: "In a world where talent is everywhere, the person with a clear identity wins.",
    href: "/blog/why-personal-brand-matters",
  },
  {
    date: "APR 2026",
    title: "AI Automation for Small Business / What's Actually Worth Building",
    excerpt: "AI is everywhere. Most of it is noise. Here's what actually saves time and compounds.",
    href: "/blog/ai-automation-small-business",
  },
  {
    date: "APR 2026",
    title: "Farm to Funnel / A Go-to-Market Strategy for a Food Brand Launching in Canada",
    excerpt: "Most food brands build a great product and hope for the best. Here's how to build the funnel first.",
    href: "/blog/food-brand-gtm-strategy",
  },
];

export default function Home() {
  useSEO({
    title: "ABOUPRENEUR | Digital Infrastructure for the Real Economy",
    description:
      "Websites, local search visibility, paid acquisition, and AI automation for home services, trades, and agribusiness. One accountable operator.",
    canonical: "https://aboupreneur.page/",
  });

  return (
    <main className="bg-[#0A0A0A]">
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative flex flex-col items-center justify-center text-center"
        style={{ minHeight: "100vh", padding: "120px 40px 100px" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(242,169,0,0.05) 0%, transparent 65%)" }}
        />

        <h1
          className="font-display font-bold mb-8 relative"
          style={{ fontSize: "clamp(3rem, 8vw, 6rem)", letterSpacing: "-0.04em", lineHeight: "1.02" }}
        >
          <span className="block text-white">Digital infrastructure</span>
          <span className="block text-white">for the</span>
          <span className="block" style={{ color: "#F2A900" }}>real economy</span>
        </h1>

        <p
          className="mb-12 relative"
          style={{ color: "#888888", fontSize: "clamp(1rem, 2vw, 1.2rem)", maxWidth: "600px", lineHeight: "1.7" }}
        >
          Websites, local visibility, paid acquisition, and practical AI automation for home services, 
          trades, and agribusiness. Stop fighting your tech stack. Start booking more work.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 relative">
          <Link
            href="/contact"
            className="text-sm font-bold px-8 py-4 transition-all duration-200"
            style={{ border: "1px solid #F2A900", color: "#0A0A0A", background: "#F2A900" }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "transparent";
              el.style.color = "#F2A900";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#F2A900";
              el.style.color = "#0A0A0A";
            }}
          >
            START A PROJECT →
          </Link>
          <Link
            href="/ecosystem"
            className="text-sm font-bold px-8 py-4 transition-all duration-200"
            style={{ border: "1px solid #333333", color: "#888888" }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "#FFFFFF";
              el.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "#333333";
              el.style.color = "#888888";
            }}
          >
            EXPLORE SERVICES
          </Link>
        </div>
      </section>

      {/* ── WHO I WORK WITH ── */}
      <section className="bg-white" style={{ padding: "100px 40px" }}>
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold block mb-6" style={{ color: "#F2A900", letterSpacing: "0.12em" }}>
            THE AUDIENCE
          </span>
          <h2
            className="font-display font-bold text-[#0A0A0A] mb-16"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}
          >
            "Built for operators who<br />do the actual work"
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/home-services-trades" className="group p-8 flex flex-col gap-4 transition-colors hover:bg-[#F7F7F7]" style={{ border: "1px solid #E5E5E5" }}>
              <h3 className="font-display font-bold text-[#0A0A0A] text-2xl">Home Services & Trades</h3>
              <p className="text-sm text-[#444444] leading-relaxed">
                Plumbers, HVAC technicians, electricians, roofers, and landscapers across Canada and the US, with a strong focus on Edmonton and Alberta. I build systems designed to turn local visibility into more qualified calls.
              </p>
              <span className="mt-auto text-xs font-bold text-[#B77F00]">EXPLORE HOME SERVICES →</span>
            </Link>
            <Link href="/newcomer-owned-businesses" className="group p-8 flex flex-col gap-4 transition-colors hover:bg-[#F7F7F7]" style={{ border: "1px solid #E5E5E5" }}>
              <h3 className="font-display font-bold text-[#0A0A0A] text-2xl">Newcomer-Owned SMBs</h3>
              <p className="text-sm text-[#444444] leading-relaxed">
                Immigrant and newcomer entrepreneurs in Western Canada who need a credible first professional web presence. You brought the ambition. I provide the practical digital infrastructure to compete.
              </p>
              <span className="mt-auto text-xs font-bold text-[#B77F00]">BUILD YOUR FIRST PRESENCE →</span>
            </Link>
            <Link href="/agri-food-marketing" className="group p-8 flex flex-col gap-4 transition-colors hover:bg-[#F7F7F7]" style={{ border: "1px solid #E5E5E5" }}>
              <h3 className="font-display font-bold text-[#0A0A0A] text-2xl">Agri-food & Specialty</h3>
              <p className="text-sm text-[#444444] leading-relaxed">
                Canadian agribusinesses and specialty food companies. Backed by a verified agribusiness diploma, I bridge the gap between operations and digital growth without the empty agency jargon.
              </p>
              <span className="mt-auto text-xs font-bold text-[#B77F00]">EXPLORE AGRI-FOOD GROWTH →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── THE SYSTEM ── */}
      <section className="bg-[#0A0A0A]" style={{ padding: "100px 40px" }}>
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold block mb-6" style={{ color: "#F2A900", letterSpacing: "0.12em" }}>
            THE OFFERS
          </span>
          <h2
            className="font-display font-bold text-white mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}
          >
            "Three pillars of growth.<br />One accountable operator"
          </h2>
          <p className="mb-16" style={{ color: "#888888", fontSize: "18px", maxWidth: "600px", lineHeight: "1.7" }}>
            I don't sell bloated retainers. I build project-based infrastructure and offer ongoing engagement models when they actually make sense for your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Launch the Presence",
                body: "A credible, fast, mobile-ready website that answers exactly what you do, who you serve, and how to contact you. Designed to turn traffic into direct inquiries.",
                tags: "Websites · Landing Pages",
              },
              {
                num: "02",
                title: "Generate Demand",
                body: "Help customers find you when they need you. Measurable local search visibility, Google Ads, and targeted campaigns designed to support more qualified inquiries.",
                tags: "Local SEO · Paid Ads",
              },
              {
                num: "03",
                title: "Automate Operations",
                body: "Stop dropping leads. Practical AI automation for lead intake, follow-ups, and backend workflows so you can focus on the tools, not the keyboard.",
                tags: "AI Workflows · CRM",
              },
            ].map((card) => (
              <div
                key={card.num}
                className="p-8 flex flex-col gap-4"
                style={{ borderLeft: "3px solid #F2A900", background: "#111111" }}
              >
                <span className="text-xs font-bold" style={{ color: "#F2A900", letterSpacing: "0.14em" }}>
                  PHASE {card.num}
                </span>
                <h3 className="font-display font-bold text-white" style={{ fontSize: "1.75rem", letterSpacing: "-0.02em" }}>
                  {card.title}
                </h3>
                <p className="text-sm flex-1" style={{ color: "#888888", lineHeight: "1.7" }}>
                  {card.body}
                </p>
                <span className="text-xs" style={{ color: "#F2A900" }}>→ {card.tags}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold px-8 py-4 transition-all duration-200"
              style={{ border: "1px solid #F2A900", color: "#F2A900" }}
            >
              INQUIRE ABOUT SERVICES →
            </Link>
          </div>
        </div>
      </section>

      {/* ── THE OPERATOR ── */}
      <section className="bg-white" style={{ padding: "100px 40px" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-16 lg:gap-24 items-center">
            <div>
              <span className="text-xs font-bold block mb-6" style={{ color: "#F2A900", letterSpacing: "0.12em" }}>
                THE OPERATOR
              </span>
              <h2
                className="font-display font-bold text-[#0A0A0A] mb-8"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}
              >
                "I didn't learn accountability from a textbook"
              </h2>
              <div className="space-y-5" style={{ color: "#444444", fontSize: "16px", lineHeight: "1.8" }}>
                <p>
                  From building my first business in Cameroon to studying agribusiness at Lakeland College in Alberta, I've always understood that results matter more than jargon.
                </p>
                <p>
                  I'm currently pursuing the Chartered Marketer designation, but my approach is built on practical reality. You don't need a massive agency playing guessing games with your budget. You need one accountable, AI-fluent operator who understands both digital systems and physical operations.
                </p>
                <p>
                  I build digital infrastructure for operators who refuse to lose local market share. We measure success in calls, inquiries, and booked work.
                </p>
              </div>
              <Link
                href="/story"
                className="inline-flex items-center gap-2 mt-8 text-sm font-bold transition-colors duration-200 hover:underline"
                style={{ color: "#F2A900" }}
              >
                READ THE FULL STORY →
              </Link>
            </div>

            <div className="w-full overflow-hidden" style={{ aspectRatio: "3/4", background: "#111111" }}>
              <img
                src="/images/headshot.jpg"
                alt="Aboubakar Moussa Aboupreneur"
                className="w-full h-full object-cover object-top"
                style={{ filter: "grayscale(15%)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── LATEST WRITING ── */}
      <section className="bg-[#0A0A0A]" style={{ padding: "80px 40px" }}>
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold block mb-4" style={{ color: "#F2A900", letterSpacing: "0.12em" }}>
            FROM THE MIND
          </span>
          <div className="flex flex-wrap items-baseline gap-3 mb-16">
            <h2
              className="font-display font-bold text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", letterSpacing: "-0.03em" }}
            >
              The signal
            </h2>
            <h2
              className="font-display font-bold"
              style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", letterSpacing: "-0.03em", color: "#F2A900" }}
            >
              Not noise
            </h2>
          </div>

          <div className="mb-12">
            {recentPosts.map((post, i) => (
              <a
                key={i}
                href={post.href}
                className="flex items-start justify-between py-8 group transition-colors duration-200"
                style={{ borderBottom: "1px solid #222222" }}
              >
                <div className="flex-1 pr-8">
                  <span
                    className="text-xs block mb-2"
                    style={{ color: "#888888", letterSpacing: "0.08em" }}
                  >
                    {post.date}
                  </span>
                  <h3
                    className="font-display font-bold text-white mb-2 group-hover:text-accent transition-colors duration-200"
                    style={{ fontSize: "1.1rem", letterSpacing: "-0.01em" }}
                  >
                    {post.title}
                  </h3>
                  <p style={{ color: "#888888", fontSize: "14px", lineHeight: "1.6" }}>
                    {post.excerpt}
                  </p>
                </div>
                <span
                  className="text-xl transition-transform duration-200 group-hover:translate-x-2 shrink-0 mt-6"
                  style={{ color: "#F2A900" }}
                >
                  →
                </span>
              </a>
            ))}
          </div>

          <Link
            href="/writing"
            className="inline-flex items-center gap-2 text-sm font-bold px-8 py-4 transition-all duration-200"
            style={{ border: "1px solid #333333", color: "#888888" }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "#F2A900";
              el.style.color = "#F2A900";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "#333333";
              el.style.color = "#888888";
            }}
          >
            READ EVERYTHING →
          </Link>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{ background: "#F2A900", padding: "100px 40px" }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-display font-bold text-[#0A0A0A] mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", letterSpacing: "-0.04em", lineHeight: "1.05" }}
          >
            "Your next customer is<br />searching right now"
          </h2>
          <p
            className="mb-10"
            style={{ color: "#0A0A0A", fontSize: "18px", maxWidth: "520px", lineHeight: "1.7" }}
          >
            Let's build digital infrastructure that makes your business easier to find and contact. Reach out to discuss websites, local visibility, or practical automation.
          </p>

          <Link
            href="/contact"
            className="inline-block text-sm font-bold px-8 py-4 whitespace-nowrap transition-all duration-200"
            style={{ background: "#0A0A0A", color: "#F2A900" }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "#FFFFFF"; el.style.color = "#0A0A0A"; }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "#0A0A0A"; el.style.color = "#F2A900"; }}
          >
            START A CONVERSATION
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
