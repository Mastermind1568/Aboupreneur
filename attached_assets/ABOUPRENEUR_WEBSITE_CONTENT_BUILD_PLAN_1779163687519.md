# ABOUPRENEUR.PAGE — WEBSITE CONTENT BUILD PLAN
### Replit Handoff Document | Version 1.0

---

## BRAND BRIEF (READ THIS FIRST)

**Brand name:** ABOUPRENEUR  
**Person:** Aboubakar Moussa  
**Domain:** aboupreneur.page  
**Primary audience:** The 22-year-old ambitious African — broke, building from nothing, looking for a system and a person to believe in  
**Brand thesis:** Sovereignty is not given. It is built — layer by layer, skill by skill, coin by coin, acre by acre.  
**Unifying framework:** The Sovereignty Loop — MAKE (digital leverage) → MULTIPLY (sound money) → PROTECT (physical assets)  
**Primary CTA:** Brand awareness first. Visitors should understand who Aboupreneur is and remember him.  
**Secondary CTA:** Subscribe to the newsletter / follow the ecosystem  

**Tagline:** Build. Stack. Sovereign.  
**Extended description:** Building sovereignty from zero — the system for those who start with nothing and refuse to stay dependent.

---

## DESIGN SYSTEM (NON-NEGOTIABLE)

```
Tech stack:   Next.js 14 (App Router) + Tailwind CSS + Vercel
Dev env:      Replit
Font:         Heavy tight-tracking sans-serif OR monospace for headers
              Clean readable sans for body (Inter or similar)

Colors:
  Background primary:   #0A0A0A (near-black)
  Background secondary: #FFFFFF (white)
  Accent:               #F2A900 (Bitcoin orange)
  Text on dark:         #FFFFFF
  Text on light:        #0A0A0A
  Muted text:           #888888

Border radius:  0 — rounded-none on EVERYTHING (cards, buttons, inputs, images)
Border style:   1px solid #F2A900 for accents, 1px solid #222222 for neutral
Letter spacing: -0.03em to -0.04em on all display headers
Line height:    1.05 on large headers, 1.6 on body

Tailwind config additions:
  borderRadius: { DEFAULT: '0', none: '0' }
  colors: { bitcoin: '#F2A900' }
```

**Design reference:** Dan Koe (dankoe.com) — brutalist, editorial, high-contrast, no decoration.  
**Rule:** If it looks like a SaaS landing page, strip it back. This is a personal brand, not a product.

---

## SITE ARCHITECTURE

```
aboupreneur.page/           → Home
aboupreneur.page/story      → The Story
aboupreneur.page/ecosystem  → The Ecosystem
aboupreneur.page/writing    → Writing
```

---

## GLOBAL COMPONENTS

### Navigation (all pages)

```
Background: #0A0A0A
Height: 64px
Padding: 0 40px

Left:   ABOUPRENEUR  [monospace or heavy sans, #FFFFFF, letter-spacing: 0.04em]
Center: STORY  |  ECOSYSTEM  |  WRITING  [uppercase, #888888, hover: #FFFFFF]
Right:  [THE BLUEPRINT]  [button: border 1px #F2A900, text #F2A900, 
         bg transparent, hover: bg #F2A900, text #0A0A0A — links to /ecosystem]

Mobile: hamburger menu, full-screen overlay, same dark bg
```

### Footer (all pages)

```
Background: #0A0A0A
Padding: 60px 40px

Row 1: ABOUPRENEUR  |  Build. Stack. Sovereign.
Row 2: STORY · ECOSYSTEM · WRITING  [#888888, small]
Row 3: Social icons — LinkedIn · Instagram · YouTube · X
Row 4: © Aboubakar Moussa — All rights reserved
        [#888888, smallest text]

Accent line: 1px top border in #F2A900 at very top of footer
```

---

## PAGE 1: HOME ( / )

**Purpose:** Arrest attention. State the thesis. Make the right person feel seen. Give them a next step.  
**SEO title:** ABOUPRENEUR | Build. Stack. Sovereign.  
**Meta description:** Aboubakar Moussa — entrepreneur, agribusiness strategist, and sound money advocate. The Sovereignty Loop: Make. Multiply. Protect. Built for those who start with nothing.  

---

### Section 1.1 — HERO

```
Background: #0A0A0A
Min-height: 100vh
Layout: Centered, full-bleed
```

