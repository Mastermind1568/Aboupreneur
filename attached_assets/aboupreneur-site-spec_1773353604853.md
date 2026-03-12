# aboupreneur.page — Complete Site Specification

> **Design reference:** dankoe.com (dark, minimal, single-page scroll with section breaks)
> **Tech stack:** Replit + Claude Code
> **Domain:** aboupreneur.page

---

## Design Direction

**Clone the Dan Koe DNA:**
- Dark background (#0A0A0A or similar near-black)
- Clean sans-serif typography (one display font + one body font — NOT Inter or Roboto)
- Generous whitespace between sections
- Section labels as small uppercase subtitles above main headlines
- Full-width sections, content centered in a max-width container (~1200px)
- Minimal navigation — logo left, 2–3 links right
- CTA buttons: outlined or solid with hover transitions
- Cards with subtle borders or dark surface backgrounds
- Smooth scroll between sections on homepage
- Mobile-first responsive

**Aboupreneur adaptation:**
- Two lanes visible: Professional (marketing) + Builder (agriculture/food)
- Portfolio prominent (Dan Koe doesn't have this — we add it)
- Content ecosystem visible (Farm to Funnel, Abou Speaks, Substack)
- Testimonials section (Dan Koe doesn't have this — we add it from portfolio)

---

## Pages Required

### 1. Homepage (/) — The Dan Koe Model

The homepage IS the main experience. Everything scrolls. Each section has a small label + big headline + content.

**Navigation bar (sticky):**
- Left: ABOUPRENEUR logo/wordmark
- Right: About | Portfolio | Content | Contact
- Mobile: hamburger menu

**Section 1 — Hero**
```
Label: ABOUPRENEUR
Headline: "Crafting Digital Strategies That Move People."
Subtext: Growth marketer. Builder. Agriculture & food obsessed.
CTA button: "Read Farm to Funnel →" (links to LinkedIn newsletter)
Secondary CTA: "See My Work" (scrolls to portfolio section)
```

**Section 2 — Resources (Content Channels)**
```
Label: RESOURCES
Headline: "Where I Think Out Loud"
Layout: 2x2 card grid (like Dan Koe's resources section)

Card 1 — Farm to Funnel
  Image: Custom graphic or LinkedIn preview
  Title: "Farm to Funnel — LinkedIn Newsletter"
  Description: "Marketing strategy for food and agricultural products. GTM frameworks, case studies, and real company breakdowns."
  CTA: "Read on LinkedIn →"
  Link: https://www.linkedin.com/newsletters/farm-to-funnel-7409350357295923200

Card 2 — Abou Speaks (YouTube)
  Image: YouTube channel art or custom graphic
  Title: "Abou Speaks — YouTube"
  Description: "Self-development, motivation, and elevation. Everything is possible — so long as you put your mind to it."
  CTA: "Watch on YouTube →"
  Link: https://youtube.com/@aboupreneur?si=sF-M-FLRM8BMrNRN

Card 3 — Substack
  Image: Substack branding or custom graphic
  Title: "Substack — Deep Dives"
  Description: "Long-form personal essays. Reflections on the journey — building, immigrating, growing."
  CTA: "Read on Substack →"
  Link: https://aboupreneur.substack.com/

Card 4 — Digital Marketing Services
  Image: Services graphic
  Title: "Digital Marketing Services"
  Description: "Web design, Google Ads, Meta Ads, SEO, analytics, and full-funnel strategy for brands that want to grow."
  CTA: "Let's Talk →"
  Link: /contact
```

**Section 3 — Portfolio**
```
Label: PORTFOLIO
Headline: "Selected Work"
Subtext: "Real brands. Real results. Built from strategy to execution."
Layout: Scrollable cards or grid (3 across on desktop, 1 on mobile)

Project 1 — The Bitcoin Kids
  URL: https://thebitcoinkids.com/
  Services: Web design & build, Meta & Google Ads, GA4, on-page SEO
  One-liner: "Built a trust-first website for a youth-focused learning brand."

Project 2 — Asabis
  URL: https://asabis.ca/
  Services: Web design & build, social content system, Google Ads, GA4, email capture
  One-liner: "Modern small-business site with a social-to-booking funnel."

Project 3 — Miratus Ltd
  URL: https://miratusltd.ca/
  Services: Web design & build, conversion copy, Meta & Google Ads, GA4, on-page SEO
  One-liner: "Service website for a household support agency with clear packages and intake forms."

Project 4 — FA Law Offices
  URL: https://falawoffices.com/
  Services: Web design & build
  One-liner: "Professional law-firm website with practice pages and credibility elements."

Project 5 — FA Global Energy
  URL: https://faglobalenergy.com/
  Services: Web design & build
  One-liner: "Corporate energy company site with professional presence and clear service architecture."

Each card: Screenshot/preview image + title + services tags + one-liner + "View Site →" button
```

**Section 4 — Blog / Latest Writing**
```
Label: THE BLOG
Headline: "Explore the Thinking"
Subtext: "Agriculture, food, marketing, and the journey of building."
Layout: Grid of 3–6 latest post cards (or pull from LinkedIn/Substack RSS if possible)
Each card: Featured image + title + date + "Read →" link
"Load More" or "See All →" link to /blog
```

**Section 5 — About Me (Brief)**
```
Label: ABOUT ME
Headline: "Who Is Aboupreneur?"
Subtext: "A builder obsessed with food, agriculture, and leverage."
Layout: Photo on one side, text on the other (like Dan Koe)

Photo: Professional headshot or brand photo
Bio text (short version):
  "I'm Aboubakar — a growth marketer, builder, and new Canadian from Cameroon.
  I started in business importing phones and electronics from China and the U.S.
  into Cameroon. Now I build digital strategies for brands that want to grow —
  and I'm building toward a long-term play in agriculture and food.

  I write Farm to Funnel on LinkedIn, speak on Abou Speaks (YouTube),
  and publish deeper reflections on Substack."

Social links:
  - LinkedIn: /in/aboupreneur
  - YouTube: @aboupreneur
  - Substack: aboupreneur.substack.com

CTA: "Read My Full Story →" (links to /about)
```

**Section 6 — Testimonials**
```
Label: TESTIMONIALS
Headline: "What Clients Say"
Layout: Carousel or grid of testimonial cards

Testimonial 1 — Nzonda Fotsing, Founder (The Bitcoin Kids)
  "Abou turned a complex idea into a parent-friendly brand and funnel.
  The site is fast, trustworthy, and the ads brought real sign-ups — not vanity clicks."

Testimonial 2 — Mirabelle Nchangwi, Director (Miratus Ltd)
  "Our inquiries went from sporadic to steady. The packages, intake forms,
  and ads captured the right families — not random traffic."

Testimonial 3 — Niba Emmanuel, Owner (Asabis)
  "Clean design, clear story, and a funnel that turns social traffic into bookings.
  Exactly what we needed."

Testimonial 4 — Ferdinand N. Anomah, Managing Partner (FA Law Offices & FA Global Energy)
  "Professional sites, focused practice pages, and ads that bring
  qualified inquiries — plus tracking we actually trust."
```

**Section 7 — Footer**
```
Layout: Dark surface, full width

Left column:
  ABOUPRENEUR logo/wordmark
  Tagline: "Crafting Digital Strategies That Move People."

Middle column:
  Quick links: Home | About | Portfolio | Blog | Contact

Right column:
  Social links (icons):
    - LinkedIn
    - YouTube
    - Substack

Bottom bar:
  Email: hello@aboupreneur.page
  © 2026 Aboupreneur. All rights reserved.

Optional: Newsletter signup CTA (like Dan Koe's footer)
  "Stay in the loop."
  Email input + Subscribe button
```

---

### 2. About Page (/about)

Full story. This is where the Aboupreneur narrative lives.

**Sections:**
1. Hero — "The Story Behind Aboupreneur"
2. The Origin — importing phones from China/US into Cameroon
3. The Pivot — transitioning to digital marketing
4. The Vision — agriculture, food, and building wealth through leverage
5. What I Do Now — growth marketing, content creation, multiple ventures
6. Skills & Services grid
7. Certifications in progress (Google Analytics, HubSpot suite, etc.)
8. CTA — "Let's build something together" → /contact

---

### 3. Portfolio Page (/portfolio)

All 5 projects displayed with more detail than the homepage preview.

**Layout:** Full-width project cards, each with:
- Large screenshot/preview
- Project name + client
- Challenge / what I built / results
- Services tags
- "Visit Site →" external link
- Testimonial quote from that client (pulled from portfolio.docx)

**Projects in order:**
1. The Bitcoin Kids — thebitcoinkids.com
2. Asabis — asabis.ca
3. Miratus Ltd — miratusltd.ca
4. FA Law Offices — falawoffices.com
5. FA Global Energy — faglobalenergy.com

---

### 4. Blog/Content Page (/blog)

Hub page linking to all content channels.

**Options (choose based on technical feasibility):**
- Option A: Embed or pull RSS from LinkedIn/Substack
- Option B: Static links to published pieces + manually updated
- Option C: Full blog with markdown posts (best for SEO long-term)

**Sections:**
1. Featured post (latest Farm to Funnel piece)
2. All posts grid with filter by channel (LinkedIn / Substack / All)
3. Links to subscribe on each platform

---

### 5. Contact Page (/contact)

**Sections:**
1. Headline: "Let's Talk"
2. Subtext: "If you'd like to discuss a project or learn how I can help your brand grow, drop me a message."
3. Contact form:
   - Name
   - Email
   - Company/Brand (optional)
   - Message
   - Submit button
4. Direct contact info:
   - Email: hello@aboupreneur.page
   - LinkedIn: /in/aboupreneur
5. Location mention: Based in Alberta, Canada

---

## External Links to Embed/Connect

| Platform | URL | Where It Appears |
|----------|-----|------------------|
| YouTube | https://youtube.com/@aboupreneur?si=sF-M-FLRM8BMrNRN | Resources card, About section, Footer |
| LinkedIn Newsletter | https://www.linkedin.com/newsletters/farm-to-funnel-7409350357295923200 | Resources card, Blog section, Footer |
| Substack | https://aboupreneur.substack.com/ | Resources card, Blog section, Footer |
| LinkedIn Profile | linkedin.com/in/aboupreneur | About section, Footer, Contact page |

---

## Services to List (About + Homepage)

From the portfolio:
- Brand Strategy
- Web Design & Development
- Search & Social Advertising (Google Ads, Meta, LinkedIn)
- Social Media Strategy & Management
- Content Marketing & Copywriting
- Email Marketing & Automation
- Analytics & Reporting (GA4, Looker)
- SEO (On-Page)

---

## Assets Needed Before Build

1. **Logo** — Aboupreneur wordmark or icon (user mentioned attached logo)
2. **Headshot/brand photo** — For About section on homepage and About page
3. **Project screenshots** — 5 sites (can be auto-captured via screenshot tool)
4. **Favicon** — Derived from logo
5. **Open Graph image** — For social sharing (auto-generated or custom)
6. **Brand colors** — To be defined (dark bg, accent color TBD)

---

## Technical Notes for Replit + Claude Code Build

- **Framework recommendation:** Next.js (App Router) or Astro for static site with great SEO
- **Styling:** Tailwind CSS (matches Dan Koe's clean utility approach)
- **Deployment:** Replit deployment or connect to Vercel/Netlify
- **Domain:** aboupreneur.page (connect via DNS after deployment)
- **Analytics:** GA4 (Aboupreneur already uses this across projects)
- **Contact form:** Formspree, EmailJS, or Resend for serverless form handling
- **Images:** Next.js Image component or manual optimization
- **SEO:** Meta tags, Open Graph, structured data on every page
- **Performance:** Lighthouse 90+ target, lazy loading, optimized images

---

## Page Count Summary

| Page | Route | Priority |
|------|-------|----------|
| Homepage | / | Must-have (Phase 1) |
| About | /about | Must-have (Phase 1) |
| Portfolio | /portfolio | Must-have (Phase 1) |
| Contact | /contact | Must-have (Phase 1) |
| Blog | /blog | Nice-to-have (Phase 2) |

**Total: 5 pages for launch. Homepage carries the most weight.**

---

*Spec built March 2026. Ready for design mockup and build.*
