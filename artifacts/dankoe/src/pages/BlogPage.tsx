import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const onSiteArticles = [
  {
    slug: "/blog/food-brand-gtm-strategy",
    category: "Growth Strategy",
    title: "Why Every Food Brand Needs a Go-To-Market Strategy Before They Scale",
    excerpt: "Most food brands rush to sell before they've figured out who they're selling to. Here's how to fix that before you spend a dollar on ads.",
    readTime: "7 min read",
  },
  {
    slug: "/blog/ai-automation-small-business",
    category: "AI & Automation",
    title: "5 Ways AI Automation Is Changing Small Business Marketing Right Now",
    excerpt: "You don't need a team of 10 to market like one. Here are the automations making the biggest difference for lean operations.",
    readTime: "6 min read",
  },
  {
    slug: "/blog/real-cost-of-bad-website",
    category: "Web Design",
    title: "The Real Cost of a Bad Website (It's Not What You Think)",
    excerpt: "A slow, outdated, or confusing website isn't just an aesthetic problem. It's a revenue problem — and most owners don't calculate the true cost.",
    readTime: "5 min read",
  },
];

const channels = [
  {
    title: "Farm to Funnel on LinkedIn",
    description: "Marketing strategy for food and agricultural products. GTM frameworks, case studies, and real company breakdowns.",
    link: "https://www.linkedin.com/newsletters/farm-to-funnel-7409350357295923200",
    cta: "Read Newsletter"
  },
  {
    title: "Essays from A Creative Cosmopolitan Nerd",
    description: "Long-form personal essays. Reflections on the journey: building, immigrating, growing. Deep dives into the entrepreneurial mindset.",
    link: "https://aboupreneur.substack.com/",
    cta: "Read Essays"
  },
  {
    title: "Abou Speaks on YouTube",
    description: "Self-development, motivation, and elevation. Everything is possible, so long as you put your mind to it. Visual content for growth.",
    link: "https://youtube.com/@aboupreneur?si=sF-M-FLRM8BMrNRN",
    cta: "Watch Videos"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-20">
        <FadeIn>
          <h5 className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4">
            CONTENT HUB
          </h5>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Explore the Thinking
          </h1>
          <p className="text-sm font-bold tracking-[0.15em] text-accent uppercase mb-4">Thoughtful Provocateur</p>
          <p className="text-xl text-muted-foreground border-l-4 border-accent pl-6 py-2 mb-20 italic">
            Agriculture, food, marketing, and the journey of building.
          </p>
        </FadeIn>

        {/* On-site articles */}
        <FadeIn>
          <h2 className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-8">
            Articles
          </h2>
        </FadeIn>
        <div className="space-y-4 mb-24">
          {onSiteArticles.map((article, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <Link
                href={article.slug}
                className="group block bg-card border border-border/50 rounded-2xl p-7 md:p-9 hover-card-effect relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-7 opacity-40 group-hover:opacity-100 group-hover:text-accent transition-all duration-300">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold tracking-[0.15em] text-accent uppercase">{article.category}</span>
                  <span className="text-muted-foreground text-xs">·</span>
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 pr-10 group-hover:text-accent transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm max-w-2xl">
                  {article.excerpt}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* External channels */}
        <FadeIn>
          <h2 className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-8">
            Where I Publish
          </h2>
        </FadeIn>
        <div className="space-y-8">
          {channels.map((channel, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <a 
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-card border border-border/50 rounded-3xl p-8 md:p-12 hover-card-effect relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-50 group-hover:opacity-100 group-hover:text-accent transition-all duration-300">
                  <ArrowUpRight className="w-8 h-8" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 pr-12 group-hover:text-accent transition-colors">
                  {channel.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                  {channel.description}
                </p>
                <span className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-foreground group-hover:text-accent transition-colors border-b border-transparent group-hover:border-accent pb-1">
                  {channel.cta}
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
