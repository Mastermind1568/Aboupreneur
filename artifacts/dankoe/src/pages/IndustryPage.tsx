import { useEffect } from "react";
import { Link } from "wouter";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { useSEO } from "@/hooks/useSEO";
import { trackEvent } from "@/lib/analytics";
import {
  getApprovedTestimonial,
  type TestimonialId,
} from "@/content/testimonialApprovals";

export type IndustryPageContent = {
  slug: string;
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  seoTitle: string;
  seoDescription: string;
  problemTitle: string;
  problemBody: string;
  outcomes: Array<{ title: string; body: string }>;
  proof?: {
    type: "client" | "credentials";
    title: string;
    items: Array<{
      name: string;
      role?: string;
      body: string;
      link?: { href: string; label: string };
      tags?: string[];
       testimonialId?: TestimonialId;
    }>;
  };
  approachTitle: string;
  approachBody: string;
  fit: string[];
  related: Array<{ href: string; label: string }>;
};

export const industryPages: Record<string, IndustryPageContent> = {
  "home-services-trades": {
    slug: "home-services-trades",
    eyebrow: "HOME SERVICES & TRADES",
    title: "Turn local searches into",
    accent: "qualified calls.",
    intro:
      "Websites, local visibility, and measurable demand generation for plumbers, HVAC companies, electricians, roofers, landscapers, and other service operators.",
    seoTitle: "Marketing for Home Services & Trades | Aboupreneur",
    seoDescription:
      "Websites, local SEO, Google Ads, and lead systems for home-service and trade businesses in Edmonton, Alberta, Canada, and the US.",
    problemTitle: "Good work is not enough if local customers cannot find you.",
    problemBody:
      "Homeowners often choose from the businesses they can quickly find, understand, and trust. Your digital presence should make your service area clear, show why you are credible, and give every qualified visitor an easy next step.",
    outcomes: [
      { title: "A website built to convert", body: "A fast, mobile-ready site that clearly explains your services, service area, proof, and contact options." },
      { title: "Stronger local visibility", body: "A practical local search foundation designed to improve discovery for relevant services in the markets you serve." },
      { title: "Measurable demand generation", body: "Search campaigns and inquiry tracking focused on calls, forms, and booked-work signals rather than vanity metrics." },
    ],
    proof: {
      type: "credentials",
      title: "A system built on accountability, not agency bloat",
      items: [
        {
          name: "Project-Based & Ongoing Engagement",
          body: "Engagements can be structured as a clear project-based scope or as ongoing performance support, depending on your goals and current capacity. Pricing is scoped privately after an initial consultation."
        },
        {
          name: "Professional Development in Progress",
          body: "I am currently pursuing the Chartered Marketer designation while applying hands-on measurement to every engagement. The focus is on useful business signals such as calls, form fills, and booked work—not vanity metrics."
        }
      ]
    },
    approachTitle: "Built around the way service businesses actually win work.",
    approachBody:
      "We start with your market, service mix, capacity, and current lead flow. Then I recommend the smallest useful system—whether that is a focused website, local visibility work, paid search, or a connected combination.",
    fit: ["You serve a defined local or regional market", "You want more qualified calls or quote requests", "You need clearer visibility into where inquiries come from"],
    related: [
      { href: "/newcomer-owned-businesses", label: "Digital presence for newcomer-owned businesses" },
      { href: "/agri-food-marketing", label: "Digital growth for agri-food businesses" },
    ],
  },
  "newcomer-owned-businesses": {
    slug: "newcomer-owned-businesses",
    eyebrow: "NEWCOMER-OWNED BUSINESSES",
    title: "Build your first",
    accent: "professional presence.",
    intro:
      "A clear, credible website and practical digital foundation for newcomer entrepreneurs ready to present their business professionally in Canada.",
    seoTitle: "Websites for Newcomer-Owned Businesses | Aboupreneur",
    seoDescription:
      "Professional websites and practical digital setup for immigrant and newcomer-owned small businesses in Edmonton, Alberta, and Western Canada.",
    problemTitle: "Your business deserves a presence that reflects the work behind it.",
    problemBody:
      "Starting in a new market means building trust while learning unfamiliar systems. I help turn your offer, experience, and goals into a professional web presence customers can understand—without unnecessary complexity or pressure.",
    outcomes: [
      { title: "A credible first website", body: "A focused, mobile-ready site that explains what you do, who you serve, and how customers can reach you." },
      { title: "Clear business messaging", body: "Straightforward language that presents your value confidently and helps local customers know what to expect." },
      { title: "A foundation you can grow", body: "Essential search, measurement, and contact setup that can support future campaigns when the business is ready." },
    ],
    proof: {
      type: "client",
      title: "Professional presence for real businesses",
      items: [
        {
          name: "Asabis",
          role: "Accounting Firm",
          body: "",
          testimonialId: "asabis-niba",
          link: { href: "https://asabis.ca", label: "asabis.ca" },
          tags: ["Web Design", "Google Ads", "GA4"]
        },
        {
          name: "Miratus Ltd",
          role: "Staffing Agency",
          body: "",
          testimonialId: "miratus-ltd-mirabelle",
          link: { href: "https://miratusltd.ca", label: "miratusltd.ca" },
          tags: ["Web Design", "Meta Ads", "Google Ads", "SEO"]
        }
      ]
    },
    approachTitle: "Clear guidance, respectful collaboration, no assumed knowledge.",
    approachBody:
      "We begin with a consultation about your business, customers, priorities, and stage. I explain the options in plain language and scope only what is useful now. You remain involved in the decisions and retain a professional asset built for your business.",
    fit: ["You are establishing or formalizing a business in Canada", "You rely on referrals but need a professional place to send people", "You want practical guidance without an oversized agency package"],
    related: [
      { href: "/home-services-trades", label: "Marketing for home services and trades" },
      { href: "/agri-food-marketing", label: "Digital growth for agri-food businesses" },
    ],
  },
  "agri-food-marketing": {
    slug: "agri-food-marketing",
    eyebrow: "AGRI-FOOD & SPECIALTY BRANDS",
    title: "Connect the operation to",
    accent: "digital growth.",
    intro:
      "Web presence, go-to-market clarity, and demand generation for Canadian agribusinesses, food producers, and specialty brands.",
    seoTitle: "Agri-Food Marketing & Websites | Aboupreneur",
    seoDescription:
      "Websites and digital growth strategy for Canadian agribusiness, food producers, and specialty brands, informed by an agribusiness background.",
    problemTitle: "A strong product still needs a clear route to market.",
    problemBody:
      "Agri-food businesses balance production, distribution, seasonality, regulation, and customer trust. Digital work should support those realities—not hide them behind generic marketing language.",
    outcomes: [
      { title: "A clearer market position", body: "Messaging that connects the product, customer, channel, and reason to choose your business." },
      { title: "A credible digital storefront", body: "A professional website that helps buyers, partners, or customers understand the offer and take the right next step." },
      { title: "Practical demand generation", body: "Search, campaign, and measurement recommendations matched to your route to market and current capacity." },
    ],
    proof: {
      type: "credentials",
      title: "Marketing informed by operational reality",
      items: [
        {
          name: "Agribusiness Diploma, Lakeland College",
          body: "I earned an agribusiness diploma from Lakeland College in Alberta. This background provides a practical understanding of production, seasonality, and distribution—so we spend less time on basic education and more time on go-to-market strategy."
        },
        {
          name: "Professional Development in Progress",
          body: "I am currently pursuing the Chartered Marketer designation to deepen the marketing standards I apply alongside my agribusiness background. I build digital strategies around the client’s actual route to market, without relying on generic agency templates."
        }
      ]
    },
    approachTitle: "Marketing informed by an understanding of agribusiness.",
    approachBody:
      "My agribusiness diploma gives me useful context for the operational realities behind food and agriculture. It does not replace your technical expertise or imply access to a trade network. We combine your market knowledge with a practical digital plan built around verified needs.",
    fit: ["You produce, process, distribute, or sell an agri-food product", "Your digital presence does not yet match the quality of the operation", "You need clearer go-to-market or customer-acquisition priorities"],
    related: [
      { href: "/home-services-trades", label: "Marketing for home services and trades" },
      { href: "/newcomer-owned-businesses", label: "Digital presence for newcomer-owned businesses" },
    ],
  },
};

