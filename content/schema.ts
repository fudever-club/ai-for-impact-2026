import { z } from 'zod';

export const ApprovalStateSchema = z.enum(['approved', 'withheld']);
export const StageThemeSchema = z.enum(['impact', 'technical', 'training']);
export const RegistrationStatusSchema = z.enum(['upcoming', 'open', 'closed', 'finished']);

const OffsetTimestampSchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?[+-]\d{2}:\d{2}$/)
  .refine((value) => Number.isFinite(Date.parse(value)), 'Invalid offset timestamp');

const NonEmptyString = z.string().min(1);
const StringArray = z.array(NonEmptyString);

export const CompetitionStageSchema = z
  .object({
    id: NonEmptyString,
    sequence: z.number().int().positive(),
    startsAt: OffsetTimestampSchema,
    endsAt: OffsetTimestampSchema.optional(),
    theme: StageThemeSchema,
    approval: ApprovalStateSchema,
  })
  .strict()
  .refine(
    (stage) => !stage.endsAt || Date.parse(stage.startsAt) <= Date.parse(stage.endsAt),
    'Stage end must not precede its start'
  );

export const OrganizerSchema = z
  .object({
    id: NonEmptyString,
    name: NonEmptyString,
    shortName: NonEmptyString,
    role: NonEmptyString,
    logo: NonEmptyString.optional(),
    approval: ApprovalStateSchema,
  })
  .strict();

export const PrizeConfigSchema = z
  .object({
    amount: z.number().int().nonnegative(),
    currency: NonEmptyString,
    quantity: z.number().int().positive(),
    approval: ApprovalStateSchema,
  })
  .strict();

export const PrizeItemSchema = PrizeConfigSchema.omit({ approval: true })
  .extend({
    id: NonEmptyString,
    title: NonEmptyString,
    formattedAmount: NonEmptyString,
    description: NonEmptyString,
    badge: NonEmptyString.optional(),
  })
  .strict();

export const ThemeDomainSchema = z
  .object({
    id: NonEmptyString,
    title: NonEmptyString,
    description: NonEmptyString,
    icon: NonEmptyString,
    examples: StringArray.optional(),
  })
  .strict();

export const FAQItemSchema = z
  .object({
    id: NonEmptyString,
    question: NonEmptyString,
    answer: NonEmptyString,
    category: NonEmptyString.optional(),
  })
  .strict();

export const NavAnchorSchema = z
  .object({
    id: NonEmptyString,
    label: NonEmptyString,
    href: NonEmptyString,
  })
  .strict();

const ApprovedUrlSchema = z
  .object({
    url: z.string().url(),
    approval: ApprovalStateSchema,
  })
  .strict();

const WithheldTimestampSchema = z
  .object({
    value: OffsetTimestampSchema,
    approval: z.literal('withheld'),
  })
  .strict();

export const SiteConfigSchema = z
  .object({
    eventName: NonEmptyString,
    domain: NonEmptyString,
    contactEmail: z.string().email(),
    fanpageUrl: z.string().url(),
    registration: z
      .object({
        url: z.string().url(),
        opensAt: OffsetTimestampSchema,
        closesAt: OffsetTimestampSchema,
      })
      .strict()
      .refine(
        (registration) =>
          Date.parse(registration.opensAt) < Date.parse(registration.closesAt),
        'Registration must close after it opens'
      ),
    documents: z
      .object({
        handbook: ApprovedUrlSchema,
        rules: ApprovedUrlSchema,
      })
      .strict(),
    stages: z.array(CompetitionStageSchema).min(1),
    programmingChallenge: z
      .object({
        location: NonEmptyString,
        qualifiedTeams: z.number().int().positive(),
      })
      .strict(),
    disputedFacts: z
      .object({
        videoProposalEnd: WithheldTimestampSchema,
        finalistTeamCount: z
          .object({ value: z.number().int().positive(), approval: z.literal('withheld') })
          .strict(),
        finalDurationHours: z
          .object({ value: z.number().int().positive(), approval: z.literal('withheld') })
          .strict(),
        baselineFreeze: WithheldTimestampSchema,
        trainingDates: z
          .object({ value: z.array(OffsetTimestampSchema).min(1), approval: z.literal('withheld') })
          .strict(),
      })
      .strict(),
    prizes: z.record(NonEmptyString, PrizeConfigSchema),
    organizers: z.array(OrganizerSchema),
  })
  .strict()
  .superRefine((config, context) => {
    const ids = new Set<string>();
    const sequences = new Set<number>();
    config.stages.forEach((stage, index) => {
      if (ids.has(stage.id)) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['stages', index, 'id'],
          message: `Duplicate stage ID: ${stage.id}`,
        });
      }
      if (sequences.has(stage.sequence)) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['stages', index, 'sequence'],
          message: `Duplicate stage sequence: ${stage.sequence}`,
        });
      }
      ids.add(stage.id);
      sequences.add(stage.sequence);
    });
  });

