import { useState } from "react";

const GOLD = "#F2A900";
const DARK = "#0A0A0A";

type Severity = "critical" | "high" | "medium" | "opportunity";

interface Finding {
  id: string;
  severity: Severity;
  category: string;
  title: string;
  detail: string;
  fix: string;
  effort: "quick" | "medium" | "involved";
}

const findings: Finding[] = [
  {
    id: "F01",
    severity: "critical",
    category: "Sitemap",
    title: "Sitemap lists dead pages, misses all new pages",
    detail:
      "sitemap.xml still references /about, /services, /portfolio, /contact — routes that 404 after the rebrand. All four new routes (/story, /ecosystem, /writing, /blog) are missing, and none of the 7 blog post URLs (/blog/ai-automation-small-business etc.) are listed. Google is being told to crawl the old, broken version of the site.",
    fix: "Regenerate sitemap.xml to list: /, /story, /ecosystem, /writing, and all 7 blog post URLs. Remove every old route. Update <lastmod> dates to today.",
    effort: "quick",
  },
  {
    id: "F02",
    severity: "critical",
    category: "Rendering / Crawlability",
    title: "React SPA = every page is invisible to Googlebot",
    detail:
      "The site is a client-side SPA (Vite + React + wouter). Googlebot fetches raw HTML and does not execute JavaScript. Every URL — including the 7 blog posts — returns an empty <div id='root'></div>. The useSEO hook sets document.title and meta tags dynamically in the browser only; crawlers see the fallback index.html values for every page regardless of route. Blog content is completely unindexable in its current form.",
    fix: "Add server-side rendering (SSR) via an Express layer for at least the blog post routes, or migrate blog posts to statically pre-rendered HTML files served directly. For the main 4 pages, add per-page SSR or use prerendering at build time (e.g. vite-plugin-ssr, Astro, or a Node.js prerender step).",
    effort: "involved",
  },
  {
    id: "F03",
    severity: "critical",
    category: "Brand Consistency",
    title: "Deployed site has completely different branding",
    detail:
      "The live production site at aboupreneur.page has title 'Aboupreneur | Growth Marketer, Web Builder & AI Strategist' — the old identity. The rebrand ('Build. Stack. Sovereign.', Sovereignty Loop, brutalist design) exists only in the dev build. Search engines and social shares still show the old brand. Google Search Console data is being split across two identities.",
    fix: "Deploy the new build immediately. After deploying, submit the updated sitemap in Google Search Console and request re-indexing of the homepage.",
    effort: "quick",
  },
  {
    id: "F04",
    severity: "high",
    category: "Structured Data",
    title: "Zero JSON-LD schema markup on any page",
    detail:
      "None of the pages include structured data. Missing: Person schema (Aboubakar Moussa — links brand to a real human for E-E-A-T), WebSite schema with sitelinks searchbox, BreadcrumbList on blog posts, Article schema on each blog post (publishedDate, author, headline), and LocalBusiness schema for consulting services.",
    fix: "Add a Person + WebSite JSON-LD block to the HTML <head> globally. Add Article schema to each blog post component via the useSEO hook (extend it to accept a schema prop). Add BreadcrumbList to blog posts.",
    effort: "medium",
  },
  {
    id: "F05",
    severity: "high",
    category: "Meta Tags",
    title: "Main pages share the same canonical and meta description",
    detail:
      "Home, Story, Ecosystem, and Writing all share the single canonical URL (https://aboupreneur.page) and a single global meta description set in index.html. While the useSEO hook is implemented on these pages, it only updates document.title in the browser — the canonical link tag and OG URL still point to the homepage for every route. Googlebot sees identical canonicals on all 4 pages, which signals duplicate content.",
    fix: "Update the useSEO hook to also set the canonical link's href dynamically. Ensure each page passes a unique canonical and description (e.g. /story → 'https://aboupreneur.page/story'). Write distinct meta descriptions per page focused on what that page offers.",
    effort: "quick",
  },
  {
    id: "F06",
    severity: "high",
    category: "Performance",
    title: "Google Fonts loaded without font-display: swap",
    detail:
      "Space Grotesk and Inter are loaded via a standard Google Fonts <link> tag with no display=swap parameter. Without font-display: swap, the browser may block text rendering until fonts load (FOIT — Flash of Invisible Text), which hurts Largest Contentful Paint (LCP) and Core Web Vitals scores.",
    fix: "Add &display=swap to the Google Fonts URL: fonts.googleapis.com/css2?family=Space+Grotesk:wght@...&display=swap. Also add <link rel='preload'> for the most critical font variant used in the hero.",
    effort: "quick",
  },
  {
    id: "F07",
    severity: "high",
    category: "Internal Linking",
    title: "Blog posts have no links to consulting or ecosystem",
    detail:
      "All 7 blog posts are standalone articles with no internal links directing readers toward the Ecosystem page, consulting form, or newsletter signup. Each post is a potential entry point for organic traffic that currently has no conversion path built in. The Writing page also has no link to the consulting form.",
    fix: "Add a contextual CTA block to every blog post body linking to the consulting form on /ecosystem#consulting-form. Add a newsletter signup inline mid-post. Add a 'Related reading' section with 2–3 links to other posts to reduce bounce and build topical authority.",
    effort: "medium",
  },
  {
    id: "F08",
    severity: "medium",
    category: "OG / Social",
    title: "All pages share one Open Graph image",
    detail:
      "Every page — including all 7 blog posts — uses the same og:image (opengraph.jpg). When posts are shared on LinkedIn, Twitter, or in messaging apps, they all show the same generic thumbnail. This significantly reduces click-through rates on social shares for individual articles.",
    fix: "Create individual OG images for each blog post (1200×630px). Extend the useSEO hook to accept an ogImage prop and set it per post. A simple Figma template with the post title overlaid on the brand background would work well.",
    effort: "medium",
  },
  {
    id: "F09",
    severity: "medium",
    category: "Sitemap / Routing",
    title: "No sitemap for /story, /ecosystem, /writing routes",
    detail:
      "Beyond the broken blog URLs, the core brand pages /story, /ecosystem, and /writing are absent from the sitemap entirely. Google may discover them via internal links, but not having them in the sitemap means slower indexing and no priority signal.",
    fix: "Add all four main pages to sitemap.xml with appropriate priority values: / (1.0), /story (0.8), /ecosystem (0.8), /writing (0.8), blog posts (0.7 each).",
    effort: "quick",
  },
  {
    id: "F10",
    severity: "medium",
    category: "Forms / UX",
    title: "Consulting form feedback is off-screen",
    detail:
      "The Formspree consulting form shows a success/error state but the user may not see it if they've scrolled. There's also no visible loading state on submit, and the form does not prevent double-submission. No confirmation email is triggered on the site side (Formspree handles this, but it's not visible to the user immediately).",
    fix: "Add a loading spinner to the submit button on click. Scroll to a visible success message after submission. Add a honeypot field or simple rate-limiting to prevent spam.",
    effort: "quick",
  },
  {
    id: "F11",
    severity: "medium",
    category: "Content",
    title: "Article title separators are inconsistent across Writing and Home",
    detail:
      "After the rebrand edits, article titles now use ' / ' as a mid-title separator (e.g. 'Choosing the Right Marketing Channel / A Framework…'). This differs from the blog post route pages themselves (which still use the original full titles). The Writing page list and the blog post <h1> titles are now inconsistent.",
    fix: "Audit all post titles in Writing.tsx and the individual blog post components to ensure the displayed title matches the h1 title inside the article. Consider reverting to single-phrase titles without any separator.",
    effort: "quick",
  },
  {
    id: "F12",
    severity: "medium",
    category: "Content / Robots",
    title: "robots.txt is bare-bones with no crawl optimisation",
    detail:
      "The robots.txt only has 'Allow: /' and the sitemap reference. For a personal brand site this is acceptable, but there's no Disallow for pages that shouldn't be indexed (e.g. any admin or form-thank-you routes if added later).",
    fix: "For now acceptable — revisit when form thank-you pages or other non-indexable routes are added. Ensure the sitemap URL in robots.txt always stays current.",
    effort: "quick",
  },
];

