import { useEffect } from "react";

interface SEOOptions {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  robots?: string;
}

const SITE_URL = "https://aboupreneur.page";

export function useSEO({ title, description, canonical, ogImage, robots = "index, follow" }: SEOOptions) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="robots"]', "content", robots);
    setMeta('meta[property="og:type"]', "content", window.location.pathname.startsWith("/blog/") ? "article" : "website");

    if (canonical) {
      setMeta('link[rel="canonical"]', "href", canonical);
      setMeta('meta[property="og:url"]', "content", canonical);
    }

    if (ogImage) {
      setMeta('meta[property="og:image"]', "content", ogImage);
      setMeta('meta[name="twitter:image"]', "content", ogImage);
    }

    // Keep the rendered route useful to crawlers that execute the SPA and
    // avoid accumulating stale schemas as users navigate client-side.
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.setAttribute("data-page-schema", "true");
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description,
      url: canonical ?? `${SITE_URL}${window.location.pathname}`,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      inLanguage: "en-CA",
    });
    document.head.appendChild(schema);

    return () => {
      document.title = "ABOUPRENEUR | Build. Stack. Sovereign.";
      schema.remove();
    };
  }, [title, description, canonical, ogImage, robots]);
}
