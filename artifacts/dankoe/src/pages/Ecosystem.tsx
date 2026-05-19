import { useState, useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useSEO } from "@/hooks/useSEO";

type Tab = "ALL" | "MAKE" | "MULTIPLY" | "PROTECT" | "IN BUILD";

interface ConsultingForm {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const products = [
  {
    phase: "MULTIPLY",
    phaseNum: "02",
    status: "LIVE",
    statusStyle: { background: "#F2A900", color: "#0A0A0A" },
    title: "MONEYVERSE",
    sub: "The sound money education platform",
    bg: "#0A0A0A",
    textColor: "#FFFFFF",
    description: `Bitcoin entered African markets in 2016. I was there. I spent years developing the conviction that sound money is not optional for anyone who wants to build lasting wealth — especially those starting in economies where currency erosion is a lived reality, not a textbook warning.\n\nMoneyverse is the platform I built to share that conviction at scale. 11 modules. A structured DCA masterclass. The macroeconomic framework behind why holding hard assets is the rational move for the ambitious entrepreneur operating from a developing-world baseline.`,
    list: [
      "11 core modules on Bitcoin fundamentals and wealth preservation",
      "DCA (Dollar Cost Averaging) masterclass and calculator",
      "Macroeconomic framework — why fiat fails the entrepreneur",
      "Sound money philosophy — conviction over speculation",
    ],
    ctaLabel: "ENTER MONEYVERSE",
    ctaHref: "https://moneyverse.network",
    ctaPrimary: true,
  },
  {
    phase: "MAKE",
    phaseNum: "01",
    status: "LIVE",
    statusStyle: { background: "#F2A900", color: "#0A0A0A" },
    title: "MINDBLOOM",
    sub: "The writing engine — published on Substack",
    bg: "#FFFFFF",
    textColor: "#0A0A0A",
    description: `There's a version of content creation that performs. There's another version that accumulates. Mindbloom is the latter.\n\nEvery piece published here is a framework, a perspective, or a documented decision — written with the standard of something worth reading three years from now. No trending takes. No motivational noise. Just the thinking behind building sovereignty from zero.`,
    list: [
      "Weekly frameworks on execution, money, and building",
      "Raw documentation of the Aboupreneur journey",
      "Mental models for the ambitious African entrepreneur",
      "Deep-dives on digital leverage, sound money, and systems",
    ],
    ctaLabel: "SUBSCRIBE TO MINDBLOOM",
    ctaHref: "https://aboupreneur.substack.com",
    ctaPrimary: false,
  },
  {
    phase: "MAKE",
    phaseNum: "01",
    status: "LIVE",
    statusStyle: { background: "#F2A900", color: "#0A0A0A" },
    title: "FARM TO FUNNEL",
    sub: "Where agribusiness meets digital marketing",
    bg: "#0A0A0A",
    textColor: "#FFFFFF",
    description: `Most agribusiness operators are world-class at growing, raising, and producing. Most are invisible online.\n\nFarm to Funnel is the newsletter that bridges the gap — translating the language of modern digital marketing into systems that make sense for the land operator, the commodity trader, and the agribusiness professional who understands soil better than social media.`,
    list: [
      "Agribusiness marketers and operators",
      "Farm operators building direct-to-consumer channels",
      "Ag students who want real marketing intelligence",
      "Professionals at Nutrien, Richardson, FCC, and similar companies",
    ],
    listLabel: "WHO IT'S FOR",
    ctaLabel: "SUBSCRIBE TO FARM TO FUNNEL",
    ctaHref: "https://www.linkedin.com/newsletters/farm-to-funnel-7409350357295923200",
    ctaPrimary: false,
  },
  {
    phase: "MAKE",
    phaseNum: "01",
    status: "ACCEPTING INQUIRIES",
    statusStyle: { background: "#222222", color: "#888888" },
    title: "CONSULTING",
    sub: "Systems architecture for ambitious operators",
    bg: "#FFFFFF",
    textColor: "#0A0A0A",
    description: `Most digital strategy advice is tactics dressed up as strategy. What ambitious operators need isn't another tactic — it's infrastructure that compounds.\n\nAboupreneur Consulting designs the digital systems, AI automation pipelines, and web architecture that let operators focus on the work that actually moves the needle.`,
    list: [
      "AI workflow automation and pipeline design",
      "Web development and platform architecture",
      "SEO systems and performance marketing",
      "Digital strategy for agribusiness and food companies",
    ],
    listLabel: "SERVICE AREAS",
    ctaLabel: "INQUIRE →",
    ctaHref: "#consulting-form",
    ctaPrimary: true,
  },
];

const phaseToTab: Record<string, Tab[]> = {
  MAKE: ["ALL", "MAKE"],
  MULTIPLY: ["ALL", "MULTIPLY"],
  PROTECT: ["ALL", "PROTECT"],
};

export default function Ecosystem() {
  useSEO({
    title: "The Ecosystem | ABOUPRENEUR",
    description: "Moneyverse, Mindbloom, Farm to Funnel, Consulting — every project built around one system: Make. Multiply. Protect.",
    canonical: "https://aboupreneur.page/ecosystem",
  });

  const [activeTab, setActiveTab] = useState<Tab>("ALL");
  const tabs: Tab[] = ["ALL", "MAKE", "MULTIPLY", "PROTECT", "IN BUILD"];
  const formRef = useRef<HTMLElement>(null);

  const [form, setForm] = useState<ConsultingForm>({
    name: "", email: "", company: "", service: "", message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleConsultingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError("");
    try {
      const res = await fetch("https://formspree.io/f/xojkwbvq", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          service: form.service,
          message: form.message,
          _subject: `Consulting inquiry from ${form.name}`,
        }),
      });
      const data = await res.json();
      if (data.ok) {
        setFormSuccess(true);
        setForm({ name: "", email: "", company: "", service: "", message: "" });
      } else {
        setFormError("Something went wrong. Please try again or email hello@aboupreneur.page.");
      }
    } catch {
      setFormError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const visible = products.filter((p) => {
    if (activeTab === "ALL") return true;
    return phaseToTab[p.phase]?.includes(activeTab);
  });

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      <section style={{ padding: "120px 40px 80px" }} className="max-w-7xl mx-auto">
        <span className="text-xs font-bold block mb-6" style={{ color: "#F2A900", letterSpacing: "0.12em" }}>
          THE ECOSYSTEM
        </span>
        <h1
          className="font-display font-bold text-white mb-6"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", letterSpacing: "-0.03em", lineHeight: "1.05" }}
        >
          "Every project exists to move<br />someone closer to sovereign."
        </h1>
        <p style={{ color: "#888888", fontSize: "18px", maxWidth: "520px", lineHeight: "1.7" }}>
          Not a portfolio. Not a collection of side projects.
          A coordinated system — each piece feeds the loop.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-10 mb-16">
        <div className="flex items-center gap-0" style={{ borderBottom: "1px solid #222222" }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="text-xs font-bold px-6 py-4 transition-colors duration-200"
              style={{
                color: activeTab === tab ? "#F2A900" : "#888888",
                borderBottom: activeTab === tab ? "2px solid #F2A900" : "2px solid transparent",
                letterSpacing: "0.08em",
                marginBottom: "-1px",
                background: "transparent",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div>
        {activeTab === "IN BUILD" ? (
          <div
            style={{ background: "#0A0A0A", padding: "80px 40px", borderTop: "1px solid #1A1A1A" }}
            className="max-w-7xl mx-auto"
          >
            <div style={{ border: "1px solid #222222", padding: "60px 40px" }}>
              <span className="text-xs font-bold block mb-4" style={{ color: "#888888", letterSpacing: "0.1em" }}>
                COMING
              </span>
              <h2
                className="font-display font-bold mb-4"
                style={{ color: "#333333", fontSize: "2.5rem", letterSpacing: "-0.03em" }}
              >
                MORE IS BEING BUILT
              </h2>
              <p style={{ color: "#444444", fontSize: "16px", marginBottom: "24px", maxWidth: "540px", lineHeight: "1.7" }}>
                The Sovereignty Loop doesn't stop at three phases.
                New ventures, platforms, and products are being built in public.
                Subscribe to stay inside the process.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/aboupreneur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold px-6 py-3 transition-all duration-200"
                  style={{ border: "1px solid #F2A900", color: "#F2A900" }}
                >
                  FOLLOW ON INSTAGRAM →
                </a>
                <a
                  href="https://youtube.com/@aboupreneur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold px-6 py-3 transition-all duration-200"
                  style={{ border: "1px solid #333333", color: "#888888" }}
                >
                  FOLLOW ON YOUTUBE →
                </a>
              </div>
            </div>
          </div>
        ) : visible.length === 0 ? (
          <div style={{ padding: "80px 40px", textAlign: "center" }}>
            <p style={{ color: "#888888" }}>Nothing in this phase yet — check back soon.</p>
          </div>
        ) : (
          visible.map((product, i) => (
            <section
              key={product.title}
              style={{
                background: product.bg,
                padding: "80px 40px",
                borderTop: i === 0 ? "none" : `1px solid ${product.bg === "#FFFFFF" ? "#E5E5E5" : "#1A1A1A"}`,
              }}
            >
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                  <span
                    className="text-xs font-bold px-3 py-1"
                    style={{ border: "1px solid #F2A900", color: "#F2A900", letterSpacing: "0.1em" }}
                  >
                    {product.phase} — {product.phaseNum}
                  </span>
                  <span
                    className="text-xs font-bold px-3 py-1"
                    style={product.statusStyle}
                  >
                    {product.status}
                  </span>
                </div>

                <h2
                  className="font-display font-bold mb-3"
                  style={{
                    fontSize: "clamp(2rem, 5vw, 3rem)",
                    letterSpacing: "-0.03em",
                    color: product.textColor,
                  }}
                >
                  {product.title}
                </h2>
                <p className="text-xl mb-10" style={{ color: "#888888" }}>{product.sub}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    {product.description.split("\n\n").map((para, j) => (
                      <p
                        key={j}
                        className="mb-5"
                        style={{ color: product.bg === "#FFFFFF" ? "#444444" : "#888888", lineHeight: "1.8", fontSize: "16px" }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  <div>
                    <p className="text-xs font-bold mb-4" style={{ color: "#F2A900", letterSpacing: "0.1em" }}>
                      {product.listLabel || "WHAT'S INSIDE"}
                    </p>
                    <ul className="space-y-3 mb-10">
                      {product.list.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm"
                          style={{ color: product.bg === "#FFFFFF" ? "#444444" : "#888888", lineHeight: "1.6" }}
                        >
                          <span style={{ color: "#F2A900", marginTop: "2px" }}>—</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {product.ctaHref.startsWith("#") ? (
                      <button
                        onClick={scrollToForm}
                        className="inline-flex items-center gap-2 text-sm font-bold px-8 py-4 transition-all duration-200"
                        style={{ background: "#F2A900", color: "#0A0A0A" }}
                      >
                        {product.ctaLabel}
                      </button>
                    ) : (
                      <a
                        href={product.ctaHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold px-8 py-4 transition-all duration-200"
                        style={
                          product.ctaPrimary
                            ? { background: "#F2A900", color: "#0A0A0A" }
                            : { border: "1px solid #F2A900", color: "#F2A900" }
                        }
                      >
                        {product.ctaLabel} →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </section>
          ))
        )}
      </div>

      {/* ── CONSULTING FORM ── */}
      <section
        id="consulting-form"
        ref={formRef}
        style={{ background: "#0A0A0A", padding: "100px 40px", borderTop: "1px solid #1A1A1A" }}
      >
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-bold block mb-6" style={{ color: "#F2A900", letterSpacing: "0.12em" }}>
            START A CONVERSATION
          </span>
          <h2
            className="font-display font-bold text-white mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}
          >
            Tell me what you're building.
          </h2>
          <p className="mb-12" style={{ color: "#888888", fontSize: "16px", lineHeight: "1.7" }}>
            I'll review your situation and respond within 48 hours if there's a fit.
          </p>

          {formSuccess ? (
            <div className="py-12" style={{ borderLeft: "3px solid #F2A900", paddingLeft: "24px" }}>
              <p className="font-display font-bold text-white text-2xl mb-3">Message received.</p>
              <p style={{ color: "#888888", fontSize: "16px", lineHeight: "1.7" }}>
                I'll be in touch within 48 hours. In the meantime, explore the ecosystem or read the writing.
              </p>
            </div>
          ) : (
            <form onSubmit={handleConsultingSubmit} className="space-y-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div>
                  <label className="block text-xs font-bold mb-2" style={{ color: "#888888", letterSpacing: "0.08em" }}>
                    NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleFormChange}
                    required
                    placeholder="Aboubakar Moussa"
                    className="w-full px-5 py-4 text-sm text-white outline-none mb-4"
                    style={{ background: "#111111", border: "1px solid #222222" }}
                    onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "#F2A900"; }}
                    onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "#222222"; }}
                  />
                </div>
                <div className="md:ml-4">
                  <label className="block text-xs font-bold mb-2" style={{ color: "#888888", letterSpacing: "0.08em" }}>
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleFormChange}
                    required
                    placeholder="you@example.com"
                    className="w-full px-5 py-4 text-sm text-white outline-none mb-4"
                    style={{ background: "#111111", border: "1px solid #222222" }}
                    onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "#F2A900"; }}
                    onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "#222222"; }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold mb-2" style={{ color: "#888888", letterSpacing: "0.08em" }}>
                  COMPANY / WEBSITE (OPTIONAL)
                </label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleFormChange}
                  placeholder="yourcompany.com"
                  className="w-full px-5 py-4 text-sm text-white outline-none mb-4"
                  style={{ background: "#111111", border: "1px solid #222222" }}
                  onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "#F2A900"; }}
                  onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "#222222"; }}
                />
              </div>

