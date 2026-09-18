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
    expect(viewModel.documents).toEqual({
      handbookUrl: '/docs/So_tay_thi_sinh_AI-for-Impact-2026_V4.docx',
      rulesUrl: '/docs/So_tay_thi_sinh_AI-for-Impact-2026_V4.docx',
    });
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

  it('removes navigation for unavailable prize section and unlisted organizer anchor', async () => {
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

  it('keeps withheld organizer attribution out of public copy while exposing approved host', async () => {
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
      expect(viewModel.organizers.items).toEqual([
        {
          id: 'fptu',
          name: 'Trường Đại học FPT Đà Nẵng',
          shortName: 'FPT University Đà Nẵng',
          role: 'Đơn vị chỉ đạo & đăng cai tổ chức',
          logo: '/brand/fpt-university.png',
        },
      ]);
      expect(publicAttributionCopy).not.toMatch(
        /ICPDP|Kỹ thuật Phần mềm|Software Engineering|BM SE|BM CF|CF Department/i
      );
    }

    expect(JSON.stringify({ viContent, enContent })).not.toMatch(
      /ICPDP|Kỹ thuật Phần mềm|Software Engineering|BM SE|BM CF|CF Department/i
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

  it('sources neutral SiteHeader attribution from localized view-model content', async () => {
    const viewModelModule = await loadViewModelModule();
    expect(viewModelModule).toBeDefined();
    if (!viewModelModule) return;

    expect(viewModelModule.getCompetitionViewModel('en').hero.eyebrow).toBe(
      'AGENTIC INNOVATION CHALLENGE 2026'
    );
    const headerSource = readFileSync(
      path.join(process.cwd(), 'components/layout/SiteHeader.tsx'),
      'utf8'
    );
    expect(headerSource).toContain('{content.hero.eyebrow}');
    expect(headerSource).not.toContain('FPT University Đà Nẵng');
  });

  it('uses neutral AI for Impact wording in root Twitter metadata', () => {
    const layoutSource = readFileSync(path.join(process.cwd(), 'app/layout.tsx'), 'utf8');
    const twitterBlock = layoutSource.slice(
      layoutSource.indexOf('twitter:'),
      layoutSource.indexOf('robots:')
    );

    expect(twitterBlock).toContain("title: 'AI for Impact 2026'");
    expect(twitterBlock).toContain('AI for Impact 2026 – Agentic Innovation Challenge');
    expect(twitterBlock).not.toMatch(/FPT|Đại học/i);
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

  it('does not promote a sparse approved second prize into the champion slot', async () => {
    const viewModelModule = await loadViewModelModule();
    const podiumModule = await import('../components/sections/prize-podium').catch(
      () => undefined
    );
    expect(viewModelModule).toBeDefined();
    expect(podiumModule).toBeDefined();
    if (!viewModelModule || !podiumModule) return;

    const originalPrizes = clone(siteConfig.prizes);
    try {
      Object.values(siteConfig.prizes).forEach((prize) => {
        prize.approval = 'withheld';
      });
      siteConfig.prizes.second.approval = 'approved';

      const items = viewModelModule.getCompetitionViewModel('en').prizes.items;
      const podium = podiumModule.selectPrizePodium(items);

      expect(items.map((prize: UnknownRecord) => prize.id)).toEqual(['second']);
      expect(podium.first).toBeUndefined();
      expect(podium.second?.id).toBe('second');
      expect(podium.third).toBeUndefined();
    } finally {
      Object.assign(siteConfig.prizes, originalPrizes);
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

  it('derives qualified-team and stage-2 duration dynamically in prose without locale drift', async () => {
    const viewModelModule = await loadViewModelModule();
    expect(viewModelModule).toBeDefined();
    if (!viewModelModule) return;

    // 1. Locale dictionaries must not hardcode operational values
    expect(JSON.stringify({ viContent, enContent })).not.toMatch(/Top\s*24\b|240\s*phút|240-minute/i);

    // 2. Base view model has current values derived
    const viBase = viewModelModule.getCompetitionViewModel('vi');
    const enBase = viewModelModule.getCompetitionViewModel('en');
    const viStage2 = viBase.journey.stages.find((s: UnknownRecord) => s.id === 'stage-2');
    const enStage2 = enBase.journey.stages.find((s: UnknownRecord) => s.id === 'stage-2');
    const viFaq5 = viBase.faq.items.find((i: UnknownRecord) => i.id === 'faq-5');
    const enFaq5 = enBase.faq.items.find((i: UnknownRecord) => i.id === 'faq-5');

    expect(viStage2.summary).toContain('240 phút');
    expect(enStage2.summary).toContain('240-minute');
    expect(viStage2.output).toContain('Top 24');
    expect(enStage2.output).toContain('Top 24');
    expect(viFaq5.answer).toContain('240 phút');
    expect(enFaq5.answer).toContain('240-minute');

    // 3. Mutate qualifiedTeams and stage-2 duration
    const originalQualified = siteConfig.programmingChallenge.qualifiedTeams;
    const stage2 = siteConfig.stages.find((s) => s.id === 'stage-2')!;
    const originalEndsAt = stage2.endsAt;

    try {
      siteConfig.programmingChallenge.qualifiedTeams = 32;
      stage2.endsAt = '2026-10-02T11:00:00+07:00'; // 180 minutes

      const viMutated = viewModelModule.getCompetitionViewModel('vi');
      const enMutated = viewModelModule.getCompetitionViewModel('en');
      const viMutStage2 = viMutated.journey.stages.find((s: UnknownRecord) => s.id === 'stage-2');
      const enMutStage2 = enMutated.journey.stages.find((s: UnknownRecord) => s.id === 'stage-2');
      const viMutFaq5 = viMutated.faq.items.find((i: UnknownRecord) => i.id === 'faq-5');
      const enMutFaq5 = enMutated.faq.items.find((i: UnknownRecord) => i.id === 'faq-5');

      expect(viMutStage2.summary).toContain('180 phút');
      expect(enMutStage2.summary).toContain('180-minute');
      expect(viMutStage2.summary).not.toContain('240');
      expect(enMutStage2.summary).not.toContain('240');

      expect(viMutStage2.output).toContain('Top 32');
      expect(enMutStage2.output).toContain('Top 32');
      expect(viMutStage2.output).not.toContain('Top 24');
      expect(enMutStage2.output).not.toContain('Top 24');

      expect(viMutFaq5.answer).toContain('180 phút');
      expect(enMutFaq5.answer).toContain('180-minute');
      expect(viMutFaq5.answer).not.toContain('240');
      expect(enMutFaq5.answer).not.toContain('240');

      expect(viMutated.programmingChallenge.metaCards.durationVal).toBe('180 phút');
      expect(enMutated.programmingChallenge.metaCards.durationVal).toBe('180 minutes');
      expect(viMutated.programmingChallenge.metaCards.qualificationVal).toBe('Top 32 đội');
      expect(enMutated.programmingChallenge.metaCards.qualificationVal).toBe('Top 32 teams');
    } finally {
      siteConfig.programmingChallenge.qualifiedTeams = originalQualified;
      stage2.endsAt = originalEndsAt;
    }
  });

  it('exposes comprehensive 5-layer agent anatomy and deliverable standards', async () => {
    const viewModelModule = await loadViewModelModule();
    expect(viewModelModule).toBeDefined();
    if (!viewModelModule) return;

    for (const locale of ['vi', 'en'] as const) {
      const viewModel = viewModelModule.getCompetitionViewModel(locale);
      expect(viewModel.agentAnatomy.layers).toHaveLength(5);
      expect(viewModel.agentAnatomy.layers.map((l: UnknownRecord) => l.layerNumber)).toEqual([1, 2, 3, 4, 5]);
      expect(viewModel.agentAnatomy.mvpDefinition.conditions).toHaveLength(5);
      expect(viewModel.agentAnatomy.nonProducts.rules).toHaveLength(5);
      expect(viewModel.agentAnatomy.finalDeliverables.items).toHaveLength(4);
    }
  });

  it('provides structured stage comparison between stage-4 and stage-5', async () => {
    const viewModelModule = await loadViewModelModule();
    expect(viewModelModule).toBeDefined();
    if (!viewModelModule) return;

    for (const locale of ['vi', 'en'] as const) {
      const viewModel = viewModelModule.getCompetitionViewModel(locale);
      expect(viewModel.stageComparison.rows.length).toBeGreaterThanOrEqual(5);
      expect(viewModel.stageComparison.rows.some((r: UnknownRecord) => r.aspect.toLowerCase().includes('bài toán') || r.aspect.toLowerCase().includes('problem'))).toBe(true);
    }
  });

  it('provides team roles and interview questions playbook with 4 roles', async () => {
    const viewModelModule = await loadViewModelModule();
    expect(viewModelModule).toBeDefined();
    if (!viewModelModule) return;

    for (const locale of ['vi', 'en'] as const) {
      const viewModel = viewModelModule.getCompetitionViewModel(locale);
      expect(viewModel.teamStructure.roles).toHaveLength(4);
      viewModel.teamStructure.roles.forEach((r: UnknownRecord) => {
        expect(r.keyQuestion).toBeTruthy();
      });
    }
  });

  it('provides comprehensive scoring rubric with formula and 3 rounds', async () => {
    const viewModelModule = await loadViewModelModule();
    expect(viewModelModule).toBeDefined();
    if (!viewModelModule) return;

    for (const locale of ['vi', 'en'] as const) {
      const viewModel = viewModelModule.getCompetitionViewModel(locale);
      expect(viewModel.comprehensiveScoring.rounds).toHaveLength(3);
      expect(viewModel.comprehensiveScoring.formula).toContain('15%');
      expect(viewModel.comprehensiveScoring.formula).toContain('70%');
    }
  });

  it('derives case-study milestone values dynamically from config', async () => {
    const viewModelModule = await loadViewModelModule();
    expect(viewModelModule).toBeDefined();
    if (!viewModelModule) return;

    const viModel = viewModelModule.getCompetitionViewModel('vi');
    const stage2Milestone = viModel.caseStudy.data.milestones.find((m: UnknownRecord) => m.stage.includes('Chặng 2'));
    expect(stage2Milestone?.action).toContain('240 phút');
    expect(stage2Milestone?.outcome).toContain('Top 24');
  });

  it('provides 6 core questions for video proposals in both locales', async () => {
    const viewModelModule = await loadViewModelModule();
    expect(viewModelModule).toBeDefined();
    if (!viewModelModule) return;

    for (const locale of ['vi', 'en'] as const) {
      const viewModel = viewModelModule.getCompetitionViewModel(locale);
      expect(viewModel.register.proposalQuestionsCard).toBeDefined();
      expect(viewModel.register.proposalQuestionsCard?.questions).toHaveLength(6);
      viewModel.register.proposalQuestionsCard?.questions.forEach((q: UnknownRecord) => {
        expect(q.scoringTip).toBeTruthy();
        expect(q.intent).toBeTruthy();
      });
    }
  });

  it('provides 3 training workshops with instructors and deliverables', async () => {
    const viewModelModule = await loadViewModelModule();
    expect(viewModelModule).toBeDefined();
    if (!viewModelModule) return;

    for (const locale of ['vi', 'en'] as const) {
      const viewModel = viewModelModule.getCompetitionViewModel(locale);
      expect(viewModel.trainingDetails).toBeDefined();
      expect(viewModel.trainingDetails?.workshops).toHaveLength(3);
      expect(viewModel.trainingDetails?.mentoringCheckpoint).toBeDefined();
    }
  });

  it('provides stage-4 challenge details with 6 intentional flaws and live incident', async () => {
    const viewModelModule = await loadViewModelModule();
    expect(viewModelModule).toBeDefined();
    if (!viewModelModule) return;

    for (const locale of ['vi', 'en'] as const) {
      const viewModel = viewModelModule.getCompetitionViewModel(locale);
      expect(viewModel.stage4Challenge).toBeDefined();
      expect(viewModel.stage4Challenge?.intentionalFlaws).toHaveLength(6);
      expect(viewModel.stage4Challenge?.liveIncident).toBeDefined();
    }
  });

  it('provides stage-5 run-of-show timeline for October 31', async () => {
    const viewModelModule = await loadViewModelModule();
    expect(viewModelModule).toBeDefined();
    if (!viewModelModule) return;

    for (const locale of ['vi', 'en'] as const) {
      const viewModel = viewModelModule.getCompetitionViewModel(locale);
      expect(viewModel.stage5RunOfShow).toBeDefined();
      expect(viewModel.stage5RunOfShow?.timeline.length).toBeGreaterThanOrEqual(6);
    }
  });
});

