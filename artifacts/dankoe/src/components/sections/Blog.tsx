import { useState } from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const blogPosts = [
  {
    title: "A Complete Knowledge Base Of HUMAN 3.0",
    excerpt: "The HUMAN 3.0 model, scientific validation, historical context, civilizational impact, assessment questions and practices, and deep nuances.",
  },
  {
    title: "HUMAN 3.0 – A Map To Reach The Top 1%",
    excerpt: "A comprehensive set of guidelines to maximize your potential (in all domains of life)",
  },
  {
    title: "You don't need a niche, you need a point of view",
    excerpt: "If you're a writer, creator, freelancer, or anyone else who is trying to 'make it' doing something meaningful...",
  },
  {
    title: "Self-discipline is easy, actually",
    excerpt: "Clarity vs force. Why motivation fails and how to engineer undeniable drive.",
  },
  {
    title: "You have about 36 months to make it",
    excerpt: "Why everyone is racing to get rich and the tectonic shifts in the creator economy.",
  },
  {
    title: "You can learn anything in 2 weeks",
    excerpt: "I know it sounds insane. But here is the exact framework to deconstruct any skill.",
  },
  {
    title: "These 3 Decisions Will Determine If You Get Rich",
    excerpt: "Delusional goals rewire your brain. Stop playing the realistic game.",
  },
  {
    title: "20-30 Years Old Is The Tutorial Phase, Don't F*ck It Up",
    excerpt: "Avoid 3 things, do 3 things, don't get mad. The ultimate guide to your 20s.",
  },
  {
    title: "How To Think Like A Genius (The Map Of All Knowledge)",
    excerpt: "Connect the dots between philosophy, science, and business to become irreplaceable.",
  },
];

export function Blog() {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, blogPosts.length));
  };

  return (
    <section className="py-32 bg-background relative z-10 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:flex md:items-end justify-between">
          <FadeIn className="max-w-2xl">
            <h5 className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> THE BLOG
            </h5>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Explore Your Curiosity
            </h2>
            <p className="text-xl text-muted-foreground">
              Deep dives on human potential, lifestyle design, & digital business.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.slice(0, visibleCount).map((post, i) => (
            <FadeIn key={i} delay={(i % 3) * 0.1} className="h-full">
              <a 
                href="#"
                className="group flex flex-col h-full bg-card/50 border border-border/50 rounded-2xl p-8 hover-card-effect"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4 leading-snug group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-8 flex items-center text-xs font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
                  Read Essay
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        {visibleCount < blogPosts.length && (
          <FadeIn delay={0.2} className="mt-16 flex justify-center">
            <button
              onClick={showMore}
              className="px-8 py-4 rounded-full border border-border text-sm font-semibold hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Load More
            </button>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
