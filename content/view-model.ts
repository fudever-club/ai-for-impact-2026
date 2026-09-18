import { enContent } from './locales/en';
import { viContent } from './locales/vi';
import { CompetitionContentSchema, SiteConfigSchema } from './schema';
import { siteConfig } from './site-config';
import {
  CompetitionContent,
  CompetitionStage,
  CompetitionViewModel,
  Locale,
  PrizeItem,
  SiteConfig,
} from './types';

const localeContent: Record<Locale, CompetitionContent> = {
  vi: viContent,
  en: enContent,
};

const localeTags: Record<Locale, string> = {
  vi: 'vi-VN',
  en: 'en-US',
};

function requireMatchingKeys(label: string, expected: string[], actual: string[]): void {
  const expectedKeys = [...expected].sort();
  const actualKeys = [...actual].sort();
  if (expectedKeys.length !== actualKeys.length || expectedKeys.some((key, index) => key !== actualKeys[index])) {
    throw new Error(`${label} keys must match shared configuration`);
  }
}

export function validateContent(): {
  config: SiteConfig;
  locales: Record<Locale, CompetitionContent>;
} {
  SiteConfigSchema.parse(siteConfig);
  CompetitionContentSchema.parse(viContent);
  CompetitionContentSchema.parse(enContent);

  const stageIds = siteConfig.stages.map((stage) => stage.id);
  const prizeIds = Object.keys(siteConfig.prizes);

  for (const locale of ['vi', 'en'] as const) {
    requireMatchingKeys(
      `${locale} stage`,
      stageIds,
      Object.keys(localeContent[locale].journey.stages)
    );
    requireMatchingKeys(
      `${locale} prize`,
      prizeIds,
      Object.keys(localeContent[locale].prizes.items)
    );
  }

  return { config: siteConfig, locales: localeContent };
}

function formatDate(timestamp: string, locale: Locale): string {
  return new Intl.DateTimeFormat(localeTags[locale], {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'Asia/Ho_Chi_Minh',
  }).format(new Date(timestamp));
}

function formatTime(timestamp: string, locale: Locale): string {
  return new Intl.DateTimeFormat(localeTags[locale], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Asia/Ho_Chi_Minh',
  }).format(new Date(timestamp));
}

function formatStageDate(startsAt: string, endsAt: string | undefined, locale: Locale): string {
  const startDate = formatDate(startsAt, locale);
  if (!endsAt) return `${startDate}, ${formatTime(startsAt, locale)}`;

  const endDate = formatDate(endsAt, locale);
  if (startDate === endDate) {
    return `${startDate}, ${formatTime(startsAt, locale)}–${formatTime(endsAt, locale)}`;
  }

  return `${startDate} – ${endDate}`;
}

