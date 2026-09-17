# AI for Impact 2026 Website Design Specification

**Status:** Design approved in conversation; written spec pending final user review before implementation planning  
**Date:** 2026-09-17  
**Project type:** Hybrid redesign of the existing CodeMosaic 2025 landing page  
**Primary stakeholder:** FPT University Da Nang / AI for Impact 2026 organizing team  
**Delivery model:** One long-scroll bilingual event landing page, no application backend

---

## 1. Product Intent

AI for Impact 2026 needs an official event website that does two jobs equally well:

1. **Brand the event professionally** as a modern, credible AI/engineering competition at FPT University Da Nang.
2. **Convert interested students into registered teams** by making the competition journey, important dates, format, prizes, FAQs, and official documents easy to understand before sending users to the external Google Form.

The website is intentionally a **single long-scroll experience**. It is not a participant portal, submission system, leaderboard, authentication system, CMS, or admin dashboard.

### Success statement

A student should be able to enter the website, understand what AI for Impact 2026 is, understand the five-stage journey and the technical challenge, find the official handbook/rules, and register a team without first reading the full Google Docs.

The organizing team should be able to request operational edits such as “change the registration deadline” and have the developer change a single configuration value rather than hunt through multiple components.

---

## 2. Chosen Product Direction

### 2.1 Redesign strategy

**Chosen approach: Hybrid redesign.**

Reuse the stable technical foundation of CodeMosaic where it helps, but redesign the information architecture, visual language, content model, major sections, and motion system for AI for Impact 2026.

### 2.2 Content depth

**Balanced content.**

The site contains enough information for a student to understand the entire competition, while long-form rules, compiler details, full scoring tables, and operational procedures remain in official handbook/rule documents linked from the page.

### 2.3 Conversion strategy

**Branding + registration conversion.**

The registration CTA is the primary action, but the page must also communicate that AI for Impact is a serious FPT University event rather than a generic coding-form landing page.

### 2.4 Languages

The website supports:

- Vietnamese (`vi`) — editorial source of truth.
- English (`en`) — semantically equivalent translation.

Numbers, dates, URLs, prize amounts, organizer IDs, and registration status are shared operational data and must not be duplicated across language files.

---

## 3. Current Repository Audit

The supplied CodeMosaic archive uses:

- Next.js `13.5.1` App Router
- React `18.2.0`
- TypeScript `5.2.2`
- Tailwind CSS `3.3.3`
- Framer Motion `^11.0.0`
- GSAP `^3.13.0`
- i18next / react-i18next
- Lucide React
- many generated Radix/shadcn dependencies
- Vercel deployment workflow

The current page is already a one-page composition. `app/page.tsx` mounts sections such as `Header`, `HeroSection`, `IntroSection`, `RulesSection`, `ProgrammingLanguagesSection`, `ScoringSystemSection`, `TimelineSection`, `DetailedScheduleSection`, `PrizesSection`, `OrganizationSection`, `FAQSection`, `RegisterSection`, and `Footer`.

### Current architectural weaknesses to correct

1. `app/page.tsx` is a client component even though most page content is static.
2. Operational content is split between `lib/i18n.ts` and component-level hard-coded values.
3. Registration URLs, dates, countdown targets, prizes, and labels can drift out of sync.
4. The Matrix hero uses GSAP and continuous generated animation that is not aligned with the new brand direction.
5. Scroll snap complicates long-form reading.
6. A large number of UI dependencies are present but unused.
7. Brand assets are minimal and placeholders exist in organizer/sponsor areas.

The redesign must improve only what serves the AI for Impact website; unrelated refactoring is out of scope.

---

## 4. Information Architecture

The production page follows this order:

1. **Site Header**
2. **Hero**
3. **About / Why AI for Impact**
4. **Competition Journey**
5. **Programming Challenge Spotlight**
6. **AI Themes / Problem Domains**
7. **How It Works / Evaluation**
8. **Prizes & Opportunities**
9. **FAQ**
10. **Registration CTA**
11. **Organizers**
12. **Footer**

### 4.1 Header navigation

Desktop anchors:

- About
- Journey
- Challenge
- Themes
- Prizes
- FAQ
- Register

The language switch and registration CTA remain visible in the header.

Mobile uses a compact header with logo, locale switch, and menu trigger. The registration CTA remains visible inside the menu.

### 4.2 Hero responsibilities

The Hero communicates:

