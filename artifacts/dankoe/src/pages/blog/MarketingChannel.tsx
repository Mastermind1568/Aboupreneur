import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { useArticleSchema } from "@/hooks/useArticleSchema";

export default function MarketingChannel() {
  useSEO({
    title: "How to Choose the Right Marketing Channel for Your Business | Aboupreneur Blog",
    description: "Not every channel works for every business. Learn how to match the right marketing channel to your stage, audience, and offer and stop wasting budget on the wrong platforms.",
    canonical: "https://aboupreneur.page/blog/choosing-the-right-marketing-channel",
    ogImage: "https://aboupreneur.page/images/og/choosing-the-right-marketing-channel.jpg",
  });

  useArticleSchema({
    headline: "How to Choose the Right Marketing Channel for Your Business",
    description: "Not every channel works for every business. Learn how to match the right marketing channel to your stage, audience, and offer.",
    url: "https://aboupreneur.page/blog/choosing-the-right-marketing-channel",
  });

  return (
    <main className="min-h-screen bg-background pt-24">
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 py-20">
        <FadeIn>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="mb-4">
            <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">Growth Marketing</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
            How to Choose the Right Marketing Channel for Your Business
          </h1>

          <p className="text-xl text-muted-foreground italic mb-4">
            Not every channel works for every business. Stop copying what worked for someone else.
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border/40 pt-6 mb-16">
            <span>By Aboubakar Moussa</span>
            <span>·</span>
            <span>Aboupreneur</span>
            <span>·</span>
            <span>6 min read</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-8 text-foreground">

            <p className="text-lg text-muted-foreground leading-relaxed">
              One of the most common conversations I have with new clients starts the same way. They have been posting on Instagram for eight months with nothing to show for it. When I ask why they chose Instagram, the answer is almost always the same. Because everyone else in the industry is doing it.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              That's not a strategy. That's imitation. And it's one of the most expensive marketing mistakes a business can make not in dollars, necessarily, but in time and momentum.
            </p>

            <h2 className="text-3xl font-serif font-bold text-foreground mt-12 mb-4">The channel is not the strategy</h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Marketing channels Instagram, Google Ads, email, LinkedIn, TikTok, SEO, podcast, YouTube are distribution tools. They get your message in front of people. But the channel is only as good as the clarity of the message, the precision of the targeting, and the relevance to the audience at that exact moment.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              The question isn't "should I be on TikTok?" The question is "is my customer spending time on TikTok, and are they in the mindset to discover what I offer when they're there?" Those are very different questions.
            </p>

            <h2 className="text-3xl font-serif font-bold text-foreground mt-12 mb-4">Match the channel to the stage</h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              The right channel depends heavily on where your business is and what you're trying to accomplish:
            </p>

            <div className="bg-card border border-border/50 rounded-2xl p-8 space-y-6">
              <div>
                <h3 className="font-bold text-foreground mb-2">Stage 1 Finding your first customers</h3>
                <p className="text-muted-foreground">Direct outreach (LinkedIn, email), referrals, and community participation. Not ads. You haven't yet proven your offer converts spending on ads before this is premature.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Stage 2 Proving the model</h3>
                <p className="text-muted-foreground">A focused channel where your audience is active. One platform, done consistently. This is where you build proof of concept for your messaging and offers.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Stage 3 Scaling what works</h3>
                <p className="text-muted-foreground">Paid traffic (Google, Meta) amplifying an already-proven message. Email to retain and upsell. SEO for long-term inbound. Only add channels when you have bandwidth to do them well.</p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-bold text-foreground mt-12 mb-4">Matching channel to customer behaviour</h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Every channel has a different user intent. Understanding this changes everything:
            </p>

            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3"><span className="text-accent mt-1 font-bold">→</span><span><strong className="text-foreground">Google Search:</strong> High intent. People searching for solutions. Best for services with clear search volume ("web designer Edmonton", "lawyer for small business").</span></li>
              <li className="flex items-start gap-3"><span className="text-accent mt-1 font-bold">→</span><span><strong className="text-foreground">Meta (Facebook/Instagram):</strong> Interruption-based. Users aren't looking for you you appear in their feed. Best for visually compelling offers and retargeting.</span></li>
              <li className="flex items-start gap-3"><span className="text-accent mt-1 font-bold">→</span><span><strong className="text-foreground">LinkedIn:</strong> Professional context. Best for B2B, professional services, thought leadership. Decision-makers are here, but they're skeptical of hard sells.</span></li>
              <li className="flex items-start gap-3"><span className="text-accent mt-1 font-bold">→</span><span><strong className="text-foreground">Email:</strong> Owned audience. The most direct, most personal, highest ROI channel for businesses with an existing list. Build this early.</span></li>
              <li className="flex items-start gap-3"><span className="text-accent mt-1 font-bold">→</span><span><strong className="text-foreground">SEO/Blog:</strong> Long game. Takes 6–12 months to show results, but compounding traffic that doesn't cost per click. Critical for sustainable inbound.</span></li>
            </ul>

            <h2 className="text-3xl font-serif font-bold text-foreground mt-12 mb-4">The rule I use with every client</h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Before adding any new marketing channel, answer three questions: Where does my customer spend time? What are they doing there? What would make them stop scrolling and pay attention to me?
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              If you can't answer all three clearly, don't invest in that channel yet. Do the research first your budget will thank you.
            </p>

            <div className="bg-card border border-accent/30 border-l-4 rounded-r-xl p-6 mt-8">
              <p className="text-muted-foreground italic">The businesses that win are not the ones on the most channels. They're the ones that went deep on the right two or three.</p>
            </div>

            <div className="border-t border-border/40 pt-10 mt-10">
              <p className="text-muted-foreground mb-6">Not sure which channels are right for where you are? I can help you map that out.</p>
              <Link
                href="/ecosystem#consulting-form"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                Let's Figure It Out Together <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </FadeIn>
      </article>

      <Footer />
    </main>
  );
}
