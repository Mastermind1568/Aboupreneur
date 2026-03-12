import { ArrowRight, BookOpen } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "wouter";

const blogPosts = [
  {
    title: "Farm to Funnel: GTM Strategy for Food Brands",
    source: "LinkedIn",
    link: "https://www.linkedin.com/newsletters/farm-to-funnel-7409350357295923200",
  },
  {
    title: "The Immigrant Builder Mindset",
    source: "Substack",
    link: "https://aboupreneur.substack.com/",
  },
  {
    title: "Why Agriculture Is The Next Big Creator Economy",
    source: "YouTube",
    link: "https://youtube.com/@aboupreneur?si=sF-M-FLRM8BMrNRN",
  },
];

export function Blog() {
  return (
    <section className="py-32 bg-secondary/20 relative z-10 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:flex md:items-end justify-between">
          <FadeIn className="max-w-2xl">
            <h5 className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> THE BLOG
            </h5>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Explore the Thinking
            </h2>
            <p className="text-xl text-muted-foreground">
              Agriculture, food, marketing, and the journey of building.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, i) => (
            <FadeIn key={i} delay={i * 0.1} className="h-full">
              <a 
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full bg-card border border-border/50 rounded-2xl p-8 hover-card-effect"
              >
                <div className="flex-1">
                  <div className="text-xs font-bold tracking-widest text-accent uppercase mb-4">{post.source}</div>
                  <h3 className="text-2xl font-bold mb-4 leading-snug group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                </div>
                <div className="mt-8 flex items-center text-sm font-bold uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="mt-16 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-border text-foreground font-semibold rounded-full hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            See All Content →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}