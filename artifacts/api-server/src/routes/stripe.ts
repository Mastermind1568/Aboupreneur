import { Router } from "express";

const router = Router();
const attempts = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 8;

router.post("/checkout/project-deposit", async (req, res) => {
  const key = req.ip || "unknown";
  const now = Date.now();
  const current = attempts.get(key);
  if (!current || current.resetAt <= now) attempts.set(key, { count: 1, resetAt: now + WINDOW_MS });
  else if (current.count >= MAX_ATTEMPTS) return res.status(429).json({ error: "Too many requests. Try again later." });
  else current.count += 1;

  // Keep legacy API callers on the same hosted checkout as /pay and its QR code.
  // This returns a destination only; it does not create or confirm a payment.
  return res.json({ url: "https://buy.stripe.com/9B6bIUaQ33eO6XUdmE9oc00" });
});

export default router;