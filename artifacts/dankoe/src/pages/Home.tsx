import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";

const TICKER_TEXT =
  "SOUND MONEY IS NOT OPTIONAL  ·  PHYSICAL ASSETS ANCHOR DIGITAL WEALTH  ·  THE SOVEREIGN INDIVIDUAL IS BUILT, NOT BORN  ·  SKILLS BEFORE CAPITAL  ·  BUILD IN PUBLIC, PROTECT IN PRIVATE  ·  ";

const recentPosts = [
  {
    date: "APR 2026",
    title: "Why Personal Brand Is the New Resume (And What Most People Get Wrong About It)",
    excerpt: "In a world where talent is everywhere, the person with a clear identity wins.",
    href: "/blog/why-personal-brand-matters",
  },
  {
    date: "APR 2026",
    title: "AI Automation for Small Business. What's Actually Worth Building",
    excerpt: "AI is everywhere. Most of it is noise. Here's what actually saves time and compounds.",
    href: "/blog/ai-automation-small-business",
  },
  {
    date: "APR 2026",
    title: "Farm to Funnel. A Go-to-Market Strategy for a Food Brand Launching in Canada",
    excerpt: "Most food brands build a great product and hope for the best. Here's how to build the funnel first.",
    href: "/blog/food-brand-gtm-strategy",
  },
];

