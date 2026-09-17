# Task 1 implementation report

## Status

DONE — Task 1 is implemented and freshly verified on branch `codex/ai-for-impact-implementation`.

## Implementation summary

- Added strict shared operational types and Zod validation for explicit-offset timestamps, stage identity/order, integer nonnegative prize amounts, locale completeness, and strict rejection of operational fields in locale records.
- Added `validateContent()` and the deep-module interface `getCompetitionViewModel(locale)` as the single seam between shared operational configuration and presentation callers.
- Kept disputed video deadline, finalist count, final duration, baseline freeze, and training schedule values only in shared config with `approval: 'withheld'`; withheld stage facts are filtered from production output.
- Kept current document URLs, prize entries, and organizer records behind `withheld` gates. Production view-models omit document destinations and prize/organizer items until approved.
- Removed operational dates, URLs, prize numbers, organizer IDs, and approval state from VI/EN locale dictionaries. Localized stage/prize prose is keyed by shared IDs.
- Derived approved date and currency display through `Intl.DateTimeFormat` and `Intl.NumberFormat`.
- Migrated the locale page, all affected section/layout callers, registration countdown logic, and the existing journey visual input to `CompetitionViewModel` data. Prizes, organizers, document actions, and the baseline notice render conditionally.
- Updated existing config/locale tests to verify the normalized model and approval behavior.

## Files changed

- `.eslintrc.json`
- `app/[locale]/page.tsx`
- `components/layout/SiteFooter.tsx`
- `components/layout/SiteHeader.tsx`
- `components/sections/AboutSection.tsx`
- `components/sections/EvaluationSection.tsx`
- `components/sections/FAQSection.tsx`
- `components/sections/HeroSection.tsx`
- `components/sections/JourneySection.tsx`
- `components/sections/OrganizersSection.tsx`
- `components/sections/PrizesSection.tsx`
- `components/sections/ProgrammingChallengeSection.tsx`
- `components/sections/RegisterSection.tsx`
- `components/sections/ThemesSection.tsx`
- `content/locales/en.ts`
- `content/locales/vi.ts`
- `content/schema.ts`
- `content/site-config.ts`
- `content/types.ts`
- `content/view-model.ts` (new)
- `lib/registration.ts`
- `tests/config.test.ts`
- `tests/content-model.test.ts` (new)
- `tests/locales.test.ts`

`components/visuals/JourneyPath.tsx` required no source edit: its existing `CompetitionStage[]` interface is the normalized stage interface returned by `CompetitionViewModel` and is now fed only by `JourneySection` through that seam.

## Scoped ESLint configuration rationale

The worktree is nested beneath another checkout containing the same Next ESLint config. Without a cascade stop, `npm run lint` loaded both configs and exited 1 with a conflicting `@next/next` plugin error before checking source. Adding only `"root": true` to this repository's `.eslintrc.json` prevents parent-config traversal. No lint rules, dependencies, scripts, or application behavior changed. The required plain `npm run lint` command then completed with no warnings or errors.

## RED evidence

Command: `npm test -- tests/content-model.test.ts`

Observed at 12:06:45 local time: exit 1, 1 failed file, 10 failed tests. Failures demonstrated that the old model accepted malformed offset timestamps, duplicate stage IDs/sequences, negative/fractional prize amounts, had no strict locale schema, and had no validated production view-model.

## Focused GREEN evidence

Command: `npm test -- tests/content-model.test.ts tests/config.test.ts tests/locales.test.ts`

Final focused result: exit 0; 3 test files passed; 21 tests passed. Vitest emitted the pre-existing Vite native config-loader warning documented below.

## Fresh final verification output

### `npm test`

Exit code: 0

```text
> ai-for-impact-2026@1.0.0 test
> vitest run

(!) Your Vite config uses features that are unsupported by `configLoader: 'native'`, which is planned to become the default in a future major version of Vite:
  - ESM syntax in a file loaded as CommonJS (vitest.config.ts:1:1). Use a `.mjs` extension or set `"type": "module"` in the closest package.json
Set `VITE_CONFIG_NATIVE_IGNORE_WARNING=true` to suppress this warning.

 RUN  v4.1.11 C:/Users/ADMIN/_Project/AIforImpact/.worktrees/implementation

 Test Files  4 passed (4)
      Tests  27 passed (27)
   Start at  12:28:15
   Duration  684ms (transform 163ms, setup 0ms, import 243ms, tests 68ms, environment 1.96s)
```

