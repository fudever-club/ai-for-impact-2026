import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import * as schemas from '../content/schema';
import { siteConfig } from '../content/site-config';
import { enContent } from '../content/locales/en';
import { viContent } from '../content/locales/vi';

type UnknownRecord = Record<string, any>;

function clone<T>(value: T): T {
  return structuredClone(value);
}

function getCompetitionContentSchema() {
  return (schemas as UnknownRecord).CompetitionContentSchema as
    | { safeParse(value: unknown): { success: boolean } }
    | undefined;
}

function configWithOperationalModel(): UnknownRecord {
  const config = clone(siteConfig) as UnknownRecord;
  config.registration ??= {
    opensAt: config.keyDates.registrationStart,
    closesAt: config.keyDates.registrationEnd,
    url: config.registrationUrl,
  };
  config.stages ??= [
    {
      id: 'registration',
      sequence: 1,
      startsAt: config.keyDates.registrationStart,
      endsAt: config.keyDates.registrationEnd,
      theme: 'impact',
      approval: 'approved',
    },
    {
      id: 'programming',
      sequence: 2,
      startsAt: config.keyDates.programmingRound,
      theme: 'technical',
      approval: 'approved',
    },
  ];
  return config;
}

async function loadViewModelModule() {
  const modulePath = '../content/view-model';
  return import(modulePath).catch(() => undefined);
}

describe('validated operational content', () => {
  it('rejects timestamps without an explicit numeric offset', () => {
    const malformed = configWithOperationalModel();
    malformed.registration.opensAt = '2026-09-14T00:00:00';

    expect(schemas.SiteConfigSchema.safeParse(malformed).success).toBe(false);
  });

  it('rejects impossible calendar dates even when Date.parse normalizes them', () => {
    const malformed = configWithOperationalModel();
    malformed.registration.opensAt = '2026-02-30T00:00:00+07:00';

    expect(schemas.SiteConfigSchema.safeParse(malformed).success).toBe(false);
  });

  it.each([
    'javascript:alert(1)',
    'data:text/plain,not-public',
    'ftp://example.com/file',
    'http://example.com/insecure',
  ])('rejects the non-HTTPS public URL %s', (url) => {
    const malformed = configWithOperationalModel();
    malformed.registration.url = url;

    expect(schemas.SiteConfigSchema.safeParse(malformed).success).toBe(false);
  });

  it('rejects duplicate stage IDs', () => {
    const duplicated = configWithOperationalModel();
    duplicated.stages[1].id = duplicated.stages[0].id;

    expect(schemas.SiteConfigSchema.safeParse(duplicated).success).toBe(false);
  });

  it('rejects duplicate stage sequence numbers', () => {
    const duplicated = configWithOperationalModel();
    duplicated.stages[1].sequence = duplicated.stages[0].sequence;

    expect(schemas.SiteConfigSchema.safeParse(duplicated).success).toBe(false);
  });

  it.each([-1, 1.5])('rejects the invalid prize amount %s', (amount) => {
    const malformed = clone(siteConfig) as UnknownRecord;
    malformed.prizes.first.amount = amount;

    expect(schemas.SiteConfigSchema.safeParse(malformed).success).toBe(false);
  });

  it('rejects missing required locale fields', () => {
    const malformed = clone(viContent) as UnknownRecord;
    delete malformed.hero.title;

    expect(getCompetitionContentSchema()?.safeParse(malformed).success).toBe(false);
  });

  it('rejects operational fields duplicated into locale content', () => {
    const malformed = clone(enContent) as UnknownRecord;
    const firstStage = Array.isArray(malformed.journey.stages)
      ? malformed.journey.stages[0]
      : Object.values(malformed.journey.stages)[0];
    firstStage.startDate = '2026-09-14T00:00:00+07:00';

    expect(getCompetitionContentSchema()?.safeParse(malformed).success).toBe(false);
  });

  it('validates the production config and both locale dictionaries', async () => {
    const viewModelModule = await loadViewModelModule();
    expect(viewModelModule).toBeDefined();
    if (!viewModelModule) return;

    expect(viewModelModule.validateContent()).toEqual({
      config: siteConfig,
      locales: { vi: viContent, en: enContent },
    });
  });
});

