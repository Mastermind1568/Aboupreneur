import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useSEO } from "@/hooks/useSEO";
import { Link } from "wouter";
import {
  getApprovedTestimonial,
  type TestimonialId,
} from "@/content/testimonialApprovals";

type Tab = "COMMERCIAL SERVICES" | "CLIENT WORK" | "CONTENT ECOSYSTEM";

type ClientProject = {
  name: string;
  client: string;
  url: string;
  href: string;
  services: string[];
  result: string;
  testimonialId: TestimonialId | null;
};

const commercialServices = [
  {
    phase: "PHASE 01",
    status: "ACCEPTING INQUIRIES",
    statusStyle: { background: "#222222", color: "#888888" },
    title: "Web Presence & Launch",
    sub: "A credible digital storefront designed to support conversion.",
    bg: "#FFFFFF",
    textColor: "#0A0A0A",
    description: `A bad website silently kills your credibility. For home services, trades, and agribusinesses, your website has one job: convince the visitor you are the right professional to call.\n\nI design and build fast, mobile-ready websites that clearly explain what you do, who you serve, and how to get in touch. No bloated templates, just a high-performing digital asset.`,
    list: [
      "Custom responsive website design and development",
      "Clear, concrete copywriting that speaks to your local market",
      "Lead capture forms and click-to-call integration",
      "Fast load times and solid technical foundation",
    ],
    ctaLabel: "INQUIRE ABOUT WEBSITES",
    ctaHref: "/contact",
    ctaPrimary: true,
  },
  {
    phase: "PHASE 02",
    status: "ACCEPTING INQUIRIES",
    statusStyle: { background: "#222222", color: "#888888" },
    title: "Demand Generation",
    sub: "Measurable search visibility and paid acquisition.",
    bg: "#0A0A0A",
    textColor: "#FFFFFF",
    description: `Having a great website doesn't matter if no one can find it. When a homeowner in Edmonton needs a plumber, or a contractor needs an electrician, they search Google. If you aren't visible, you may lose the opportunity.\n\nI build targeted acquisition systems using local SEO and Google Ads to improve your visibility when search intent is highest.`,
    list: [
      "Local SEO to improve map visibility and neighborhood discovery",
      "Google Ads management for high-intent service queries",
      "Measurable acquisition campaigns that track actual inquiries",
      "Ongoing optimization to reduce cost-per-lead",
    ],
    ctaLabel: "INQUIRE ABOUT DEMAND GEN",
    ctaHref: "/contact",
    ctaPrimary: true,
  },
  {
    phase: "PHASE 03",
    status: "ACCEPTING INQUIRIES",
    statusStyle: { background: "#222222", color: "#888888" },
    title: "AI Automation",
    sub: "Practical operations and backend workflows.",
    bg: "#FFFFFF",
    textColor: "#0A0A0A",
    description: `You may be losing opportunities because you are busy on the tools and can't answer the phone or follow up fast enough. AI isn't just a buzzword; it can be a practical tool for reducing operational gaps.\n\nI implement practical AI workflows that support immediate lead follow-up, simple intake questions, and CRM syncing to reduce missed inquiries.`,
    list: [
      "Automated lead response and SMS follow-ups",
      "CRM integration and pipeline management",
      "AI-assisted intake forms and qualification routing",
      "Review generation automation for completed jobs",
    ],
    ctaLabel: "INQUIRE ABOUT AUTOMATION",
    ctaHref: "/contact",
    ctaPrimary: true,
  },
];

