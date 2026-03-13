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
- Center/Right: About | Portfolio | Content | Contact
- Far Right: Social icons (LinkedIn, YouTube, Substack) — icon-only, subtle
- Mobile: hamburger menu with social buttons at bottom of slide-out

**Section 1 — Hero**
```
Label: ABOUPRENEUR
Headline: "Crafting Digital Strategies That Move People."
Subtext: Growth marketer. Web builder. AI automation strategist. Agriculture & food obsessed.
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
  Title: "Digital Marketing & AI Services"
  Description: "Web design, AI-built websites, automated workflows, Google Ads, Meta Ads, SEO, analytics, and full-funnel growth strategy."
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

**Section 5 — About Me (Homepage Brief)**
```
Label: ABOUT ME
Headline: "Who Is Aboupreneur?"
Subtext: "Just a builder obsessed with food, agriculture, and leverage."
Layout: Photo on left, text + social buttons on right (like Dan Koe)

Photo: Professional headshot or brand photo

Bio text:
  "Hey, I'm Aboubakar.

  I'm a growth marketer, web builder, and AI automation strategist
  based in Alberta, Canada — originally from Cameroon.

  Before funnels and frameworks, I was importing phones and electronics
  from China and the U.S. into Cameroon. That was the first real
  education in positioning, margins, and moving product. No ad platform
  required — just understanding what people want and figuring out how
  to get it to them.

  Now I build websites, run digital campaigns, and design AI-powered
  workflows for brands that want to grow. The long game? Agriculture
  and food — building wealth through the most durable industries on earth,
  with marketing as the leverage."

Social buttons row (icon + label, each as a styled button):
  [LinkedIn] → https://www.linkedin.com/in/aboupreneur
  [YouTube]  → https://youtube.com/@aboupreneur
  [Substack] → https://aboupreneur.substack.com/

CTA button: "Read My Full Story →" (links to /about)
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
  Social link buttons (icon-only, horizontal):
    LinkedIn → https://www.linkedin.com/in/aboupreneur
    YouTube  → https://youtube.com/@aboupreneur
    Substack → https://aboupreneur.substack.com/

Bottom bar:
  Email: hello@aboupreneur.page
  © 2026 Aboupreneur. All rights reserved.