const opportunities = [
  {
    title: "Agribusiness digital marketing niche content",
    why: "Your 'Farm to Funnel' newsletter and agribusiness background give you first-hand expertise that no generic marketing blogger has. Google rewards E-E-A-T (Experience, Expertise, Authority, Trust) — this is a real moat.",
    keywords: ["agribusiness digital marketing", "food brand go-to-market strategy", "agricultural marketing Canada", "farm to market strategy"],
    potential: "Low competition, high relevance to your actual clientele.",
  },
  {
    title: "Sound money / Bitcoin for entrepreneurs",
    why: "Very few people write about Bitcoin as a business tool from an operator's perspective (not a speculator's). Your angle — sound money as infrastructure for sovereignty — is differentiated from 99% of crypto content.",
    keywords: ["bitcoin for entrepreneurs", "sound money business strategy", "bitcoin vs fiat for business savings", "entrepreneur sound money"],
    potential: "Growing search demand, minimal authoritative competition in the 'entrepreneur' framing.",
  },
  {
    title: "Alberta / Canada entrepreneur positioning",
    why: "Local and regional SEO for professional services is underutilised. 'Digital marketing consultant Alberta', 'web design Edmonton/Calgary', and 'AI automation consultant Canada' are findable by local clients who are already primed to hire.",
    keywords: ["digital marketing consultant Alberta", "AI automation consultant Canada", "web designer Alberta", "growth marketer Edmonton"],
    potential: "Local searches convert at much higher rates than global informational queries.",
  },
  {
    title: "SSR blog posts on Substack → site pipeline",
    why: "Your Substack content (MINDBLOOM, Farm to Funnel) is being published on a platform you don't own. Cross-publishing key essays as server-rendered pages on aboupreneur.page builds site authority over time and creates content Google can actually crawl.",
    keywords: ["content hub", "blog SEO", "personal brand writing"],
    potential: "High: every indexed post is a permanent SEO asset you own. Substack posts give Google nothing on your domain.",
  },
];