### `npm run typecheck`

Exit code: 0

```text
> ai-for-impact-2026@1.0.0 typecheck
> tsc --noEmit
```

### `npm run lint`

Exit code: 0

```text
> ai-for-impact-2026@1.0.0 lint
> next lint

✔ No ESLint warnings or errors
```

### `npm run build`

Exit code: 0

```text
> ai-for-impact-2026@1.0.0 build
> next build

   Creating an optimized production build...
 ✓ Compiled successfully
   Skipping linting
   Checking validity of types...
   Collecting page data...
   Generating static pages (0/7)...
   Generating static pages (1/7)
   Generating static pages (3/7)
   Generating static pages (5/7)
 ✓ Generating static pages (7/7)
   Finalizing page optimization...

Route (app)                              Size     First Load JS
┌ ○ /                                    389 B          79.8 kB
├ ○ /_not-found                          872 B          80.2 kB
└ ● /[locale]                            48.9 kB         128 kB
    ├ /vi
    └ /en
+ First Load JS shared by all            79.4 kB
  ├ chunks/864-0c41ee5ecb0a5df0.js       26.6 kB
  ├ chunks/fd9d1056-a4abffa2c91dfa48.js  50.9 kB
  ├ chunks/main-app-197c41a0744b7f2b.js  219 B
  └ chunks/webpack-ac69039c77d47d2f.js   1.67 kB

○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
```

### `git diff --check`

Exit code: 0. No whitespace errors. Git emitted line-ending notices that LF working-copy lines will become CRLF when Git next writes the changed files; these are repository/platform normalization notices, not diff errors.

## Self-review

- Confirmed application callers under `app`, `components`, and `lib` no longer import raw `siteConfig` or locale dictionaries; the validated view-model is the presentation seam.
- Confirmed locale dictionaries contain no URLs, ISO timestamps, formatted operational dates, prize amounts/currencies/quantities, approval values, or embedded stage/prize ID fields.
- Confirmed the named withheld values are found only in `content/site-config.ts` and are absent from serialized production view-model tests.
- Confirmed document actions, prize sections, organizer sections, and baseline notice fail closed.
- Confirmed no SEO/layout-routing redesign, navigation redesign, assets, styling, dependency files, or TencentDB files were changed.
- Confirmed source documents and unrelated user changes were preserved.
- No subagents were dispatched.

## Concerns

- Vitest emits a pre-existing warning about future Vite native config loading because `vitest.config.ts` uses ESM syntax while the package is CommonJS. Resolving that belongs to the later QA/toolchain task and was intentionally not changed here.
- Approval remains withheld for disputed facts, current document URLs, prize entries, and organizer records. Their production presentation is intentionally absent until organizer approval changes shared config.

---

# Review Round 1 closure

## Implementation summary

- Separated stage publication approval from schedule approval. All five journey stages remain visible in stable sequence; stage 3 uses localized pending-confirmation copy and exposes no withheld timestamps.
- Removed unapproved organizer names, roles, and institutional attribution from locale content, while organizer records remain approval-gated in shared config.
- Removed navigation anchors for unavailable prize and organizer sections and corrected FAQ copy so withheld documents are not claimed as available.
- Moved the approved event location to one shared config field and used it in the view-model, programming metadata, and page JSON-LD. The footer now renders the view-model domain.
- Replaced hardcoded prize quantities with localized labels derived from `PrizeItem.quantity`, and removed duplicated quantity text from locale prize titles.
- Hardened validation against impossible calendar dates and all non-HTTPS public URL schemes.

## Round 1 files changed

- `app/[locale]/page.tsx`
- `components/layout/SiteFooter.tsx`
- `components/sections/PrizesSection.tsx`
- `content/locales/en.ts`
- `content/locales/vi.ts`
- `content/schema.ts`
- `content/site-config.ts`
- `content/types.ts`
- `content/view-model.ts`
- `tests/content-model.test.ts`
- `tests/locales.test.ts`

`.eslintrc.json` remains unchanged with `"root": true`. This scoped root is still required to stop ESLint from loading the parent checkout's duplicate Next plugin configuration; it changes no lint rule or application behavior.

## Round 1 RED evidence

Command: `npm test -- tests/content-model.test.ts tests/locales.test.ts`

