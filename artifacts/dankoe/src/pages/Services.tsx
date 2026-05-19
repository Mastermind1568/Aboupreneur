import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useSEO } from "@/hooks/useSEO";

const services = [
  {
    category: "Web Design & Build",
    tagline: "Sites that look sharp and convert.",
    description: "From strategy to launch. I design and build websites that reflect your brand, load fast, and guide visitors toward action whether that's a booking, a purchase, or a message.",
    deliverables: [
      "Brand-aligned design (WordPress or AI-built)",
      "Mobile-first, fast-loading build",
      "Clear calls to action throughout",
      "Basic SEO setup at launch",
      "Contact forms and intake flows",
      "Google Analytics integration",
    ],
    ideal: "Small businesses, service providers, personal brands launching or refreshing their site.",
  },
  {
    category: "Paid Advertising",
    tagline: "Ads that bring the right people, not just traffic.",
    description: "Google Ads, Meta Ads, LinkedIn, TikTok, Pinterest, and Snapchat campaigns built around your goals not vanity metrics. I handle setup, copy, targeting, and ongoing optimization.",
    deliverables: [
      "Campaign strategy and audience research",
      "Ad copy and creative direction",
      "Conversion tracking setup (GA4)",
      "A/B testing and optimization",
      "Monthly performance reporting",
      "Remarketing campaigns",
    ],
    ideal: "Brands with a proven offer ready to scale with paid traffic.",
  },
  {
    category: "SEO & Content Marketing",
    tagline: "Get found. Stay found.",
    description: "On-page SEO, keyword strategy, and content built to rank. I use Semrush to identify opportunities and build content that brings organic traffic month after month.",
    deliverables: [
      "SEO audit and keyword research",
      "On-page optimization",
      "Content strategy and writing",
      "Technical SEO fixes",
      "Monthly ranking reports",
      "Local SEO (if applicable)",
    ],
    ideal: "Businesses that want long-term inbound traffic without depending on ads.",
  },
  {
    category: "AI Automation & Workflows",
    tagline: "Do more without hiring more.",
    description: "Custom AI-powered workflows built with n8n, HubSpot, and Make. From lead nurturing to automated reporting, I help you replace repetitive tasks with smart systems.",
    deliverables: [
      "Workflow mapping and audit",
      "Custom automation builds (n8n / Make)",
      "CRM setup and automation (HubSpot)",
      "Email sequence automation (Mailchimp / HubSpot)",
      "Reporting dashboards (Looker Studio)",
      "Ongoing maintenance and support",
    ],
    ideal: "Growing businesses spending too much time on manual tasks.",
  },
  {
    category: "Full Growth Strategy",
    tagline: "The whole stack, working together.",
    description: "Web, ads, SEO, content, and automation aligned under one strategy. For brands that want a real partner, not just a vendor.",
    deliverables: [
      "Everything above, integrated",
      "Monthly strategy calls",
      "Priority support and turnaround",
      "Quarterly performance reviews",
      "CRO recommendations",
      "Ongoing consulting access",
    ],
    ideal: "Brands ready to invest in sustained, compounding growth.",
  },
];

const faqs = [
  {
    q: "Do you work with small businesses?",
    a: "Yes. Most of my clients are small businesses, independent professionals, and growing startups. I prefer working with brands that have a real offer and want a real strategy not just a pretty website.",
  },
  {
    q: "Where are you based, and do you work remotely?",
    a: "I'm based in Alberta, Canada and work with clients remotely across Canada, the US, and internationally. Everything is done online calls, files, and delivery.",
  },
  {
    q: "How long does a website take?",
    a: "A standard website typically takes 2 to 4 weeks from kick-off to launch, depending on complexity and how quickly content is provided. AI-assisted builds can be faster.",
  },
  {
    q: "Do you offer ongoing support after a website launch?",
    a: "Yes. I offer ongoing maintenance, updates, and growth support. Many clients retain me monthly to manage their ads, SEO, or content after the initial build.",
  },
  {
    q: "What do you need from me to get started?",
    a: "For a website: your logo, brand colours, copy (or notes for me to write it), and examples of sites you like. For ads: your offer, target audience, and budget. I'll guide you through everything else.",
  },
  {
    q: "Do you work with e-commerce brands?",
    a: "Yes I work with product brands on web design, ads, and email. If you're on Shopify or WooCommerce, I can work within your existing setup.",
  },
  {
    q: "What is your pricing like?",
    a: "Pricing varies by scope. A basic website starts from $1,500 CAD. Ad management starts from $500/month. AI automation projects are scoped per engagement. Reach out for a custom quote I'll always be upfront about costs before we start.",
  },
  {
    q: "Do you sign contracts?",
    a: "Yes. Every project starts with a clear scope of work and a simple contract. No surprises on either side.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/40">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-lg font-semibold pr-8 group-hover:text-accent transition-colors">{q}</span>
        <ChevronDown className={`w-5 h-5 shrink-0 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <p className="text-muted-foreground leading-relaxed pb-6 pr-8">{a}</p>
      )}
    </div>
  );
}

export default function Services() {
  useSEO({
    title: "Services | Web Design, Digital Marketing & AI Automation Aboupreneur",
    description: "Aboupreneur offers web design, Google & Meta Ads, SEO, AI automation workflows, and full growth strategy for small businesses and personal brands in Canada and beyond.",
    canonical: "https://aboupreneur.page/services",
  });

  return (
    <main className="min-h-screen bg-background pt-24">
      <Navbar />

      {/* Hero */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <FadeIn>
          <h5 className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4">
            SERVICES
          </h5>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            What I Build
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-6 leading-relaxed">
            Growth marketing, web design, and AI automation for brands that want to stop guessing and start scaling. Every engagement starts with strategy.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent hover:text-foreground transition-colors"
          >
            Get a Custom Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>

      {/* Services list */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="space-y-8">
          {services.map((service, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 hover-card-effect">
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="md:w-2/5">
                    <div className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-3">
                      0{i + 1}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">
                      {service.category}
                    </h2>
                    <p className="text-muted-foreground italic mb-4">{service.tagline}</p>
                    <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                      {service.description}
                    </p>
                    <div className="text-xs text-muted-foreground border border-border/50 rounded-xl px-4 py-3">
                      <span className="font-bold text-foreground uppercase tracking-wider text-[10px]">Best for: </span>
                      {service.ideal}
                    </div>
                  </div>

                  <div className="md:w-3/5 md:pl-8 md:border-l md:border-border/40">
                    <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4">
                      What's included
                    </p>
                    <ul className="space-y-3">
                      {service.deliverables.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="border-t border-border/30 bg-secondary/10">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-32">
          <FadeIn>
            <h5 className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4">FAQ</h5>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16">Common Questions</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div>
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* CTA */}
      <FadeIn>
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to start?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Tell me what you're working on. I'll come back with a clear plan and honest pricing.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            Start a Conversation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </FadeIn>

      <Footer />
    </main>
  );
}
