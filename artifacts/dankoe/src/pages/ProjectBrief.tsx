import { useRef, useState } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Paperclip } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { trackEvent } from "@/lib/analytics";

const endpoint = "https://formspree.io/f/xojkwbvq";

const initialForm = {
  businessName: "",
  contactName: "",
  email: "",
  phone: "",
  website: "",
  businessType: "",
  location: "",
  services: [] as string[],
  projectOverview: "",
  primaryGoal: "",
  biggestChallenge: "",
  idealCustomer: "",
  timeline: "",
  budget: "",
  referralSource: "",
  permissionToFollowUp: false,
};

const serviceOptions = [
  "Website or landing page",
  "Google or Meta ads",
  "Local search visibility",
  "AI automation",
  "Go-to-market strategy",
  "Not sure yet",
];

export default function ProjectBrief() {
  useSEO({
    title: "Qualified Client Project Brief | Aboupreneur",
    description: "Share the details Aboupreneur needs to prepare for your project.",
    canonical: "https://aboupreneur.page/project-brief",
    robots: "noindex, nofollow",
  });

  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const hasStarted = useRef(false);

  const markStarted = () => {
    if (hasStarted.current) return;
    hasStarted.current = true;
    trackEvent("project_brief_started", { location: "project-brief" });
  };

  const updateField = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const toggleService = (service: string) => {
    setForm((current) => ({
      ...current,
      services: current.services.includes(service)
        ? current.services.filter((item) => item !== service)
        : [...current.services, service],
    }));
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          services: form.services.join(", "),
          form_type: "qualified_project_brief",
          landing_page: "project-brief",
          _subject: `Qualified Project Brief — ${form.businessName}`,
        }),
      });

      if (!response.ok) throw new Error("Submission provider rejected the request");

      trackEvent("project_brief_submitted", {
        location: "project-brief",
        selected_service_count: form.services.length,
        business_type: form.businessType || "not_selected",
      });
      setForm(initialForm);
      setStatus("success");
    } catch {
      trackEvent("project_brief_failed", {
        location: "project-brief",
        reason: "provider_or_network_error",
      });
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent";

  return (
    <main className="min-h-screen bg-background pt-24">
      <Navbar />
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <FadeIn>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            QUALIFIED CLIENT INTAKE
          </p>
          <h1 className="mb-6 max-w-3xl font-serif text-5xl font-bold md:text-7xl">
            Tell me what we’re building
          </h1>
          <p className="mb-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Complete this brief after our initial conversation. Your answers help me prepare useful
            recommendations, scope, and next steps.
          </p>
          <p className="mb-12 text-sm text-muted-foreground">
            Haven’t spoken with me yet?{" "}
            <Link href="/contact" className="text-foreground underline underline-offset-4">
              Start with the short inquiry form.
            </Link>
          </p>
        </FadeIn>

        {status === "success" ? (
          <FadeIn>
            <section className="rounded-3xl border border-green-500/20 bg-green-500/10 p-8 md:p-12">
              <h2 className="mb-3 font-serif text-3xl font-bold">Project brief received</h2>
              <p className="mb-8 text-muted-foreground">
                I’ll review your answers and follow up with the appropriate next step.
              </p>
              <a
                href="mailto:hello@aboupreneur.page?subject=Assets%20for%20my%20project%20brief"
                data-analytics-label="project-brief-assets-email"
                className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Paperclip className="h-4 w-4" />
                Email supporting assets
              </a>
            </section>
          </FadeIn>
        ) : (
          <FadeIn>
            <form
              onSubmit={submit}
              onFocusCapture={markStarted}
              className="space-y-10 rounded-3xl border border-border/50 bg-card p-6 shadow-xl md:p-10"
            >
              <fieldset className="grid gap-6 md:grid-cols-2">
                <legend className="mb-6 font-serif text-2xl font-bold">Contact details</legend>
                <label className="space-y-2">
                  <span className="text-sm font-medium">Business or project name *</span>
                  <input className={inputClass} name="businessName" required value={form.businessName} onChange={updateField} />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium">Contact name *</span>
                  <input className={inputClass} name="contactName" required value={form.contactName} onChange={updateField} />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium">Email *</span>
                  <input className={inputClass} type="email" name="email" required value={form.email} onChange={updateField} />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium">Phone</span>
                  <input className={inputClass} type="tel" name="phone" value={form.phone} onChange={updateField} />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium">Website</span>
                  <input className={inputClass} type="url" name="website" placeholder="https://" value={form.website} onChange={updateField} />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium">Location *</span>
                  <input className={inputClass} name="location" required value={form.location} onChange={updateField} />
                </label>
                <label className="space-y-2 md:col-span-2">
                  <span className="text-sm font-medium">Business type *</span>
                  <select className={inputClass} name="businessType" required value={form.businessType} onChange={updateField}>
                    <option value="" disabled>Select one</option>
                    <option>Home services or trades</option>
                    <option>Newcomer-owned business</option>
                    <option>Agri-food or specialty food</option>
                    <option>Professional services</option>
                    <option>Other</option>
                  </select>
                </label>
              </fieldset>

              <fieldset>
                <legend className="mb-4 font-serif text-2xl font-bold">What do you need? *</legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {serviceOptions.map((service) => (
                    <label key={service} className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-background p-4">
                      <input
                        type="checkbox"
                        checked={form.services.includes(service)}
                        onChange={() => toggleService(service)}
                        className="h-4 w-4 accent-current"
                      />
                      <span className="text-sm">{service}</span>
                    </label>
                  ))}
                </div>
                {form.services.length === 0 && (
                  <p className="mt-3 text-xs text-muted-foreground">Select at least one before submitting.</p>
                )}
              </fieldset>

              <fieldset className="space-y-6">
                <legend className="mb-6 font-serif text-2xl font-bold">Project context</legend>
                {[
                  ["projectOverview", "Project overview *", "What are you building or improving?"],
                  ["primaryGoal", "Primary goal *", "What result matters most?"],
                  ["biggestChallenge", "Biggest challenge *", "What is blocking progress now?"],
                  ["idealCustomer", "Ideal customer *", "Who are you trying to reach?"],
                ].map(([name, label, placeholder]) => (
                  <label key={name} className="block space-y-2">
                    <span className="text-sm font-medium">{label}</span>
                    <textarea
                      className={`${inputClass} resize-y`}
                      name={name}
                      required
                      rows={4}
                      placeholder={placeholder}
                      value={form[name as keyof typeof form] as string}
                      onChange={updateField}
                    />
                  </label>
                ))}
              </fieldset>

              <fieldset className="grid gap-6 md:grid-cols-2">
                <legend className="mb-6 font-serif text-2xl font-bold">Timing and fit</legend>
                <label className="space-y-2">
                  <span className="text-sm font-medium">Preferred timeline *</span>
                  <select className={inputClass} name="timeline" required value={form.timeline} onChange={updateField}>
                    <option value="" disabled>Select one</option>
                    <option>As soon as practical</option>
                    <option>Within 1 month</option>
                    <option>1–3 months</option>
                    <option>3+ months</option>
                    <option>Exploring options</option>
                  </select>
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium">Budget comfort *</span>
                  <select className={inputClass} name="budget" required value={form.budget} onChange={updateField}>
                    <option value="" disabled>Select one</option>
                    <option>Under CAD $2500</option>
                    <option>CAD $2500–$5000</option>
                    <option>CAD $5000–$10000</option>
                    <option>CAD $10000+</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
                <label className="space-y-2 md:col-span-2">
                  <span className="text-sm font-medium">How did you hear about Aboupreneur?</span>
                  <select className={inputClass} name="referralSource" value={form.referralSource} onChange={updateField}>
                    <option value="">Select one</option>
                    <option>Google search or ad</option>
                    <option>LinkedIn</option>
                    <option>Referral</option>
                    <option>Article or newsletter</option>
                    <option>Social media</option>
                    <option>Other</option>
                  </select>
                </label>
              </fieldset>

              <label className="flex items-start gap-3 rounded-xl border border-border bg-background p-4">
                <input
                  type="checkbox"
                  required
                  checked={form.permissionToFollowUp}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, permissionToFollowUp: event.target.checked }))
                  }
                  className="mt-1 h-4 w-4 accent-current"
                />
                <span className="text-sm leading-relaxed">
                  I give Aboupreneur permission to contact me about this project. *
                </span>
              </label>

              <div className="rounded-xl border border-dashed border-border bg-background p-4 text-sm text-muted-foreground">
                Have brand assets or examples? Submit this brief first, then email the files to{" "}
                <a className="text-foreground underline underline-offset-4" href="mailto:hello@aboupreneur.page">
                  hello@aboupreneur.page
                </a>.
              </div>

              {status === "error" && (
                <div className="rounded-xl border border-destructive/20 bg-destructive/10 p-4 text-center text-sm font-medium text-destructive">
                  The brief could not be sent. Please try again or email hello@aboupreneur.page.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting" || form.services.length === 0}
                className="w-full rounded-xl bg-primary py-4 font-semibold text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "Sending project brief..." : "Send project brief →"}
              </button>
            </form>
          </FadeIn>
        )}
      </div>
      <Footer />
    </main>
  );
}