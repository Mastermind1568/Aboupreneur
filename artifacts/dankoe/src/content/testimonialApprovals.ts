export type TestimonialApprovalStatus = "approved" | "pending" | "expired";

export type TestimonialApproval = {
  id: string;
  status: TestimonialApprovalStatus;
  sourceReference: string;
  approvedQuote: string;
  approvedAttribution: string;
};

/**
 * This register contains only information intended for public attribution.
 * Keep emails, messages, contracts, and other approval evidence outside the
 * website repository; sourceReference should point to that private record.
 */
export const testimonialApprovals = {
  "bitcoin-kids-nzonda": {
    id: "bitcoin-kids-nzonda",
    status: "pending",
    sourceReference: "approval-record:bitcoin-kids-nzonda",
    approvedQuote:
      "Abou turned a complex idea into a parent-friendly brand and funnel. The site is fast, trustworthy, and the ads brought real sign-ups, not vanity clicks.",
    approvedAttribution: "Nzonda Fotsing",
  },
  "asabis-niba": {
    id: "asabis-niba",
    status: "pending",
    sourceReference: "approval-record:asabis-niba",
    approvedQuote:
      "Clean design, clear story, and a funnel that turns social traffic into bookings. Exactly what we needed.",
    approvedAttribution: "Niba Emmanuel",
  },
  "miratus-ltd-mirabelle": {
    id: "miratus-ltd-mirabelle",
    status: "pending",
    sourceReference: "approval-record:miratus-ltd-mirabelle",
    approvedQuote:
      "Our inquiries went from sporadic to steady. The packages, intake forms, and ads captured the right families, not random traffic.",
    approvedAttribution: "Mirabelle Nchangwi",
  },
  "fa-law-ferdinand": {
    id: "fa-law-ferdinand",
    status: "pending",
    sourceReference: "approval-record:fa-law-ferdinand",
    approvedQuote:
      "Professional site, focused practice pages, and ads that bring qualified inquiries. Plus tracking we actually trust.",
    approvedAttribution: "Ferdinand N. Anomah",
  },
} satisfies Record<string, TestimonialApproval>;

export type TestimonialId = keyof typeof testimonialApprovals;

export function getApprovedTestimonial(id: TestimonialId) {
  const record: TestimonialApproval = testimonialApprovals[id];
  return record.status === "approved" ? record : null;
}