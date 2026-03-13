import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowUpRight } from "lucide-react";

export default function BlogPage() {
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

        <div className="space-y-12">
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