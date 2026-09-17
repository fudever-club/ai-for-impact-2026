import { describe, expect, it } from 'vitest';
import { SiteConfigSchema } from '../content/schema';
import { siteConfig } from '../content/site-config';

describe('Site Configuration & Schema Validation', () => {
  it('validates the normalized shared configuration', () => {
    expect(SiteConfigSchema.safeParse(siteConfig).success).toBe(true);
  });

  it('keeps registration and approved event dates in sequence', () => {
    const start = Date.parse(siteConfig.registration.opensAt);
    const end = Date.parse(siteConfig.registration.closesAt);
    const finalRound = Date.parse(
      siteConfig.stages.find((stage) => stage.id === 'stage-5')!.startsAt
    );

    expect(start).toBeLessThan(end);
    expect(end).toBeLessThan(finalRound);
  });

  it('keeps configured prizes as nonnegative integer values behind approval gates', () => {
    for (const prize of Object.values(siteConfig.prizes)) {
      expect(Number.isInteger(prize.amount)).toBe(true);
      expect(prize.amount).toBeGreaterThanOrEqual(0);
      expect(prize.approval).toBe('withheld');
    }
  });

  it('keeps organizer identities in shared configuration behind approval gates', () => {
    const fptu = siteConfig.organizers.find((organizer) => organizer.id === 'fptu');

    expect(fptu?.name).toContain('Đại học FPT');
    expect(siteConfig.organizers.every((organizer) => organizer.approval === 'withheld')).toBe(
      true
    );
  });
});