              <div>
                <label className="block text-xs font-bold mb-2" style={{ color: "#888888", letterSpacing: "0.08em" }}>
                  WHAT DO YOU NEED HELP WITH? *
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleFormChange}
                  required
                  className="w-full px-5 py-4 text-sm text-white outline-none mb-4 appearance-none"
                  style={{ background: "#111111", border: "1px solid #222222", cursor: "pointer" }}
                  onFocus={(e) => { (e.target as HTMLSelectElement).style.borderColor = "#F2A900"; }}
                  onBlur={(e) => { (e.target as HTMLSelectElement).style.borderColor = "#222222"; }}
                >
                  <option value="" disabled>Select a service area</option>
                  <option value="AI Automation">AI workflow automation and pipeline design</option>
                  <option value="Web Development">Web development and platform architecture</option>
                  <option value="SEO Systems">SEO systems and performance marketing</option>
                  <option value="Digital Strategy">Digital strategy for agribusiness / food companies</option>
                  <option value="Other">Other — I'll explain below</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold mb-2" style={{ color: "#888888", letterSpacing: "0.08em" }}>
                  TELL ME MORE *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleFormChange}
                  required
                  rows={5}
                  placeholder="What are you building? What's the problem you're trying to solve? Where are you right now?"
                  className="w-full px-5 py-4 text-sm text-white outline-none mb-6 resize-none"
                  style={{ background: "#111111", border: "1px solid #222222", lineHeight: "1.7" }}
                  onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "#F2A900"; }}
                  onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "#222222"; }}
                />
              </div>

              {formError && (
                <p className="mb-4 text-sm" style={{ color: "#FF4444" }}>{formError}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="text-sm font-bold px-10 py-4 transition-all duration-200"
                style={{
                  background: isSubmitting ? "#555" : "#F2A900",
                  color: "#0A0A0A",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                }}
              >
                {isSubmitting ? "SENDING..." : "SEND INQUIRY →"}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
