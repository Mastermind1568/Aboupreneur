import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectDir = path.join(__dirname, "..");
const distDir = path.join(projectDir, "dist/public");
const manifestPath = path.join(projectDir, "src/route-manifest.json");
const sitemapPath = path.join(projectDir, "public/sitemap.xml");
const BASE = "https://aboupreneur.page";

const routes = JSON.parse(readFileSync(manifestPath, "utf-8"));

function validateManifest() {
  const errors = [];
  const paths = new Set();

  for (const route of routes) {
    if (!route.path || !route.component) {
      errors.push("Every public route needs a path and component.");
      continue;
    }
    if (paths.has(route.path)) errors.push(`Duplicate public route: ${route.path}`);
    paths.add(route.path);

    for (const field of ["title", "description", "canonical"]) {
      if (!route.search?.[field]?.trim()) {
        errors.push(`${route.path} is missing search metadata: ${field}`);
      }
    }
  }

  if (errors.length) {
    console.error(`Search manifest validation failed:\n- ${errors.join("\n- ")}`);
    process.exit(1);
  }
}

function buildSitemap() {
  const entries = routes
    .filter((route) => route.sitemap)
    .map((route) => {
      const priority = route.sitemap.priority.toFixed(1);
      return `  <url>
    <loc>${route.sitemap.loc ?? route.search.canonical}</loc>
    <lastmod>${route.sitemap.lastmod}</lastmod>
    <changefreq>${route.sitemap.changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
}

function buildHtml(template, route) {
  const { search } = route;
  let html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${search.title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*"/, `$1${search.description}"`)
    .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${search.canonical}"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${search.canonical}"`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${search.title}"`)
    .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${search.description}"`)
    .replace(/(<meta name="twitter:title" content=")[^"]*"/, `$1${search.title}"`)
    .replace(/(<meta name="twitter:description" content=")[^"]*"/, `$1${search.description}"`);

  if (search.robots) {
    html = html.replace("</head>", `  <meta name="robots" content="${search.robots}" />\n</head>`);
  }

  if (search.ogImage) {
    html = html
      .replace(/(<meta property="og:image" content=")[^"]*"/, `$1${search.ogImage}"`)
      .replace(/(<meta name="twitter:image" content=")[^"]*"/, `$1${search.ogImage}"`);
  }

  if (search.datePublished) {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: search.headline,
      description: search.schemaDescription ?? search.description,
      url: search.canonical,
      datePublished: search.datePublished,
      author: { "@type": "Person", name: "Aboubakar Moussa", url: BASE },
      publisher: { "@type": "Person", name: "Aboubakar Moussa", url: BASE },
    };
    html = html.replace(
      "</head>",
      `  <script type="application/ld+json">${JSON.stringify(articleSchema)}</script>\n</head>`,
    );
  }

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: search.title,
    description: search.description,
    url: search.canonical,
    isPartOf: { "@id": `${BASE}/#website` },
    inLanguage: "en-CA",
  };
  html = html.replace(
    "</head>",
    `  <script type="application/ld+json" data-page-schema="true">${JSON.stringify(pageSchema)}</script>\n</head>`,
  );

  return html;
}

validateManifest();
const sitemap = buildSitemap();
writeFileSync(sitemapPath, sitemap, "utf-8");

if (process.argv.includes("--validate-only")) {
  console.log(`Validated search metadata for ${routes.length} public routes.`);
  process.exit(0);
}

let template;
try {
  template = readFileSync(path.join(distDir, "index.html"), "utf-8");
} catch {
  console.error("dist/public/index.html not found. Run vite build first.");
  process.exit(1);
}

for (const route of routes) {
  const relativePath = route.path === "/" ? "index.html" : `${route.path.slice(1)}/index.html`;
  const outFile = path.join(distDir, relativePath);
  mkdirSync(path.dirname(outFile), { recursive: true });
  writeFileSync(outFile, buildHtml(template, route), "utf-8");
  console.log(`Prerendered: ${route.path}`);
}

writeFileSync(path.join(distDir, "sitemap.xml"), sitemap, "utf-8");
console.log(`\nPrerender complete: ${routes.length} routes generated.`);