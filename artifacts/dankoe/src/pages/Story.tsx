import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";

const SovereigntyCards = () => (
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
        <span className="text-xs font-bold" style={{ color: "#F2A900", letterSpacing: "0.14em" }}>
          {card.phase}
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
    description: "From Cameroon to Canada. The journey from global trader to Bitcoin conviction to agribusiness and the system that connects it all.",
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
          From Zero to System:<br />
          The Architecture of<br />a Sovereign Life
        </h1>

        <p className="text-sm italic mb-12" style={{ color: "#888888" }}>
          By Aboubakar Moussa · Written in public
        </p>

        <blockquote
          className="text-xl italic mb-16"
          style={{ borderLeft: "3px solid #F2A900", paddingLeft: "24px", color: "#F2A900", lineHeight: "1.6" }}
        >
          "Most people are taught to earn, spend, and survive.
          <br />Nobody taught me the system. So I built it."
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
            "I didn't wait for permission<br />to enter the market."
          </h2>
          <div className="space-y-5 text-base leading-relaxed" style={{ color: "#444444", lineHeight: "1.8" }}>
            <p>
              Before I understood frameworks, I understood friction. Cameroon had needs
              that suppliers in China and Canada hadn't bothered to meet efficiently.
              The gap between what things cost to source and what people were willing
              to pay at home that was my first classroom.
            </p>
            <p>
              I started moving electronics. Phones, accessories, components. Sourcing
              from Guangzhou and Toronto, moving volume across borders most people
              treated as walls. I learned that markets don't care where you're from.
              They only care whether you can solve the gap.
            </p>
            <p>
              That business taught me three things I've never forgotten: markets reward
              preparation over luck, information is always the real asset, and the
              person who controls the logistics controls the margin.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white" style={{ padding: "80px 40px", borderTop: "1px solid #E5E5E5" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <span className="text-xs font-bold block mb-8" style={{ color: "#F2A900", letterSpacing: "0.12em" }}>
            ACT II THE CONVICTION
          </span>
          <h2
            className="font-display font-bold text-[#0A0A0A] mb-8"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}
          >
            "In 2016, Bitcoin arrived in Africa.<br />I was already waiting."
          </h2>
          <div className="space-y-5 text-base" style={{ color: "#444444", lineHeight: "1.8" }}>
            <p>
              Most people in the West discovered Bitcoin in 2017, when the price
              made headlines. I found it earlier during the year it began penetrating
              African markets. And what I saw was not a speculative instrument.
              I saw a lifeline.
            </p>
            <p>
              I became a liquidity bridge. A middleman in a network that had no
              established infrastructure. I watched the dollar fluctuate from 500 to
              580 francs in the same week. I watched people's savings quietly evaporate
              through currency devaluation they didn't understand and couldn't fight.
              I understood it because I was moving money across borders every week.
            </p>
            <p>
              The insight was simple: soft money is a tax on the productive. Every
              currency printed in excess is a transfer of wealth from those who saved
              to those who issued. Bitcoin didn't solve every problem. But it was the
              first instrument I encountered that a government couldn't print more of.
            </p>
            <p>
              I didn't trade in and out. I built conviction. I held through the bear
              markets. I liquidated a small fraction at $14,000 enough to buy my
              first car. The rest stays. Not because I'm a maximalist, but because
              sound money is the foundation every other phase of wealth-building
              requires to stand on.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white" style={{ padding: "80px 40px", borderTop: "1px solid #E5E5E5" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <span className="text-xs font-bold block mb-8" style={{ color: "#F2A900", letterSpacing: "0.12em" }}>
            ACT III THE SYSTEM
          </span>
          <h2
            className="font-display font-bold text-[#0A0A0A] mb-8"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}
          >
            "I moved to Canada to study soil.<br />The real lesson was sovereignty."
          </h2>
          <div className="space-y-5 text-base" style={{ color: "#444444", lineHeight: "1.8" }}>
            <p>
              The decision to come to Canada wasn't random. Lakeland College in
              Alberta one of the few places in North America where you can study
              agribusiness marketing with real operational depth. I came to learn
              land systems. Food infrastructure. The physical layer of wealth that
              no digital market can fully replace.
            </p>
            <p>
              But studying here sharpened something else: the realization that the
              system I'd been building intuitively had a structure. You make money
              through skills and leverage. You multiply it through assets that hold
              value. You protect it through infrastructure that produces regardless
              of market conditions.
            </p>
            <p>
              Three phases. One loop. The Sovereignty Loop.
            </p>
            <p>
              Everything I build now the platforms, the writing, the consulting,
              the ventures is an expression of that framework. And everything I
              publish is the blueprint I'm handing to the next version of the person
              I used to be.
            </p>
            <p>
              The 22-year-old in Cameroon who understood the gap between two prices
              but didn't yet have the system to convert that intelligence into freedom.
            </p>
            <p className="font-bold text-[#0A0A0A]">This is for him.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#0A0A0A]" style={{ padding: "80px 40px" }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-sm mb-12" style={{ color: "#888888" }}>
            Everything above is story. This is the architecture.
          </p>
          <SovereigntyCards />
        </div>
      </section>

      <section className="bg-white" style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2
            className="font-display font-bold text-[#0A0A0A] mb-6"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}
          >
            "The blueprint is live.<br />Here's what's in it."
          </h2>
          <p className="text-base mb-6" style={{ color: "#444444", lineHeight: "1.8" }}>
            The ventures, the content, and the systems described on this page aren't
            plans. They're in motion. Moneyverse is live. Mindbloom publishes weekly.
            Farm to Funnel is in operation. The consulting practice is active.
          </p>
          <p className="text-base mb-10" style={{ color: "#444444", lineHeight: "1.8" }}>
            The story isn't finished it's being built in public. Follow the
            ecosystem, subscribe to the writing, or come back to this page in
            twelve months and see how far the loop has run.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/ecosystem"
              className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3 transition-all duration-200"
              style={{ border: "1px solid #F2A900", color: "#F2A900" }}
            >
              EXPLORE THE ECOSYSTEM →
            </Link>
            <Link
              href="/writing"
              className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3 transition-all duration-200"
              style={{ border: "1px solid #222222", color: "#888888" }}
            >
              READ THE WRITING →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
