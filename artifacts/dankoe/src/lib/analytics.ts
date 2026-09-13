type AnalyticsData = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    umami?: {
      track(name: string, data?: AnalyticsData): void;
    };
  }
}

export function trackEvent(name: string, data?: AnalyticsData): void {
  if (typeof window === "undefined") return;

  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: name, ...data });
    window.umami?.track(name, data);
  } catch {
    // Analytics must never interrupt the visitor experience.
  }
}

const ATTRIBUTION_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
] as const;

export type LandingPageVariant = "variant-a" | "variant-b";

export function getCampaignAttribution(): Record<string, string> {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);

  return ATTRIBUTION_KEYS.reduce<Record<string, string>>((attribution, key) => {
    const value = params.get(key)?.trim();
    if (value) attribution[key] = value.slice(0, 200);
    return attribution;
  }, {});
}

export function getLandingAnalyticsData(
  variant: LandingPageVariant,
): AnalyticsData {
  const attribution = getCampaignAttribution();

  return {
    landing_page_variant: variant,
    campaign: attribution.utm_campaign || "(not set)",
    ad_group: attribution.utm_content || "(not set)",
    keyword: attribution.utm_term || "(not set)",
    source: attribution.utm_source || "(not set)",
    medium: attribution.utm_medium || "(not set)",
    has_gclid: Boolean(attribution.gclid),
  };
}

export function trackLandingPageView(variant: LandingPageVariant): void {
  trackEvent("landing_page_view", getLandingAnalyticsData(variant));
}

export function trackLandingCtaClick(
  variant: LandingPageVariant,
  ctaLocation: string,
): void {
  trackEvent("landing_cta_click", {
    ...getLandingAnalyticsData(variant),
    cta_location: ctaLocation,
  });
}

export function trackLinkClick(anchor: HTMLAnchorElement): void {
  const href = anchor.getAttribute("href");
  if (!href || href.startsWith("#")) return;

  const location = window.location.pathname;
  const label = anchor.dataset.analyticsLabel;

  if (href.startsWith("mailto:")) {
    trackEvent("email_link_clicked", { location });
    return;
  }

  const url = new URL(href, window.location.href);
  if (url.origin !== window.location.origin) {
    trackEvent("outbound_link_clicked", {
      destination: url.hostname.replace(/^www\./, ""),
      location,
      ...(label ? { label } : {}),
    });
    return;
  }

  trackEvent("internal_link_clicked", {
    destination: url.pathname,
    location,
    ...(label ? { label } : {}),
  });
}