Newsletter signup CTA (like Dan Koe's footer):
  "Stay in the loop."
  Email input + Subscribe button
```

---

### 2. About Page (/about) — The Full Story

This is where the Aboupreneur narrative lives in full. Rich, personal, and real.

**Section 1 — Hero**
```
Label: ABOUT
Headline: "The Story Behind Aboupreneur"
Subtext: "From importing phones in Cameroon to building digital empires in Canada."
Background: Dark with subtle texture or gradient
```

**Section 2 — The Origin Story**
```
Label: WHERE IT STARTED
Headline: "Hustle Before Funnels"

Copy:
  "Before WordPress, before Google Ads, before growth frameworks —
  the education started on the ground.

  I grew up in Cameroon, where entrepreneurship isn't a career choice —
  it's survival. My first real business was importing phones and electronics
  from China and the United States and selling them in Cameroon. No ad platform.
  No CRM. No analytics dashboard. Just understanding what people want,
  figuring out how to source it, negotiating margins, and moving product.

  That was the first masterclass in positioning, demand, and distribution.
  Everything I do now in digital marketing? It started there — reading
  markets, not dashboards."
```

**Section 3 — The Pivot**
```
Label: THE TRANSITION
Headline: "From Physical Products to Digital Strategy"

Copy:
  "The move to Canada changed everything. New country. New language dynamics.
  New market. But the instinct was the same — find what people need, build
  the bridge to get it to them.

  The transition from physical product sales to digital marketing was natural.
  Same instinct, bigger toolkit. I started learning web design, then SEO,
  then paid ads, then analytics, then automation. Each skill unlocked
  the next. Each client project became a live laboratory.

  I didn't just collect certificates. Every certification became a real
  project, a case study, a portfolio piece, and proof of work. That rule
  hasn't changed."

Visual element: Timeline or milestone markers showing the progression
  Cameroon → Import/Export → Canada → Web Design → Digital Marketing → AI Automation
```

**Section 4 — What I Do Now**
```
Label: THE PRESENT
Headline: "Growth Marketer. Web Builder. AI Automation Strategist."

Copy:
  "Today, I operate at the intersection of three things: digital marketing
  strategy, website development, and AI-powered business automation.

  For clients, that means I don't just build a website and walk away.
  I build the site, set up the ads, wire the analytics, design the funnel,
  and automate the follow-up — so the whole system works while you sleep.

  I've built and launched websites for brands across healthcare staffing,
  legal services, energy, education, and small business. I've run Google Ads
  and Meta campaigns that drove real inquiries — not vanity metrics. And I've
  designed AI workflows using tools like Claude, n8n, and HubSpot that
  replace hours of manual work with intelligent automation.

  I'm also a member of the Canadian Marketing Association (CMA) and CAMA,
  actively building toward elite growth marketer status through a rigorous
  certification path across Google, HubSpot, and advanced platforms."

Services grid (2x5 or 3x4 layout):
  - Web Design & Development (WordPress + AI-built sites)
  - Website Building with AI Tools (Replit, Claude Code, Cursor, Lovable)
  - AI Workflow Automation (n8n, Claude, HubSpot, Make)
  - Search Advertising (Google Ads)
  - Social Advertising (Meta Ads, LinkedIn Ads)
  - SEO & On-Page Optimization
  - Content Marketing & Copywriting
  - Email Marketing & Automation
  - Analytics & Reporting (GA4, Looker)
  - Brand Strategy & Positioning
  - CRM Setup & Management (HubSpot)
  - Revenue Operations (RevOps)
```

**Section 5 — The Vision**
```
Label: THE LONG GAME
Headline: "Agriculture. Food. Leverage."

Copy:
  "Here's what most people don't know: everything I'm building points
  toward one destination — agriculture and food.

  Not because it's trendy. Because it's the most durable way to build
  and protect wealth. People will always eat. Markets will always need
  food. And the agricultural sector — especially in Africa — is massively
  underserved when it comes to modern marketing and digital strategy.

  The plan is simple: use content as leverage to build the network,
  use marketing skills as the value engine, and use everything together
  to launch an agriculture-focused digital marketing agency serving
  SMEs across Africa — starting with South Africa, Kenya, Ethiopia,
  and Ghana.

  Farm to Funnel on LinkedIn is the public proof-of-work. Every post,
  every case study, every framework I share is a brick in that foundation.

  Beyond the agency, I'm building toward real agricultural ventures —
  a fish business (launching 2027), a grain and corn operation in Cameroon,
  and eventually, a farm. Marketing is the leverage. Agriculture is the legacy."
```

**Section 6 — The Content Ecosystem**
```
Label: WHERE I SHOW UP
Headline: "Two Lanes. One Brand."

Copy:
  "I operate in two lanes — the professional and the personal.

  The professional lane is Farm to Funnel — my LinkedIn newsletter where
  I break down marketing strategy for food and agricultural products.
  GTM frameworks, company case studies (Oatly, John Deere, Beyond Meat),
  and real strategic thinking. This is the client acquisition engine.

  The personal lane is Abou Speaks — my YouTube channel and Substack
  where I talk about self-development, motivation, and elevation. The
  message is simple: everything is possible. Anything is possible.
  So long as you put your mind to it and you never give up."

Content channel cards (with buttons):
  Card 1: Farm to Funnel — "Marketing strategy for ag & food"
    Button: [Read on LinkedIn →]
    Link: https://www.linkedin.com/newsletters/farm-to-funnel-7409350357295923200

  Card 2: Abou Speaks — "Self-development & elevation"
    Button: [Watch on YouTube →]
    Link: https://youtube.com/@aboupreneur

  Card 3: Substack — "Deep dives & personal essays"
    Button: [Read on Substack →]
    Link: https://aboupreneur.substack.com/
```

**Section 7 — Certifications & Learning**
```
Label: THE CRAFT
Headline: "Always Learning. Always Building."

Certification badges/cards:
  - Google Analytics Certification (in progress)
  - HubSpot Inbound Marketing Certification
  - HubSpot Digital Marketing Certification
  - HubSpot Content Marketing Certification
  - HubSpot SEO Certification
  - Google Ads Measurement Certification
  - HubSpot Email Marketing Certification
  - HubSpot Marketing Hub Software Certification
  - HubSpot Revenue Operations Certification

Learning platforms:
  - Jelly Academy (PR & marketing fundamentals)
  - CXL (Advanced growth marketing)
  - Google Skillshop (Analytics & Ads)
  - HubSpot Academy (Full marketing stack)

Rule displayed as a quote callout:
  "No certificate without application. Every course becomes a project,
  a case study, and a portfolio piece. Mastery over collection."
```

**Section 8 — Creators I Study**
```
Label: INFLUENCES
Headline: "People Who Sharpen My Thinking"

4 cards (name + what I take from them):
  Simon Sinek — Purpose-first thinking. Calm authority. Simplicity.
  Dan Koe — Content systems. Newsletter-as-cornerstone. Depth-first.
  Jonathan Martinez — Builder mindset. AI workflows. Generous teaching.
  Alex Hormozi — Directness. No-fluff value. Business as a craft.
```

**Section 9 — Social Buttons Bar**
```
Full-width row of social link buttons (styled, with icons):
  [LinkedIn]  → https://www.linkedin.com/in/aboupreneur
  [YouTube]   → https://youtube.com/@aboupreneur
  [Substack]  → https://aboupreneur.substack.com/
  [Email]     → mailto:hello@aboupreneur.page
```

**Section 10 — CTA**
```
Headline: "Let's Build Something Together"
Subtext: "Whether you need a website, a campaign, or a full growth strategy —
  I'd love to hear what you're working on."
CTA button: "Get In Touch →" → /contact
```

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
2. Subtext: "Whether you need a website, a campaign, an AI workflow, or a full growth strategy — I'd love to hear what you're working on."
3. Contact form:
   - Name
   - Email
   - Company/Brand (optional)
   - What do you need help with? (dropdown: Website, Ads/Marketing, AI Automation, Strategy, Other)
   - Message
   - Submit button
4. Direct contact info:
   - Email: hello@aboupreneur.page
   - Location: Based in Alberta, Canada
5. Social buttons row (icon + label):
   - [LinkedIn] → https://www.linkedin.com/in/aboupreneur
   - [YouTube] → https://youtube.com/@aboupreneur
   - [Substack] → https://aboupreneur.substack.com/
   - [Email] → mailto:hello@aboupreneur.page

---

## External Links to Embed/Connect

| Platform | URL | Where It Appears |
|----------|-----|------------------|
| YouTube | https://youtube.com/@aboupreneur | Resources card, About section, Footer, Social bar |
| LinkedIn Newsletter | https://www.linkedin.com/newsletters/farm-to-funnel-7409350357295923200 | Resources card, Blog section, Footer |
| LinkedIn Profile | https://www.linkedin.com/in/aboupreneur | About section, Footer, Contact page, Social bar |
| Substack | https://aboupreneur.substack.com/ | Resources card, Blog section, Footer, Social bar |
| Email | mailto:hello@aboupreneur.page | Contact page, Footer, Social bar |

---

## Social Buttons — Global Component

Styled buttons with platform icons that appear across the site. Each button has the platform icon + label text, with hover effects matching the dark theme.

**Button style:** Outlined (border: 1px solid rgba(255,255,255,0.2)), rounded corners, icon + label, hover brightens border and adds subtle glow in platform brand color.

**Platform brand colors for hover accents:**
- LinkedIn: #0A66C2
- YouTube: #FF0000
- Substack: #FF6719

**Social buttons appear in these locations:**

1. **Navigation bar** (icon-only, top right alongside nav links)
   - LinkedIn icon → https://www.linkedin.com/in/aboupreneur
   - YouTube icon → https://youtube.com/@aboupreneur
   - Substack icon → https://aboupreneur.substack.com/

2. **Homepage — About Me section** (icon + label buttons, horizontal row)
   - [LinkedIn] → https://www.linkedin.com/in/aboupreneur
   - [YouTube] → https://youtube.com/@aboupreneur
   - [Substack] → https://aboupreneur.substack.com/

3. **About page — Social buttons bar** (full-width, icon + label, Section 9)
   - [LinkedIn] → https://www.linkedin.com/in/aboupreneur
   - [YouTube] → https://youtube.com/@aboupreneur
   - [Substack] → https://aboupreneur.substack.com/
   - [Email] → mailto:hello@aboupreneur.page

4. **Contact page** (icon + label buttons alongside the contact form)
   - [LinkedIn] → https://www.linkedin.com/in/aboupreneur
   - [YouTube] → https://youtube.com/@aboupreneur
   - [Substack] → https://aboupreneur.substack.com/
   - [Email] → mailto:hello@aboupreneur.page

5. **Footer** (icon-only, horizontal row)
   - LinkedIn icon → https://www.linkedin.com/in/aboupreneur
   - YouTube icon → https://youtube.com/@aboupreneur
   - Substack icon → https://aboupreneur.substack.com/

6. **Mobile menu** (icon + label, stacked vertically at bottom of menu)
   - [LinkedIn] → https://www.linkedin.com/in/aboupreneur
   - [YouTube] → https://youtube.com/@aboupreneur
   - [Substack] → https://aboupreneur.substack.com/

All social links open in new tab (target="_blank" rel="noopener noreferrer").

---

## Services to List (About + Homepage)

From the portfolio + expanded capabilities:
- Brand Strategy & Positioning
- Web Design & Development (WordPress, custom builds)
- Website Building with AI Tools (Replit, Claude Code, Cursor, Lovable)
- AI Workflow Automation & Processes (n8n, Claude AI, HubSpot, Make)
- Search Advertising (Google Ads — Search, Display, Measurement)
- Social Advertising (Meta Ads, LinkedIn Ads)
- Social Media Strategy & Management
- Content Marketing & Copywriting
- Email Marketing & Automation
- SEO & On-Page Optimization
- Analytics & Reporting (GA4, Looker)
- CRM Setup & Management (HubSpot)
- Revenue Operations (RevOps)

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