export default function Home() {
  useSEO({
    title: "ABOUPRENEUR | Build. Stack. Sovereign.",
    description:
      "Aboubakar Moussa entrepreneur, agribusiness strategist, and sound money advocate. The Sovereignty Loop. Make. Multiply. Protect. Built for those who start with nothing.",
    canonical: "https://aboupreneur.page/",
  });

  const [email, setEmail] = useState("");
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
          style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)", letterSpacing: "-0.04em", lineHeight: "1.02" }}
        >
          <span className="block text-white">Sovereignty</span>
          <span className="block text-white">isn't given.</span>
          <span className="block" style={{ color: "#F2A900" }}>It's built.</span>
        </h1>

        <p
          className="mb-12 relative"
          style={{ color: "#888888", fontSize: "clamp(1rem, 2vw, 1.2rem)", maxWidth: "560px", lineHeight: "1.7" }}
        >
          From Cameroon to Canada. From a teenage trader to a systems architect.
          I built the blueprint I wish I had and I'm sharing every layer of it here.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 relative">
          <Link
            href="/story"
            className="text-sm font-bold px-8 py-4 transition-all duration-200"
            style={{ border: "1px solid #F2A900", color: "#F2A900" }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#F2A900";
              el.style.color = "#0A0A0A";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "transparent";
              el.style.color = "#F2A900";
            }}
          >
            READ MY STORY →
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
            ENTER THE ECOSYSTEM
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <div className="w-px h-10 animate-scroll" style={{ background: "#F2A900" }} />
        </div>
      </section>

      {/* ── SIGNAL BAR ── */}
      <section className="overflow-hidden" style={{ background: "#F2A900", padding: "18px 0" }}>
        <div className="animate-marquee">
          <span
            className="font-bold whitespace-nowrap"
            style={{ color: "#0A0A0A", fontSize: "13px", letterSpacing: "0.1em" }}
          >
            {TICKER_TEXT.repeat(6)}
          </span>
        </div>
      </section>

      {/* ── THE MAN BEHIND THE BRAND ── */}
      <section className="bg-white" style={{ padding: "100px 40px" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-16 lg:gap-24 items-start">
            <div>
              <span
                className="text-xs font-bold block mb-6"
                style={{ color: "#F2A900", letterSpacing: "0.12em" }}
              >
                THE ORIGIN
              </span>
              <h2
                className="font-display font-bold text-[#0A0A0A] mb-8"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}
              >
                "I didn't read about building from zero. I lived it."
              </h2>
              <div className="space-y-5" style={{ color: "#444444", fontSize: "16px", lineHeight: "1.8" }}>
                <p>
                  Before I understood systems, I understood arbitrage. As a teenager in Cameroon,
                  I was sourcing electronics from China, the USA, and Canada moving goods across
                  markets that most people thought were disconnected. That's where I learned that
                  money flows toward whoever understands the gap between two prices.
                </p>
                <p>
                  In 2016, when Bitcoin first entered African markets, I was there. I became a
                  liquidity bridge a middleman in a network that didn't yet have infrastructure.
                  I watched currencies fluctuate violently. I watched savings evaporate. I developed
                  a conviction about sound money that no textbook could have given me: hard assets
                  preserve what soft systems destroy.
                </p>
                <p>
                  The move to Canada wasn't a coincidence. I came to study agribusiness at Lakeland
                  College to anchor digital wealth in the most enduring asset class there is. Land
                  and food systems. Everything I build now runs on a single framework. Make money
                  with skills. Multiply it with sound money. Protect it with physical assets. I call
                  it the Sovereignty Loop.
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

      {/* ── THE SOVEREIGNTY LOOP ── */}
      <section className="bg-[#0A0A0A]" style={{ padding: "100px 40px" }}>
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold block mb-6" style={{ color: "#F2A900", letterSpacing: "0.12em" }}>
            THE FRAMEWORK
          </span>
          <h2
            className="font-display font-bold text-white mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}
          >
            "Three phases. One system.<br />No shortcuts."
          </h2>
          <p className="mb-16" style={{ color: "#888888", fontSize: "18px", maxWidth: "540px", lineHeight: "1.7" }}>
            This isn't theory. It's the exact sequence I followed and the one I teach through
            everything I build.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                phase: "MAKE",
                title: "Digital leverage",
                body: "Skills generate free cash flow. Web development, AI automation, performance marketing, SEO systems. The stack that keeps producing whether you're awake or asleep.",
                tags: "Web · AI · Marketing",
              },
              {
                num: "02",
                phase: "MULTIPLY",
                title: "Sound money",
                body: "Bitcoin accumulation as a philosophical stance, not speculation. The exit ramp from fiat erosion. Conviction built over years of watching currencies collapse and digital scarcity hold.",
                tags: "Store of value · Long-term conviction",
              },
              {
                num: "03",
                phase: "PROTECT",
                title: "Physical assets",
                body: "Agribusiness, agricultural land, and food infrastructure. The multi-generational anchor that outlasts any market cycle. Roots that no policy can print away.",
                tags: "Land · Agribusiness · Legacy",
              },
            ].map((card) => (
              <div
                key={card.num}
                className="p-8 flex flex-col gap-4"
                style={{ borderLeft: "3px solid #F2A900", background: "#111111" }}
              >
                <span
                  className="text-xs font-bold"
                  style={{ color: "#F2A900", letterSpacing: "0.14em" }}
                >
                  {card.num} / {card.phase}
                </span>
                <h3
                  className="font-display font-bold text-white"
                  style={{ fontSize: "1.75rem", letterSpacing: "-0.02em" }}
                >
                  {card.title}
                </h3>
                <p className="text-sm flex-1" style={{ color: "#888888", lineHeight: "1.7" }}>
                  {card.body}
                </p>
                <span className="text-xs" style={{ color: "#F2A900" }}>→ {card.tags}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ECOSYSTEM TEASER ── */}
      <section className="bg-white" style={{ padding: "100px 40px" }}>
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold block mb-6" style={{ color: "#F2A900", letterSpacing: "0.12em" }}>
            THE ECOSYSTEM
          </span>
          <h2
            className="font-display font-bold text-[#0A0A0A] mb-16"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}
          >
            "Everything I build<br />points to one outcome."
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                tag: "SOUND MONEY",
                tagStyle: { background: "#F2A900", color: "#0A0A0A" },
                title: "Moneyverse",
                body: "The institutional-grade Bitcoin education platform. 11 modules on DCA, macroeconomics, and wealth preservation for the entrepreneur who refuses to stay in fiat.",
                link: "moneyverse.network →",
                href: "https://moneyverse.network",
                external: true,
              },
              {
                tag: "WRITING",
                tagStyle: { background: "#0A0A0A", color: "#F2A900" },
                title: "Mindbloom",
                body: "The Substack writing engine. Deep frameworks on execution, uncompromised standards, and the mindset behind building from absolute zero.",
                link: "aboupreneur.substack.com →",
                href: "https://aboupreneur.substack.com",
                external: true,
              },
              {
                tag: "AGRIBUSINESS",
                tagStyle: { background: "#0A0A0A", color: "#FFFFFF" },
                title: "Farm to Funnel",
                body: "Newsletter bridging agribusiness communication and digital marketing systems. For the operator who wants to grow what they've built.",
                link: "Subscribe →",
                href: "https://www.linkedin.com/newsletters/farm-to-funnel-7409350357295923200",
                external: true,
              },
              {
                tag: "CONSULTING",
                tagStyle: { background: "#E5E5E5", color: "#0A0A0A" },
                title: "Consulting",
                body: "Systems architecture, AI automation, and web pipelines for operators who want infrastructure, not just tactics. Built for ambitious builders.",
                link: "Work with me →",
                href: "/ecosystem#consulting-form",
                external: false,
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-8 transition-all duration-200"
                style={{ border: "1px solid #E5E5E5" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#F2A900";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#E5E5E5";
                }}
              >
                <span
                  className="text-xs font-bold inline-block mb-4 px-3 py-1"
                  style={{ ...card.tagStyle, letterSpacing: "0.08em" }}
                >
                  {card.tag}
                </span>
                <h3
                  className="font-display font-bold text-[#0A0A0A] mb-3"
                  style={{ fontSize: "1.375rem" }}
                >
                  {card.title}
                </h3>
                <p className="text-sm mb-5" style={{ color: "#888888", lineHeight: "1.7" }}>
                  {card.body}
                </p>
                <a
                  href={card.href}
                  target={card.external ? "_blank" : "_self"}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className="text-sm font-bold transition-colors duration-200 hover:underline"
                  style={{ color: "#F2A900" }}
                >
                  {card.link}
                </a>
              </div>
            ))}
          </div>

          <Link
            href="/ecosystem"
            className="text-sm font-bold transition-colors duration-200 hover:text-[#F2A900]"
            style={{ color: "#0A0A0A" }}
          >
            EXPLORE THE FULL ECOSYSTEM →
          </Link>
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
              The signal.
            </h2>
            <h2
              className="font-display font-bold"
              style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", letterSpacing: "-0.03em", color: "#F2A900" }}
            >
              Not noise.
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

      {/* ── NEWSLETTER CTA ── */}
      <section style={{ background: "#F2A900", padding: "100px 40px" }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-display font-bold text-[#0A0A0A] mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", letterSpacing: "-0.04em", lineHeight: "1.05" }}
          >
            "You found this page<br />for a reason."
          </h2>
          <p
            className="mb-10"
            style={{ color: "#0A0A0A", fontSize: "18px", maxWidth: "520px", lineHeight: "1.7" }}
          >
            If you're building from zero and refusing to accept dependence as permanent 
            the weekly dispatch is where the real work happens. No noise. No motivational
            garbage. Just the system, live.
          </p>

          {subscribeSuccess ? (
            <div className="py-6" style={{ maxWidth: "520px" }}>
              <p className="font-display font-bold text-[#0A0A0A] text-xl mb-1">You're in.</p>
              <p style={{ color: "#0A0A0A", opacity: 0.7, fontSize: "15px" }}>
                Check your inbox confirm your subscription to start receiving the dispatch.
              </p>
            </div>
          ) : (
            <>
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-0 mb-4"
                style={{ maxWidth: "520px" }}
              >
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
                  className="text-sm font-bold px-8 py-4 whitespace-nowrap transition-all duration-200"
                  style={{ background: "#0A0A0A", color: "#F2A900" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLButtonElement; el.style.background = "#FFFFFF"; el.style.color = "#0A0A0A"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLButtonElement; el.style.background = "#0A0A0A"; el.style.color = "#F2A900"; }}
                >
                  JOIN THE SIGNAL
                </button>
              </form>
              <p className="text-xs" style={{ color: "#0A0A0A", opacity: 0.6 }}>
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
