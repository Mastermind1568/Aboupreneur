import { useRef, useState } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { MapPin, Mail, Linkedin, MessageCircle, MessageSquare, Paperclip, Phone } from "lucide-react";
import SocialButtons from "@/components/ui/SocialButtons";
import { useSEO } from "@/hooks/useSEO";
import { trackEvent } from "@/lib/analytics";

export default function Contact() {
  useSEO({
    title: "Work With Me | Contact Aboupreneur Alberta Growth Marketer & Web Designer",
    description: "Ready to grow your brand? Contact Aboubakar Moussa to discuss web design, digital marketing strategy, paid advertising, or AI automation for your business.",
    canonical: "https://aboupreneur.page/contact",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });
  const hasStarted = useRef(false);
  const industry = typeof window === "undefined"
    ? ""
    : new URLSearchParams(window.location.search).get("industry")?.slice(0, 80) ?? "";

  const markFormStarted = () => {
    if (hasStarted.current) return;
    hasStarted.current = true;
    trackEvent("consulting_form_started", {
      landing_page: "get-in-touch",
      ...(industry ? { industry } : {}),
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const params = new URLSearchParams(window.location.search);
      const attribution: Record<string, string> = {};
      ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach((key) => {
        const value = params.get(key);
        if (value) attribution[key] = value;
      });

      const response = await fetch("https://formspree.io/f/xojkwbvq", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          ...attribution,
          landing_page: "get-in-touch",
          ...(industry ? { industry } : {}),
        })
      });

      if (response.ok) {
        trackEvent("consulting_form_submitted", {
          landing_page: "get-in-touch",
          selected_service: formData.service,
          ...(industry ? { industry } : {}),
        });
        setStatus("success");
        setFormData({ name: "", email: "", company: "", service: "", message: "" });
      } else {
        trackEvent("consulting_form_failed", {
          landing_page: "get-in-touch",
          selected_service: formData.service,
          reason: "provider_error",
          ...(industry ? { industry } : {}),
        });
        setStatus("error");
      }
    } catch (error) {
      trackEvent("consulting_form_failed", {
        landing_page: "get-in-touch",
        selected_service: formData.service,
        reason: "network_error",
        ...(industry ? { industry } : {}),
      });
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-background pt-24">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <h5 className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4">
              CONTACT
            </h5>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Let's Talk
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Whether you need a website, a campaign, an AI workflow, or a full growth strategy, I'd love to hear what you're working on.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed -mt-8 mb-12">
              Pricing is scoped privately after an initial consultation, with project-based and ongoing options available.
            </p>
            
            <div className="space-y-8 bg-card border border-border/50 rounded-2xl p-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm text-muted-foreground mb-1">Phone</div>
                  <a
                    href="tel:+17806951526"
                    className="font-medium text-foreground hover:text-accent transition-colors"
                  >
                    +1 (780) 695-1526
                  </a>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <a
                      href="tel:+17806951526"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-xs font-medium text-foreground hover:border-accent hover:text-accent transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      Call
                    </a>
                    <a
                      href="sms:+17806951526"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-xs font-medium text-foreground hover:border-accent hover:text-accent transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      Text
                    </a>
                    <a
                      href="https://wa.me/17806951526"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-xs font-medium text-foreground hover:border-accent hover:text-accent transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <a href="mailto:hello@aboupreneur.page" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Email</div>
                  <div className="font-medium text-foreground group-hover:text-accent transition-colors">hello@aboupreneur.page</div>
                </div>
              </a>
              
              <a href="https://linkedin.com/in/aboupreneur" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">LinkedIn</div>
                  <div className="font-medium text-foreground group-hover:text-accent transition-colors">linkedin.com/in/aboupreneur</div>
                </div>
              </a>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Location</div>
                  <div className="font-medium text-foreground">Based in Alberta, Canada</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-6">Connect Elsewhere</h3>
              <SocialButtons variant="icon-label" />
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-10 shadow-xl">
              <form onSubmit={handleSubmit} onFocusCapture={markFormStarted} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-foreground">Company/Brand (Optional)</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-foreground">What do you need help with? *</label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none"
                  >
                    <option value="" disabled>Select a service...</option>
                    <option value="Website Design & Launch">Website Design & Launch</option>
                    <option value="Search & Local Visibility">Search & Local Visibility</option>
                    <option value="Paid Acquisition & Ads">Paid Acquisition & Ads</option>
                    <option value="AI Automation & Workflows">AI Automation & Workflows</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <a
                  href="mailto:hello@aboupreneur.page?subject=Brand%20assets%20or%20project%20examples"
                  className="flex items-center gap-3 rounded-xl border border-dashed border-border bg-background px-4 py-4 text-sm text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
                >
                  <Paperclip className="h-5 w-5 shrink-0" />
                  <span>
                    Have brand assets or examples? Email them separately after submitting.
                  </span>
                </a>
                
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-accent hover:text-accent-foreground transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending..." : "Send Message →"}
                </button>
                
                {status === "success" && (
                  <div className="space-y-4 rounded-xl border border-green-500/20 bg-green-500/10 p-5 text-center">
                    <p className="font-medium text-green-500">Message sent! I'll be in touch soon.</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      If we’ve already discussed your project, you can share the details I need to
                      prepare next steps.
                    </p>
                    <Link
                      href="/project-brief"
                      data-analytics-label="contact-success-project-brief"
                      className="inline-flex items-center justify-center rounded-full border border-green-500/30 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
                    >
                      Complete the detailed project brief →
                    </Link>
                  </div>
                )}
                
                {status === "error" && (
                  <div className="p-4 bg-destructive/10 border border-destructive/20 text-destructive rounded-xl text-center font-medium">
                    Something went wrong. Please try hello@aboupreneur.page
                  </div>
                )}
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}