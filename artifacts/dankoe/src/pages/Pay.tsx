import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Mail, Phone, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { useSEO } from "@/hooks/useSEO";
import { trackEvent } from "@/lib/analytics";

export default function Pay() {
  useSEO({
    title: "Pay Your Project Deposit | Aboupreneur",
    description: "Securely pay the CAD $250 Aboupreneur project deposit after your project scope has been agreed.",
    canonical: "https://aboupreneur.page/pay",
  });
  const status = typeof window === "undefined" ? null : new URLSearchParams(window.location.search).get("status");

  useEffect(() => {
    trackEvent("payment_return_viewed", {
      status: status === "success" || status === "cancelled" ? status : "none",
    });
  }, [status]);

  const startCheckout = () => {
    trackEvent("payment_checkout_started", { product: "project_deposit" });
    trackEvent("payment_checkout_created", {
      product: "project_deposit",
      provider: "stripe_payment_link",
    });
  };

  return (
    <main className="min-h-screen bg-background pt-24">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-20">
        <FadeIn>
          <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4">PROJECT DEPOSIT</p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold max-w-3xl mb-6">Move from plan to build</h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Once we have discussed your project and agreed on its scope, secure the next step with a simple,
            one-time deposit.
          </p>
        </FadeIn>

        {status === "success" && (
          <div role="status" className="mt-10 rounded-2xl border border-green-500/30 bg-green-500/10 p-5 flex gap-3 text-green-600">
            <CheckCircle2 className="shrink-0" /> Payment received. Thank you — I’ll be in touch with the next steps.
          </div>
        )}
        {status === "cancelled" && (
          <div role="status" className="mt-10 rounded-2xl border border-border bg-card p-5 text-muted-foreground">
            Checkout was cancelled. No payment was taken. You can return whenever you’re ready.
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8 mt-14">
          <FadeIn delay={0.1}>
            <section className="rounded-3xl border border-border/60 bg-card p-8 md:p-10 shadow-xl">
              <div className="flex items-center gap-2 text-accent text-sm font-bold tracking-widest uppercase">
                <ShieldCheck className="w-4 h-4" /> Secure checkout
              </div>
              <h2 className="text-3xl font-serif font-bold mt-6">Project deposit</h2>
              <div className="text-5xl font-bold mt-4">$250 <span className="text-lg font-normal text-muted-foreground">CAD</span></div>
              <p className="text-muted-foreground mt-5 leading-relaxed">
                A one-time deposit applied to the agreed project scope. This is not a generic product price:
                please pay only after we’ve discussed your project together.
              </p>
              <a
                href="https://buy.stripe.com/9B6bIUaQ33eO6XUdmE9oc00"
                onClick={startCheckout}
                data-analytics-label="stripe_project_deposit"
                className="mt-8 flex w-full items-center justify-center py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-accent hover:text-accent-foreground transition-all"
              >
                Pay $250 deposit
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <div className="mt-8 border-t border-border/60 pt-8 text-center">
                <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
                  Or scan to pay
                </p>
                <img
                  src="/stripe-project-deposit-qr.png"
                  alt="QR code for the secure Stripe project deposit checkout"
                  className="mx-auto mt-5 w-full max-w-52 rounded-2xl border border-border/60"
                  loading="lazy"
                />
                <p className="mt-4 text-sm text-muted-foreground">
                  Stripe securely processes the payment. Aboupreneur does not receive or store your card details.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.2}>
            <section className="rounded-3xl border border-border/60 p-8 md:p-10">
              <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">CUSTOM-SCOPE INVOICES</p>
              <h2 className="text-3xl font-serif font-bold mt-5">Have an invoice?</h2>
              <p className="text-muted-foreground mt-5 leading-relaxed">
                Custom-scope clients receive a unique Stripe-hosted invoice link directly after scope approval.
                There is no public invoice portal or email lookup here, keeping your billing details private.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <a href="mailto:hello@aboupreneur.page?subject=Invoice%20help" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-3 text-sm hover:border-accent transition-colors">
                  <Mail className="w-4 h-4" /> Email for invoice help
                </a>
                <a href="tel:+17806951526" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-3 text-sm hover:border-accent transition-colors">
                  <Phone className="w-4 h-4" /> Call
                </a>
              </div>
            </section>
          </FadeIn>
        </div>
        <p className="text-sm text-muted-foreground mt-12">Not sure whether to pay yet? <Link href="/contact" className="text-foreground underline underline-offset-4">Let’s discuss your project first.</Link></p>
      </div>
      <Footer />
    </main>
  );
}