import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";

const FrameworkCards = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      {
        num: "01",
        title: "Credible Online Presence",
        body: "A robust digital storefront that stops losing you credibility. Designed to answer immediately what you do, who you serve, and how to get in touch.",
        tags: "Websites · Landing Pages",
      },
      {
        num: "02",
        title: "Search & Local Visibility",
        body: "When your local market searches for your service, you need to be there. Targeted acquisition through SEO and Google Ads to fill your schedule.",
        tags: "Local SEO · Paid Ads",
      },
      {
        num: "03",
        title: "Practical AI Automation",
        body: "Stop letting leads fall through the cracks because you're busy on the tools. Automated intake, follow-ups, and CRM syncing to capture every opportunity.",
        tags: "AI Workflows · Operations",
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
        <h3 className="text-2xl font-display font-bold text-white" style={{ letterSpacing: "-0.02em" }}>
          {card.title}
        </h3>
        <p className="text-sm leading-relaxed flex-1" style={{ color: "#888888", lineHeight: "1.7" }}>
          {card.body}
        </p>
        <span className="text-xs" style={{ color: "#F2A900" }}>→ {card.tags}</span>
      </div>
    ))}
  </div>
);

export default function Story() {
  useSEO({
    title: "The Story | ABOUPRENEUR",
    description: "From Cameroon to Canada. Verified agribusiness background, Chartered Marketer studies, and the drive to build digital infrastructure for the real economy.",
    canonical: "https://aboupreneur.page/story",
  });

  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      <Navbar />

      <section className="pt-[120px] pb-20" style={{ maxWidth: "800px", margin: "0 auto", padding: "120px 40px 80px" }}>
        <span className="text-xs font-bold block mb-8" style={{ color: "#F2A900", letterSpacing: "0.14em" }}>
          THE STORY OF ABOUPRENEUR
        </span>

        <h1
          className="font-display font-bold text-white mb-6"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.03em", lineHeight: "1.05" }}
        >
          From Cameroon to Canada.<br />
          Infrastructure for the<br />Real Economy
        </h1>

        <p className="text-sm italic mb-12" style={{ color: "#888888" }}>
          By Aboubakar Moussa
        </p>

        <blockquote
          className="text-xl italic mb-16"
          style={{ borderLeft: "3px solid #F2A900", paddingLeft: "24px", color: "#F2A900", lineHeight: "1.6" }}
        >
          "I build systems for operators who do the actual work. You don't need a bloated agency. You need one accountable partner."
        </blockquote>
      </section>

      <section className="bg-white" style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <span className="text-xs font-bold block mb-8" style={{ color: "#F2A900", letterSpacing: "0.12em" }}>
            ACT I THE TRADER
          </span>
          <h2
            className="font-display font-bold text-[#0A0A0A] mb-8"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}
          >
            "Before I understood digital frameworks, I understood friction"
          </h2>
          <div className="space-y-5 text-base leading-relaxed" style={{ color: "#444444", lineHeight: "1.8" }}>
            <p>
              Growing up in Cameroon, I saw early on that markets reward those who solve gaps efficiently. I started moving electronics sourcing from Guangzhou and Toronto, moving volume across borders most people treated as walls.
            </p>
            <p>
              That early business taught me lessons no textbook could have: markets reward preparation over luck, information is the real asset, and the person who controls the logistics controls the margin.
            </p>
            <p>
              Later, experiencing firsthand how currency devaluation eroded savings in my home country, I became an early adopter of Bitcoin when it entered African markets in 2016. I became a liquidity bridge, watching currencies fluctuate violently and realizing the deep importance of solid foundations whether in money, business, or technology.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white" style={{ padding: "80px 40px", borderTop: "1px solid #E5E5E5" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <span className="text-xs font-bold block mb-8" style={{ color: "#F2A900", letterSpacing: "0.12em" }}>
            ACT II THE FOUNDATION
          </span>
          <h2
            className="font-display font-bold text-[#0A0A0A] mb-8"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}
          >
            "I moved to Canada to study agribusiness. I learned the physical layer of the economy"
          </h2>
          <div className="space-y-5 text-base" style={{ color: "#444444", lineHeight: "1.8" }}>
            <p>
              The decision to move to Canada was driven by a desire to anchor my knowledge in the most enduring asset class there is: food and land systems. I earned an agribusiness diploma from Lakeland College in Alberta, gaining deep exposure to practical marketing and operations.
            </p>
            <p>
              I learned that the best businesses aren't built on hype; they are built on solid operations, clear communication, and reliable pipelines.
            </p>
            <p>
              Today, I am formally deepening my expertise by pursuing the Chartered Marketer designation. It's about bringing rigorous standards to the hands-on execution I've practiced for years.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white" style={{ padding: "80px 40px", borderTop: "1px solid #E5E5E5" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <span className="text-xs font-bold block mb-8" style={{ color: "#F2A900", letterSpacing: "0.12em" }}>
            ACT III THE OPERATOR
          </span>
          <h2
            className="font-display font-bold text-[#0A0A0A] mb-8"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}
          >
            "Why I build for trades, home services, and agribusiness"
          </h2>
          <div className="space-y-5 text-base" style={{ color: "#444444", lineHeight: "1.8" }}>
            <p>
              I serve the people who build and maintain the physical world. Plumbers, electricians, landscapers, agribusiness operators, and fellow newcomer entrepreneurs who came here to build a legacy.
            </p>
            <p>
              You don't need a trendy digital agency that speaks in buzzwords and locks you into bloated, long-term retainers for work you don't understand.
            </p>
            <p>
              You need an accountable operator who can build a professional web presence, run campaigns that actually make your phone ring, and implement AI tools that follow up with leads while you're busy on the job site.
            </p>
            <p className="font-bold text-[#0A0A0A]">
              That is the system I build.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0A0A0A]" style={{ padding: "80px 40px" }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-sm mb-12" style={{ color: "#888888" }}>
            The three pillars of growth.
          </p>
          <FrameworkCards />
        </div>
      </section>

      <section className="bg-white" style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2
            className="font-display font-bold text-[#0A0A0A] mb-6"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}
          >
            "Stop fighting your tech stack. Start booking more work"
          </h2>
          <p className="text-base mb-10" style={{ color: "#444444", lineHeight: "1.8" }}>
            Whether you need a full website launch, a local SEO overhaul, or practical AI automation to handle your intake, I'm ready to discuss your project. We work on clear, project-based scopes or ongoing performance engagements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 text-sm font-bold px-6 py-4 transition-all duration-200"
              style={{ background: "#F2A900", color: "#0A0A0A" }}
            >
              START A CONVERSATION →
            </Link>
            <Link
              href="/ecosystem"
              className="inline-flex items-center justify-center gap-2 text-sm font-bold px-6 py-4 transition-all duration-200"
              style={{ border: "1px solid #222222", color: "#888888" }}
            >
              EXPLORE SERVICES
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
