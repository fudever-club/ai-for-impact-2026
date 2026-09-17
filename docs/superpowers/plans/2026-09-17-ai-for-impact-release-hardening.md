# AI for Impact 2026 Release Hardening Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bring the bilingual static event site into conformance with the approved design specification and make unapproved organizer content fail closed.

**Architecture:** A validated content view-model is the single seam between operational configuration and presentation. Locale files own prose only; all dates, URLs, prize numbers, organizer IDs, approval state, metadata, and registration lifecycle are derived from validated shared configuration. Interactive behavior stays in small client islands.

**Tech Stack:** Next.js App Router/static export, React, TypeScript, Tailwind CSS, Zod, Framer Motion, Vitest, React Testing Library, Playwright.

**Spec:** `2026-09-17-ai-for-impact-website-design.md`

## Global Constraints

- Production must not publish disputed or unapproved facts.
- `/vi` and `/en` must be statically generated and semantically equivalent.
- Operational dates, URLs, prize values, organizer IDs, and approval state exist once.
- All behavior changes follow red-green-refactor.
- Existing source documents and user assets are preserved.
- Do not silently perform a major Next.js/React upgrade; dependency security is a separately reported gate.

---

### Task 1: Validated operational content and approval gates

**Files:**
- Modify: `content/types.ts`
- Modify: `content/schema.ts`
- Modify: `content/site-config.ts`
- Create: `content/view-model.ts`
- Modify: `content/locales/vi.ts`
- Modify: `content/locales/en.ts`
- Test: `tests/content-model.test.ts`

**Interfaces:**
- Produces: `getCompetitionViewModel(locale: Locale): CompetitionViewModel`
- Produces: `validateContent(): { config: SiteConfig; locales: Record<Locale, CompetitionContent> }`
- Approval states: `'approved' | 'withheld'`

- [ ] **Step 1: Write failing tests** proving malformed offset timestamps, duplicate stage IDs/sequences, negative/fractional prize values, missing locale fields, and duplicated operational fields are rejected. Assert that withheld prizes and disputed facts do not enter the returned view-model.
- [ ] **Step 2: Run `npm test -- tests/content-model.test.ts`** and verify failures are caused by missing validation/view-model behavior.
- [ ] **Step 3: Implement the minimal model**. Shared stage records contain IDs, sequence, timestamps, theme, and approval state; locale records contain keyed titles/summaries/outputs only. Format dates with `Intl.DateTimeFormat` and currency with `Intl.NumberFormat`.
- [ ] **Step 4: Remove operational duplication** from locale dictionaries and make document links/prizes conditional on approval. Keep the current disputed values in shared config only as `withheld`, never in rendered output.
- [ ] **Step 5: Run the focused test and all Vitest tests**; refactor only after green.
- [ ] **Step 6: Commit** with `feat(content): enforce validated release gates`.

### Task 2: Locale-correct static routes and SEO artifacts

**Files:**
- Create: `app/fonts.ts`
- Move/modify: `app/page.tsx` to `app/(default)/page.tsx`
- Create: `app/(default)/layout.tsx`
- Modify: `app/[locale]/layout.tsx`
- Modify: `app/[locale]/page.tsx`
- Remove: `app/layout.tsx`
- Create: `app/sitemap.ts`
- Create: `app/robots.ts`
- Create: `vercel.json`
- Test: `tests/routes.test.tsx`

**Interfaces:**
- Locale root layout owns `<html lang={locale}>`.
- Root fallback is static HTML with meta refresh and a visible `/vi` link; Vercel owns the HTTP redirect.