function formatCurrency(amount: number, currency: string, locale: Locale): string {
  return new Intl.NumberFormat(localeTags[locale], {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatDuration(startsAt: string | undefined, endsAt: string | undefined, locale: Locale): string {
  if (!startsAt || !endsAt) return '';
  const minutes = Math.round((Date.parse(endsAt) - Date.parse(startsAt)) / 60_000);
  return locale === 'vi' ? `${minutes} phút` : `${minutes} minutes`;
}

function formatAdjectiveDuration(
  startsAt: string | undefined,
  endsAt: string | undefined,
  locale: Locale
): string {
  if (!startsAt || !endsAt) return '';
  const minutes = Math.round((Date.parse(endsAt) - Date.parse(startsAt)) / 60_000);
  return locale === 'vi' ? `${minutes} phút` : `${minutes}-minute`;
}

function interpolate(text: string, vars: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? `{${key}}`);
}

function buildStages(locale: Locale, content: CompetitionContent, config: SiteConfig): CompetitionStage[] {
  const programmingStageConfig = config.stages.find((stage) => stage.id === 'stage-2');
  const duration = programmingStageConfig
    ? formatAdjectiveDuration(programmingStageConfig.startsAt, programmingStageConfig.endsAt, locale)
    : '';
  const qualifiedTeams = String(config.programmingChallenge.qualifiedTeams);
  const vars = { duration, qualifiedTeams };

  return config.stages
    .filter((stage) => stage.approval === 'approved')
    .sort((left, right) => left.sequence - right.sequence)
    .map(({ approval: _approval, scheduleApproval, startsAt, endsAt, ...stage }) => {
      const stageContent = content.journey.stages[stage.id];
      return {
        ...stage,
        ...(scheduleApproval === 'approved'
          ? {
              startDate: startsAt,
              ...(endsAt ? { endDate: endsAt } : {}),
            }
          : {}),
        displayDate:
          scheduleApproval === 'approved'
            ? formatStageDate(startsAt, endsAt, locale)
            : content.journey.schedulePending,
        ...stageContent,
        summary: interpolate(stageContent.summary, vars),
        output: interpolate(stageContent.output, vars),
      };
    });
}

function buildPrizes(locale: Locale, content: CompetitionContent): PrizeItem[] {
  return Object.entries(siteConfig.prizes).flatMap(([id, prize]) => {
    if (prize.approval !== 'approved') return [];
    const copy = content.prizes.items[id];
    return [
      {
        id,
        amount: prize.amount,
        currency: prize.currency,
        quantity: prize.quantity,
        formattedAmount: formatCurrency(prize.amount, prize.currency, locale),
        ...copy,
      },
    ];
  });
}

export function getCompetitionViewModel(locale: Locale): CompetitionViewModel {
  const { config, locales } = validateContent();
  const content = locales[locale];
  if (!content) throw new Error(`Unsupported locale: ${locale}`);

  const stages = buildStages(locale, content, config);
  const programmingStage = stages.find((stage) => stage.id === 'stage-2');
  if (!programmingStage?.startDate) throw new Error('Approved programming stage schedule is required');

  const prizes = buildPrizes(locale, content);
  const totalPrizeAmount = prizes.reduce(
    (total, prize) => total + prize.amount * prize.quantity,
    0
  );

  const documents: CompetitionViewModel['documents'] = {};
  if (config.documents.handbook.approval === 'approved') {
    documents.handbookUrl = config.documents.handbook.url;
  }
  if (config.documents.rules.approval === 'approved') {
    documents.rulesUrl = config.documents.rules.url;
  }

  const footerLinks: CompetitionViewModel['footer']['links'] = [
    {
      id: 'registration',
      label: content.footer.links.registration,
      href: config.registration.url,
    },
    ...(config.supportGroupUrl
      ? [
          {
            id: 'supportGroup',
            label: content.footer.links.supportGroup ?? 'Nhóm Zalo hỗ trợ',
            href: config.supportGroupUrl,
          },
        ]
      : config.fanpageUrl
        ? [
            {
              id: 'fanpage',
              label: content.footer.links.fanpage ?? 'Fanpage chính thức',
              href: config.fanpageUrl,
            },
          ]
        : []),
  ];
  if (documents.handbookUrl) {
    footerLinks.unshift({
      id: 'handbook',
      label: content.footer.links.handbook,
      href: documents.handbookUrl,
    });
  } else if (documents.rulesUrl && content.footer.links.rules) {
    footerLinks.unshift({
      id: 'rules',
      label: content.footer.links.rules,
      href: documents.rulesUrl,
    });
  }

  const approvedOrganizers = config.organizers
    .filter((organizer) => organizer.approval === 'approved')
    .map(({ approval: _approval, ...organizer }) => organizer);

  const approvedStageDates = stages.flatMap((stage) =>
    stage.startDate ? [stage.startDate] : []
  );

  const navLinks = content.nav.links.filter((link) => {
    if (link.href === '#prizes') return prizes.length > 0;
    if (link.href === '#organization') return approvedOrganizers.length > 0;
    return true;
  });

  return {
    ...content,
    event: {
      name: config.eventName,
      domain: config.domain,
      location: config.eventLocation,
      startDate: config.registration.opensAt,
      endDate: approvedStageDates[approvedStageDates.length - 1],
    },
    registration: config.registration,
    nav: {
      ...content.nav,
      links: navLinks,
    },
    contact: {
      email: config.contactEmail,
      supportGroupUrl: config.supportGroupUrl,
      fanpageUrl: config.fanpageUrl,
    },
    documents,
    journey: {
      ...content.journey,
      stages,
    },
    programmingChallenge: {
      ...content.programmingChallenge,
      metaCards: {
        ...content.programmingChallenge.metaCards,
        dateVal: formatDate(programmingStage.startDate, locale),
        durationVal: formatDuration(programmingStage.startDate, programmingStage.endDate, locale),
        locationVal: config.eventLocation,
        qualificationVal:
          locale === 'vi'
            ? `Top ${config.programmingChallenge.qualifiedTeams} đội`
            : `Top ${config.programmingChallenge.qualifiedTeams} teams`,
      },
    },
    evaluation: {
      ...content.evaluation,
      baselineRuleNotice: undefined,
    },
    prizes: {
      ...content.prizes,
      ...(prizes.length > 0
        ? { totalPool: formatCurrency(totalPrizeAmount, prizes[0].currency, locale) }
        : {}),
      items: prizes,
    },
    faq: {
      ...content.faq,
      items: content.faq.items.map((item) => ({
        ...item,
        answer: interpolate(item.answer, {
          duration: formatAdjectiveDuration(
            programmingStage.startDate,
            programmingStage.endDate,
            locale
          ),
          qualifiedTeams: String(config.programmingChallenge.qualifiedTeams),
        }),
      })),
    },
    caseStudy: {
      ...content.caseStudy,
      data: {
        ...content.caseStudy.data,
        milestones: content.caseStudy.data.milestones.map((m) => ({
          ...m,
          action: interpolate(m.action, {
            duration: formatAdjectiveDuration(
              programmingStage.startDate,
              programmingStage.endDate,
              locale
            ),
            qualifiedTeams: String(config.programmingChallenge.qualifiedTeams),
          }),
          outcome: interpolate(m.outcome, {
            duration: formatAdjectiveDuration(
              programmingStage.startDate,
              programmingStage.endDate,
              locale
            ),
            qualifiedTeams: String(config.programmingChallenge.qualifiedTeams),
          }),
        })),
      },
    },
    register: {
      ...content.register,
      deadlineNotice:
        locale === 'vi'
          ? `Hạn đăng ký: ${formatStageDate(config.registration.closesAt, undefined, locale)}`
          : `Registration deadline: ${formatStageDate(config.registration.closesAt, undefined, locale)}`,
    },
    organizers: {
      ...content.organizers,
      items: approvedOrganizers,
    },
    footer: {
      copyright: content.footer.copyright,
      disclaimer: content.footer.disclaimer,
      developerCredit: content.footer.developerCredit,
      links: footerLinks,
    },
  };
}
