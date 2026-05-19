import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useSEO } from "@/hooks/useSEO";

type Theme = "ALL" | "SOVEREIGNTY" | "SOUND MONEY" | "BUILD FROM ZERO" | "AGRIBUSINESS" | "MINDSET";

const posts = [
  {
    date: "APR 2026",
    theme: "BUILD FROM ZERO" as Theme,
    title: "The Real Cost of a Bad Website (And Why Most Small Businesses Are Paying It)",
    excerpt: "Your website is either working for you 24/7 or silently killing your credibility. Here's how to tell the difference.",
    href: "/blog/real-cost-of-bad-website",
  },
  {
    date: "APR 2026",
    theme: "BUILD FROM ZERO" as Theme,
    title: "Choosing the Right Marketing Channel: A Framework for Businesses That Can't Afford to Guess",
    excerpt: "Stop copying what worked for someone else. Here's a framework for finding the channel that actually fits your business.",
    href: "/blog/choosing-the-right-marketing-channel",
  },
  {
    date: "APR 2026",
    theme: "SOVEREIGNTY" as Theme,
    title: "Why Personal Brand Is the New Resume (And What Most People Get Wrong About It)",
    excerpt: "In a world where talent is everywhere, the person with a clear identity wins. Here's how to build one that lasts.",
    href: "/blog/why-personal-brand-matters",
  },
  {
    date: "APR 2026",
    theme: "BUILD FROM ZERO" as Theme,
    title: "Google Ads vs. Meta Ads: Which One Should You Actually Use?",
    excerpt: "Both platforms work. Both platforms waste money. Which one fits your stage and offer right now?",
    href: "/blog/google-ads-vs-meta-ads",
  },
  {
    date: "APR 2026",
    theme: "BUILD FROM ZERO" as Theme,
    title: "AI Automation for Small Business: What's Actually Worth Building",
    excerpt: "AI is everywhere. Most of it is noise. Here's what actually saves time and compounds for small operators.",
    href: "/blog/ai-automation-small-business",
  },
  {
    date: "APR 2026",
    theme: "AGRIBUSINESS" as Theme,
    title: "Farm to Funnel: A Go-to-Market Strategy for a Food Brand Launching in Canada",
    excerpt: "Most food brands build a great product and hope for the best. Here's how to build the funnel first.",
    href: "/blog/food-brand-gtm-strategy",
  },
  {
    date: "APR 2026",
    theme: "BUILD FROM ZERO" as Theme,
    title: "The Homepage That Converts: What Your Website's First 5 Seconds Must Do",
    excerpt: "Most homepages answer the wrong question. Here's what visitors actually need to see to stay.",
    href: "/blog/homepage-that-converts",
  },
];