- FPT University Da Nang endorsement
- “Agentic Innovation Challenge” eyebrow
- “AI FOR IMPACT 2026” event lockup
- “Từ tư duy đến giải pháp tạo tác động” / English equivalent
- event period
- registration status/countdown
- primary “Register” CTA
- secondary “View the journey” CTA
- lightweight Agent → Tool/Data/API → Impact visual

AI for Impact does **not** require a standalone logo for MVP. The event name is rendered as a typographic event lockup unless the organizer later supplies an approved official mark.

### 4.3 Competition Journey

This is the signature information section and presents exactly five stages:

1. Registration & Idea
2. Programming Thinking Challenge
3. Training
4. Harness Engineering Challenge
5. Build Sprint & Demo Day

Each stage includes:

- sequence number
- date/range
- title
- short summary
- expected output
- optional detail/document link
- visual theme classification (`impact`, `technical`, `training`)

### 4.4 Programming Challenge Spotlight

This section receives its own technical visual mood inspired by the orange programming poster and presents the essentials without duplicating the entire rulebook:

- date
- time/duration
- location
- team size
- one-laptop rule
- supported languages summary
- topic chips
- qualification outcome
- link to full official rules/handbook

### 4.5 Themes

Five problem domains:

1. Education and learning support
2. Health, wellbeing, and quality of life
3. Smart tourism and cultural preservation
4. Environment, cities, and sustainable development
5. Business support and productivity

### 4.6 Evaluation

The page summarizes the competition model and evaluation philosophy rather than reproducing every scoring table. The user must understand:

- idea stage purpose
- programming qualification stage
- training support
- harness engineering evaluation
- final build/demo expectations
- use of AI coding tools is permitted under organizer rules
- official handbook/rules remain authoritative

### 4.7 Prizes & opportunities

Display official prize categories and non-cash opportunities only after they are confirmed by the organizing team. Prize values come from shared configuration/data, not JSX literals.

### 4.8 FAQ

FAQ is a single-open accessible accordion. Topics include at minimum:

- who can join
- team size
- AI experience requirement
- allowed AI tools
- laptop/equipment rule
- registration process
- technical training
- where to read detailed rules

---

## 5. Visual Design System

### 5.1 Chosen visual concept

**Dual-Identity Journey**

The website combines the two existing AI for Impact visual identities:

- futuristic electric blue for AI, innovation, future, and impact
- FPT orange for action, technical challenge, engineering milestones, and CTA emphasis

Blue and orange coexist throughout the site rather than splitting the site into unrelated halves.

### 5.2 Brand tokens

Core palette:

```text
Deep Navy        #061A3A
Navy Surface     #0B2A5B
Electric Blue    #1D8CFF
Light Blue       #56C7FF
FPT Orange       #F37021
Off White        #F8FAFC
Muted Blue Gray  #B5C4D8
```

Semantic rule:

- Blue = vision / AI / impact
- Orange = action / engineering / important CTA

### 5.3 Typography

Use:

- Display/headings: Space Grotesk or equivalent geometric sans via `next/font`
- Body: Inter
- Technical metadata/labels: JetBrains Mono

Technical labels are used selectively for values such as `STAGE 02`, dates, codes, and engineering metadata. They are not used for body copy.

### 5.4 Background rhythm

The long page alternates visual density to avoid becoming a single blue wall:

1. Dark immersive Hero
2. Dark elevated/About surface
3. Lighter information section
4. Dark orange-accent technical spotlight
5. Light/neutral content section
6. Dark registration/footer close

### 5.5 Card language

Avoid generic “white card + large shadow” repetition.

Cards use:

- thin borders
- restrained translucent/elevated surfaces
- 12–16px radius
- subtle blue/orange glow where meaningful
- clear typographic hierarchy
- large internal spacing

Hover behavior is restrained: border emphasis, slight icon movement, subtle background shift. Cards do not scale dramatically.

### 5.6 Organizer assets

Assets currently available:

- FPT Education / FPT University image supplied by stakeholder
- ICPDP image supplied by stakeholder

SE and CF logos are not currently available. The component model must support an optional logo and render a typographic badge when an image is absent. Missing SE/CF logos must not block launch.

---

## 6. Motion and Interaction System

### 6.1 Motion philosophy

Animation exists to explain structure and guide attention, not to decorate every element.

Only four motion families are allowed:

1. reveal
2. journey progress
3. ambient hero motion
4. micro-interaction

### 6.2 Hero animation

