import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { useArticleSchema } from "@/hooks/useArticleSchema";

export default function HomepageCopy() {
  useSEO({
    title: "How to Write a Homepage That Converts (Without Sounding Like a Robot) | Aboupreneur Blog",
    description: "Most homepages talk about the business instead of the visitor. Learn the five-section framework that turns your homepage into a client-generating machine.",
    canonical: "https://aboupreneur.page/blog/homepage-that-converts",
  });

  useArticleSchema({
    headline: "How to Write a Homepage That Converts (Without Sounding Like a Robot)",
    description: "Most homepages talk about the business instead of the visitor. Learn the five-section framework that turns your homepage into a client-generating machine.",
    url: "https://aboupreneur.page/blog/homepage-that-converts",
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
            <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">Web Design & Copy</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
            How to Write a Homepage That Converts (Without Sounding Like a Robot)
          </h1>

          <p className="text-xl text-muted-foreground italic mb-4">
            Most homepages talk about the business. The best ones talk about the visitor.
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
              I've audited hundreds of small business websites, and the pattern is almost always the same. The homepage opens with something like: "Welcome to [Company Name]. We are a leading provider of [generic service] committed to excellence and customer satisfaction." Then a stock photo of a handshake. Then a list of services that could belong to any company in the category.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Nobody reads this. Nobody stays. And the business owner wonders why the website generates no leads.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              The problem isn't the design. It's that the page is written for the wrong person it talks about the company when it should be talking about the visitor.
            </p>

            <h2 className="text-3xl font-serif font-bold text-foreground mt-12 mb-4">The five-second test</h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              A first-time visitor to your homepage will decide in five seconds whether to stay or leave. In that window, they need to answer three questions: What is this? Is it for me? What do I do next?
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              If your above-the-fold section doesn't answer all three, you're already losing them. This is why your hero headline is the single most important piece of copy on your entire website.
            </p>

            <h2 className="text-3xl font-serif font-bold text-foreground mt-12 mb-4">The five-section framework</h2>

            <div className="bg-card border border-border/50 rounded-2xl p-8 space-y-6">
              <div>
                <h3 className="font-bold text-foreground mb-2">1. The hero clarity over cleverness</h3>
                <p className="text-muted-foreground">State what you do, who you do it for, and what outcome they get. "I help [audience] achieve [outcome] without [pain]." Variations of this formula convert. Generic taglines do not.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">2. The problem name what they're experiencing</h3>
                <p className="text-muted-foreground">Before you talk about your solution, describe the problem accurately enough that the visitor thinks "how do they know that?" This builds instant resonance. When people feel understood, they trust.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">3. The solution briefly, then move on</h3>
                <p className="text-muted-foreground">Explain what you do to solve it concisely. This is not a services page. It's a bridge between the problem and the proof. Keep it simple. Detail comes later.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">4. The proof let others speak for you</h3>
                <p className="text-muted-foreground">Testimonials, case study snippets, logos, numbers. Proof reduces the perceived risk of choosing you. The more specific, the better. "Results improved" is weak. "Our leads went up 40% in 60 days" is strong.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">5. The call to action one clear next step</h3>
                <p className="text-muted-foreground">Don't offer a menu. Choose one action you want them to take and make it obvious. "Book a free call." "Get your audit." "Start a project." One CTA, repeated at logical scroll points.</p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-bold text-foreground mt-12 mb-4">Common copy mistakes to avoid</h2>

            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3"><span className="text-accent mt-1 font-bold">→</span><span><strong className="text-foreground">Using "we" more than "you."</strong> Count how many times your homepage says "we" vs. "you." The ratio reveals who you're actually writing for.</span></li>
              <li className="flex items-start gap-3"><span className="text-accent mt-1 font-bold">→</span><span><strong className="text-foreground">Burying the offer.</strong> Your main service should be clear within the first two scrolls. Don't make visitors hunt for what you sell.</span></li>
              <li className="flex items-start gap-3"><span className="text-accent mt-1 font-bold">→</span><span><strong className="text-foreground">Jargon and buzzwords.</strong> "Synergistic solutions" and "holistic approach" mean nothing. Write the way you'd explain it to a friend over coffee.</span></li>
              <li className="flex items-start gap-3"><span className="text-accent mt-1 font-bold">→</span><span><strong className="text-foreground">Walls of text.</strong> Online readers scan. Short paragraphs, bold key phrases, and visual breaks keep people reading. Long dense blocks send them back to Google.</span></li>
            </ul>

            <div className="bg-card border border-accent/30 border-l-4 rounded-r-xl p-6 mt-8">
              <p className="text-muted-foreground italic">The best homepage copy sounds like a confident conversation, not a brochure. Write for the person you want to attract. Ignore everyone else.</p>
            </div>

            <div className="border-t border-border/40 pt-10 mt-10">
              <p className="text-muted-foreground mb-6">Want me to take a look at your homepage and tell you honestly what's working and what isn't?</p>
              <Link
                href="/ecosystem#consulting-form"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                Request a Free Homepage Review <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </FadeIn>
      </article>

      <Footer />
    </main>
  );
}
