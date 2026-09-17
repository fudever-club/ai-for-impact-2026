---
name: ui-ux-pro-max
description: Master UI/UX design intelligence and design systems for web, mobile, and desktop interfaces. Triggers when designing, auditing, refining, or evaluating UI components, pages, color palettes, typography scales, responsive layouts, accessibility (WCAG 2.2 AA), micro-interactions, touch targets, and visual hierarchy.
---

# UI/UX Pro Max – Design Intelligence & System Architect

Comprehensive design intelligence for web, mobile, and responsive applications: 50+ active UI design styles (Clean Tech Light, Glassmorphism, Brutalism, Minimalist, Bento Grid), harmonious color palette generation, font pairings, 119 UX guidelines, and pre-delivery design QA checklists.

## When to Apply

Use this skill whenever the task involves:
- **Visual Design Decisions**: Selecting aesthetic directions (Clean Tech Light, Apple Human Interface, Linear/Stripe high-tech, Frosted Glass, Dark Mode, etc.), color tokens, spacing scales, and font hierarchies.
- **UI Component & Page Design**: Constructing heroes, cards, navigation headers, modals, forms, tables, timeline trackers, and metric podiums.
- **User Experience (UX) Engineering**: Ensuring logical navigation flows, immediate micro-interaction feedback (<150ms), progressive disclosure, and empty/error states.
- **Accessibility & Compliance**: WCAG 2.2 AA standards, 4.5:1 text contrast (3:1 for large text/icons), 44x44px touch targets, visible focus rings, aria labels for icon buttons.
- **Design Reviews & Visual Audits**: Evaluating UI polish, eliminating AI clichés (such as generic purple neon glows or low-contrast gray-on-gray text), and ensuring typography rhythm.

---

## 10 Core Rule Categories by Priority

| Priority | Category | Impact | Key Requirements (Must-Have) | Anti-Patterns (Avoid) |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **Accessibility (A11y)** | CRITICAL | Minimum 4.5:1 text contrast, visible 2-4px focus rings, alt text, aria-labels on icon buttons, keyboard tab order. | Removing outline/focus rings, low-contrast gray text on dark backgrounds, unlabeled icon controls. |
| **2** | **Touch & Interaction** | CRITICAL | Minimum 44×44px hit targets, ≥8px spacing between targets, clear pressed feedback within 100ms. | Relying solely on hover (breaks mobile), 0ms instant jarring state transitions, tiny clickable icons. |
| **3** | **Visual Hierarchy & Rhythm** | HIGH | Distinct size/weight contrast across H1→H6, consistent spacing tokens (4, 8, 12, 16, 24, 32, 48, 64px), single visual focus per view. | Everything bolded or equal size, cramped cards, haphazard margins without rhythm. |
| **4** | **Color & Contrast Harmony** | HIGH | Curated 60-30-10 palette rule (60% dominant neutral, 30% structural contrast, 10% high-energy accent), semantic tokens (`brand-primary`, `accent`, `muted`). | Raw arbitrary hex codes scattered everywhere, oversaturated neon eyesores, muddy low-contrast grays. |
| **5** | **Typography Discipline** | HIGH | Maximum 2 complementary font families (e.g. Space Grotesk display + Inter sans), base 16px body, line-height 1.5–1.6, line-length 45–75 chars. | Using >3 font families, body text <13px, compressed line-height causing illegible text. |
| **6** | **Component Craft & Cards** | HIGH | Subtle border radius (8px–16px), soft diffuse layered shadows (`0 2px 10px rgba(0,0,0,0.05)`), elevated hover states, clear padding. | Harsh black 1px borders, generic drop shadows with 0 blur, unpadded edge-to-edge content. |
| **7** | **Layout & Responsive Flow** | HIGH | Mobile-first breakpoints (sm 640, md 768, lg 1024, xl 1280), no horizontal overflow, flexible flex/grid layouts, safe areas. | Fixed pixel container widths breaking on mobile, horizontal scrollbars, disabled pinch-to-zoom. |
| **8** | **Motion & Animation** | MEDIUM | Purposeful micro-animations (150ms–300ms easing `cubic-bezier(0.16, 1, 0.3, 1)`), spatial continuity, respect `prefers-reduced-motion`. | Long sluggish animations (>500ms), animating heavy properties (`width`, `top`) instead of `transform`/`opacity`. |
| **9** | **Forms & User Feedback** | MEDIUM | Floating or persistent field labels, clear inline validation near input, disabled button state with spinner during async actions. | Placeholder-only labels (disappear on typing), error messages only at the top of a long page. |
| **10**| **Data Visualization & Chips** | MEDIUM | Semantic badge pills, clear metric labels, distinct categorical colors with shape/icon redundancy, tooltip details. | Relying on color alone to convey success/danger, cramped data tables without column alignment. |

---

## Design Systems & Aesthetic Directions

### 1. Clean Tech Light (Stripe, Linear, Apple, Vercel)
- **Backgrounds**: Crisp white (`#FFFFFF`) with layered porcelain slate (`#F8FAFC`, `#F1F5F9`).
- **Typography**: Deep slate (`#0F172A` headings, `#334155` body, `#64748B` muted captions).
- **Accents**: High-vibrancy brand color (e.g. FPT Orange `#FF6B00`, Electric Blue `#2563EB`, Emerald `#10B981`).
- **Elevated Surfaces**: Frosted glass cards (`rgba(255, 255, 255, 0.92)` with `backdrop-blur-md`, `border: 1px solid rgba(226, 232, 240, 0.8)`, and diffuse multi-layer ambient shadow).
- **Code & Tech Blocks**: Sleek slate-900 developer console boxes embedded within light pages to provide high-tech contrast without making the entire website gloomy.

### 2. High-Tech Glassmorphism
- **Panels**: `backdrop-filter: blur(16px)`, translucent white or dark tints, 1px gradient border (`border-white/10` to `border-white/20`).
- **Depth**: Subtle ambient lighting radial blobs (`blur-[140px]`) behind key sections (Hero, Prizes, Register CTA).
- **Interactive States**: Hover lift `-translate-y-1` accompanied by glowing soft border transition.

---

## Pre-Delivery UI/UX QA Checklist

Before considering any UI complete, verify:
- [ ] **Contrast Check**: All body text achieves ≥4.5:1 against its background.
- [ ] **Mobile Audit**: Open or resize to 375px; verify 0 horizontal scroll and legible typography.
- [ ] **Hit Targets**: All buttons, links, and switches have minimum 44×44px interactive tap area.
- [ ] **Focus Rings**: Keyboard navigation (Tab key) clearly highlights active interactive elements.
- [ ] **Feedback States**: Every button and link exhibits distinct hover, active, and focus states.
- [ ] **Content Hierarchy**: Eye flows naturally: Eyebrow badge ➔ Hero H1 ➔ Supporting Subtitle ➔ Primary CTA ➔ Secondary Action.
- [ ] **No AI Clichés**: No generic dark purple neon grids unless explicitly requested; favor curated, intentional design systems.