Initial sequence, approximately 1–1.5 seconds total:

1. FPT endorsement
2. eyebrow
3. event title
4. tagline
5. CTA group

The right-side `AgentNetworkVisual` animates in parallel without competing with text.

### 6.3 Agent network visual

Use SVG + CSS + Framer Motion, not WebGL and not canvas by default.

Concept:

```text
        DATA
         │
TOOL ─ AGENT ─ API
         │
       IMPACT
```

The Agent node is visually dominant. Connection lines carry small periodic data packets. Blue dominates; orange is reserved for action/output emphasis.

### 6.4 Journey interaction

Desktop uses a soft SVG path connecting the five milestones. As the user scrolls, the path fills and milestones activate.

Mobile uses a simple vertical timeline. Zig-zag geometry is not preserved on narrow screens.

Technical stages use orange emphasis plus text labeling, never color alone.

### 6.5 Header behavior

At the top:

- transparent/dark integrated header

After approximately 40–60px scroll:

- translucent navy surface
- backdrop blur
- subtle bottom border
- slightly reduced visual height

Active anchor state receives a subtle underline or glow.

### 6.6 Registration countdown/status

Countdown state derives from the shared registration configuration.

States:

- `upcoming`: show opening date
- `open`: show remaining days/hours/minutes
- `closed`: show registration closed state
- `finished`: hide registration CTA and present event/archive state

Seconds are omitted to avoid unnecessary visual noise.

If countdown JavaScript fails, the plain-text registration deadline remains visible.

### 6.7 FAQ

Single-open accessible accordion. Trigger icon rotates on open. Content expansion must remain keyboard accessible.

### 6.8 Reduced motion

`prefers-reduced-motion: reduce` is mandatory.

When active:

- journey path is static
- agent nodes do not pulse
- ambient loops stop
- reveals become instant or minimal fades
- smooth scrolling is disabled

Content remains fully usable without animation.

---

## 7. Responsive Behavior

Required manual/automated viewport checks:

- 360px
- 390px
- 430px
- 768px
- 1024px
- 1280px
- 1440px+

### Mobile rules

- Hero copy appears before the network visual.
- Hero is not forced to `100vh`.
- Journey becomes vertical.
- Multi-column content collapses to one or two columns as appropriate.
- Organizer logos/badges wrap naturally.
- Header uses drawer/dropdown navigation.
- Typography uses `clamp()` for fluid display sizing.

The site must never rely on scroll snap.

---

## 8. Technical Architecture

### 8.1 Runtime constraints

For the MVP, keep the existing framework generation unless an implementation blocker is proven:

- Node.js 18+
- Next.js 13.5.1
- React 18.2.0
- TypeScript 5.2.2
- Tailwind CSS 3.3.3

A major Next.js/React upgrade is explicitly out of scope for the event-site redesign. Security or hosting requirements that force an upgrade must be handled as a separate reviewed change, not bundled silently into UI work.

### 8.2 Route model

To preserve static rendering while supporting bilingual content, replace runtime client-side translation switching with **two statically generated locale routes**:

```text
/vi
/en
```

`/` redirects to `/vi`.

Each locale route renders the same single long-scroll page structure. This is still a single-page product experience; locale changes only the language route.

`generateStaticParams()` pre-renders both locales. A language switch changes `/vi` ↔ `/en` and preserves the active hash section when possible.

This design allows most sections to remain Server Components and removes the need for the current global i18next runtime.

### 8.3 Proposed file structure

```text
app/
├── layout.tsx
├── page.tsx                  # redirect to /vi
└── [locale]/
    ├── layout.tsx
    └── page.tsx

components/
├── layout/
│   ├── SiteHeader.tsx
│   ├── LanguageSwitcher.tsx
│   └── SiteFooter.tsx
├── sections/
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── JourneySection.tsx
│   ├── ProgrammingChallengeSection.tsx
│   ├── ThemesSection.tsx
│   ├── EvaluationSection.tsx
│   ├── PrizesSection.tsx
│   ├── FAQSection.tsx
│   ├── RegisterSection.tsx
│   └── OrganizersSection.tsx
├── visuals/
│   ├── AgentNetworkVisual.tsx
│   ├── JourneyPath.tsx
│   └── SectionGlow.tsx
└── ui/
    ├── Button.tsx
    ├── Badge.tsx
    ├── SectionHeading.tsx
    └── Accordion.tsx

content/
├── types.ts
├── schema.ts
├── site-config.ts
└── locales/
    ├── vi.ts
    └── en.ts

lib/
├── locale.ts
├── dates.ts
├── registration.ts
├── motion.ts
└── utils.ts

public/
├── brand/
│   ├── fpt-university.png
│   ├── icpdp.png
│   └── partners/
├── media/
│   ├── events/
│   └── posters/
└── graphics/
```

