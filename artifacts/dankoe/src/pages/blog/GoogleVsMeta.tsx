import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { useArticleSchema } from "@/hooks/useArticleSchema";

export default function GoogleVsMeta() {
  useSEO({
    title: "Google Ads vs Meta Ads. Which One Is Right for Your Business? | Aboupreneur Blog",
    description: "Google Ads and Meta Ads work very differently. Learn which platform fits your offer, budget, and goals and how to decide where to put your ad spend first.",
    canonical: "https://aboupreneur.page/blog/google-ads-vs-meta-ads",
  });

  useArticleSchema({
    headline: "Google Ads vs Meta Ads. Which One Is Right for Your Business?",
    description: "Google Ads and Meta Ads work very differently. Learn which platform fits your offer, budget, and goals.",
    url: "https://aboupreneur.page/blog/google-ads-vs-meta-ads",
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
            <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">Paid Advertising</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
            Google Ads vs Meta Ads. Which One Is Right for Your Business?
          </h1>

          <p className="text-xl text-muted-foreground italic mb-4">
            Both platforms work. But they work differently and choosing wrong is expensive.
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border/40 pt-6 mb-16">
            <span>By Aboubakar Moussa</span>
            <span>·</span>
            <span>Aboupreneur</span>
            <span>·</span>
            <span>7 min read</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-8 text-foreground">

            <p className="text-lg text-muted-foreground leading-relaxed">
              Every week I talk to business owners who tried ads and got burned. They ran $500 on Facebook, saw no results, and concluded that advertising doesn't work. Or they tried Google Ads, got clicks but no conversions, and decided paid traffic was "too expensive."
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              In most of these cases, the problem wasn't the platform. It was picking the wrong platform for the wrong offer at the wrong time. Google Ads and Meta Ads are both powerful but they operate on fundamentally different principles, and understanding that difference determines everything.
            </p>

            <h2 className="text-3xl font-serif font-bold text-foreground mt-12 mb-4">The core difference: intent vs. interruption</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-card border border-border/50 rounded-2xl p-6">
                <h3 className="font-bold text-foreground text-lg mb-3">Google Ads</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">People are <strong className="text-foreground">searching for a solution</strong>. They have a need, they're aware of it, and they're actively looking. Your ad appears at the moment of highest intent.</p>
                <div className="mt-4 pt-4 border-t border-border/40">
                  <p className="text-xs text-accent font-bold uppercase tracking-wider">Best for</p>
                  <p className="text-sm text-muted-foreground mt-1">Services, local businesses, anything people search for by name</p>
                </div>
              </div>
              <div className="bg-card border border-border/50 rounded-2xl p-6">
                <h3 className="font-bold text-foreground text-lg mb-3">Meta Ads (Facebook/Instagram)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">People are <strong className="text-foreground">scrolling, not searching</strong>. You interrupt their feed with something compelling enough to stop them. Awareness and desire are created, not captured.</p>
                <div className="mt-4 pt-4 border-t border-border/40">
                  <p className="text-xs text-accent font-bold uppercase tracking-wider">Best for</p>
                  <p className="text-sm text-muted-foreground mt-1">Products, e-commerce, retargeting, brand awareness campaigns</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-bold text-foreground mt-12 mb-4">When Google Ads wins</h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              If your customer knows they have a problem and is actively searching for help, Google is your platform. A person searching "family lawyer Calgary" or "house cleaning service Edmonton" is ready to buy. Your ad meets them at the exact moment of intent. The conversion path is short.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Google Ads also works well for competitive markets where showing up on page one organically would take years. You pay to be there immediately while your SEO builds in the background.
            </p>

            <h2 className="text-3xl font-serif font-bold text-foreground mt-12 mb-4">When Meta Ads wins</h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              If your customer doesn't know they need your product yet, or if your product needs to be seen to be understood, Meta is your platform. A visually compelling product, a before-and-after transformation, or a story-driven video ad these work in an interruption environment.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Meta also excels at retargeting showing ads to people who already visited your website, watched your video, or engaged with your content. The intent wasn't there originally, but you've built enough familiarity to create it.
            </p>

            <h2 className="text-3xl font-serif font-bold text-foreground mt-12 mb-4">The budget question</h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Google Ads tends to be more expensive per click, especially in competitive industries, but the intent is higher so conversions are more likely. Meta tends to have lower CPCs but requires more creative testing and a longer conversion path.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              For most small businesses with a limited budget, I recommend starting with Google Search Ads if you serve clear search intent, or Meta if your product needs to be discovered. Never run both at once until you have enough budget to do each well.
            </p>

            <div className="bg-card border border-accent/30 border-l-4 rounded-r-xl p-6 mt-8">
              <p className="text-muted-foreground italic">The worst outcome in paid advertising isn't failing it's spreading $300/month across two platforms and learning nothing. Pick one. Go deep. Learn fast.</p>
            </div>

            <div className="border-t border-border/40 pt-10 mt-10">
              <p className="text-muted-foreground mb-6">Not sure which platform fits your offer? I run both and can give you an honest recommendation based on your specific situation.</p>
              <Link
                href="/ecosystem#consulting-form"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                Get a Recommendation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </FadeIn>
      </article>

      <Footer />
    </main>
  );
}