const LocalizedStageContentSchema = z
  .object({
    title: NonEmptyString,
    shortTitle: NonEmptyString,
    summary: NonEmptyString,
    output: NonEmptyString,
  })
  .strict();

const LocalizedPrizeContentSchema = z
  .object({
    title: NonEmptyString,
    description: NonEmptyString,
    badge: NonEmptyString.optional(),
  })
  .strict();

export const CompetitionContentSchema = z
  .object({
    locale: z.enum(['vi', 'en']),
    meta: z
      .object({ title: NonEmptyString, description: NonEmptyString, keywords: StringArray })
      .strict(),
    nav: z
      .object({ links: z.array(NavAnchorSchema), registerCta: NonEmptyString })
      .strict(),
    hero: z
      .object({
        endorsement: NonEmptyString,
        eyebrow: NonEmptyString,
        title: NonEmptyString,
        tagline: NonEmptyString,
        subTagline: NonEmptyString,
        statusBadge: z
          .object({
            upcoming: NonEmptyString,
            open: NonEmptyString,
            closed: NonEmptyString,
            finished: NonEmptyString,
          })
          .strict(),
        daysLeftText: NonEmptyString,
        registerCta: NonEmptyString,
        journeyCta: NonEmptyString,
        quickStats: z
          .object({ teams: NonEmptyString, duration: NonEmptyString, stages: NonEmptyString })
          .strict(),
      })
      .strict(),
    about: z
      .object({
        badge: NonEmptyString,
        title: NonEmptyString,
        subtitle: NonEmptyString,
        description: StringArray,
        pillars: z.array(
          z
            .object({ title: NonEmptyString, description: NonEmptyString, icon: NonEmptyString })
            .strict()
        ),
      })
      .strict(),
    journey: z
      .object({
        badge: NonEmptyString,
        title: NonEmptyString,
        subtitle: NonEmptyString,
        stages: z.record(NonEmptyString, LocalizedStageContentSchema),
        ctaText: NonEmptyString,
      })
      .strict(),
    programmingChallenge: z
      .object({
        badge: NonEmptyString,
        title: NonEmptyString,
        subtitle: NonEmptyString,
        description: NonEmptyString,
        metaCards: z
          .object({
            date: NonEmptyString,
            duration: NonEmptyString,
            location: NonEmptyString,
            qualification: NonEmptyString,
          })
          .strict(),
        rulesList: StringArray,
        topicsTitle: NonEmptyString,
        topics: StringArray,
        languagesTitle: NonEmptyString,
        languages: z.array(
          z
            .object({ name: NonEmptyString, version: NonEmptyString, compiler: NonEmptyString })
            .strict()
        ),
        handbookCta: NonEmptyString,
      })
      .strict(),
    themes: z
      .object({
        badge: NonEmptyString,
        title: NonEmptyString,
        subtitle: NonEmptyString,
        description: NonEmptyString,
        items: z.array(ThemeDomainSchema),
      })
      .strict(),
    evaluation: z
      .object({
        badge: NonEmptyString,
        title: NonEmptyString,
        subtitle: NonEmptyString,
        weights: z.array(
          z
            .object({ stage: NonEmptyString, percent: NonEmptyString, summary: NonEmptyString })
            .strict()
        ),
        principles: z.array(
          z.object({ title: NonEmptyString, description: NonEmptyString }).strict()
        ),
        baselineRuleNotice: z
          .object({ title: NonEmptyString, content: NonEmptyString })
          .strict(),
        allowedToolsNotice: z
          .object({ title: NonEmptyString, content: NonEmptyString })
          .strict(),
      })
      .strict(),
    prizes: z
      .object({
        badge: NonEmptyString,
        title: NonEmptyString,
        subtitle: NonEmptyString,
        items: z.record(NonEmptyString, LocalizedPrizeContentSchema),
        additionalBenefits: StringArray,
      })
      .strict(),
    faq: z
      .object({
        badge: NonEmptyString,
        title: NonEmptyString,
        subtitle: NonEmptyString,
        items: z.array(FAQItemSchema),
        moreHelp: NonEmptyString,
        contactBtn: NonEmptyString,
      })
      .strict(),
    register: z
      .object({
        badge: NonEmptyString,
        title: NonEmptyString,
        subtitle: NonEmptyString,
        steps: z.array(
          z.object({ step: NonEmptyString, title: NonEmptyString, desc: NonEmptyString }).strict()
        ),
        ctaText: NonEmptyString,
      })
      .strict(),
    organizers: z
      .object({ badge: NonEmptyString, title: NonEmptyString, subtitle: NonEmptyString })
      .strict(),
    footer: z
      .object({
        copyright: NonEmptyString,
        disclaimer: NonEmptyString,
        links: z
          .object({
            handbook: NonEmptyString,
            rules: NonEmptyString,
            registration: NonEmptyString,
            fanpage: NonEmptyString,
          })
          .strict(),
      })
      .strict(),
  })
  .strict();
