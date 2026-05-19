import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";

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
    excerpt: "A slow, outdated, or confusing website isn't just an aesthetic problem. It's a revenue problem and most owners don't calculate the true cost.",
    readTime: "5 min read",
  },
  {
    slug: "/blog/choosing-the-right-marketing-channel",
    category: "Growth Marketing",
    title: "How to Choose the Right Marketing Channel for Your Business",
    excerpt: "Stop copying what worked for someone else. Learn how to match the right channel to your stage, your audience, and your offer.",
    readTime: "6 min read",
  },
  {
    slug: "/blog/google-ads-vs-meta-ads",
    category: "Paid Advertising",
    title: "Google Ads vs. Meta Ads: Which One Is Right for Your Business?",
    excerpt: "Both platforms work but they work completely differently. Here's how to decide where to put your ad spend first.",
    readTime: "7 min read",
  },
  {
    slug: "/blog/why-personal-brand-matters",
    category: "Personal Branding",
    title: "Why Your Personal Brand Is Your Most Valuable Business Asset",
    excerpt: "Companies can copy your offer. They can't copy you. Here's why building a personal brand is the highest-ROI investment an entrepreneur can make.",
    readTime: "6 min read",
  },
  {
    slug: "/blog/homepage-that-converts",
    category: "Web Design & Copy",
    title: "How to Write a Homepage That Converts (Without Sounding Like a Robot)",
    excerpt: "Most homepages talk about the business. The best ones talk about the visitor. Here's a five-section framework that actually works.",
    readTime: "7 min read",
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
];

export default function BlogPage() {
  useSEO({
    title: "Blog | Growth Marketing, AI & Web Design Insights Aboupreneur",
    description: "Articles on growth marketing, AI automation, web design, personal branding, and food brand strategy by Aboubakar Moussa. Practical insights from the Aboupreneur blog.",
    canonical: "https://aboupreneur.page/blog",
  });

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
            <FadeIn key={i} delay={i * 0.06}>
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

        {/* CTA */}
        <FadeIn>
          <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 text-center mb-24">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Want to work together?</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">If you found this useful and want this kind of thinking applied to your business, let's talk.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>

        {/* External channels */}
        <FadeIn>
          <h2 className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-8">
            Where I Also Publish
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