const competitors = [
  {
    name: "Justin Welsh",
    url: "justinwelsh.me",
    positioning: "LinkedIn-first solopreneur, $1M solo business, newsletter + course model",
    strength: "Extremely systemised content engine, strong social proof, single-channel focus",
    weakness: "Narrow appeal (LinkedIn operators only), US-centric, no Bitcoin/sound money angle",
    overlap: "Creator economy, writing, newsletter",
  },
  {
    name: "Dan Koe",
    url: "thedankoe.com",
    positioning: "One-person business architect, digital products + writing, philosophy + productivity",
    strength: "Massive Twitter/X following, strong brand aesthetic, long-form thought leadership",
    weakness: "Abstract/philosophical content that's hard to act on, no Africa/immigration story, no agribusiness",
    overlap: "Personal brand, sovereignty framing, writing as distribution",
  },
  {
    name: "Sahil Bloom",
    url: "sahilbloom.com",
    positioning: "Curiosity, frameworks, personal finance + career growth, newsletter-first",
    strength: "Broad audience, high production quality, mainstream appeal",
    weakness: "No operator-level depth, no international/immigration angle, not focused on sovereignty",
    overlap: "Newsletter, frameworks, personal growth",
  },
  {
    name: "Jack Butcher (Visualize Value)",
    url: "visualizevalue.com",
    positioning: "Design + leverage frameworks, single-person business, digital products",
    strength: "Iconic visual identity, productised consulting background, Twitter/design community authority",
    weakness: "Pure design frame with no Bitcoin, agribusiness, or international operator lens",
    overlap: "Build-once sell-forever content, visual branding",
  },
];