Exit code: 1. Vitest reported 2 failed files, 13 failed tests, and 15 passed tests. The failures covered impossible date normalization, `javascript:`/`data:`/`ftp:`/HTTP URLs, the missing fifth stage, unavailable navigation anchors, inaccurate document availability copy, organizer attribution leaks, missing event-location SSOT, hardcoded footer domain, and hardcoded prize quantities.

Additional tightened regressions were demonstrated before their fixes:

- `npm test -- tests/content-model.test.ts -t "keeps withheld organizer attribution"`: exit 1; 1 expected failure, proving organizer names remained elsewhere in locale dictionaries.
- `npm test -- tests/content-model.test.ts -t "renders localized prize quantities"`: exit 1; 1 expected failure, proving `01` quantities remained embedded in Vietnamese prize titles.

## Round 1 focused GREEN evidence

Command: `npm test -- tests/content-model.test.ts tests/locales.test.ts`

Exit code: 0. Test Files: 2 passed. Tests: 28 passed. Duration: 682 ms.

## Round 1 full verification

### `npm test`

Exit code: 0. Test Files: 4 passed. Tests: 38 passed. Duration: 704 ms.

Vitest emitted the existing future native config-loader warning for ESM syntax in `vitest.config.ts`; it did not affect execution.

### `npm run typecheck`

Exit code: 0.

```text
> ai-for-impact-2026@1.0.0 typecheck
> tsc --noEmit
```

### `npm run lint`

Exit code: 0.

```text
> ai-for-impact-2026@1.0.0 lint
> next lint

✔ No ESLint warnings or errors
```

### `npm run build`

Exit code: 0. Next compiled successfully, validated types, generated all 7 static pages, and emitted `/vi` and `/en`. The only notice was the existing outdated `caniuse-lite` recommendation.

### `git diff --check`

Exit code: 0. No whitespace errors. Git emitted Windows line-ending normalization notices only.

## Round 1 self-review

- Verified stage 3 is present as `stage-3`, while its withheld start/end timestamps remain only in shared config and are absent from the serialized production view-model.
- Verified withheld prizes, documents, and organizers remain absent from production output and their unavailable sections have no navigation anchors.
- Verified locale dictionaries no longer contain organizer names/roles, public URLs, schedule timestamps, prize quantities, or approval state.
- Verified event location has one operational source and JSON-LD reads through the validated view-model.
- Verified public URL schemas allow HTTPS only and offset timestamps reject impossible calendar dates.
- Confirmed `.eslintrc.json` still has `root: true` and no SEO/routing work beyond JSON-LD location SSOT, redesign, styling, assets, dependencies, or TencentDB changes were made.
- No subagents were used.

## Round 1 concerns

- The pre-existing Vitest config-loader warning and Browserslist database notice remain non-blocking toolchain maintenance items outside Task 1 scope.
- Documents, prizes, organizer records, and disputed schedule facts remain withheld until shared-config approval changes.

---

# Review Round 2 closure

## Implementation summary

- Replaced the SiteHeader's hardcoded institutional attribution with the localized neutral `content.hero.eyebrow` value from `CompetitionViewModel`.
- Replaced institutional attribution in root Twitter title and description metadata with neutral AI for Impact 2026 wording. The confirmed event location was not changed.
- Replaced positional prize podium indexing with explicit `first`, `second`, and `third` ID selection through `selectPrizePodium`.
- Added regressions for both attribution surfaces and a sparse approval case proving an approved second prize cannot render in the champion slot.

## Round 2 files changed

- `app/layout.tsx`
- `components/layout/SiteHeader.tsx`
- `components/sections/PrizesSection.tsx`
- `components/sections/prize-podium.ts` (new)
- `tests/content-model.test.ts`

## Round 2 RED evidence

- `npm test -- tests/content-model.test.ts -t "sources neutral SiteHeader attribution"`: exit 1; 1 failed and 21 skipped. The header still contained `FPT University Đà Nẵng` and did not consume `content.hero.eyebrow`.
- `npm test -- tests/content-model.test.ts -t "uses neutral AI for Impact wording"`: exit 1; 1 failed and 22 skipped. Twitter metadata still contained FPT University attribution.
- `npm test -- tests/content-model.test.ts -t "does not promote a sparse approved second prize"`: exit 1. The test suite could not resolve the not-yet-created ID-based podium selector, establishing the missing behavior seam before implementation.

## Round 2 focused GREEN evidence

