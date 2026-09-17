import { describe, expect, it } from 'vitest';
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
  it('does not return withheld prizes, documents, or disputed facts', async () => {
    const viewModelModule = await loadViewModelModule();
    expect(viewModelModule).toBeDefined();
    if (!viewModelModule) return;

    const viewModel = viewModelModule.getCompetitionViewModel('vi');
    const serialized = JSON.stringify(viewModel);

    expect(viewModel.prizes.items).toEqual([]);
    expect(viewModel.documents).toEqual({});
    expect(viewModel.journey.stages.map((stage: UnknownRecord) => stage.id)).not.toContain(
      'stage-3'
    );
    expect(serialized).not.toContain('2026-09-28T23:59:00+07:00');
    expect(serialized).not.toContain('2026-10-07T14:00:00+07:00');
    expect(serialized).not.toContain('2026-10-28T23:59:00+07:00');
    expect(serialized).not.toContain('disputedFacts');
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