const clientWork: ClientProject[] = [
  {
    name: "The Bitcoin Kids",
    client: "Nzonda Fotsing",
    url: "thebitcoinkids.com",
    href: "https://thebitcoinkids.com",
    services: ["Digital Marketing", "Demand Generation", "Content Strategy", "International Outreach"],
    result: "Led the full sales and promotion strategy for a youth-focused financial literacy comic book, achieving 1,000+ copies sold across 12+ countries.",
    testimonialId: "bitcoin-kids-nzonda",
  },
  {
    name: "Asabis",
    client: "Niba Emmanuel",
    url: "asabis.ca",
    href: "https://asabis.ca",
    services: ["Web Design", "Social Content", "Google Ads", "GA4", "Email"],
    result: "Professional website for an accounting firm with a social-to-client funnel that converts.",
    testimonialId: "asabis-niba",
  },
  {
    name: "Miratus Accounting",
    client: "Miratus Accounting & Tax Services",
    url: "miratusaccounting.ca",
    href: "https://miratusaccounting.ca",
    services: ["Web Design", "Conversion Copy", "Local SEO", "Booking Funnel"],
    result: "Trust-focused website for an Edmonton CPA firm, with clear tax-service positioning and a consultation booking path.",
    testimonialId: null,
  },
  {
    name: "Miratus Ltd",
    client: "Mirabelle Nchangwi",
    url: "miratusltd.ca",
    href: "https://miratusltd.ca",
    services: ["Web Design", "Meta Ads", "Google Ads", "GA4", "SEO"],
    result: "Professional website for a staffing agency built with clear service packages and an intake funnel.",
    testimonialId: "miratus-ltd-mirabelle",
  },
  {
    name: "FA Law Office",
    client: "Ferdinand N. Anomah",
    url: "falawoffice.com",
    href: "https://falawoffice.com",
    services: ["Web Design"],
    result: "Professional law-firm website with practice pages, credibility elements, and qualified inquiry tracking.",
    testimonialId: "fa-law-ferdinand",
  },
  {
    name: "Miratus Accounting",
    client: "Miratus Accounting & Tax Services",
    url: "miratusaccounting.ca",
    href: "https://miratusaccounting.ca",
    services: ["Web Design"],
    result: "Professional accounting website with clear service information, trust signals, and consultation-focused calls to action.",
    testimonialId: null,
  },
];

