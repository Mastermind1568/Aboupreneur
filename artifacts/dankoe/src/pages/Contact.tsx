import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { MapPin, Mail, Linkedin } from "lucide-react";
import SocialButtons from "@/components/ui/SocialButtons";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

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
      const response = await fetch("https://formspree.io/f/xpwzqkna", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
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
              Whether you need a website, a campaign, an AI workflow, or a full growth strategy — I'd love to hear what you're working on.
            </p>
            
            <div className="space-y-8 bg-card border border-border/50 rounded-2xl p-8 mb-10">
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
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    <option value="Website Design & Build">Website Design & Build</option>
                    <option value="Ads & Digital Marketing">Ads & Digital Marketing</option>
                    <option value="AI Automation & Workflows">AI Automation & Workflows</option>
                    <option value="Growth Strategy">Growth Strategy</option>
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
                
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-accent hover:text-accent-foreground transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending..." : "Send Message →"}
                </button>
                
                {status === "success" && (
                  <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-500 rounded-xl text-center font-medium">
                    Message sent! I'll be in touch soon.
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