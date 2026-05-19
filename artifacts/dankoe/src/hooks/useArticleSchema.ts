import { useEffect } from "react";

interface ArticleSchemaOptions {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
}

export function useArticleSchema({
  headline,
  description,
  url,
  datePublished = "2026-04-08",
}: ArticleSchemaOptions) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-article-schema", "true");
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline,
      description,
      url,
      datePublished,
      author: {
        "@type": "Person",
        name: "Aboubakar Moussa",
        url: "https://aboupreneur.page",
      },
      publisher: {
        "@type": "Person",
        name: "Aboubakar Moussa",
        url: "https://aboupreneur.page",
      },
    });
    document.head.appendChild(script);

    return () => {
      const el = document.querySelector("script[data-article-schema]");
      if (el) el.remove();
    };
  }, [headline, description, url, datePublished]);
}
