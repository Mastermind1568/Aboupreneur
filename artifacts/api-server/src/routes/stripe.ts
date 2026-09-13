import { Router } from "express";
import { ReplitConnectors } from "@replit/connectors-sdk";

const router = Router();
const attempts = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 8;
const connectors = new ReplitConnectors();

type StripePrice = {
  id: string;
  active: boolean;
  currency: string;
  unit_amount: number | null;
  recurring: unknown;
};

async function stripeRequest<T>(
  path: string,
  options?: { method?: string; headers?: Record<string, string>; body?: string },
): Promise<T> {
  const response = await connectors.proxy("stripe", path, options);
  if (!response.ok) throw new Error(`Stripe proxy returned ${response.status}`);
  return await response.json() as T;
}

function trustedOrigin(): string | null {
  if (process.env.NODE_ENV === "production") {
    return "https://aboupreneur.page";
  }

  const configured = process.env.REPLIT_DEV_DOMAIN?.trim()
    || process.env.REPLIT_DOMAINS?.split(",")[0]?.trim();
  if (!configured || !/^[a-z0-9.-]+(?::\d+)?$/i.test(configured)) return null;
  return `https://${configured}`;
}

router.post("/checkout/project-deposit", async (req, res) => {
  const key = req.ip || "unknown";
  const now = Date.now();
  const current = attempts.get(key);
  if (!current || current.resetAt <= now) attempts.set(key, { count: 1, resetAt: now + WINDOW_MS });
  else if (current.count >= MAX_ATTEMPTS) return res.status(429).json({ error: "Too many requests. Try again later." });
  else current.count += 1;

  const origin = trustedOrigin();
  if (!origin) return res.status(503).json({ error: "Checkout is temporarily unavailable." });
  try {
    const query = encodeURIComponent(
      "active:'true' AND metadata['aboupreneur_price']:'project_deposit_cad_250'",
    );
    const prices = await stripeRequest<{ data: StripePrice[] }>(
      `/v1/prices/search?query=${query}&limit=10`,
    );
    const price = prices.data.find((item) =>
      item.active && item.currency === "cad" && item.unit_amount === 25000 && !item.recurring,
    );
    if (!price) return res.status(503).json({ error: "Checkout is temporarily unavailable." });
    const body = new URLSearchParams({
      mode: "payment",
      "line_items[0][price]": price.id,
      "line_items[0][quantity]": "1",
      success_url: `${origin}/pay?status=success`,
      cancel_url: `${origin}/pay?status=cancelled`,
      "metadata[purpose]": "project_deposit",
    });
    const session = await stripeRequest<{ url?: string }>("/v1/checkout/sessions", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });
    if (!session.url) return res.status(503).json({ error: "Checkout is temporarily unavailable." });
    return res.json({ url: session.url });
  } catch {
    return res.status(503).json({ error: "Checkout is temporarily unavailable." });
  }
});

export default router;