export default function Ecosystem() {
  useSEO({
    title: "Services & Ecosystem | ABOUPRENEUR",
    description: "Websites, local search visibility, and AI automation for home services, trades, and agribusiness. Project-based and ongoing engagement models.",
    canonical: "https://aboupreneur.page/ecosystem",
  });

  const [activeTab, setActiveTab] = useState<Tab>("COMMERCIAL SERVICES");
  const tabs: Tab[] = ["COMMERCIAL SERVICES", "CLIENT WORK", "CONTENT ECOSYSTEM"];

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      <section style={{ padding: "120px 40px 80px" }} className="max-w-7xl mx-auto">
        <span className="text-xs font-bold block mb-6" style={{ color: "#F2A900", letterSpacing: "0.12em" }}>
          SERVICES & ECOSYSTEM
        </span>
        <h1
          className="font-display font-bold text-white mb-6"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", letterSpacing: "-0.03em", lineHeight: "1.05" }}
        >
          "Infrastructure that scales<br />your local presence"
        </h1>
        <p style={{ color: "#888888", fontSize: "18px", maxWidth: "560px", lineHeight: "1.7" }}>
          I work as an integrated operator. No bloated agency structures. 
          Available through project-based buildouts or ongoing performance engagements.
          Pricing is scoped privately after an initial consultation.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-10 mb-16">
        <div className="flex flex-wrap items-center gap-0" style={{ borderBottom: "1px solid #222222" }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="text-xs font-bold px-6 py-4 transition-colors duration-200 whitespace-nowrap"
              style={{
                color: activeTab === tab ? "#F2A900" : "#888888",
                borderBottom: activeTab === tab ? "2px solid #F2A900" : "2px solid transparent",
                letterSpacing: "0.08em",
                marginBottom: "-1px",
                background: "transparent",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div>
        {activeTab === "COMMERCIAL SERVICES" && (
          <div>
            {commercialServices.map((product, i) => (
              <section
                key={product.title}
                style={{
                  background: product.bg,
                  padding: "80px 40px",
                  borderTop: i === 0 ? "none" : `1px solid ${product.bg === "#FFFFFF" ? "#E5E5E5" : "#1A1A1A"}`,
                }}
              >
                <div className="max-w-7xl mx-auto">
                  <div className="flex items-center gap-4 mb-8">
                    <span
                      className="text-xs font-bold px-3 py-1"
                      style={{ border: "1px solid #F2A900", color: "#F2A900", letterSpacing: "0.1em" }}
                    >
                      {product.phase}
                    </span>
                  </div>

                  <h2
                    className="font-display font-bold mb-3"
                    style={{
                      fontSize: "clamp(2rem, 5vw, 3rem)",
                      letterSpacing: "-0.03em",
                      color: product.textColor,
                    }}
                  >
                    {product.title}
                  </h2>
                  <p className="text-xl mb-10" style={{ color: "#888888" }}>{product.sub}</p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                      {product.description.split("\n\n").map((para, j) => (
                        <p
                          key={j}
                          className="mb-5"
                          style={{ color: product.bg === "#FFFFFF" ? "#444444" : "#888888", lineHeight: "1.8", fontSize: "16px" }}
                        >
                          {para}
                        </p>
                      ))}
                    </div>

                    <div>
                      <p className="text-xs font-bold mb-4" style={{ color: "#F2A900", letterSpacing: "0.1em" }}>
                        WHAT'S INCLUDED
                      </p>
                      <ul className="space-y-3 mb-10">
                        {product.list.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm"
                            style={{ color: product.bg === "#FFFFFF" ? "#444444" : "#888888", lineHeight: "1.6" }}
                          >
                            <span style={{ color: "#F2A900", marginTop: "2px" }}></span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={product.ctaHref}
                        className="inline-flex items-center gap-2 text-sm font-bold px-8 py-4 transition-all duration-200"
                        style={
                          product.ctaPrimary
                            ? { background: "#F2A900", color: "#0A0A0A" }
                            : { border: "1px solid #F2A900", color: "#F2A900" }
                        }
                      >
                        {product.ctaLabel} →
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        )}

        {activeTab === "CLIENT WORK" && (
          <section style={{ background: "#111111", padding: "80px 40px", minHeight: "60vh" }}>
            <div className="max-w-7xl mx-auto">
              <span className="text-xs font-bold block mb-6" style={{ color: "#F2A900", letterSpacing: "0.12em" }}>
                SELECTED WORK
              </span>
              <h2
                className="font-display font-bold text-white mb-4"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}
              >
                Real brands / Real results
              </h2>
              <p className="mb-16" style={{ color: "#888888", fontSize: "16px", lineHeight: "1.7", maxWidth: "520px" }}>
                Every engagement is a system build, not a single deliverable. Here's what that looks like in practice.
              </p>

              <div className="space-y-0">
                {clientWork.map((project, i) => {
                  const testimonial = project.testimonialId
                    ? getApprovedTestimonial(project.testimonialId)
                    : null;

                  return (
                  <div
                    key={project.name}
                    className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-0"
                    style={{ borderTop: i === 0 ? "1px solid #222222" : "none", borderBottom: "1px solid #222222" }}
                  >
                    <div
                      className="flex flex-col justify-between"
                      style={{ padding: "40px 40px 40px 0", borderRight: "1px solid #222222" }}
                    >
                      <div>
                        <h3
                          className="font-display font-bold text-white mb-1"
                          style={{ fontSize: "1.5rem", letterSpacing: "-0.02em" }}
                        >
                          {project.name}
                        </h3>
                        <p className="text-sm mb-4" style={{ color: "#888888" }}>
                          {project.client}
                        </p>
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold transition-colors duration-200"
                          style={{ color: "#F2A900", letterSpacing: "0.06em" }}
                        >
                          {project.url} →
                        </a>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-6">
                        {project.services.map((s) => (
                          <span
                            key={s}
                            className="text-xs font-bold px-2 py-1"
                            style={{ border: "1px solid #333333", color: "#888888", letterSpacing: "0.04em" }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={{ padding: "40px 0 40px 40px" }}>
                      <p
                        className="mb-6"
                        style={{ color: "#CCCCCC", fontSize: "16px", lineHeight: "1.8", maxWidth: "600px" }}
                      >
                        {project.result}
                      </p>
                      {testimonial && (
                        <div style={{ borderLeft: "3px solid #F2A900", paddingLeft: "20px" }}>
                          <p className="italic text-sm" style={{ color: "#888888", lineHeight: "1.8" }}>
                            "{testimonial.approvedQuote}" — {testimonial.approvedAttribution}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  );
                })}
              </div>

              <div className="mt-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold px-8 py-4 transition-all duration-200"
                  style={{ background: "#F2A900", color: "#0A0A0A" }}
                >
                  START A PROJECT →
                </Link>
              </div>
            </div>
          </section>
        )}

        {activeTab === "CONTENT ECOSYSTEM" && (
          <section style={{ background: "#0A0A0A", padding: "80px 40px", minHeight: "60vh" }}>
            <div className="max-w-7xl mx-auto">
              <span className="text-xs font-bold block mb-6" style={{ color: "#F2A900", letterSpacing: "0.12em" }}>
                THE CONTENT ECOSYSTEM
              </span>
              <h2
                className="font-display font-bold text-white mb-4"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}
              >
                Channels & Newsletters
              </h2>
              <p className="mb-16" style={{ color: "#888888", fontSize: "16px", lineHeight: "1.7", maxWidth: "520px" }}>
                Deep dives, frameworks, and insights into the modern economy.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ border: "1px solid #222222" }}>
                <div style={{ background: "#111111", padding: "48px 40px", borderBottom: "1px solid #222222" }}>
                  <span className="text-xs font-bold block mb-3" style={{ color: "#888888", letterSpacing: "0.1em" }}>NEWSLETTER / SUBSTACK</span>
                  <h3 className="font-display font-bold text-white mb-3" style={{ fontSize: "1.75rem", letterSpacing: "-0.02em" }}>
                    MINDBLOOM
                  </h3>
                  <p className="mb-8" style={{ color: "#888888", fontSize: "15px", lineHeight: "1.7" }}>
                    Weekly frameworks on execution, sound money, and building from zero. No trending takes. No motivational noise.
                  </p>
                  <a
                    href="https://aboupreneur.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold px-7 py-3 transition-all duration-200"
                    style={{ background: "#F2A900", color: "#0A0A0A" }}
                  >
                    SUBSCRIBE ON SUBSTACK →
                  </a>
                </div>

                <div style={{ background: "#111111", padding: "48px 40px", borderBottom: "1px solid #222222", borderLeft: "1px solid #222222" }}>
                  <span className="text-xs font-bold block mb-3" style={{ color: "#888888", letterSpacing: "0.1em" }}>NEWSLETTER / LINKEDIN</span>
                  <h3 className="font-display font-bold text-white mb-3" style={{ fontSize: "1.75rem", letterSpacing: "-0.02em" }}>
                    FARM TO FUNNEL
                  </h3>
                  <p className="mb-8" style={{ color: "#888888", fontSize: "15px", lineHeight: "1.7" }}>
                    Where agribusiness meets digital marketing. Built for operators who know soil better than social media.
                  </p>
                  <a
                    href="https://www.linkedin.com/newsletters/farm-to-funnel-7409350357295923200"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold px-7 py-3 transition-all duration-200"
                    style={{ background: "#F2A900", color: "#0A0A0A" }}
                  >
                    SUBSCRIBE ON LINKEDIN →
                  </a>
                </div>

                <div style={{ background: "#111111", padding: "48px 40px" }}>
                  <span className="text-xs font-bold block mb-3" style={{ color: "#888888", letterSpacing: "0.1em" }}>SOCIAL / INSTAGRAM</span>
                  <h3 className="font-display font-bold text-white mb-3" style={{ fontSize: "1.75rem", letterSpacing: "-0.02em" }}>
                    @ABOUPRENEUR
                  </h3>
                  <p className="mb-8" style={{ color: "#888888", fontSize: "15px", lineHeight: "1.7" }}>
                    Behind the build. Behind the brand. Real-time documentation of the journey in short form.
                  </p>
                  <a
                    href="https://instagram.com/aboupreneur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold px-7 py-3 transition-all duration-200"
                    style={{ background: "#F2A900", color: "#0A0A0A" }}
                  >
                    FOLLOW ON INSTAGRAM →
                  </a>
                </div>

                <div style={{ background: "#111111", padding: "48px 40px", borderLeft: "1px solid #222222" }}>
                  <span className="text-xs font-bold block mb-3" style={{ color: "#888888", letterSpacing: "0.1em" }}>PLATFORM / EDUCATION</span>
                  <h3 className="font-display font-bold text-white mb-3" style={{ fontSize: "1.75rem", letterSpacing: "-0.02em" }}>
                    MONEYVERSE
                  </h3>
                  <p className="mb-8" style={{ color: "#888888", fontSize: "15px", lineHeight: "1.7" }}>
                    The sound money education platform. 11 modules on DCA, macroeconomics, and wealth preservation.
                  </p>
                  <a
                    href="https://moneyverse.network"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold px-7 py-3 transition-all duration-200"
                    style={{ background: "#F2A900", color: "#0A0A0A" }}
                  >
                    VISIT MONEYVERSE →
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      <section className="bg-white px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <span className="mb-5 block text-xs font-bold tracking-[0.12em] text-[#B77F00]">INDUSTRY FOCUS</span>
          <h2 className="mb-10 font-display text-4xl font-bold tracking-[-0.03em] text-[#0A0A0A]">Explore services for your market</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["/home-services-trades", "Home services & trades"],
              ["/newcomer-owned-businesses", "Newcomer-owned businesses"],
              ["/agri-food-marketing", "Agri-food & specialty brands"],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="border border-[#E5E5E5] p-6 font-bold text-[#0A0A0A] transition-colors hover:border-[#F2A900]">
                {label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
