import { describe, expect, it } from 'vitest';
import { enContent } from '../content/locales/en';
import { viContent } from '../content/locales/vi';
import { siteConfig } from '../content/site-config';
import { getCompetitionViewModel } from '../content/view-model';

describe('Bilingual Content Parity & Completeness', () => {
  it('keys localized stage copy by every shared stage ID', () => {
    const sharedStageIds = siteConfig.stages.map((stage) => stage.id).sort();

    expect(Object.keys(viContent.journey.stages).sort()).toEqual(sharedStageIds);
    expect(Object.keys(enContent.journey.stages).sort()).toEqual(sharedStageIds);
  });

  it('returns only approved stages in shared sequence order', () => {
    const expectedIds = siteConfig.stages
      .filter((stage) => stage.approval === 'approved')
      .sort((left, right) => left.sequence - right.sequence)
      .map((stage) => stage.id);

    expect(getCompetitionViewModel('vi').journey.stages.map((stage) => stage.id)).toEqual(
      expectedIds
    );
    expect(getCompetitionViewModel('en').journey.stages.map((stage) => stage.id)).toEqual(
      expectedIds
    );
  });

  it('has matching theme records', () => {
    expect(viContent.themes.items.length).toBe(5);
    expect(enContent.themes.items.length).toBe(viContent.themes.items.length);
    viContent.themes.items.forEach((viTheme, index) => {
      expect(viTheme.id).toBe(enContent.themes.items[index].id);
    });
  });

  it('keys localized prize copy by every shared prize ID', () => {
    const sharedPrizeIds = Object.keys(siteConfig.prizes).sort();

    expect(Object.keys(viContent.prizes.items).sort()).toEqual(sharedPrizeIds);
    expect(Object.keys(enContent.prizes.items).sort()).toEqual(sharedPrizeIds);
  });

  it('has matching navigation anchors', () => {
    expect(viContent.nav.links.length).toBe(enContent.nav.links.length);
    viContent.nav.links.forEach((viNav, index) => {
      expect(viNav.id).toBe(enContent.nav.links[index].id);
      expect(viNav.href).toBe(enContent.nav.links[index].href);
    });
  });

  it('has complete FAQ translations', () => {
    expect(viContent.faq.items.length).toBeGreaterThanOrEqual(8);
    expect(enContent.faq.items.length).toBe(viContent.faq.items.length);
  });

  it('uses the shared registration destination in each production view-model', () => {
    expect(getCompetitionViewModel('vi').registration.url).toBe(siteConfig.registration.url);
    expect(getCompetitionViewModel('en').registration.url).toBe(siteConfig.registration.url);
  });
});