const priorityActions = [
  { rank: 1, action: "Deploy the new build to aboupreneur.page", why: "Old brand is live. Nothing else matters until the new site is deployed.", effort: "quick" },
  { rank: 2, action: "Fix and regenerate sitemap.xml with all current routes", why: "Google is being sent to 404 pages. 10 minutes to fix, massive crawl benefit.", effort: "quick" },
  { rank: 3, action: "Add font-display: swap to Google Fonts URL", why: "One URL param change, immediate LCP improvement.", effort: "quick" },
  { rank: 4, action: "Fix useSEO to set per-page canonical URL dynamically", why: "All pages currently share the homepage canonical — this is a duplicate content signal.", effort: "quick" },
  { rank: 5, action: "Add Person + WebSite JSON-LD schema to <head>", why: "One-time setup, helps Google tie the brand to a real person (E-E-A-T signal).", effort: "medium" },
  { rank: 6, action: "Add Article JSON-LD to each blog post via useSEO", why: "Blog posts need structured data to be eligible for rich results in Google.", effort: "medium" },
  { rank: 7, action: "Add SSR / prerendering for blog post routes", why: "Blog posts are completely invisible to Googlebot. This is the biggest SEO unlock on the site.", effort: "involved" },
  { rank: 8, action: "Add internal links + consulting CTA to every blog post", why: "Turn organic traffic into consulting leads. Currently there's zero conversion path from articles.", effort: "medium" },
];

const severityConfig: Record<Severity, { label: string; color: string; bg: string; border: string }> = {
  critical: { label: "CRITICAL", color: "#ef4444", bg: "#fef2f2", border: "#fecaca" },
  high: { label: "HIGH", color: "#f97316", bg: "#fff7ed", border: "#fed7aa" },
  medium: { label: "MEDIUM", color: "#eab308", bg: "#fefce8", border: "#fde68a" },
  opportunity: { label: "OPPORTUNITY", color: "#22c55e", bg: "#f0fdf4", border: "#bbf7d0" },
};

const effortConfig = {
  quick: { label: "Quick Win", color: "#22c55e" },
  medium: { label: "Moderate", color: "#f97316" },
  involved: { label: "Involved", color: "#8b5cf6" },
};

