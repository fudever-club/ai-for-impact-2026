import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import path from 'node:path';

describe('Mobile & Tablet Responsive Contracts', () => {
  it('enforces global viewport overflow prevention in globals.css', () => {
    const cssPath = path.resolve(__dirname, '../app/globals.css');
    const cssContent = readFileSync(cssPath, 'utf-8');

    expect(cssContent).toContain('overflow-x: hidden');
    expect(cssContent).toContain('max-width: 100vw');
    expect(cssContent).toContain('width: 100%');
  });

  it('ensures SiteHeader mobile navigation button is visible on tablet viewports (lg:hidden)', () => {
    const headerPath = path.resolve(__dirname, '../components/layout/SiteHeader.tsx');
    const headerContent = readFileSync(headerPath, 'utf-8');

    // Button must not use sm:hidden which would hide it between 640px and 1023px
    expect(headerContent).toContain('lg:hidden');
    expect(headerContent).not.toMatch(/className="[^"]*\bsm:hidden\b[^"]*"[^>]*aria-label="Toggle menu"/);
  });

  it('prevents flex child blowout in ProgrammingChallengeSection compiler window', () => {
    const challengePath = path.resolve(
      __dirname,
      '../components/sections/ProgrammingChallengeSection.tsx'
    );
    const challengeContent = readFileSync(challengePath, 'utf-8');

    // Long command block must have min-w-0 flex-1 and overflow-x-auto to prevent flexbox auto min-width blowout
    expect(challengeContent).toContain('min-w-0 flex-1');
    expect(challengeContent).toContain('overflow-x-auto');
  });

  it('enforces full-width responsive CTA button in RegisterSection for narrow viewports', () => {
    const registerPath = path.resolve(__dirname, '../components/sections/RegisterSection.tsx');
    const registerContent = readFileSync(registerPath, 'utf-8');

    // Register button must be w-full sm:w-auto to avoid breaking 320px containers
    expect(registerContent).toContain('w-full sm:w-auto');
  });

  it('ensures handbook download attribute never leaks internal _V4 suffix', () => {
    const footerPath = path.resolve(__dirname, '../components/layout/SiteFooter.tsx');
    const footerContent = readFileSync(footerPath, 'utf-8');

    expect(footerContent).toContain('So_tay_thi_sinh_AI-for-Impact-2026.docx');
    expect(footerContent).not.toContain('So_tay_thi_sinh_AI-for-Impact-2026_V4.docx');
  });
});
