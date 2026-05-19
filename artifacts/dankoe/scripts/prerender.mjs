import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "../dist/public");

let template;
try {
  template = readFileSync(path.join(distDir, "index.html"), "utf-8");
} catch {
  console.error("dist/public/index.html not found. Run vite build first.");
  process.exit(1);
}

const BASE = "https://aboupreneur.page";

const routes = [
  {
    outPath: "story/index.html",
    title: "The Story | ABOUPRENEUR",
    description: "From Cameroon to Canada. The journey from global trader to Bitcoin conviction to agribusiness and the system that connects it all.",
    canonical: `${BASE}/story`,
  },
  {
    outPath: "ecosystem/index.html",
    title: "The Ecosystem | ABOUPRENEUR",
    description: "Moneyverse, Mindbloom, Farm to Funnel, Consulting. Every project built around the Sovereignty Loop. Make. Multiply. Protect.",
    canonical: `${BASE}/ecosystem`,
  },
  {
    outPath: "writing/index.html",
    title: "Writing | ABOUPRENEUR",
    description: "Frameworks on building from zero, sound money, and sovereign thinking published on Mindbloom.",
    canonical: `${BASE}/writing`,
  },
  {
    outPath: "blog/index.html",
    title: "Writing | ABOUPRENEUR",
    description: "Frameworks on building from zero, sound money, and sovereign thinking published on Mindbloom.",
    canonical: `${BASE}/writing`,
  },
  {
    outPath: "blog/ai-automation-small-business/index.html",
    title: "5 Ways AI Automation Is Changing Small Business Marketing Right Now | Aboupreneur",
    description: "Discover 5 practical AI automation workflows that help small businesses market smarter without hiring more people.",
    canonical: `${BASE}/blog/ai-automation-small-business`,
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "5 Ways AI Automation Is Changing Small Business Marketing Right Now",
      description: "Discover 5 practical AI automation workflows that help small businesses market smarter without hiring more people.",
      url: `${BASE}/blog/ai-automation-small-business`,
      datePublished: "2026-04-08",
      author: { "@type": "Person", name: "Aboubakar Moussa", url: BASE },
      publisher: { "@type": "Person", name: "Aboubakar Moussa", url: BASE },
    },
  },
  {
    outPath: "blog/food-brand-gtm-strategy/index.html",
    title: "Why Every Food Brand Needs a Go-To-Market Strategy Before They Scale | Aboupreneur",
    description: "Most food brands rush to sell before knowing who they are selling to. Learn the 4 pillars of a food brand go-to-market strategy.",
    canonical: `${BASE}/blog/food-brand-gtm-strategy`,
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Why Every Food Brand Needs a Go-To-Market Strategy Before They Scale",
      description: "Most food brands rush to sell before knowing who they are selling to. Learn the 4 pillars of a food brand go-to-market strategy.",
      url: `${BASE}/blog/food-brand-gtm-strategy`,
      datePublished: "2026-04-08",
      author: { "@type": "Person", name: "Aboubakar Moussa", url: BASE },
      publisher: { "@type": "Person", name: "Aboubakar Moussa", url: BASE },
    },
  },
  {
    outPath: "blog/real-cost-of-bad-website/index.html",
    title: "The Real Cost of a Bad Website | Aboupreneur",
    description: "A slow, outdated website is a revenue problem. Learn what a bad website is really costing your business and how to fix it.",
    canonical: `${BASE}/blog/real-cost-of-bad-website`,
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "The Real Cost of a Bad Website (It's Not What You Think)",
      description: "A slow, outdated website is a revenue problem. Learn what a bad website is really costing your business.",
      url: `${BASE}/blog/real-cost-of-bad-website`,
      datePublished: "2026-04-08",
      author: { "@type": "Person", name: "Aboubakar Moussa", url: BASE },
      publisher: { "@type": "Person", name: "Aboubakar Moussa", url: BASE },
    },
  },
  {
    outPath: "blog/choosing-the-right-marketing-channel/index.html",
    title: "How to Choose the Right Marketing Channel for Your Business | Aboupreneur",
    description: "Not every channel works for every business. Learn how to match the right marketing channel to your stage, audience, and offer.",
    canonical: `${BASE}/blog/choosing-the-right-marketing-channel`,
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "How to Choose the Right Marketing Channel for Your Business",
      description: "Not every channel works for every business. Learn how to match the right marketing channel to your stage, audience, and offer.",
      url: `${BASE}/blog/choosing-the-right-marketing-channel`,
      datePublished: "2026-04-08",
      author: { "@type": "Person", name: "Aboubakar Moussa", url: BASE },
      publisher: { "@type": "Person", name: "Aboubakar Moussa", url: BASE },
    },
  },
  {
    outPath: "blog/google-ads-vs-meta-ads/index.html",
    title: "Google Ads vs Meta Ads. Which One Is Right for Your Business? | Aboupreneur",
    description: "Google Ads and Meta Ads work very differently. Learn which platform fits your offer, budget, and goals.",
    canonical: `${BASE}/blog/google-ads-vs-meta-ads`,
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Google Ads vs Meta Ads. Which One Is Right for Your Business?",
      description: "Google Ads and Meta Ads work very differently. Learn which platform fits your offer, budget, and goals.",
      url: `${BASE}/blog/google-ads-vs-meta-ads`,
      datePublished: "2026-04-08",
      author: { "@type": "Person", name: "Aboubakar Moussa", url: BASE },
      publisher: { "@type": "Person", name: "Aboubakar Moussa", url: BASE },
    },
  },
  {
    outPath: "blog/why-personal-brand-matters/index.html",
    title: "Why Your Personal Brand Is Your Most Valuable Business Asset | Aboupreneur",
    description: "In a world full of competing offers, your personal brand is the reason someone chooses you over anyone else.",
    canonical: `${BASE}/blog/why-personal-brand-matters`,
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Why Your Personal Brand Is Your Most Valuable Business Asset",
      description: "In a world full of competing offers, your personal brand is the reason someone chooses you over anyone else.",
      url: `${BASE}/blog/why-personal-brand-matters`,
      datePublished: "2026-04-08",
      author: { "@type": "Person", name: "Aboubakar Moussa", url: BASE },
      publisher: { "@type": "Person", name: "Aboubakar Moussa", url: BASE },
    },
  },
  {
    outPath: "blog/homepage-that-converts/index.html",
    title: "How to Write a Homepage That Converts | Aboupreneur",
    description: "Most homepages talk about the business instead of the visitor. Learn the five-section framework that turns your homepage into a client-generating machine.",
    canonical: `${BASE}/blog/homepage-that-converts`,
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "How to Write a Homepage That Converts (Without Sounding Like a Robot)",
      description: "Most homepages talk about the business instead of the visitor. Learn the five-section framework that turns your homepage into a client-generating machine.",
      url: `${BASE}/blog/homepage-that-converts`,
      datePublished: "2026-04-08",
      author: { "@type": "Person", name: "Aboubakar Moussa", url: BASE },
      publisher: { "@type": "Person", name: "Aboubakar Moussa", url: BASE },
    },
  },
];