**Top label (small, above headline):**
```
ABOUBAKAR MOUSSA  ·  ENTREPRENEUR  ·  ALBERTA, CANADA
[#F2A900, uppercase, font-size: 13px, letter-spacing: 0.12em]
```

**Headline (display — very large, 80–96px, tight tracking):**
```
Line 1: Sovereignty  [#FFFFFF]
Line 2: isn't given.  [#FFFFFF]
Line 3: It's built.   [#F2A900]
```

**Sub-copy (below headline, 18–20px, #888888, max-width: 560px, centered):**
```
From Cameroon to Canada. From a teenage trader to a systems architect.
I built the blueprint I wish I had — and I'm sharing every layer of it here.
```

**CTA row:**
```
Button 1 (primary):  [ READ MY STORY → ]
  Border: 1px solid #F2A900 | Text: #F2A900 | Hover: bg #F2A900, text #0A0A0A
  
Button 2 (ghost):    [ ENTER THE ECOSYSTEM ]
  Border: 1px solid #333333 | Text: #888888 | Hover: border #FFFFFF, text #FFFFFF
  
Gap between buttons: 16px
```

**Scroll indicator:**
```
Thin animated line pointing down, #F2A900, positioned bottom-center of hero
```

---

### Section 1.2 — SIGNAL BAR

```
Background: #F2A900
Padding: 18px 40px
Overflow: hidden — horizontal scrolling ticker on mobile
```

**Content (single line, repeating if needed):**
```
Text: #0A0A0A | uppercase | letter-spacing: 0.1em | font-weight: 700 | font-size: 13px

"SOUND MONEY IS NOT OPTIONAL  ·  PHYSICAL ASSETS ANCHOR DIGITAL WEALTH  ·  
THE SOVEREIGN INDIVIDUAL IS BUILT, NOT BORN  ·  SKILLS BEFORE CAPITAL  ·  
BUILD IN PUBLIC, PROTECT IN PRIVATE"
```

---

### Section 1.3 — THE MAN BEHIND THE BRAND

```
Background: #FFFFFF
Padding: 100px 40px
Layout: Two columns — text left (55%), image right (45%)
        Stack single column on mobile
```

**Section label (above heading):**
```
THE ORIGIN  [#F2A900, uppercase, 12px, letter-spacing: 0.12em]
```

**Heading:**
```
"I didn't read about building from zero.
I lived it."
[#0A0A0A | 48–56px | tight tracking]
```

**Body copy — 3 paragraphs:**

Paragraph 1 (The trader):
```
Before I understood systems, I understood arbitrage. As a teenager in Cameroon, 
I was sourcing electronics from China, the USA, and Canada — moving goods across 
markets that most people thought were disconnected. That's where I learned that 
money flows toward whoever understands the gap between two prices.
```

Paragraph 2 (The Bitcoin conviction):
```
In 2016, when Bitcoin first entered African markets, I was there. I became a 
liquidity bridge — a middleman in a network that didn't yet have infrastructure. 
I watched currencies fluctuate violently. I watched savings evaporate. I developed 
a conviction about sound money that no textbook could have given me: hard assets 
preserve what soft systems destroy. I've been building that thesis ever since.
```

Paragraph 3 (The Canada chapter):
```
The move to Canada wasn't a coincidence. I came to study agribusiness at Lakeland 
College — to anchor digital wealth in the most enduring asset class there is: land 
and food systems. Everything I build now — the writing, the platforms, the ventures — 
runs on a single framework. Make money with skills. Multiply it with sound money. 
Protect it with physical assets. I call it the Sovereignty Loop.
```

**CTA below copy:**
```
[ READ THE FULL STORY → ]  [text link, #F2A900, hover underline — links to /story]
```

**Image placeholder (right column):**
```
Professional photo of Aboubakar Moussa
Aspect ratio: 4:5 or 3:4 (portrait)
Treatment: High-contrast, black and white preferred OR desaturated
Border: 0 (no border radius, no shadow)
If photo not yet ready: solid #111111 placeholder with 
  "PHOTO: Aboubakar Moussa — professional portrait" label inside in #F2A900
```

---

### Section 1.4 — THE SOVEREIGNTY LOOP

```
Background: #0A0A0A
Padding: 100px 40px
```

**Section label:**
```
THE FRAMEWORK  [#F2A900, uppercase, 12px, letter-spacing: 0.12em]
```

**Heading:**
```
"Three phases. One system.
No shortcuts."
[#FFFFFF | 48–56px | tight tracking]
```

**Sub-copy:**
```
This isn't theory. It's the exact sequence I followed — and the one 
I teach through everything I build.
[#888888 | 18px | max-width: 540px]
```

**Three cards — horizontal row on desktop, stacked on mobile:**
```
Card layout: border-left 3px solid #F2A900 | bg #111111 | padding 32px | rounded-none

Card 1 — MAKE
  Label:   01 / MAKE  [#F2A900, 12px, tracking-widest]
  Title:   "Digital leverage"  [#FFFFFF, 28px, tight tracking]
  Body:    "Skills generate free cash flow. Web development, AI automation, 
            performance marketing, SEO systems. The stack that keeps producing 
            whether you're awake or asleep."
           [#888888, 15px, line-height 1.7]
  Metric:  → Web · AI · Marketing  [#F2A900, 13px, at bottom of card]

Card 2 — MULTIPLY
  Label:   02 / MULTIPLY  [#F2A900, 12px, tracking-widest]
  Title:   "Sound money"  [#FFFFFF, 28px, tight tracking]
  Body:    "Bitcoin accumulation as a philosophical stance, not speculation. 
            The exit ramp from fiat erosion. Conviction built over years of 
            watching currencies collapse and digital scarcity hold."
           [#888888, 15px, line-height 1.7]
  Metric:  → Store of value · Long-term conviction  [#F2A900, 13px, at bottom]

Card 3 — PROTECT
  Label:   03 / PROTECT  [#F2A900, 12px, tracking-widest]
  Title:   "Physical assets"  [#FFFFFF, 28px, tight tracking]
  Body:    "Agribusiness, agricultural land, and food infrastructure. 
            The multi-generational anchor that outlasts any market cycle. 
            Roots that no policy can print away."
           [#888888, 15px, line-height 1.7]
  Metric:  → Land · Agribusiness · Legacy  [#F2A900, 13px, at bottom]
```

---

### Section 1.5 — THE ECOSYSTEM TEASER

```
Background: #FFFFFF
Padding: 100px 40px
```

**Section label:**
```
THE ECOSYSTEM  [#F2A900, uppercase, 12px, letter-spacing: 0.12em]
```

**Heading:**
```
"Everything I build
points to one outcome."
[#0A0A0A | 48px | tight tracking]
```

**Product cards — 2x2 grid on desktop, stacked on mobile:**
```
Card layout: border 1px solid #E5E5E5 | bg #FFFFFF | padding 32px | rounded-none
             hover: border-color #F2A900

Card 1 — MONEYVERSE
  Tag:   [SOUND MONEY]  [bg #F2A900, text #0A0A0A, 11px, uppercase, padding 4px 10px]
  Title: "Moneyverse"  [#0A0A0A, 22px, font-weight 700]
  Body:  "The institutional-grade Bitcoin education platform. 
          11 modules on DCA, macroeconomics, and wealth preservation 
          for the entrepreneur who refuses to stay in fiat."
         [#888888, 14px]
  Link:  moneyverse.network →  [#F2A900, 13px]

Card 2 — MINDBLOOM
  Tag:   [WRITING]  [bg #0A0A0A, text #F2A900, 11px, uppercase, padding 4px 10px]
  Title: "Mindbloom"  [#0A0A0A, 22px, font-weight 700]
  Body:  "The Substack writing engine. Deep frameworks on execution, 
          uncompromised standards, and the mindset behind building 
          from absolute zero."
         [#888888, 14px]
  Link:  aboupreneur.substack.com →  [#F2A900, 13px]

Card 3 — FARM TO FUNNEL
  Tag:   [AGRIBUSINESS]  [bg #0A0A0A, text #FFFFFF, 11px, uppercase, padding 4px 10px]
  Title: "Farm to Funnel"  [#0A0A0A, 22px, font-weight 700]
  Body:  "Newsletter bridging agribusiness communication and digital 
          marketing systems. For the operator who wants to grow 
          what they've built."
         [#888888, 14px]
  Link:  Subscribe →  [#F2A900, 13px]

Card 4 — ABOUPRENEUR CONSULTING
  Tag:   [CONSULTING]  [bg #E5E5E5, text #0A0A0A, 11px, uppercase, padding 4px 10px]
  Title: "Consulting"  [#0A0A0A, 22px, font-weight 700]
  Body:  "Systems architecture, AI automation, and web pipelines 
          for operators who want infrastructure, not just tactics. 
          Built for ambitious builders."
         [#888888, 14px]
  Link:  Work with me →  [#F2A900, 13px]
```

**CTA below grid:**
```
[ EXPLORE THE FULL ECOSYSTEM → ]  [text link, #0A0A0A, hover #F2A900 — links to /ecosystem]
```

---

### Section 1.6 — LATEST WRITING

```
Background: #0A0A0A
Padding: 80px 40px
```

**Section label + heading:**
```
Label:   FROM THE MIND  [#F2A900, uppercase, 12px]
Heading: "The signal."  [#FFFFFF, 40px, tight tracking]
Sub:     "Not noise."   [#F2A900, 40px, tight tracking]
```

**Three post cards — horizontal row:**
```
Card layout: border-bottom 1px solid #222222 | padding 24px 0 | bg transparent

Each card:
  Date:    [e.g., MAY 2025]  [#888888, 12px, uppercase]
  Title:   [post title]  [#FFFFFF, 20px, font-weight 500]
  Excerpt: [1 sentence teaser]  [#888888, 14px]
  Arrow:   →  [#F2A900]

Pull 3 most recent posts from Substack RSS or API.
Fallback: hardcode 3 posts manually until feed is connected.
```

**CTA:**
```
[ READ EVERYTHING → ]  [border 1px solid #333333, text #888888, 
                         hover border #F2A900 text #F2A900 — links to /writing]
```

---

### Section 1.7 — NEWSLETTER CTA (BOTTOM OF HOME)

```
Background: #F2A900
Padding: 100px 40px
Text color: #0A0A0A
```

**Heading:**
```
"You found this page
for a reason."
[#0A0A0A | 56–64px | tight tracking | font-weight 800]
```

**Sub-copy:**
```
If you're building from zero and refusing to accept dependence as permanent —
the weekly dispatch is where the real work happens.
No noise. No motivational garbage. Just the system, live.
[#0A0A0A | 18px | max-width: 520px]
```

**Email capture form:**
```
Input:   [Your email address]  
         [bg #0A0A0A, text #FFFFFF, border 0, padding 16px 20px, 
          rounded-none, width ~320px]
Button:  [JOIN THE SIGNAL]  
         [bg #0A0A0A, text #F2A900, font-weight 700, padding 16px 24px, 
          hover bg #FFFFFF text #0A0A0A, rounded-none]
Layout:  side by side on desktop, stacked on mobile

Under form: "No spam. No fluff. Unsubscribe anytime."
[#0A0A0A, opacity 0.6, 12px]
```

---

## PAGE 2: THE STORY ( /story )

**Purpose:** The full narrative. Long-form editorial. This is the brand bible in storytelling form. Make the right reader feel like they've found someone who lived what they're living.  
**SEO title:** The Story | ABOUPRENEUR  
**Meta description:** From Cameroon to Canada. The journey from global trader to Bitcoin conviction to agribusiness — and the system that connects it all.  

---

### Section 2.1 — Story Hero

```
Background: #0A0A0A
Padding: 120px 40px
Max-width: 800px — centered (editorial layout, not full bleed)
```

**Label:**
```
THE STORY OF ABOUPRENEUR  [#F2A900, uppercase, 12px, letter-spacing 0.14em]
```

**Headline:**
```
"From Zero to System:
The Architecture of a Sovereign Life"
[#FFFFFF | 64–72px | tight tracking | font-weight 800]
```

**Byline:**
```
By Aboubakar Moussa  ·  Written in public
[#888888 | 14px | italic]
```

**Opening quote block:**
```
"Most people are taught to earn, spend, and survive.
Nobody taught me the system. So I built it."
[border-left 3px solid #F2A900 | padding-left 24px | #F2A900 | 22px | italic]
```

---

### Section 2.2 — Act I: The Trader

```
Background: #FFFFFF → transition to dark mid-page (or stay on cream #F9F9F6 for readability)
Max-width editorial column: 680px centered
Padding: 80px 40px
```

**Chapter label:**
```
ACT I — THE TRADER  [#F2A900, uppercase, 12px, letter-spacing 0.12em]
```

**Heading:**
```
"I didn't wait for permission
to enter the market."
[#0A0A0A | 44px]
```

**Body copy:**
```
Before I understood frameworks, I understood friction. Cameroon had needs 
that suppliers in China and Canada hadn't bothered to meet efficiently. 
The gap between what things cost to source and what people were willing 
to pay at home — that was my first classroom.

I started moving electronics. Phones, accessories, components. Sourcing 
from Guangzhou and Toronto, moving volume across borders most people 
treated as walls. I learned that markets don't care where you're from. 
They only care whether you can solve the gap.

That business taught me three things I've never forgotten: markets reward 
preparation over luck, information is always the real asset, and the 
person who controls the logistics controls the margin.
```

---

### Section 2.3 — Act II: The Conviction

```
Same editorial layout, continuing
```

**Chapter label:**
```
ACT II — THE CONVICTION  [#F2A900, uppercase, 12px]
```

**Heading:**
```
"In 2016, Bitcoin arrived in Africa.
I was already waiting."
[#0A0A0A | 44px]
```

**Body copy:**
```
Most people in the West discovered Bitcoin in 2017, when the price 
made headlines. I found it earlier — during the year it began penetrating 
African markets. And what I saw was not a speculative instrument. 
I saw a lifeline.

I became a liquidity bridge. A middleman in a network that had no 
established infrastructure. I watched the dollar fluctuate from 500 to 
580 francs in the same week. I watched people's savings quietly evaporate 
through currency devaluation they didn't understand and couldn't fight. 
I understood it because I was moving money across borders every week.

The insight was simple: soft money is a tax on the productive. Every 
currency printed in excess is a transfer of wealth from those who saved 
to those who issued. Bitcoin didn't solve every problem. But it was the 
first instrument I encountered that a government couldn't print more of.

I didn't trade in and out. I built conviction. I held through the bear 
markets. I liquidated a small fraction at $14,000 — enough to buy my 
first car. The rest stays. Not because I'm a maximalist, but because 
sound money is the foundation every other phase of wealth-building 
requires to stand on.
```

---

### Section 2.4 — Act III: The System

**Chapter label:**
```
ACT III — THE SYSTEM  [#F2A900, uppercase, 12px]
```

**Heading:**
```
"I moved to Canada to study soil.
The real lesson was sovereignty."
[#0A0A0A | 44px]
```

**Body copy:**
```
The decision to come to Canada wasn't random. Lakeland College in 
Alberta — one of the few places in North America where you can study 
agribusiness marketing with real operational depth. I came to learn 
land systems. Food infrastructure. The physical layer of wealth that 
no digital market can fully replace.

But studying here sharpened something else: the realization that the 
system I'd been building intuitively had a structure. You make money 
through skills and leverage. You multiply it through assets that hold 
value. You protect it through infrastructure that produces regardless 
of market conditions.

Three phases. One loop. The Sovereignty Loop.

Everything I build now — the platforms, the writing, the consulting, 
the ventures — is an expression of that framework. And everything I 
publish is the blueprint I'm handing to the next version of the person 
I used to be.

The 22-year-old in Cameroon who understood the gap between two prices 
but didn't yet have the system to convert that intelligence into freedom.

This is for him.
```

---

### Section 2.5 — The Framework (Visual)

```
Background: #0A0A0A
Padding: 80px 40px

Display The Sovereignty Loop cards here (same design as Home Section 1.4)
Brief intro above: "Everything above is story. This is the architecture."
```

---

### Section 2.6 — What's Being Built

```
Background: #FFFFFF
Padding: 80px 40px
Max-width: 680px centered
```

**Heading:**
```
"The blueprint is live.
Here's what's in it."
[#0A0A0A | 44px]
```

**Paragraph:**
```
The ventures, the content, and the systems described on this page aren't 
plans. They're in motion. Moneyverse is live. Mindbloom publishes weekly. 
Farm to Funnel is in operation. The consulting practice is active.

The story isn't finished — it's being built in public. Follow the 
ecosystem, subscribe to the writing, or come back to this page in 
twelve months and see how far the loop has run.
```

**CTA:**
```
[ EXPLORE THE ECOSYSTEM → ]  links to /ecosystem
[ READ THE WRITING → ]       links to /writing
```

---

## PAGE 3: THE ECOSYSTEM ( /ecosystem )

**Purpose:** Show every product and venture. Make each one feel purposeful — not random. The framework ties everything together.  
**SEO title:** The Ecosystem | ABOUPRENEUR  
**Meta description:** Moneyverse, Mindbloom, Farm to Funnel, Consulting — every project built around one system: Make. Multiply. Protect.  

---

### Section 3.1 — Ecosystem Hero

```
Background: #0A0A0A
Padding: 100px 40px
```

**Label:**
```
THE ECOSYSTEM  [#F2A900, uppercase, 12px]
```

**Heading:**
```
"Every project exists to move
someone closer to sovereign."
[#FFFFFF | 64px | tight tracking]
```

**Sub:**
```
Not a portfolio. Not a collection of side projects. 
A coordinated system — each piece feeds the loop.
[#888888 | 18px | max-width: 520px]
```

---

### Section 3.2 — Ecosystem Navigation Tabs

```
Horizontal tab bar:
[ ALL ]  [ MAKE ]  [ MULTIPLY ]  [ PROTECT ]  [ IN BUILD ]

Active tab: text #F2A900, border-bottom 2px solid #F2A900
Inactive:   text #888888
```

Default view: ALL (shows all products)

---

### Section 3.3 — Product Cards (Full Detail)

```
Layout: Single column, full-width cards
Background: alternating #0A0A0A and #FFFFFF sections per card
Card height: auto — enough to breathe
```

**CARD 1 — MONEYVERSE**
```
Phase tag:  [ MULTIPLY — 02 ]  [#F2A900 border, #F2A900 text, uppercase, 12px]
Status tag: [ LIVE ]  [bg #F2A900, text #0A0A0A]
Title:      MONEYVERSE  [48px, font-weight 800]
Sub:        "The sound money education platform"  [#888888, 20px]

Description:
"Bitcoin entered African markets in 2016. I was there. I spent years 
developing the conviction that sound money is not optional for anyone 
who wants to build lasting wealth — especially those starting in 
economies where currency erosion is a lived reality, not a textbook 
warning.

Moneyverse is the platform I built to share that conviction at scale. 
11 modules. A structured DCA masterclass. The macroeconomic framework 
behind why holding hard assets is the rational move for the ambitious 
entrepreneur operating from a developing-world baseline."

What's inside:
  — 11 core modules on Bitcoin fundamentals and wealth preservation
  — DCA (Dollar Cost Averaging) masterclass and calculator
  — Macroeconomic framework — why fiat fails the entrepreneur
  — Sound money philosophy — conviction over speculation

CTA: [ ENTER MONEYVERSE ]  [bg #F2A900, text #0A0A0A]  → moneyverse.network
Secondary: External link label: moneyverse.network
```

**CARD 2 — MINDBLOOM**
```
Phase tag:  [ MAKE — 01 ]  [#F2A900 border, text]
Status tag: [ LIVE ]  [bg #F2A900, text #0A0A0A]
Title:      MINDBLOOM  [48px, font-weight 800]
Sub:        "The writing engine — published on Substack"  [#888888]

Description:
"There's a version of content creation that performs. There's another 
version that accumulates. Mindbloom is the latter.

Every piece published here is a framework, a perspective, or a 
documented decision — written with the standard of something worth 
reading three years from now. No trending takes. No motivational 
noise. Just the thinking behind building sovereignty from zero."

What's inside:
  — Weekly frameworks on execution, money, and building
  — Raw documentation of the Aboupreneur journey
  — Mental models for the ambitious African entrepreneur
  — Deep-dives on digital leverage, sound money, and systems

CTA: [ SUBSCRIBE TO MINDBLOOM ]  [border #F2A900, text #F2A900]  → Substack
```

**CARD 3 — FARM TO FUNNEL**
```
Phase tag:  [ MAKE — 01 ]  [#F2A900 border, text]
Status tag: [ LIVE ]  [bg #F2A900, text #0A0A0A]
Title:      FARM TO FUNNEL  [48px, font-weight 800]
Sub:        "Where agribusiness meets digital marketing"  [#888888]

Description:
"Most agribusiness operators are world-class at growing, raising, 
and producing. Most are invisible online.

Farm to Funnel is the newsletter that bridges the gap — translating 
the language of modern digital marketing into systems that make sense 
for the land operator, the commodity trader, and the agribusiness 
professional who understands soil better than social media."

Who it's for:
  — Agribusiness marketers and operators
  — Farm operators building direct-to-consumer channels
  — Ag students who want real marketing intelligence
  — Professionals at Nutrien, Richardson, FCC, and similar companies

CTA: [ SUBSCRIBE TO FARM TO FUNNEL ]  [border #F2A900, text #F2A900]
```

**CARD 4 — ABOUPRENEUR CONSULTING**
```
Phase tag:  [ MAKE — 01 ]  [#F2A900 border, text]
Status tag: [ ACCEPTING INQUIRIES ]  [bg #222222, text #888888]
Title:      CONSULTING  [48px, font-weight 800]
Sub:        "Systems architecture for ambitious operators"  [#888888]

Description:
"Most digital strategy advice is tactics dressed up as strategy. 
What ambitious operators need isn't another tactic — it's 
infrastructure that compounds.

Aboupreneur Consulting designs the digital systems, AI automation 
pipelines, and web architecture that let operators focus on the work 
that actually moves the needle."

Service areas:
  — AI workflow automation and pipeline design
  — Web development and platform architecture (Next.js, Supabase)
  — SEO systems and performance marketing
  — Digital strategy for agribusiness and food companies

CTA: [ INQUIRE ]  [bg #F2A900, text #0A0A0A]  → contact form or email
```

**CARD 5 — IN BUILD (Placeholder)**
```
Phase tag:  [ COMING ]  [border #333333, text #888888]
Status tag: [ IN BUILD ]  [bg #111111, text #444444]
Title:      MORE IS BEING BUILT  [40px, text #333333]
Sub:        "Follow the journey as it happens"  [#444444]

Body:
"The Sovereignty Loop doesn't stop at three phases. 
New ventures, platforms, and products are being built in public.
Subscribe to stay inside the process."

CTA: [ FOLLOW ON INSTAGRAM ]  and  [ FOLLOW ON YOUTUBE ]
[When content presence is established on these platforms]
```

---

## PAGE 4: WRITING ( /writing )

**Purpose:** Surface all published writing. Make it easy to browse by theme. Convert readers into subscribers.  
**SEO title:** Writing | ABOUPRENEUR  
**Meta description:** Frameworks on building from zero, sound money, and sovereign thinking — published weekly on Mindbloom.  

---

### Section 4.1 — Writing Hero

```
Background: #0A0A0A
Padding: 80px 40px
```

**Heading:**
```
"The thinking is public.
The standards are not negotiable."
[#FFFFFF | 56px | tight tracking]
```

**Sub:**
```
Everything published here is built to compound — written with the standard 
of something worth reading long after it was posted.
[#888888 | 18px | max-width: 480px]
```

---

### Section 4.2 — Featured Essay (Pinned)

```
Full-width card, bg #111111, border-left 4px solid #F2A900
Padding: 40px
Label: ESSENTIAL READING  [#F2A900, uppercase, 12px]
Title: [Best or most representative piece]
Excerpt: 2–3 sentences
CTA: [ READ THIS FIRST → ]  [#F2A900]
```

---

### Section 4.3 — Browse by Theme

```
Horizontal filter tabs:
[ ALL ]  [ SOVEREIGNTY ]  [ SOUND MONEY ]  [ BUILD FROM ZERO ]  [ AGRIBUSINESS ]  [ MINDSET ]

Same tab styling as Ecosystem page
```

---

### Section 4.4 — Writing Archive

```
List layout — clean, editorial
Each entry:
  Date:    [MONTH YEAR]  [#888888, 12px, uppercase]
  Theme:   [tag — e.g., SOUND MONEY]  [#F2A900, 11px, uppercase]
  Title:   [post title]  [#FFFFFF or #0A0A0A, 22px, font-weight 500]
  Excerpt: [1 sentence]  [#888888, 14px]
  Divider: 1px solid #1A1A1A
  Arrow:   → on hover  [#F2A900]

Pull from Substack RSS: https://aboupreneur.substack.com/feed
Paginate: 10 posts per page
```

---

### Section 4.5 — Subscribe Strip

```
Background: #F2A900
Padding: 60px 40px
Same email capture as Home Section 1.7
Heading: "Don't miss the next one."
Sub: "The Mindbloom dispatch — weekly. No noise."
```

---

## SEO & METADATA REFERENCE

```
HOME:
  og:title:       ABOUPRENEUR | Build. Stack. Sovereign.
  og:description: Aboubakar Moussa — entrepreneur, agribusiness strategist, 
                  and sound money advocate. The Sovereignty Loop: Make. Multiply. Protect.
  og:image:       /images/og-home.jpg  [1200x630, dark bg, white ABOUPRENEUR type, bitcoin orange accent]

STORY:
  og:title:       The Story | ABOUPRENEUR
  og:description: From Cameroon to Canada. From zero to system. 
                  The full narrative behind the Sovereignty Loop.
  og:image:       /images/og-story.jpg

ECOSYSTEM:
  og:title:       The Ecosystem | ABOUPRENEUR
  og:description: Moneyverse, Mindbloom, Farm to Funnel, Consulting — 
                  four active projects, one framework.
  og:image:       /images/og-ecosystem.jpg

WRITING:
  og:title:       Writing | ABOUPRENEUR
  og:description: Frameworks on building, sound money, and sovereign thinking. 
                  Published on Mindbloom.
  og:image:       /images/og-writing.jpg
```

---

## REPLIT DEVELOPER NOTES

```
1. FRAMEWORK: Next.js 14 App Router — one folder per page under /app
   /app/page.tsx          → Home
   /app/story/page.tsx    → The Story
   /app/ecosystem/page.tsx → The Ecosystem
   /app/writing/page.tsx  → Writing

2. STYLING: Tailwind CSS with these custom config additions:
   borderRadius: { DEFAULT: '0px', none: '0px', sm: '0px', md: '0px', lg: '0px', xl: '0px' }
   colors: { bitcoin: '#F2A900', dark: '#0A0A0A' }
   NOTE: rounded-none must apply globally — remove Tailwind's default rounded values

3. FONTS: Load via next/font
   Display/headers: Space Grotesk (tight, editorial) OR Syne (geometric, bold) — weight 700-800
   Body: Inter — weight 400, 500

4. SUBSTACK INTEGRATION:
   RSS feed: https://aboupreneur.substack.com/feed
   Parse with rss-parser npm package
   Cache: revalidate every 3600 seconds (ISR)
   Display on: Home Section 1.6, Writing page Section 4.4

5. EMAIL CAPTURE:
   Use a form action pointing to ConvertKit, Mailchimp, or Substack's 
   own embed form — whichever Aboupreneur currently uses for newsletter

6. ANALYTICS: Google Tag Manager is already installed (GTM-MKRZMHFV)
   Preserve existing GTM container in layout.tsx

7. IMAGES:
   All images in /public/images/
   Use next/image for optimization
   No border-radius on any image (className="rounded-none")

8. ANIMATIONS (OPTIONAL — implement last):
   Hero headline: staggered word-by-word fade-up on load
   Signal bar: horizontal ticker/marquee CSS animation
   Card hovers: border-color transition to #F2A900 (200ms ease)
   Section reveals: simple fade-up on scroll (IntersectionObserver)

9. PERFORMANCE TARGETS:
   LCP < 2.5s | CLS < 0.1 | FID < 100ms
   All images: WebP format, properly sized srcsets
   Fonts: preload critical weights

10. MOBILE BREAKPOINTS:
    Stack all multi-column layouts at 768px
    Nav collapses to hamburger at 768px
    Hero font scales: 96px desktop → 56px mobile → 40px smallest
    Ticker on mobile: CSS marquee animation, not JS
```

---

## CONTENT READY CHECKLIST (Before Handoff to Replit)

```
[ ] Professional photo of Aboubakar Moussa — portrait, high contrast
[ ] OG images for all 4 pages (1200x630px each)
[ ] 3 Substack post titles + excerpts (if RSS feed not yet configured)
[ ] Email capture provider confirmed (ConvertKit / Mailchimp / Substack)
[ ] Consulting inquiry destination confirmed (email address or form service)
[ ] Social links confirmed: LinkedIn · Instagram · YouTube · X handles
[ ] Moneyverse internal page structure confirmed (for deep-link CTA)
[ ] Farm to Funnel subscribe link confirmed
[ ] Final decision on consulting card status: accepting inquiries vs. waitlist
```

---

*Document version: 1.0*  
*Prepared by: Claude for Aboubakar Moussa / Aboupreneur*  
*Status: Ready for Replit handoff — content-complete, design-spec-complete*
