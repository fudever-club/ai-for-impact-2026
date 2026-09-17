import { describe, it, expect } from 'vitest';
import { viContent } from '../content/locales/vi';
import { enContent } from '../content/locales/en';
import { siteConfig } from '../content/site-config';

describe('Bilingual Content Parity & Completeness', () => {
  it('should have matching number of stages (exactly 5)', () => {
    expect(viContent.journey.stages.length).toBe(5);
    expect(enContent.journey.stages.length).toBe(5);
  });

  it('should have identical stage IDs and sequences', () => {
    viContent.journey.stages.forEach((viStage, index) => {
      const enStage = enContent.journey.stages[index];
      expect(viStage.id).toBe(enStage.id);
      expect(viStage.sequence).toBe(enStage.sequence);
      expect(viStage.theme).toBe(enStage.theme);
    });
  });

  it('should have matching number of themes (exactly 5)', () => {
    expect(viContent.themes.items.length).toBe(5);
    expect(enContent.themes.items.length).toBe(5);
    viContent.themes.items.forEach((viTheme, idx) => {
      expect(viTheme.id).toBe(enContent.themes.items[idx].id);
    });
  });

  it('should have matching prize items and amounts', () => {
    expect(viContent.prizes.items.length).toBe(enContent.prizes.items.length);
    viContent.prizes.items.forEach((viPrize, idx) => {
      const enPrize = enContent.prizes.items[idx];
      expect(viPrize.id).toBe(enPrize.id);
      expect(viPrize.amount).toBe(enPrize.amount);
    });
  });

  it('should have matching navigation anchors', () => {
    expect(viContent.nav.links.length).toBe(enContent.nav.links.length);
    viContent.nav.links.forEach((viNav, idx) => {
      expect(viNav.id).toBe(enContent.nav.links[idx].id);
      expect(viNav.href).toBe(enContent.nav.links[idx].href);
    });
  });

  it('should have non-empty FAQ items', () => {
    expect(viContent.faq.items.length).toBeGreaterThanOrEqual(8);
    expect(enContent.faq.items.length).toBe(viContent.faq.items.length);
  });

  it('should use single source of truth registration link', () => {
    expect(siteConfig.registrationUrl).toContain('docs.google.com/forms');
  });
});