### 8.4 Server/client boundaries

Server/static by default:

- locale page composition
- About
- Themes
- Evaluation text
- Prizes
- Organizers
- Footer
- static metadata/structured data

Client components only where interaction is required:

- sticky Header scroll state/mobile menu
- LanguageSwitcher behavior
- countdown/status hydration
- Journey scroll progress
- FAQ accordion
- AgentNetworkVisual motion

### 8.5 Content model

`content/site-config.ts` contains non-localized operational data:

- official URLs
- event dates
- registration interval
- contact details
- social links
- organizers and logo paths
- prize numeric values/IDs
- document URLs

`content/locales/vi.ts` and `content/locales/en.ts` implement the same `CompetitionContent` TypeScript interface.

Core principle:

> Content is data. Components present it; components do not own operational facts.

### 8.6 Data types

The implementation plan must define concrete types equivalent to:

```ts
export type Locale = 'vi' | 'en';

export type StageTheme = 'impact' | 'technical' | 'training';

export interface CompetitionStage {
  id: string;
  sequence: number;
  startDate: string;
  endDate?: string;
  theme: StageTheme;
  title: string;
  shortTitle: string;
  summary: string;
  output: string;
  detailUrl?: string;
}

export interface Organizer {
  id: string;
  name: string;
  shortName: string;
  role: string;
  logo?: string;
}
```

Locale-specific stage copy may be stored in locale dictionaries while shared dates/IDs remain in operational configuration. The exact normalized shape must preserve the rule that operational values exist only once.

### 8.7 Validation

Use the existing `zod` dependency for build-time content/config validation.

Build must fail on:

- invalid registration/event dates
- malformed required external URLs
- duplicate stage IDs
- duplicate stage sequence numbers
- missing VI/EN required fields
- organizer missing both usable name and shortName
- unsupported locale
- invalid prize numeric data when a prize is configured

### 8.8 Date handling

Store operational timestamps as ISO 8601 values with explicit `+07:00` where time-of-day matters.

Use `Intl.DateTimeFormat` for locale display. Do not store user-facing formatted dates as operational truth.

Example shared timestamp:

```text
2026-09-23T23:59:00+07:00
```

Vietnamese and English formatting is derived at render time.

### 8.9 Motion presets

Shared variants live in `lib/motion.ts` and include at minimum:

- `fadeUp`
- `fadeIn`
- `staggerContainer`
- `staggerItem`

Sections must not invent unrelated animation timing unless they implement a signature interaction such as the Journey or Hero network.

### 8.10 Dependency strategy

Keep:

- Next.js / React / TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Zod
- minimal Radix primitive(s) only if they materially improve accessibility

Remove after migration if unused:

- GSAP
- i18next
- react-i18next
- generated Radix/shadcn packages not referenced by the final code
- form/carousel/chart/theme/Supabase dependencies that have no production use in this landing page

Dependency removal occurs only after imports are migrated and build/tests confirm safety.

---

## 9. Content Governance

### 9.1 Source authority order

When public information conflicts, use this authority order:

1. direct confirmation from the organizing team
2. latest approved event plan
3. latest approved participant handbook
4. poster/social communication material

The website must never silently choose between conflicting official values.

### 9.2 Known release-blocking conflicts

The source materials currently contain conflicting references around:

- idea/video submission deadline (`23/09` versus `28/09` in different passages)
- number of teams in the final (`Top 15`, plus isolated `Top 5` / `8 teams` references)
- final duration (`2 hours` versus isolated `5 hours` references)
- baseline freeze (`28/10` versus isolated `22/10` reference)
- older inconsistent training dates in the handbook

These are not implementation placeholders. They are **content approval gates**. Production must not publish a disputed value until the organizing team confirms the canonical value.

### 9.3 Current canonical values with strongest cross-source support

The design and preview may use these values because they are consistently supported by the latest plan/poster combination:

- registration window: 14/09/2026–23/09/2026
- programming thinking challenge: 02/10/2026, 08:00–12:00, 240 minutes
- training: 07/10/2026–09/10/2026
- harness engineering challenge: 17/10/2026
- final/demo day: 31/10/2026
- baseline freeze: 23:59 on 28/10/2026

