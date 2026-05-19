import sharp from "sharp";
import { writeFileSync, mkdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/images/og");
mkdirSync(outDir, { recursive: true });

const W = 1200;
const H = 630;
const GOLD = "#F2A900";
const DARK = "#0A0A0A";

const posts = [
  {
    slug: "ai-automation-small-business",
    title: "AI Automation for\nSmall Business",
    tag: "SYSTEMS",
  },
  {
    slug: "food-brand-gtm-strategy",
    title: "Farm to Funnel\nGo-To-Market Strategy",
    tag: "AGRIBUSINESS",
  },
  {
    slug: "real-cost-of-bad-website",
    title: "The Real Cost\nof a Bad Website",
    tag: "WEB",
  },
  {
    slug: "choosing-the-right-marketing-channel",
    title: "Choosing the Right\nMarketing Channel",
    tag: "MARKETING",
  },
  {
    slug: "google-ads-vs-meta-ads",
    title: "Google Ads\nvs Meta Ads",
    tag: "PAID MEDIA",
  },
  {
    slug: "why-personal-brand-matters",
    title: "Personal Brand Is\nYour Greatest Asset",
    tag: "BRAND",
  },
  {
    slug: "homepage-that-converts",
    title: "How to Write a\nHomepage That Converts",
    tag: "COPYWRITING",
  },
];

function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildSvg(title, tag) {
  const lines = title.split("\n");
  const line1 = escapeXml(lines[0]);
  const line2 = escapeXml(lines[1] || "");
  const tagText = escapeXml(tag);

  const titleY1 = line2 ? 310 : 340;
  const titleY2 = titleY1 + 90;

  return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="${GOLD}" stop-opacity="0.07"/>
      <stop offset="100%" stop-color="${DARK}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="${DARK}"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <!-- Gold accent bar top -->
  <rect x="0" y="0" width="${W}" height="5" fill="${GOLD}"/>

  <!-- Grid lines -->
  <line x1="0" y1="0" x2="0" y2="${H}" stroke="#222" stroke-width="1"/>
  <line x1="${W}" y1="0" x2="${W}" y2="${H}" stroke="#222" stroke-width="1"/>
  <line x1="0" y1="${H}" x2="${W}" y2="${H}" stroke="#222" stroke-width="1"/>

  <!-- Tag pill -->
  <rect x="60" y="60" width="${tagText.length * 10 + 32}" height="32" fill="${GOLD}"/>
  <text x="76" y="81" font-family="Arial Black, Arial, sans-serif" font-size="13" font-weight="800" fill="${DARK}" letter-spacing="2">${tagText}</text>

  <!-- ABOUPRENEUR wordmark -->
  <text x="${W - 60}" y="92" font-family="Arial Black, Arial, sans-serif" font-size="13" font-weight="800" fill="#444" letter-spacing="3" text-anchor="end">ABOUPRENEUR</text>

  <!-- Main title line 1 -->
  <text x="60" y="${titleY1}" font-family="Arial Black, Arial, sans-serif" font-size="76" font-weight="900" fill="#FFFFFF" letter-spacing="-2">${line1}</text>

  ${line2 ? `<text x="60" y="${titleY2}" font-family="Arial Black, Arial, sans-serif" font-size="76" font-weight="900" fill="${GOLD}" letter-spacing="-2">${line2}</text>` : ""}

  <!-- Bottom bar -->
  <line x1="60" y1="${H - 80}" x2="${W - 60}" y2="${H - 80}" stroke="#222" stroke-width="1"/>
  <text x="60" y="${H - 48}" font-family="Arial, sans-serif" font-size="15" fill="#666" letter-spacing="1">Build. Stack. Sovereign.</text>
  <text x="${W - 60}" y="${H - 48}" font-family="Arial, sans-serif" font-size="15" fill="#666" letter-spacing="1" text-anchor="end">aboupreneur.page</text>
</svg>`;
}

for (const post of posts) {
  const svg = buildSvg(post.title, post.tag);
  const svgBuf = Buffer.from(svg);
  const outFile = path.join(outDir, `${post.slug}.jpg`);

  await sharp(svgBuf)
    .resize(W, H)
    .jpeg({ quality: 90 })
    .toFile(outFile);

  console.log(`Generated: /images/og/${post.slug}.jpg`);
}

console.log("\nAll OG images generated.");