export default function IndustryPage({ content }: { content: IndustryPageContent }) {
  useSEO({
    title: content.seoTitle,
    description: content.seoDescription,
    canonical: `https://aboupreneur.page/${content.slug}`,
  });

  useEffect(() => {
    trackEvent("industry_page_view", { industry: content.slug });
  }, [content.slug]);

  const contactHref = `/contact?industry=${content.slug}`;
  const trackCta = (location: string) =>
    trackEvent("industry_consultation_clicked", { industry: content.slug, cta_location: location });
  const visibleProofItems = content.proof?.items
    .map((item) => {
      if (!item.testimonialId) return item;
      const testimonial = getApprovedTestimonial(item.testimonialId);
      return testimonial
        ? {
            ...item,
            body: `"${testimonial.approvedQuote}" — ${testimonial.approvedAttribution}`,
          }
        : null;
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      <section className="relative px-6 pb-24 pt-36 sm:px-10 sm:pt-44">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(242,169,0,0.09),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl">
          <span className="mb-6 block text-xs font-bold tracking-[0.14em] text-[#F2A900]">{content.eyebrow}</span>
          <h1 className="max-w-5xl font-display text-[clamp(3rem,7vw,6rem)] font-bold leading-[1.02] tracking-[-0.045em] text-white">
            {content.title} <span className="text-[#F2A900]">{content.accent}</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#A0A0A0]">{content.intro}</p>
          <Link
            href={contactHref}
            onClick={() => trackCta("hero")}
            className="mt-10 inline-flex bg-[#F2A900] px-8 py-4 text-sm font-bold text-[#0A0A0A] transition-colors hover:bg-white"
          >
            DISCUSS YOUR BUSINESS →
          </Link>
        </div>
      </section>

      <section className="bg-white px-6 py-24 sm:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.035em] text-[#0A0A0A]">
            {content.problemTitle}
          </h2>
          <p className="text-lg leading-8 text-[#444444]">{content.problemBody}</p>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <span className="mb-5 block text-xs font-bold tracking-[0.14em] text-[#F2A900]">WHAT WE CAN BUILD</span>
          <h2 className="mb-14 max-w-3xl font-display text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.035em] text-white">
            A useful system, scoped to the business you have now
          </h2>
          <div className="grid gap-px bg-[#2A2A2A] md:grid-cols-3">
            {content.outcomes.map((outcome, index) => (
              <article key={outcome.title} className="bg-[#111111] p-8 sm:p-10">
                <span className="mb-8 block text-xs font-bold text-[#F2A900]">0{index + 1}</span>
                <h3 className="mb-4 text-2xl font-bold text-white">{outcome.title}</h3>
                <p className="text-sm leading-7 text-[#999999]">{outcome.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {content.proof && visibleProofItems && visibleProofItems.length > 0 && (
        <section className="bg-[#111111] px-6 py-24 sm:px-10 border-t border-[#222222]">
          <div className="mx-auto max-w-7xl">
            <span className="mb-5 block text-xs font-bold tracking-[0.14em] text-[#F2A900]">
              {content.proof.type === "client" ? "CLIENT WORK" : "THE OPERATOR"}
            </span>
            <h2 className="mb-14 max-w-3xl font-display text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.035em] text-white">
              {content.proof.title}
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {visibleProofItems.map((item, index) => (
                <div key={index} className="border border-[#222222] bg-[#0A0A0A] p-8 sm:p-10">
                  <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">{item.name}</h3>
                      {item.role && <p className="mt-1 text-sm text-[#888888]">{item.role}</p>}
                    </div>
                    {item.link && (
                      <a href={item.link.href} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#F2A900] tracking-widest hover:text-white transition-colors">
                        {item.link.label} ↗
                      </a>
                    )}
                  </div>
                  <p className={`mb-8 text-sm leading-7 text-[#CCCCCC] ${content.proof?.type === "client" ? "italic" : ""}`}>
                    {item.body}
                  </p>
                  {item.tags && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="border border-[#333333] px-2 py-1 text-xs font-bold text-[#888888] tracking-widest">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Link
              href={contactHref}
              onClick={() => trackCta("proof")}
              className="mt-10 inline-flex border border-[#F2A900] px-7 py-3.5 text-sm font-bold text-[#F2A900] transition-colors hover:bg-[#F2A900] hover:text-[#0A0A0A]"
            >
              DISCUSS A SIMILAR PROJECT →
            </Link>
          </div>
        </section>
      )}

      <section className="bg-[#F3F3F3] px-6 py-24 sm:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <span className="mb-5 block text-xs font-bold tracking-[0.14em] text-[#B77F00]">THE APPROACH</span>
            <h2 className="mb-7 font-display text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.035em] text-[#0A0A0A]">
              {content.approachTitle}
            </h2>
            <p className="leading-8 text-[#444444]">{content.approachBody}</p>
          </div>
          <div className="border-l-4 border-[#F2A900] bg-white p-8 sm:p-10">
            <h2 className="mb-7 text-2xl font-bold text-[#0A0A0A]">This may be a fit if:</h2>
            <ul className="space-y-5">
              {content.fit.map((item) => (
                <li key={item} className="flex gap-4 leading-7 text-[#444444]">
                  <span className="font-bold text-[#B77F00]">→</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl font-display text-[clamp(2.25rem,5vw,4rem)] font-bold leading-[1.06] tracking-[-0.04em] text-white">
            Start with a consultation. <span className="text-[#F2A900]">Scope comes second</span>
          </h2>
          <p className="mt-6 max-w-2xl leading-8 text-[#999999]">
            Pricing is not one-size-fits-all. After an initial conversation, I will recommend a project-based or ongoing scope only if it fits your goals, capacity, and stage.
          </p>
          <Link
            href={contactHref}
            onClick={() => trackCta("bottom")}
            className="mt-10 inline-flex border border-[#F2A900] px-8 py-4 text-sm font-bold text-[#F2A900] transition-colors hover:bg-[#F2A900] hover:text-[#0A0A0A]"
          >
            REQUEST A CONSULTATION →
          </Link>
          <nav aria-label="Other industries" className="mt-16 flex flex-col gap-3 border-t border-[#222222] pt-8 sm:flex-row sm:gap-8">
            {content.related.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-[#999999] transition-colors hover:text-white">
                {link.label} →
              </Link>
            ))}
          </nav>
        </div>
      </section>
      <Footer />
    </main>
  );
}