Before public launch, the organizing team must explicitly approve the content configuration containing these values.

### 9.4 Translation workflow

1. Vietnamese copy is approved first.
2. English is translated from approved Vietnamese copy.
3. Types/schema verify structural parity.
4. Numbers/dates/URLs come from shared config, not translated strings.
5. Both locales receive final visual/content review before production.

### 9.5 Production content prerequisites

Production launch is blocked until the organizing team has supplied or explicitly approved:

- registration URL
- handbook/rules URL(s) that the public site links to
- canonical dates used by the live registration status and five-stage journey
- prize entries if the Prizes section is shown
- organizer naming/roles

If prize data is not approved at launch, `PrizesSection` is omitted rather than showing guessed values. If an optional organizer logo is unavailable, the organizer remains visible as a text badge. Registration and authoritative document links are not optional for production launch.

### 9.6 Long-form documents

The full handbook, rules, and plan are external authoritative documents. The landing page summarizes and links to them; it does not duplicate them in full.

---

## 10. SEO and Discoverability

### 10.1 Metadata

Base title:

```text
AI for Impact 2026 | FPT University Da Nang
```

Each locale has its own description. Add:

- canonical URL
- language alternates for `/vi` and `/en`
- Open Graph title/description/image
- favicon
- robots metadata
- sitemap

The supplied AI for Impact promotional artwork may be adapted as the Open Graph image because social preview is an appropriate use of raster promotional media.

### 10.2 Structured data

Include JSON-LD `Event` with:

- name
- startDate
- endDate
- location
- organizer
- eventStatus
- event URL

Do not add unsupported or speculative structured-data properties.

---

## 11. Accessibility

Minimum target: WCAG AA for core interaction/content.

Required:

- keyboard-operable navigation
- visible focus states
- accessible accordion semantics
- meaningful image alt text
- decorative graphics marked appropriately
- correct HTML language per locale route
- color contrast meeting AA for normal text
- no information communicated by color alone
- reduced-motion support
- semantic links for external documents and registration CTA

---

## 12. Performance Budget

Production targets:

```text
LCP < 2.5s
CLS < 0.1
INP < 200ms
```

Lighthouse targets on a representative production build:

```text
Performance >= 85
Accessibility >= 90
Best Practices >= 90
SEO >= 90
```

Initial client JavaScript target: approximately `< 200–250 KB gzip` for the landing experience.

Performance rules:

- no autoplay background video
- no WebGL by default
- no continuous GSAP Matrix animation
- optimized/lazy-loaded below-fold images
- `next/image` where appropriate
- avoid shipping unused UI libraries
- preserve readable content if animation does not hydrate

---

## 13. Testing Strategy

The implementation plan must add an explicit test toolchain because the source archive currently has no dedicated test runner.

### 13.1 Test toolchain

Add and standardize on:

- Vitest
- React Testing Library
- `@testing-library/jest-dom`
- jsdom
- Playwright (`@playwright/test`)

The implementation plan must add deterministic npm scripts for unit/component tests and E2E smoke tests. No second competing test runner is introduced.

### 13.2 Unit tests

Cover:

- registration status calculation
- locale validation
- date formatting
- content/config schema validation

### 13.3 Component tests

Cover interactive units:

- LanguageSwitcher
- FAQ accordion
- registration CTA state
- mobile navigation

### 13.4 Integration tests

Verify:

- all major sections render for both locales
- all header anchors have matching target IDs
- shared registration URL is used in all registration entry points
- handbook/rules links are correct
- five-stage journey is rendered in the correct order

### 13.5 E2E smoke test

At minimum:

1. open Vietnamese homepage
2. navigate to English
3. scroll/navigate to Journey
4. open FAQ
5. activate Register CTA and verify destination

Animation pixel-perfect behavior does not require E2E coverage.

### 13.6 Browser support

Support current stable versions of:

- Chrome
- Edge
- Firefox
- Safari
- Chrome Android
- Safari iOS

Legacy browser support is out of scope.

---

## 14. Deployment and Maintenance

### 14.1 Deployment

Preferred workflow:

```text
feature branch
→ pull request/review
→ Vercel preview deployment
→ content/visual QA
→ production deployment
```

The school-provided subdomain points to the production deployment. No domain purchase is required.