type Tab = "findings" | "positioning" | "opportunities" | "plan";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("findings");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filterSeverity, setFilterSeverity] = useState<Severity | "all">("all");

  const criticalCount = findings.filter((f) => f.severity === "critical").length;
  const highCount = findings.filter((f) => f.severity === "high").length;
  const mediumCount = findings.filter((f) => f.severity === "medium").length;

  const filtered = filterSeverity === "all" ? findings : findings.filter((f) => f.severity === filterSeverity);

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", background: "#f8f9fa", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ background: DARK, color: "white", padding: "48px 0 40px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <div style={{ width: 8, height: 8, background: GOLD, flexShrink: 0 }} />
            <span style={{ fontSize: 11, letterSpacing: "0.2em", color: "#888", fontWeight: 700, textTransform: "uppercase" }}>
              Site Audit Report
            </span>
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 800, margin: "0 0 8px", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            ABOUPRENEUR.PAGE
          </h1>
          <p style={{ color: "#888", margin: "0 0 32px", fontSize: 15 }}>
            Full audit — SEO, technical, content &amp; positioning · May 2026
          </p>

          {/* Score pills */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {[
              { label: "Critical", count: criticalCount, color: "#ef4444" },
              { label: "High", count: highCount, color: "#f97316" },
              { label: "Medium", count: mediumCount, color: "#eab308" },
              { label: "Opportunities", count: opportunities.length, color: GOLD },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: `1px solid rgba(255,255,255,0.12)`,
                  padding: "10px 20px",
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: 22, fontWeight: 800, color: s.color }}>{s.count}</span>
                <span style={{ fontSize: 12, color: "#aaa", letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Tabs */}
      <nav style={{ background: "white", borderBottom: "1px solid #e5e7eb", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 32px", display: "flex", gap: 0 }}>
          {(
            [
              { key: "findings", label: "Findings" },
              { key: "positioning", label: "Competitive Positioning" },
              { key: "opportunities", label: "SEO Opportunities" },
              { key: "plan", label: "Action Plan" },
            ] as { key: Tab; label: string }[]
          ).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                padding: "16px 24px",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                fontSize: 13,
                fontWeight: activeTab === tab.key ? 700 : 500,
                color: activeTab === tab.key ? DARK : "#6b7280",
                borderBottom: activeTab === tab.key ? `2px solid ${GOLD}` : "2px solid transparent",
                letterSpacing: "0.03em",
                textTransform: "uppercase",
                fontFamily: "inherit",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Content */}
      <main style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 32px" }}>
        {/* FINDINGS TAB */}
        {activeTab === "findings" && (
          <div>
            {/* Filter bar */}
            <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap", alignItems: "center" }}>
              <span style={{ fontSize: 12, color: "#6b7280", marginRight: 4, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>Filter:</span>
              {(["all", "critical", "high", "medium"] as const).map((sev) => (
                <button
                  key={sev}
                  onClick={() => setFilterSeverity(sev)}
                  style={{
                    padding: "6px 14px",
                    border: `1px solid ${filterSeverity === sev ? (sev === "all" ? DARK : severityConfig[sev as Severity]?.color) : "#e5e7eb"}`,
                    background: filterSeverity === sev ? (sev === "all" ? DARK : severityConfig[sev as Severity]?.bg) : "white",
                    color: filterSeverity === sev ? (sev === "all" ? "white" : severityConfig[sev as Severity]?.color) : "#6b7280",
                    cursor: "pointer",
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontFamily: "inherit",
                  }}
                >
                  {sev === "all" ? `All (${findings.length})` : `${sev} (${findings.filter((f) => f.severity === sev).length})`}
                </button>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {filtered.map((finding) => {
                const sev = severityConfig[finding.severity];
                const eff = effortConfig[finding.effort];
                const isOpen = expandedId === finding.id;
                return (
                  <div
                    key={finding.id}
                    style={{
                      background: "white",
                      border: `1px solid ${isOpen ? sev.color : "#e5e7eb"}`,
                      overflow: "hidden",
                      transition: "border-color 0.15s",
                    }}
                  >
                    <button
                      onClick={() => setExpandedId(isOpen ? null : finding.id)}
                      style={{
                        width: "100%",
                        padding: "20px 24px",
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                        fontFamily: "inherit",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 800,
                          letterSpacing: "0.15em",
                          color: sev.color,
                          background: sev.bg,
                          border: `1px solid ${sev.border}`,
                          padding: "3px 8px",
                          flexShrink: 0,
                          textTransform: "uppercase",
                        }}
                      >
                        {sev.label}
                      </span>
                      <span
                        style={{
                          fontSize: 10,
                          color: "#9ca3af",
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          flexShrink: 0,
                          textTransform: "uppercase",
                        }}
                      >
                        {finding.category}
                      </span>
                      <span style={{ flex: 1, fontSize: 15, fontWeight: 600, color: DARK }}>
                        {finding.title}
                      </span>
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          color: eff.color,
                          letterSpacing: "0.1em",
                          flexShrink: 0,
                          textTransform: "uppercase",
                        }}
                      >
                        {eff.label}
                      </span>
                      <span style={{ fontSize: 18, color: "#9ca3af", flexShrink: 0, marginLeft: 8 }}>
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div style={{ padding: "0 24px 24px", borderTop: "1px solid #f3f4f6" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 20 }}>
                          <div>
                            <div
                              style={{
                                fontSize: 10,
                                fontWeight: 700,
                                letterSpacing: "0.15em",
                                color: "#9ca3af",
                                marginBottom: 8,
                                textTransform: "uppercase",
                              }}
                            >
                              What's happening
                            </div>
                            <p style={{ margin: 0, fontSize: 14, color: "#374151", lineHeight: 1.7 }}>
                              {finding.detail}
                            </p>
                          </div>
                          <div style={{ background: "#f8f9fa", padding: 20 }}>
                            <div
                              style={{
                                fontSize: 10,
                                fontWeight: 700,
                                letterSpacing: "0.15em",
                                color: GOLD,
                                marginBottom: 8,
                                textTransform: "uppercase",
                              }}
                            >
                              How to fix it
                            </div>
                            <p style={{ margin: 0, fontSize: 14, color: "#374151", lineHeight: 1.7 }}>
                              {finding.fix}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* POSITIONING TAB */}
        {activeTab === "positioning" && (
          <div>
            {/* Positioning statement */}
            <div style={{ background: DARK, color: "white", padding: 40, marginBottom: 40 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", color: GOLD, marginBottom: 16, textTransform: "uppercase" }}>
                Your Positioning (April Dunford Format)
              </div>
              <p style={{ fontSize: 18, lineHeight: 1.8, margin: "0 0 24px", color: "white" }}>
                For <strong style={{ color: GOLD }}>immigrant entrepreneurs and ambitious operators</strong> who want to build wealth without depending on unstable currencies, broken systems, or gatekeepers,{" "}
                <strong style={{ color: GOLD }}>Aboupreneur</strong> is a sovereignty blueprint that combines practical business systems, sound money principles, and real operator experience.
              </p>
              <p style={{ fontSize: 15, color: "#888", margin: 0, lineHeight: 1.7 }}>
                Unlike generic creator-economy coaches who sell ideals without evidence, Aboupreneur comes from someone who actually traded across borders in Africa, moved to Canada with nothing, built businesses in agribusiness and digital marketing, and put it all on-chain.
              </p>
            </div>

            {/* Unique angles box */}
            <div style={{ background: "white", border: "1px solid #e5e7eb", padding: 32, marginBottom: 32 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", color: "#9ca3af", marginBottom: 20, textTransform: "uppercase" }}>
                Unfair Advantages — What No Competitor Has
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[
                  { label: "African-born, Canada-based operator", desc: "An immigration story that resonates with the fastest-growing entrepreneur demographic globally. Not a theory — a lived experience of building across currency systems." },
                  { label: "Bitcoin + agribusiness intersection", desc: "No one else in the creator economy is writing about sound money from the perspective of someone who traded commodities and understood fiat inflation before most Western creators." },
                  { label: "Real consulting clients in niche sectors", desc: "The Bitcoin Kids, Miratus Ltd, FA Global Energy — real projects in sectors that generic marketers don't touch. This is verifiable E-E-A-T." },
                  { label: "The Sovereignty Loop framework", desc: "Make / Multiply / Protect is a proprietary system, not a generic 'start a business' framework. Proprietary frameworks build authority and are harder to copy." },
                ].map((a) => (
                  <div key={a.label} style={{ padding: 20, background: "#f8f9fa", borderLeft: `3px solid ${GOLD}` }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: DARK, marginBottom: 6 }}>{a.label}</div>
                    <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>{a.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Competitor table */}
            <div style={{ background: "white", border: "1px solid #e5e7eb", padding: 32 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", color: "#9ca3af", marginBottom: 20, textTransform: "uppercase" }}>
                Competitive Landscape
              </div>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                  <thead>
                    <tr style={{ borderBottom: "2px solid #e5e7eb" }}>
                      {["Creator", "Positioning", "Their Strength", "Their Weakness", "Overlap with You"].map((h) => (
                        <th key={h} style={{ padding: "10px 16px", textAlign: "left", fontSize: 10, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {competitors.map((c, i) => (
                      <tr key={c.name} style={{ borderBottom: "1px solid #f3f4f6", background: i % 2 === 0 ? "white" : "#fafafa" }}>
                        <td style={{ padding: "14px 16px" }}>
                          <div style={{ fontWeight: 700, color: DARK }}>{c.name}</div>
                          <div style={{ fontSize: 11, color: "#9ca3af" }}>{c.url}</div>
                        </td>
                        <td style={{ padding: "14px 16px", color: "#374151", maxWidth: 180 }}>{c.positioning}</td>
                        <td style={{ padding: "14px 16px", color: "#374151", maxWidth: 180 }}>{c.strength}</td>
                        <td style={{ padding: "14px 16px", color: "#374151", maxWidth: 180 }}>{c.weakness}</td>
                        <td style={{ padding: "14px 16px", color: "#6b7280", fontSize: 12 }}>{c.overlap}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ marginTop: 24, padding: 20, background: "#f8f9fa", borderLeft: `3px solid ${GOLD}` }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: DARK, marginBottom: 6 }}>Bottom line</div>
                <p style={{ margin: 0, fontSize: 13, color: "#6b7280", lineHeight: 1.7 }}>
                  None of the major creator-economy figures operate at the intersection of African immigration, Bitcoin, agribusiness, and Canadian market consulting. That is genuinely white space. The risk is positioning that's so specific it needs time to find its audience — but the upside is a defensible position no one can replicate without your story.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* OPPORTUNITIES TAB */}
        {activeTab === "opportunities" && (
          <div>
            <div style={{ background: "white", border: "1px solid #e5e7eb", padding: 32, marginBottom: 24 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", color: "#9ca3af", marginBottom: 8, textTransform: "uppercase" }}>
                Context
              </div>
              <p style={{ margin: 0, fontSize: 14, color: "#6b7280", lineHeight: 1.7 }}>
                The single biggest SEO unlock is fixing the SPA rendering issue so blog posts can be crawled. Once that's done, you have 7 articles that can start ranking. These four opportunities represent the highest-leverage content angles based on your existing positioning and the competitive gap in search results.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {opportunities.map((opp, i) => (
                <div key={opp.title} style={{ background: "white", border: "1px solid #e5e7eb", padding: 32 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        background: DARK,
                        color: GOLD,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 16,
                        fontWeight: 800,
                        flexShrink: 0,
                      }}
                    >
                      {i + 1}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ margin: "0 0 12px", fontSize: 17, fontWeight: 700, color: DARK }}>{opp.title}</h3>
                      <p style={{ margin: "0 0 16px", fontSize: 14, color: "#374151", lineHeight: 1.7 }}>{opp.why}</p>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                        {opp.keywords.map((kw) => (
                          <span
                            key={kw}
                            style={{
                              fontSize: 11,
                              padding: "4px 10px",
                              background: "#f3f4f6",
                              color: "#374151",
                              fontFamily: "monospace",
                            }}
                          >
                            {kw}
                          </span>
                        ))}
                      </div>
                      <div style={{ fontSize: 12, color: "#22c55e", fontWeight: 700 }}>↗ {opp.potential}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Programmatic SEO note */}
            <div style={{ marginTop: 32, background: DARK, color: "white", padding: 32 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", color: GOLD, marginBottom: 16, textTransform: "uppercase" }}>
                Programmatic SEO — When You're Ready
              </div>
              <p style={{ margin: "0 0 16px", fontSize: 14, color: "#ccc", lineHeight: 1.7 }}>
                Once the site is deployed and blog posts are server-rendered, there's a clear programmatic SEO play in the agribusiness space: location-based consulting pages (<code style={{ background: "rgba(255,255,255,0.1)", padding: "2px 6px", fontSize: 12 }}>/consulting/agribusiness-alberta</code>,{" "}
                <code style={{ background: "rgba(255,255,255,0.1)", padding: "2px 6px", fontSize: 12 }}>/consulting/food-brand-canada</code>) and comparison content (<code style={{ background: "rgba(255,255,255,0.1)", padding: "2px 6px", fontSize: 12 }}>/sound-money/bitcoin-vs-fiat-for-business</code>).
              </p>
              <p style={{ margin: 0, fontSize: 14, color: "#888", lineHeight: 1.7 }}>
                However: don't scale before fixing the SPA rendering problem. Publishing 20 pages that Googlebot can't read creates zero SEO value and wastes crawl budget.
              </p>
            </div>
          </div>
        )}

        {/* ACTION PLAN TAB */}
        {activeTab === "plan" && (
          <div>
            <div style={{ background: "white", border: "1px solid #e5e7eb", padding: 32, marginBottom: 32 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", color: "#9ca3af", marginBottom: 8, textTransform: "uppercase" }}>
                Prioritised Action Plan
              </div>
              <p style={{ margin: 0, fontSize: 14, color: "#6b7280", lineHeight: 1.7 }}>
                8 actions ranked by impact-to-effort ratio. Do them in order — the first 4 are all quick wins (under 30 minutes each) with high impact. The SSR work is the big investment but it's what turns the writing into an SEO asset.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {priorityActions.map((action) => {
                const eff = effortConfig[action.effort as keyof typeof effortConfig];
                return (
                  <div
                    key={action.rank}
                    style={{
                      background: "white",
                      border: "1px solid #e5e7eb",
                      padding: "24px 32px",
                      display: "grid",
                      gridTemplateColumns: "48px 1fr auto",
                      gap: 24,
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        background: action.rank <= 4 ? GOLD : "#f3f4f6",
                        color: action.rank <= 4 ? DARK : "#9ca3af",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 20,
                        fontWeight: 800,
                        flexShrink: 0,
                      }}
                    >
                      {action.rank}
                    </div>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: DARK, marginBottom: 6 }}>{action.action}</div>
                      <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>{action.why}</div>
                    </div>
                    <div
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        color: eff.color,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}
                    >
                      {eff.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div style={{ marginTop: 32, display: "flex", gap: 24, flexWrap: "wrap" }}>
              <div style={{ fontSize: 11, color: "#6b7280" }}>
                <span style={{ fontWeight: 700, color: "#22c55e" }}>Quick Win</span> = under 30 min
              </div>
              <div style={{ fontSize: 11, color: "#6b7280" }}>
                <span style={{ fontWeight: 700, color: "#f97316" }}>Moderate</span> = 1–4 hours
              </div>
              <div style={{ fontSize: 11, color: "#6b7280" }}>
                <span style={{ fontWeight: 700, color: "#8b5cf6" }}>Involved</span> = full session, architectural change
              </div>
            </div>

            {/* Summary callout */}
            <div style={{ marginTop: 40, background: DARK, color: "white", padding: 40 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", color: GOLD, marginBottom: 16, textTransform: "uppercase" }}>
                The short version
              </div>
              <p style={{ fontSize: 17, lineHeight: 1.8, margin: "0 0 16px", color: "white" }}>
                The new brand design is sharp and the positioning is genuinely differentiated. But Google currently sees the old site, a broken sitemap pointing to dead pages, and empty HTML on every route. Fix those three things first — then the content you've built can actually rank.
              </p>
              <p style={{ margin: 0, fontSize: 14, color: "#888", lineHeight: 1.7 }}>
                Once deployed and crawlable, the agribusiness / Bitcoin / Canadian operator niche is defensible territory where you have real first-mover advantage over generic creator-economy content.
              </p>
            </div>
          </div>
        )}
      </main>

      <footer style={{ background: DARK, color: "#555", padding: "32px 0", marginTop: 80 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ fontSize: 12 }}>ABOUPRENEUR.PAGE — Site Audit · May 2026</div>
          <div style={{ fontSize: 12 }}>12 findings · 4 SEO opportunities · 4 competitive anchors · 8 priority actions</div>
        </div>
      </footer>
    </div>
  );
}
