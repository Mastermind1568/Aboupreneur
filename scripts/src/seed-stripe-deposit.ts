import { ReplitConnectors } from "@replit/connectors-sdk";

const PRODUCT_MARKER = "project_deposit";
const PRICE_MARKER = "project_deposit_cad_250";
const connectors = new ReplitConnectors();

type StripeResource = {
  id: string;
  active: boolean;
  currency?: string;
  unit_amount?: number | null;
  recurring?: unknown;
  product?: string;
};

async function stripeRequest<T>(
  path: string,
  options?: { method?: string; headers?: Record<string, string>; body?: string },
): Promise<T> {
  const response = await connectors.proxy("stripe", path, options);
  if (!response.ok) throw new Error(`Stripe proxy returned ${response.status}`);
  return await response.json() as T;
}

async function seed() {
  const productQuery = encodeURIComponent(
    `active:'true' AND metadata['aboupreneur_product']:'${PRODUCT_MARKER}'`,
  );
  const products = await stripeRequest<{ data: StripeResource[] }>(
    `/v1/products/search?query=${productQuery}&limit=10`,
  );
  let product = products.data[0];
  if (!product) {
    const body = new URLSearchParams({
      name: "Aboupreneur Project Deposit",
      description: "One-time deposit applied to an agreed Aboupreneur project scope.",
      "metadata[aboupreneur_product]": PRODUCT_MARKER,
    });
    product = await stripeRequest<StripeResource>("/v1/products", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });
  }

  const priceQuery = encodeURIComponent(
    `active:'true' AND metadata['aboupreneur_price']:'${PRICE_MARKER}'`,
  );
  const prices = await stripeRequest<{ data: StripeResource[] }>(
    `/v1/prices/search?query=${priceQuery}&limit=10`,
  );
  const existing = prices.data.find((price) =>
    price.product === product.id && price.currency === "cad" &&
    price.unit_amount === 25000 && !price.recurring,
  );
  if (existing) {
    console.log("Project deposit already exists.");
    return;
  }
  const body = new URLSearchParams({
    product: product.id,
    currency: "cad",
    unit_amount: "25000",
    "metadata[aboupreneur_price]": PRICE_MARKER,
    "metadata[aboupreneur_product]": PRODUCT_MARKER,
  });
  await stripeRequest("/v1/prices", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });
  console.log("Project deposit seeded.");
}

seed().catch(() => {
  console.error("Unable to seed Stripe deposit.");
  process.exitCode = 1;
});