export default function Writing() {
  useSEO({
    title: "Writing | ABOUPRENEUR",
    description: "Frameworks on building from zero, sound money, and sovereign thinking — published on Mindbloom.",
    canonical: "https://aboupreneur.page/writing",
  });

  const [activeTheme, setActiveTheme] = useState<Theme>("ALL");
  const [email, setEmail] = useState("");

  const themes: Theme[] = ["ALL", "SOVEREIGNTY", "SOUND MONEY", "BUILD FROM ZERO", "AGRIBUSINESS", "MINDSET"];

  const filtered = posts.filter((p) => activeTheme === "ALL" || p.theme === activeTheme);

  const featuredPost = posts[2];

  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch("https://aboupreneur.substack.com/api/v1/free", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `email=${encodeURIComponent(email)}`,
      });
    } catch {}
    setSubscribeSuccess(true);
    setEmail("");
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      <section style={{ padding: "120px 40px 80px" }} className="max-w-7xl mx-auto">
        <h1
          className="font-display font-bold text-white mb-6"
          style={{ fontSize: "clamp(2.5rem, 6vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: "1.05" }}
        >
          "The thinking is public.<br />
          The standards are not negotiable."
        </h1>
        <p style={{ color: "#888888", fontSize: "18px", maxWidth: "480px", lineHeight: "1.7" }}>
          Everything published here is built to compound — written with the standard
          of something worth reading long after it was posted.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-10 mb-16">
        <div
          className="p-10"
          style={{ background: "#111111", borderLeft: "4px solid #F2A900" }}
        >
          <span className="text-xs font-bold block mb-4" style={{ color: "#F2A900", letterSpacing: "0.12em" }}>
            ESSENTIAL READING
          </span>
          <h2
            className="font-display font-bold text-white mb-3"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em" }}
          >
            {featuredPost.title}
          </h2>
          <p className="mb-6" style={{ color: "#888888", fontSize: "15px", lineHeight: "1.7" }}>
            {featuredPost.excerpt}
          </p>
          <a
            href={featuredPost.href}
            className="text-sm font-bold transition-colors duration-200 hover:underline"
            style={{ color: "#F2A900" }}
          >
            READ THIS FIRST →
          </a>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-10 mb-12">
        <div className="flex flex-wrap items-center gap-0" style={{ borderBottom: "1px solid #222222" }}>
          {themes.map((theme) => (
            <button
              key={theme}
              onClick={() => setActiveTheme(theme)}
              className="text-xs font-bold px-5 py-4 transition-colors duration-200 whitespace-nowrap"
              style={{
                color: activeTheme === theme ? "#F2A900" : "#888888",
                borderBottom: activeTheme === theme ? "2px solid #F2A900" : "2px solid transparent",
                letterSpacing: "0.07em",
                marginBottom: "-1px",
                background: "transparent",
              }}
            >
              {theme}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-10 mb-20">
        {filtered.length === 0 ? (
          <div style={{ padding: "60px 0", textAlign: "center" }}>
            <p style={{ color: "#888888" }}>Nothing in this category yet — more coming soon.</p>
          </div>
        ) : (
          <div>
            {filtered.map((post, i) => (
              <a
                key={i}
                href={post.href}
                className="block py-8 group transition-colors duration-200"
                style={{ borderBottom: "1px solid #1A1A1A" }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs" style={{ color: "#888888", letterSpacing: "0.08em" }}>{post.date}</span>
                      <span className="text-xs font-bold" style={{ color: "#F2A900", letterSpacing: "0.08em" }}>{post.theme}</span>
                    </div>
                    <h3
                      className="font-display font-bold text-white mb-2 group-hover:text-accent transition-colors duration-200"
                      style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", letterSpacing: "-0.01em" }}
                    >
                      {post.title}
                    </h3>
                    <p style={{ color: "#888888", fontSize: "14px", lineHeight: "1.6" }}>{post.excerpt}</p>
                  </div>
                  <span
                    className="text-xl transition-transform duration-200 group-hover:translate-x-2 shrink-0"
                    style={{ color: "#F2A900" }}
                  >
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}

        <div className="mt-12">
          <a
            href="https://aboupreneur.substack.com"
            target="_blank"
            rel="noopener noreferrer"
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
            READ EVERYTHING ON SUBSTACK →
          </a>
        </div>
      </section>

      <section style={{ background: "#F2A900", padding: "80px 40px" }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-display font-bold text-[#0A0A0A] mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}
          >
            Don't miss the next one.
          </h2>
          <p className="mb-8" style={{ color: "#0A0A0A", fontSize: "16px", maxWidth: "400px", lineHeight: "1.6" }}>
            The Mindbloom dispatch — weekly. No noise.
          </p>
          {subscribeSuccess ? (
            <div className="py-6" style={{ maxWidth: "520px" }}>
              <p className="font-display font-bold text-[#0A0A0A] text-xl mb-1">You're in.</p>
              <p style={{ color: "#0A0A0A", opacity: 0.7, fontSize: "15px" }}>
                Check your inbox — confirm your subscription to start receiving the dispatch.
              </p>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-0" style={{ maxWidth: "520px" }}>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-5 py-4 text-sm outline-none"
                  style={{ background: "#0A0A0A", color: "#FFFFFF", border: "none" }}
                />
                <button
                  type="submit"
                  className="text-sm font-bold px-6 py-4 transition-all duration-200 whitespace-nowrap"
                  style={{ background: "#0A0A0A", color: "#F2A900" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#FFFFFF"; (e.currentTarget as HTMLButtonElement).style.color = "#0A0A0A"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#0A0A0A"; (e.currentTarget as HTMLButtonElement).style.color = "#F2A900"; }}
                >
                  JOIN THE SIGNAL
                </button>
              </form>
              <p className="mt-4 text-xs" style={{ color: "#0A0A0A", opacity: 0.6 }}>
                No spam. No fluff. Unsubscribe anytime.
              </p>
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