- [ ] **Step 1: Write failing render/export tests** for `html[lang=vi]`, `html[lang=en]`, nonduplicated locale titles, Event JSON-LD `url`, sitemap entries, robots output, and root fallback navigation.
- [ ] **Step 2: Run the focused tests** and confirm the existing `lang="vi"`, missing sitemap/robots, missing Event URL, and redirect shell cause the failures.
- [ ] **Step 3: Implement multiple root layouts** with shared fonts, locale-owned document language, complete locale metadata/Twitter data, and JSON-LD derived from validated configuration.
- [ ] **Step 4: Add portable redirects**: `vercel.json` maps `/` to `/vi`; static root HTML provides meta-refresh and a visible semantic link.
- [ ] **Step 5: Run focused tests and `npm run build`**, then inspect `out/index.html`, `out/vi.html`, `out/en.html`, `out/sitemap.xml`, and `out/robots.txt`.
- [ ] **Step 6: Commit** with `fix(routes): make locale export and SEO deterministic`.

### Task 3: Accessible navigation and registration lifecycle

**Files:**
- Modify: `components/layout/SiteHeader.tsx`
- Modify: `components/layout/LanguageSwitcher.tsx`
- Modify: `components/sections/HeroSection.tsx`
- Modify: `components/sections/RegisterSection.tsx`
- Create: `components/ui/RegistrationAction.tsx`
- Modify: `app/globals.css`
- Test: `tests/navigation.test.tsx`
- Test: `tests/registration-action.test.tsx`

**Interfaces:**
- `RegistrationAction` consumes locale copy plus a `RegistrationCountdown` and produces the only CTA/status policy used by header, hero, and final CTA.

- [ ] **Step 1: Write failing tests** for menu availability below `lg`, `aria-expanded`, `aria-controls`, Escape close/focus return, current locale semantics, skip link, and all `upcoming/open/closed/finished` CTA states.
- [ ] **Step 2: Verify RED** with focused Vitest runs.
- [ ] **Step 3: Implement the menu as a disclosure** available through `lg:hidden`, add active-section context, focus restoration, a skip link, `scroll-margin-top`, and locale selection semantics.
- [ ] **Step 4: Extract registration policy into a small client island**. Upcoming shows opening date; open shows deadline/countdown; closed removes registration actions; finished renders archive state.
- [ ] **Step 5: Run focused and full tests**, then keyboard-test at 390px and 768px.
- [ ] **Step 6: Commit** with `fix(ux): harden navigation and registration states`.

### Task 4: Bilingual completeness, organizer fallback, and accessible color tokens

**Files:**
- Modify: `content/locales/vi.ts`
- Modify: `content/locales/en.ts`
- Modify: `content/site-config.ts`
- Modify: `components/visuals/JourneyPath.tsx`
- Modify: `components/sections/ProgrammingChallengeSection.tsx`
- Modify: `components/sections/ThemesSection.tsx`
- Modify: `components/sections/EvaluationSection.tsx`
- Modify: `components/sections/PrizesSection.tsx`
- Modify: `components/layout/SiteFooter.tsx`
- Modify: `components/sections/OrganizersSection.tsx`
- Modify: `tailwind.config.ts`
- Test: `tests/localized-ui.test.tsx`

**Interfaces:**
- All visible labels come from typed locale content.
- Organizer logo is optional and has a local runtime fallback; missing assets never produce broken images.

- [ ] **Step 1: Write failing tests** that render `/en` units, headings, labels, prize metadata, footer headings, and organizer roles and reject known Vietnamese-only output. Add an image-error fallback test and literal contrast checks for normal-size CTA text.
- [ ] **Step 2: Verify RED** against current hardcoded Vietnamese labels, missing ICPDP image, and failing blue/orange contrast.
- [ ] **Step 3: Move UI labels into locale data**, split organizer identity from localized role/name, remove nonexistent logo paths, and implement image-error fallback.
- [ ] **Step 4: Preserve brand colors as borders/surfaces** while using accessible dark foregrounds or darker action variants for normal text. Do not change FPT Orange as a brand token; change its text pairing.
- [ ] **Step 5: Run focused/full tests** and manually inspect both locales.
- [ ] **Step 6: Commit** with `fix(a11y): complete localization and resilient branding`.

### Task 5: Visual rhythm and signature motion