function buildHtml(route) {
  let html = template;

  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${route.title}</title>`
  );

  html = html.replace(
    /(<meta name="description" content=")[^"]*"/,
    `$1${route.description}"`
  );

  html = html.replace(
    /(<link rel="canonical" href=")[^"]*"/,
    `$1${route.canonical}"`
  );

  html = html.replace(
    /(<meta property="og:url" content=")[^"]*"/,
    `$1${route.canonical}"`
  );

  html = html.replace(
    /(<meta property="og:title" content=")[^"]*"/,
    `$1${route.title}"`
  );

  html = html.replace(
    /(<meta property="og:description" content=")[^"]*"/,
    `$1${route.description}"`
  );

  html = html.replace(
    /(<meta name="twitter:title" content=")[^"]*"/,
    `$1${route.title}"`
  );

  html = html.replace(
    /(<meta name="twitter:description" content=")[^"]*"/,
    `$1${route.description}"`
  );

  if (route.schema) {
    const schemaTag = `<script type="application/ld+json">${JSON.stringify(route.schema)}</script>`;
    html = html.replace("</head>", `  ${schemaTag}\n</head>`);
  }

  return html;
}

let count = 0;
for (const route of routes) {
  const outFile = path.join(distDir, route.outPath);
  const outDir = path.dirname(outFile);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outFile, buildHtml(route), "utf-8");
  console.log(`Prerendered: /${route.outPath.replace("/index.html", "")}`);
  count++;
}

console.log(`\nPrerender complete: ${count} routes generated.`);
