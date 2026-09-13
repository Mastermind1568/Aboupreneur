import { useState, useEffect } from "react";
import {
  getCampaignAttribution,
  getLandingAnalyticsData,
  type LandingPageVariant,
  trackEvent,
} from "@/lib/analytics";

interface ConsultingInquiryFormProps {
  variant: LandingPageVariant;
  buttonClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  formContainerClassName?: string;
}

export function ConsultingInquiryForm({
  variant,
  buttonClassName = "bg-[#F2A900] text-[#0A0A0A] uppercase tracking-widest",
  inputClassName = "bg-[#111111] border-[#222222] focus:border-[#F2A900] text-white",
  labelClassName = "text-[#888888] text-xs font-bold tracking-widest uppercase",
  formContainerClassName = "space-y-6",
}: ConsultingInquiryFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    businessName: "",
    service: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState("");
  const [utms, setUtms] = useState<Record<string, string>>({});

  useEffect(() => {
    setUtms(getCampaignAttribution());
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent("landing_form_started", {
      ...getLandingAnalyticsData(variant),
      selected_service: form.service || "not_selected",
    });
    setIsSubmitting(true);
    setFormError("");

    try {
      const res = await fetch("https://formspree.io/f/xojkwbvq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          businessName: form.businessName,
          service: form.service,
          landing_page_variant: variant,
          _subject: `Landing Page Inquiry from ${form.name} (${variant})`,
          ...utms,
        }),
      });
      const data = await res.json();

      if (data.ok) {
        trackEvent("generate_lead", {
          ...getLandingAnalyticsData(variant),
          selected_service: form.service,
          form_provider: "formspree",
        });
        setFormSuccess(true);
        setForm({ name: "", email: "", businessName: "", service: "" });
      } else {
        trackEvent("landing_form_failed", {
          ...getLandingAnalyticsData(variant),
          selected_service: form.service || "not_selected",
          reason: "provider_error",
        });
        setFormError("Something went wrong. Please try again.");
      }
    } catch {
      trackEvent("landing_form_failed", {
        ...getLandingAnalyticsData(variant),
        selected_service: form.service || "not_selected",
        reason: "network_error",
      });
      setFormError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (formSuccess) {
    return (
      <div
        className={`py-12 px-8 border-l-4 border-[#F2A900] bg-[#111111] animate-fade-up`}
      >
        <h3 className="font-display font-bold text-white text-2xl mb-3">
          Inquiry received
        </h3>
        <p className="text-[#888888] text-base leading-relaxed">
          I'll review your situation and follow up to discuss the next step.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={formContainerClassName}>
      <div className="space-y-2">
        <label className={`block ${labelClassName}`}>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className={`w-full px-4 py-3 focus:outline-none transition-colors border ${inputClassName}`}
          placeholder="Your full name"
        />
      </div>

      <div className="space-y-2">
        <label className={`block ${labelClassName}`}>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className={`w-full px-4 py-3 focus:outline-none transition-colors border ${inputClassName}`}
          placeholder="you@company.com"
        />
      </div>

      <div className="space-y-2">
        <label className={`block ${labelClassName}`}>Business Name</label>
        <input
          type="text"
          name="businessName"
          value={form.businessName}
          onChange={handleChange}
          required
          className={`w-full px-4 py-3 focus:outline-none transition-colors border ${inputClassName}`}
          placeholder="Your company"
        />
      </div>

      <div className="space-y-2 relative">
        <label className={`block ${labelClassName}`}>Service Needed</label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          required
          className={`w-full px-4 py-3 focus:outline-none transition-colors border appearance-none bg-no-repeat ${inputClassName}`}
          style={{
            backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23888888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
            backgroundPosition: "right 1rem center",
            backgroundSize: "1em",
          }}
        >
          <option value="" disabled>
            Select an area of focus
          </option>
          <option value="web_development">
            Web Development & Architecture
          </option>
          <option value="paid_acquisition">
            Paid Acquisition (Google/Meta Ads)
          </option>
          <option value="ai_automation">AI Workflow Automation</option>
          <option value="strategy">Digital Strategy / Other</option>
        </select>
      </div>

      {formError && (
        <div className="text-destructive text-sm font-medium">{formError}</div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full flex items-center justify-center gap-2 text-sm font-bold px-8 py-4 transition-all duration-200 disabled:opacity-50 ${buttonClassName}`}
      >
        {isSubmitting ? "Submitting..." : "Request a Consultation"}
      </button>
    </form>
  );
}
