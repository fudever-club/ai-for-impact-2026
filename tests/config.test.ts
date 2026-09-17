import { describe, it, expect } from 'vitest';
import { siteConfig } from '../content/site-config';
import { SiteConfigSchema } from '../content/schema';

describe('Site Configuration & Schema Validation', () => {
  it('should validate siteConfig against SiteConfigSchema', () => {
    const parseResult = SiteConfigSchema.safeParse(siteConfig);
    expect(parseResult.success).toBe(true);
  });

  it('should have valid registration and final dates in sequence', () => {
    const start = new Date(siteConfig.keyDates.registrationStart).getTime();
    const end = new Date(siteConfig.keyDates.registrationEnd).getTime();
    const finalRound = new Date(siteConfig.keyDates.finalRound).getTime();

    expect(start).toBeLessThan(end);
    expect(end).toBeLessThan(finalRound);
  });

  it('should have positive prize amounts', () => {
    expect(siteConfig.prizes.first.amount).toBe(5000000);
    expect(siteConfig.prizes.second.amount).toBe(3000000);
    expect(siteConfig.prizes.third.amount).toBe(2000000);
    expect(siteConfig.prizes.impact.amount).toBe(1000000);
    expect(siteConfig.prizes.bestAgent.amount).toBe(1000000);
  });

  it('should have required organizers defined', () => {
    expect(siteConfig.organizers.length).toBeGreaterThanOrEqual(2);
    const fptu = siteConfig.organizers.find((o) => o.id === 'fptu');
    expect(fptu).toBeDefined();
    expect(fptu?.name).toContain('Đại học FPT');
  });
});
