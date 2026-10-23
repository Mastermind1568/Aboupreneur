---
name: Hosted deposit checkout
description: Why Aboupreneur uses its existing hosted Stripe checkout rather than the separate connected account.
---

Keep the existing hosted Stripe Payment Link as the deposit destination unless the user explicitly requests a migration.

**Why:** The hosted checkout displayed the CA$250 project deposit, while the separate Stripe connector reported payments disabled with no active prices or payment links. Treating that connector as the live checkout account would break the established payment path.

**How to apply:** Recheck account state before future Stripe work. Do not create duplicate products or replace the link to compensate for an empty connector account. A checkout click or a return URL is not payment confirmation; require Stripe verification for paid status.
