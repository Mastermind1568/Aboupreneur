import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

export default function PersonalBrand() {
  useSEO({
    title: "Why Your Personal Brand Is Your Most Valuable Business Asset | Aboupreneur Blog",
    description: "In a world full of competing offers, your personal brand is the reason someone chooses you over anyone else. Here's why it matters and how to start building one deliberately.",
    canonical: "https://aboupreneur.page/blog/why-personal-brand-matters",
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
            <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">Personal Branding</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
            Why Your Personal Brand Is Your Most Valuable Business Asset
          </h1>

          <p className="text-xl text-muted-foreground italic mb-4">
            Companies can copy your offer. They can't copy you.
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
              At some point in the last decade, "personal brand" became a buzzword something influencers talked about, something that felt optional for serious business people. That thinking has aged poorly.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, your personal brand is the fastest trust-building tool you have. It's the reason a potential client chooses you over the agency down the street with a slicker website and a lower quote. It's the reason journalists reach out to you for quotes. It's the reason someone forwards your LinkedIn post to their CEO. It's compounding equity that follows you through every company, pivot, and project you ever take on.
            </p>

            <h2 className="text-3xl font-serif font-bold text-foreground mt-12 mb-4">What a personal brand actually is</h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Your personal brand is not your logo. It's not your Instagram aesthetic. It's not your LinkedIn headline. Those are outputs of a personal brand not the brand itself.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Your personal brand is the answer to: what do people say about you when you're not in the room? What do they think you're the best at? When a problem comes up, does your name come to mind? That's your brand and it exists whether you've built it deliberately or not. The question is whether you're shaping it or leaving it to chance.
            </p>

            <h2 className="text-3xl font-serif font-bold text-foreground mt-12 mb-4">The trust gap that personal brands close</h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Every business has a trust problem. A stranger lands on your website with no prior relationship and is asked to part with money for a service they can't see, from a person they've never met, with no guarantee of outcome. The conversion is an act of faith.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              A strong personal brand shortens that trust gap dramatically. When someone has been reading your content for three months before they need your services, they don't arrive as a skeptical stranger they arrive as a warm lead who already believes in your expertise. They've seen how you think. They've read your opinions. They've watched how you solve problems. That relationship has real commercial value.
            </p>

            <h2 className="text-3xl font-serif font-bold text-foreground mt-12 mb-4">Where to start</h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Building a personal brand doesn't require posting every day or going viral. It requires three things done consistently:
            </p>

            <div className="bg-card border border-border/50 rounded-2xl p-8 space-y-6">
              <div>
                <h3 className="font-bold text-foreground mb-2">1. A clear point of view</h3>
                <p className="text-muted-foreground">What do you believe that most people in your field don't? What approach do you think is underrated? What conventional wisdom do you disagree with? Bland content builds bland brands. Take a position.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">2. A consistent medium</h3>
                <p className="text-muted-foreground">One platform. One format. Done well. Writing on LinkedIn, a newsletter, short-form video, a podcast pick the one that plays to your natural strengths and commit to it for a year before adding more.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">3. A professional digital home</h3>
                <p className="text-muted-foreground">Your website is the one place on the internet you fully own and control. It's where your brand story lives in full, where your work is documented, and where serious buyers land when they want to know if you're real.</p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-bold text-foreground mt-12 mb-4">The long game</h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Personal brand building is slow and invisible at first. You'll publish things that get twelve views. You'll write pieces you're proud of that no one shares. And then, somewhere around the twelve-month mark, something shifts. The referrals start coming from unexpected places. Someone you've never spoken to mentions your name in a meeting. A client says they've been following you for months before reaching out.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              That's the compound interest of a personal brand. It takes time to build. But once built, it's an asset that works for you around the clock.
            </p>

            <div className="border-t border-border/40 pt-10 mt-10">
              <p className="text-muted-foreground mb-6">If you're ready to build your digital presence deliberately website, content strategy, and all let's talk.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                Start Building Your Brand <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </FadeIn>
      </article>

      <Footer />
    </main>
  );
}