- SiteHeader attribution regression: exit 0; 1 passed, 21 skipped.
- Twitter metadata regression: exit 0; 1 passed, 22 skipped.
- Sparse second-prize regression: exit 0; 1 passed, 23 skipped.
- `npm test -- tests/content-model.test.ts`: exit 0; 1 test file passed; 24 tests passed; duration 686 ms.

## Round 2 full verification

- `npm test`: exit 0; 4 test files passed; 41 tests passed; duration 702 ms. The existing future Vite native config-loader warning remained non-blocking.
- `npm run typecheck`: exit 0 (`tsc --noEmit`).
- `npm run lint`: exit 0 (`✔ No ESLint warnings or errors`).
- `npm run build`: exit 0; Next compiled successfully, validated types, generated all 7 static pages, and emitted `/vi` and `/en`. The existing `caniuse-lite` update notice remained non-blocking.
- `git diff --check`: exit 0; no whitespace errors. Git emitted Windows line-ending normalization notices only.

## Round 2 self-review

- Confirmed SiteHeader contains no hardcoded organizer attribution and reads neutral localized content from the validated view-model.
- Confirmed the Twitter metadata block contains no FPT or university attribution.
- Confirmed event location config and JSON-LD were untouched.
- Confirmed podium roles are selected only by exact prize IDs; no `topThree[index]` access remains.
- Confirmed the sparse approval regression restores shared config in `finally` and cannot leak mutation into other tests.
- Confirmed no files outside the requested header, Twitter metadata, prize mapping, tests, and report scopes were changed; no subagents were used.

## Round 2 concerns

- The pre-existing Vitest config-loader warning and Browserslist database notice remain out-of-scope, non-blocking maintenance items.

---

# Review Round 3 closure

## Implementation summary

- Removed hardcoded operational values (`Top 24` and `240 phút` / `240-minute`) from Vietnamese and English locale prose dictionaries (`content/locales/vi.ts` and `content/locales/en.ts`), replacing them with dynamic template placeholders (`{qualifiedTeams}` and `{duration}`).
- Implemented `interpolate()` and `formatAdjectiveDuration()` helpers in `content/view-model.ts` to dynamically derive stage durations and qualified team counts from `siteConfig.stages` and `siteConfig.programmingChallenge.qualifiedTeams` for both journey stages and FAQ items.
- Audited all locale prose for other numerics: confirmed marketing text (50 Teams, 7 Weeks, 3-minute video pitch guideline) are editorial non-operational prose rather than operational constraints.
- Added comprehensive mutation regression test in `tests/content-model.test.ts` verifying that mutating `qualifiedTeams` (e.g. to 32) and stage-2 duration (e.g. to 180 minutes) dynamically updates every rendered prose occurrence in both VI and EN view-models without editing locale dictionaries.

## Round 3 files changed

- `content/locales/en.ts`
- `content/locales/vi.ts`
- `content/view-model.ts`
- `tests/content-model.test.ts`

## Round 3 RED evidence

- `npx vitest run tests/content-model.test.ts`: exit 1; 1 failed and 24 passed. Failure was caught on `expect(JSON.stringify({ viContent, enContent })).not.toMatch(/Top\s*24\b|240\s*phút|240-minute/i)` proving hardcoded operational values were present in the locale dictionaries.

## Round 3 focused GREEN evidence

- `npx vitest run tests/content-model.test.ts`: exit 0; 1 test file passed; 25 tests passed; duration 670 ms.

## Round 3 full verification

- `npm test`: exit 0; 4 test files passed; 42 tests passed; duration 706 ms.
- `npm run typecheck`: exit 0 (`tsc --noEmit`).
- `npm run lint`: exit 0 (`✔ No ESLint warnings or errors`).
- `npm run build`: exit 0; Next compiled successfully, validated types, generated all 7 static pages (SSG pre-rendered `/vi` and `/en`).
- `git diff --check`: exit 0; no whitespace errors.

## Round 3 self-review

- Confirmed no hardcoded `Top 24` or `240 phút` / `240-minute` remain in `content/locales/vi.ts` or `content/locales/en.ts`.
- Confirmed mutation of `qualifiedTeams` to 32 propagates to `stage-2.output` and `metaCards.qualificationVal`.
- Confirmed mutation of `stage-2` duration to 180 minutes propagates to `stage-2.summary`, `faq-5.answer`, and `metaCards.durationVal`.
- Confirmed all prior approval gates and tests continue to pass with zero regressions.
- No subagents were dispatched.