**Files:**
- Modify: `app/globals.css`
- Modify: `components/sections/AboutSection.tsx`
- Modify: `components/sections/ThemesSection.tsx`
- Modify: `components/sections/EvaluationSection.tsx`
- Modify: `components/sections/PrizesSection.tsx`
- Modify: `components/visuals/JourneyPath.tsx`
- Modify: `components/visuals/AgentNetworkVisual.tsx`
- Modify: `lib/motion.ts`
- Test: `tests/motion.test.tsx`

**Interfaces:**
- `JourneyPath` uses shared motion presets and exposes the same complete content with or without motion.

- [ ] **Step 1: Write failing component tests** for reduced-motion static rendering, decorative network semantics, and journey progress hooks/classes without requiring pixel-perfect animation.
- [ ] **Step 2: Verify RED** against unused presets and static journey behavior.
- [ ] **Step 3: Implement restrained staged hero/journey motion**, stop perpetual decorative loops, and make the graphic either one named image or fully decorative.
- [ ] **Step 4: Introduce approved light/neutral information beats** for Themes and Evaluation while preserving dark Hero/technical/register regions.
- [ ] **Step 5: Run tests and browser checks** at 360, 390, 430, 768, 1024, 1280, and 1440px with normal and reduced motion.
- [ ] **Step 6: Commit** with `feat(ui): implement dual-identity rhythm and journey motion`.

### Task 6: QA toolchain, deterministic scripts, and documentation

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `vitest.config.ts`
- Create: `playwright.config.ts`
- Create: `tests/e2e/event-site.spec.ts`
- Create: `tests/integration/site-contract.test.ts`
- Modify: `.github/workflows/deploy-vercel-prod.yml`
- Modify: `next.config.js`
- Rewrite: `README.md`
- Remove: `lib/i18n.ts`

**Interfaces:**
- `npm run check` runs validation, lint, typecheck, unit/component/integration tests, build, and E2E smoke deterministically.

- [ ] **Step 1: Add failing integration/E2E tests** for 12 sections in both locales, anchor-target parity, one configured registration URL, valid approved document links, five-stage order, locale switch/hash preservation, FAQ operation, registration destination, keyboard menu, and no horizontal overflow.
- [ ] **Step 2: Verify RED**, then add Playwright and deterministic scripts; replace invalid `next start` with a static preview command.
- [ ] **Step 3: Remove only dependencies proven unused by import inventory**, regenerate the lockfile, remove legacy `lib/i18n.ts`, and stop ignoring ESLint during builds.
- [ ] **Step 4: Rewrite README** for AI for Impact architecture, content approval workflow, commands, deployment, and known external launch prerequisites.
- [ ] **Step 5: Add CI gates before deployment** and pin tool/action versions. Do not force production deploy from unchecked `main`.
- [ ] **Step 6: Run `npm run check` and `npm audit --omit=dev`**. Record security findings separately; do not apply an unattended major upgrade.
- [ ] **Step 7: Commit** with `test(release): add deterministic acceptance gates`.

### Task 7: Final browser and release conformance review

**Files:**
- Create: `docs/verification/2026-09-17-release-verification.md`
- Update: `.agent_scratchpad.md`

- [ ] **Step 1: Run a fresh clean install/build/test cycle** from the repository root.
- [ ] **Step 2: Serve `out/` and capture desktop/mobile screenshots** for `/vi` and `/en`.
- [ ] **Step 3: Exercise keyboard, focus, reduced motion, 200% zoom, viewport matrix, external links, structured data, sitemap, robots, and no-JavaScript root fallback.
- [ ] **Step 4: Record measured JS/CSS/HTML sizes and Lighthouse results**; do not infer Core Web Vitals from bundle size.
- [ ] **Step 5: Review every acceptance criterion in the design spec** and classify it as passed, blocked by organizer input, or failed.
- [ ] **Step 6: Commit** with `docs(release): record AI for Impact verification`.