The existing Vercel workflow may be retained or simplified after reviewing the real production repository/secrets. The archive contains a workflow but no `.git` history or active Vercel credentials.

### 14.2 Maintenance period

Maintenance scope through **31/10/2026** includes:

- content/timeline edits requested by organizer
- document-link updates
- logo/asset replacement
- registration state/content updates
- responsive/layout bug fixes
- broken-link fixes
- FAQ updates
- basic milestone/result copy updates when requested

Explicitly excluded from maintenance scope:

- authentication
- submission system
- backend services
- database
- participant dashboard
- admin dashboard
- new large microsites/pages

Those requests constitute scope changes.

---

## 15. Acceptance Criteria

### Functional

- Production site is available on the school subdomain.
- `/vi` and `/en` render equivalent one-page experiences.
- `/` resolves to Vietnamese by default.
- Header navigation lands on the correct sections.
- Registration CTA uses the single configured external registration URL.
- Handbook/rules links use configured authoritative URLs.
- Registration state/countdown uses shared config.
- Exactly five competition stages are represented in the Journey.

### Visual

- Dual-Identity Journey system is visibly implemented.
- Blue communicates AI/impact; orange communicates action/engineering.
- Hero and Programming Challenge have distinct moods within one coherent design system.
- CodeMosaic Matrix visual identity is absent.
- FPT University and ICPDP brand assets are used appropriately.
- Missing SE/CF logos degrade gracefully to text badges.

### Responsive

No horizontal overflow or broken layout at 360, 390, 430, 768, 1024, 1280, or 1440+ pixel widths.

### Accessibility

- keyboard navigation works
- focus is visible
- reduced motion works
- core text contrast meets AA
- accordion and menu are semantically accessible

### Performance

The project targets the budgets in Section 12 and documents any production exception with measured evidence.

### Maintainability

- no operational date/URL is duplicated across section JSX
- VI and EN content conform to the same type/schema
- motion presets are shared
- organizer logos are optional data
- config is the single operational source of truth

---

## 16. Agent Collaboration Model

The implementation plan should be executable by independent agentic workers with narrow responsibilities.

### Agent A — Architecture & Foundation

Owns:

- locale route architecture
- typed content/config schemas
- validation
- file structure
- dependency cleanup sequencing
- server/client boundaries

Must not redesign section visuals independently.

### Agent B — Brand UI & Core Sections

Owns:

- design tokens
- typography
- Header
- Hero layout
- About
- Themes
- Prizes
- Organizer/Footer visual implementation

Consumes the content/config interfaces created by Agent A.

### Agent C — Motion & Journey

Owns:

- shared motion presets
- AgentNetworkVisual
- JourneyPath
- scroll progress
- reduced-motion behavior
- Programming Challenge technical visual treatment

Must stay inside the performance budget.

### Agent D — Content & i18n

Owns:

- VI/EN dictionaries
- copy normalization
- document links/content mapping
- content-source consistency checks
- translation parity

Must never invent disputed official values.

### Agent E — QA, Accessibility & Performance

Owns:

- unit/component/integration/E2E tests
- viewport matrix
- keyboard/focus testing
- reduced-motion verification
- Lighthouse/Core Web Vitals checks
- broken-link checks

### Reviewer Agent — Spec/Implementation Conformance

Reviews each completed task against this spec before merge. The reviewer checks scope, interface contracts, visual intent, performance, and release-blocking content conflicts. It does not rewrite implementation unless a defect is identified.

### Coordination rule

Agents may work in parallel only when their tasks do not mutate the same files or depend on unfinished interfaces. Architecture/content contracts land first; UI, motion, and content population can then proceed in parallel; QA follows each independently testable deliverable and performs a final integration pass.

---

## 17. Out of Scope

The first release does not include:

- login/accounts
- participant database
- team management
- online submission
- judging portal
- scoreboard
- CMS/admin panel
- payment
- email automation
- chat assistant
- participant dashboard
- sponsor-management system

External Google Form and official documents remain the operational registration/document channels.

---

## 18. Definition of Done

The website is done when a student can:

1. understand the event identity and purpose,
2. understand the five-stage journey,
3. understand the programming challenge at a useful summary level,
4. discover themes, evaluation, prizes, and FAQs,
5. open the official handbook/rules,
6. register through the official form,
7. use the same experience in Vietnamese or English,

and when the organizing team can safely change operational facts through a single validated content/config layer without editing presentation components.
