import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

export default function WebsiteCost() {
  useSEO({
    title: "The Real Cost of a Bad Website | Aboupreneur Blog",
    description: "A slow, outdated website isn't just an aesthetic problem — it's a revenue problem. Learn what a bad website is really costing your business and how to fix it.",
    canonical: "https://aboupreneur.page/blog/real-cost-of-bad-website",
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
            <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">Web Design</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
            The Real Cost of a Bad Website (It's Not What You Think)
          </h1>

          <p className="text-xl text-muted-foreground italic mb-4">
            A slow, outdated, or confusing website isn't just an aesthetic problem. It's a revenue problem.
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border/40 pt-6 mb-16">
            <span>By Aboubakar Moussa</span>
            <span>·</span>
            <span>Aboupreneur</span>
            <span>·</span>
            <span>5 min read</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-8 text-foreground">

            <p className="text-lg text-muted-foreground leading-relaxed">
              Most business owners know their website isn't great. They'll tell you "it's on the list" or "we're planning a redesign next quarter." What they don't always calculate is what that delay is costing them right now — in leads never captured, in trust never built, in visitors who left and never came back.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              A bad website isn't free. It has a cost — it's just hidden.
            </p>

            <h2 className="text-3xl font-serif font-bold text-foreground mt-12 mb-4">The trust problem</h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Before a visitor reads your copy, they've already made a judgment. Research from Stanford consistently shows that 75% of people judge a company's credibility based on its website design. In the first 0.05 seconds — before a single word is processed — a visitor has formed a first impression.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              If your site looks like it was built in 2014, doesn't load on mobile, or has broken links and outdated copy, that trust deficit follows everything else. Your testimonials don't land. Your pricing feels uncertain. Your CTA gets ignored.
            </p>

            <h2 className="text-3xl font-serif font-bold text-foreground mt-12 mb-4">The speed problem</h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Google has been clear: page speed is a ranking factor. But beyond SEO, slow sites drive away real people. A one-second delay in page load time reduces conversions by 7%. A three-second delay loses half your mobile visitors before they've seen anything. If your site takes four seconds to load — which is common for unoptimized WordPress sites with bloated themes — you're running ads and doing outreach to fill a leaking bucket.
            </p>

            <h2 className="text-3xl font-serif font-bold text-foreground mt-12 mb-4">The clarity problem</h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              The most common problem I find when auditing a client's website isn't design — it's clarity. Visitors can't figure out what you do, who it's for, or what to do next. Three services buried in a dropdown. A hero section that talks about your company values instead of the visitor's problem. A contact form with 11 required fields.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              A website's job is not to explain everything about your business. It's to move the right visitor to the next step. Every element that doesn't serve that goal is friction — and friction costs you conversions.
            </p>

            <div className="bg-card border border-border/50 rounded-2xl p-8 mt-10">
              <h3 className="font-bold text-foreground text-xl mb-4">What a good website actually does</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3"><span className="text-accent mt-1">→</span> Tells a visitor in five seconds what you do and who it's for</li>
                <li className="flex items-start gap-3"><span className="text-accent mt-1">→</span> Builds trust through proof (testimonials, case studies, credentials)</li>
                <li className="flex items-start gap-3"><span className="text-accent mt-1">→</span> Loads in under two seconds on mobile</li>
                <li className="flex items-start gap-3"><span className="text-accent mt-1">→</span> Makes the next step obvious and low-friction</li>
                <li className="flex items-start gap-3"><span className="text-accent mt-1">→</span> Captures leads even when you're offline</li>
              </ul>
            </div>

            <h2 className="text-3xl font-serif font-bold text-foreground mt-12 mb-4">When to redesign vs. refresh</h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Not every bad website needs to be rebuilt from scratch. Sometimes a refresh — new photography, tightened copy, restructured navigation, and a speed audit — can recover 70% of the value at 30% of the cost. Other times, the structure is so outdated that rebuilding is the honest answer.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I work with a client, the first conversation is always about what's actually broken and what the goal is. Not every business needs a $10,000 custom build. Some need a fast, clear, credible website that converts — and that can be done efficiently with the right approach.
            </p>

            <div className="border-t border-border/40 pt-10 mt-10">
              <p className="text-muted-foreground mb-6">If you suspect your website is costing you leads, I'm happy to take a look and give you an honest opinion.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                Get a Free Audit <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </FadeIn>
      </article>

      <Footer />
    </main>
  );
}
