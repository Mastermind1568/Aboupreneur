import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

export default function AIAutomation() {
  useSEO({
    title: "5 Ways AI Automation Is Changing Small Business Marketing | Aboupreneur Blog",
    description: "Discover 5 practical AI automation workflows that help small businesses market smarter without hiring more people from growth marketer Aboubakar Moussa.",
    canonical: "https://aboupreneur.page/blog/ai-automation-small-business",
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
            <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">AI & Automation</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
            5 Ways AI Automation Is Changing Small Business Marketing Right Now
          </h1>

          <p className="text-xl text-muted-foreground italic mb-4">
            You don't need a team of 10 to market like one. You need the right systems.
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
              Small business owners are doing more with less than ever. One person managing social, ads, customer emails, reporting, and the actual product. It's not sustainable and most people know it. What they don't realize is that AI automation has made it genuinely possible to run a lean operation that feels like a much larger team.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm not talking about ChatGPT generating your captions. I'm talking about integrated workflows that remove human bottlenecks from your marketing operation. Here are five that are making a real difference for small businesses right now.
            </p>

            <h2 className="text-3xl font-serif font-bold text-foreground mt-12 mb-4">1. Automated lead follow-up</h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Most small businesses lose leads not because the lead wasn't interested but because no one followed up fast enough. Studies consistently show that response time within the first five minutes dramatically increases conversion. With a workflow built in HubSpot or n8n, the moment someone fills out your contact form, they get a personalized follow-up email within seconds. No manual work required.
            </p>

            <h2 className="text-3xl font-serif font-bold text-foreground mt-12 mb-4">2. Content repurposing pipelines</h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              You record a podcast or film a YouTube video once. An automated workflow can take that single piece of content, extract the transcript, generate three LinkedIn posts, create a short-form social clip summary, and draft an email newsletter all without you touching it again. Tools like Make.com connected to AI APIs make this a one-time setup that runs indefinitely.
            </p>

            <h2 className="text-3xl font-serif font-bold text-foreground mt-12 mb-4">3. Automated reporting dashboards</h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              How much time do you spend pulling numbers from GA4, Meta Ads, and your CRM to put together a weekly report? For most businesses, it's hours. Looker Studio connected to your data sources gives you a live dashboard that updates automatically. No more Monday morning reporting sessions.
            </p>

            <h2 className="text-3xl font-serif font-bold text-foreground mt-12 mb-4">4. Smart email sequences</h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Email automation isn't new. But AI-informed segmentation is changing what's possible. Instead of sending the same welcome sequence to every subscriber, modern setups use behaviour signals what links they clicked, what pages they visited, what they ignored to route them into the right follow-up. Your most interested leads get your best content. Everyone else gets nurtured at their own pace.
            </p>

            <h2 className="text-3xl font-serif font-bold text-foreground mt-12 mb-4">5. AI-assisted website personalization</h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Larger companies have used personalization for years. Now it's accessible to small businesses too. Showing returning visitors different content than first-time visitors, or adapting your homepage headline based on the ad someone clicked these are no longer enterprise-only tools. They're CRO improvements that can meaningfully lift conversion rates without changing a word of your core messaging.
            </p>

            <div className="bg-card border border-border/50 rounded-2xl p-8 mt-10">
              <h3 className="font-bold text-foreground text-xl mb-4">Where to start</h3>
              <p className="text-muted-foreground leading-relaxed">
                Don't try to automate everything at once. Start with the task that costs you the most time or the most lost leads. For most small businesses, that's lead follow-up. Get that automated first, prove the value, then build from there. The compounding effect of a few well-built automations is significant and it frees you to focus on the work only you can do.
              </p>
            </div>

            <div className="border-t border-border/40 pt-10 mt-10">
              <p className="text-muted-foreground mb-6">If you want to explore what automation could look like for your business, I build these systems for clients regularly.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                Let's Talk <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </FadeIn>
      </article>

      <Footer />
    </main>
  );
}