describe('production competition view-model', () => {
  it('keeps all five stages while withholding only stage-3 schedule facts', async () => {
    const viewModelModule = await loadViewModelModule();
    expect(viewModelModule).toBeDefined();
    if (!viewModelModule) return;

    const viewModel = viewModelModule.getCompetitionViewModel('vi');
    const serialized = JSON.stringify(viewModel);

    expect(viewModel.prizes.items).toEqual([]);
    expect(viewModel.documents).toEqual({});
    expect(viewModel.journey.stages.map((stage: UnknownRecord) => stage.id)).toEqual([
      'stage-1',
      'stage-2',
      'stage-3',
      'stage-4',
      'stage-5',
    ]);
    const withheldScheduleStage = viewModel.journey.stages.find(
      (stage: UnknownRecord) => stage.id === 'stage-3'
    );
    expect(withheldScheduleStage).not.toHaveProperty('startDate');
    expect(withheldScheduleStage).not.toHaveProperty('endDate');
    expect(withheldScheduleStage.displayDate).toBe(viewModel.journey.schedulePending);
    expect(serialized).not.toContain('2026-09-28T23:59:00+07:00');
    expect(serialized).not.toContain('2026-10-07T14:00:00+07:00');
    expect(serialized).not.toContain('2026-10-28T23:59:00+07:00');
    expect(serialized).not.toContain('disputedFacts');
  });

  it('removes navigation for unavailable prize and organizer sections', async () => {
    const viewModelModule = await loadViewModelModule();
    expect(viewModelModule).toBeDefined();
    if (!viewModelModule) return;

    for (const locale of ['vi', 'en'] as const) {
      const hrefs = viewModelModule
        .getCompetitionViewModel(locale)
        .nav.links.map((link: UnknownRecord) => link.href);
      expect(hrefs).not.toContain('#prizes');
      expect(hrefs).not.toContain('#organization');
    }
  });

  it('does not claim withheld documents are linked from navigation', async () => {
    const viewModelModule = await loadViewModelModule();
    expect(viewModelModule).toBeDefined();
    if (!viewModelModule) return;

    const viFaq = viewModelModule
      .getCompetitionViewModel('vi')
      .faq.items.find((item: UnknownRecord) => item.id === 'faq-8');
    const enFaq = viewModelModule
      .getCompetitionViewModel('en')
      .faq.items.find((item: UnknownRecord) => item.id === 'faq-8');

    expect(viFaq.answer).not.toMatch(/gắn link trực tiếp|thanh điều hướng/i);
    expect(enFaq.answer).not.toMatch(/accessible via|top navigation|links on this website/i);
  });

  it('keeps withheld organizer attribution out of public copy', async () => {
    const viewModelModule = await loadViewModelModule();
    expect(viewModelModule).toBeDefined();
    if (!viewModelModule) return;

    for (const locale of ['vi', 'en'] as const) {
      const viewModel = viewModelModule.getCompetitionViewModel(locale);
      const publicAttributionCopy = JSON.stringify({
        endorsement: viewModel.hero.endorsement,
        organizers: viewModel.organizers,
        footer: {
          copyright: viewModel.footer.copyright,
          disclaimer: viewModel.footer.disclaimer,
        },
      });
      expect(viewModel.organizers.items).toEqual([]);
      expect(publicAttributionCopy).not.toMatch(
        /FPT|ICPDP|Kỹ thuật Phần mềm|Software Engineering|BM SE|BM CF|CF Department/i
      );
    }

    expect(JSON.stringify({ viContent, enContent })).not.toMatch(
      /FPT|ICPDP|Kỹ thuật Phần mềm|Software Engineering|BM SE|BM CF|CF Department/i
    );
  });

  it('exposes the event location once through shared config and the view-model', async () => {
    const viewModelModule = await loadViewModelModule();
    expect(viewModelModule).toBeDefined();
    if (!viewModelModule) return;

    const config = siteConfig as UnknownRecord;
    expect(config.eventLocation).toBe('Trường Đại học FPT Đà Nẵng');
    expect(config.programmingChallenge).not.toHaveProperty('location');
    expect(viewModelModule.getCompetitionViewModel('en').event.location).toBe(
      config.eventLocation
    );
  });

  it('renders the footer domain from the view-model', async () => {
    const viewModelModule = await loadViewModelModule();
    expect(viewModelModule).toBeDefined();
    if (!viewModelModule) return;

    expect(viewModelModule.getCompetitionViewModel('en').event.domain).toBe(siteConfig.domain);
    const footerSource = readFileSync(
      path.join(process.cwd(), 'components/layout/SiteFooter.tsx'),
      'utf8'
    );
    expect(footerSource).toContain('{content.event.domain}');
    expect(footerSource).not.toContain('AI.Impact.fptu.vn');
  });

  it('renders localized prize quantities from PrizeItem.quantity', async () => {
    const viewModelModule = await loadViewModelModule();
    expect(viewModelModule).toBeDefined();
    if (!viewModelModule) return;

    const originalPrize = clone(siteConfig.prizes.first);
    try {
      siteConfig.prizes.first.approval = 'approved';
      siteConfig.prizes.first.quantity = 2;

      expect(viewModelModule.getCompetitionViewModel('vi').prizes.items[0].quantity).toBe(2);
      expect(viewModelModule.getCompetitionViewModel('en').prizes.items[0].quantity).toBe(2);
      const prizesSource = readFileSync(
        path.join(process.cwd(), 'components/sections/PrizesSection.tsx'),
        'utf8'
      );
      expect(prizesSource).toContain("locale === 'vi'");
      expect(prizesSource).toContain('.quantity');
      expect(prizesSource).toContain('Quantity:');
      expect(prizesSource).toContain('Số lượng:');
      expect(prizesSource).not.toMatch(/Số lượng:\s*01/);
      expect(JSON.stringify({ vi: viContent.prizes, en: enContent.prizes })).not.toMatch(
        /(?:Số lượng|Quantity)\s*:?\s*01|01\s+Giải/i
      );
    } finally {
      siteConfig.prizes.first = originalPrize;
    }
  });

  it('formats approved dates for the requested locale with Intl', async () => {
    const viewModelModule = await loadViewModelModule();
    expect(viewModelModule).toBeDefined();
    if (!viewModelModule) return;

    const vi = viewModelModule.getCompetitionViewModel('vi');
    const en = viewModelModule.getCompetitionViewModel('en');
    const viProgramming = vi.journey.stages.find(
      (stage: UnknownRecord) => stage.id === 'stage-2'
    );
    const enProgramming = en.journey.stages.find(
      (stage: UnknownRecord) => stage.id === 'stage-2'
    );

    expect(viProgramming.displayDate).toContain('02/10/2026');
    expect(enProgramming.displayDate).toContain('10/02/2026');
    expect(viProgramming.displayDate).not.toBe(enProgramming.displayDate);
  });
});
