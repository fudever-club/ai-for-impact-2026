import { z } from 'zod';

export const ApprovalStateSchema = z.enum(['approved', 'withheld']);
export const StageThemeSchema = z.enum(['impact', 'technical', 'training']);
export const RegistrationStatusSchema = z.enum(['upcoming', 'open', 'closed', 'finished']);

const OFFSET_TIMESTAMP_PATTERN =
  /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d{3})?[+-](\d{2}):(\d{2})$/;

function isValidOffsetTimestamp(value: string): boolean {
  const match = OFFSET_TIMESTAMP_PATTERN.exec(value);
  if (!match) return false;

  const [, yearValue, monthValue, dayValue, hourValue, minuteValue, secondValue, offsetHourValue, offsetMinuteValue] =
    match;
  const year = Number(yearValue);
  const month = Number(monthValue);
  const day = Number(dayValue);
  const hour = Number(hourValue);
  const minute = Number(minuteValue);
  const second = Number(secondValue);
  const offsetHour = Number(offsetHourValue);
  const offsetMinute = Number(offsetMinuteValue);
  const leapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  const daysInMonth = [31, leapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  return (
    month >= 1 &&
    month <= 12 &&
    day >= 1 &&
    day <= daysInMonth[month - 1] &&
    hour <= 23 &&
    minute <= 59 &&
    second <= 59 &&
    offsetHour <= 23 &&
    offsetMinute <= 59 &&
    Number.isFinite(Date.parse(value))
  );
}

const OffsetTimestampSchema = z
  .string()
  .refine(isValidOffsetTimestamp, 'Invalid offset timestamp');

function isHttpsUrl(value: string): boolean {
  try {
    return new URL(value).protocol === 'https:';
  } catch {
    return false;
  }
}

const HttpsUrlSchema = z
  .string()
  .url()
  .refine(isHttpsUrl, 'Public URL must use HTTPS');

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
    scheduleApproval: ApprovalStateSchema,
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

function isSafeDocumentUrl(value: string): boolean {
  if (value.startsWith('/docs/') && !value.includes('..')) return true;
  try {
    return new URL(value).protocol === 'https:';
  } catch {
    return false;
  }
}

const SafeDocumentUrlSchema = z
  .string()
  .refine(isSafeDocumentUrl, 'Document URL must use HTTPS or be a relative /docs/ path');

const ApprovedUrlSchema = z
  .object({
    url: SafeDocumentUrlSchema,
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
    eventLocation: NonEmptyString,
    contactEmail: z.string().email(),
    fanpageUrl: HttpsUrlSchema,
    registration: z
      .object({
        url: HttpsUrlSchema,
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

const StageComparisonRowSchema = z
  .object({
    aspect: NonEmptyString,
    technicalRound: NonEmptyString,
    finalRound: NonEmptyString,
  })
  .strict();

const AgentLayerSchema = z
  .object({
    layerNumber: z.number().int().positive(),
    name: NonEmptyString,
    roleQuestion: NonEmptyString,
    description: NonEmptyString,
    deliverable: NonEmptyString,
  })
  .strict();

const MvpConditionSchema = z
  .object({
    title: NonEmptyString,
    description: NonEmptyString,
  })
  .strict();

const NonProductRuleSchema = z
  .object({
    title: NonEmptyString,
    description: NonEmptyString,
  })
  .strict();

const FinalDeliverableItemSchema = z
  .object({
    id: NonEmptyString,
    name: NonEmptyString,
    specification: NonEmptyString,
    format: NonEmptyString,
  })
  .strict();

const TeamRoleGuideSchema = z
  .object({
    role: NonEmptyString,
    focus: NonEmptyString,
    keyQuestion: NonEmptyString,
  })
  .strict();

const ScoringCriterionSchema = z
  .object({
    name: NonEmptyString,
    points: z.number().int().positive(),
    description: NonEmptyString,
  })
  .strict();

const ScoringRoundBreakdownSchema = z
  .object({
    roundId: NonEmptyString,
    title: NonEmptyString,
    weight: NonEmptyString,
    totalPoints: z.number().int().positive(),
    criteria: z.array(ScoringCriterionSchema),
    notes: NonEmptyString.optional(),
  })
  .strict();

const CaseStudyMilestoneSchema = z
  .object({
    stage: NonEmptyString,
    action: NonEmptyString,
    outcome: NonEmptyString,
  })
  .strict();

const CaseStudyDataSchema = z
  .object({
    teamName: NonEmptyString,
    topic: NonEmptyString,
    targetUsers: NonEmptyString,
    problem: NonEmptyString,
    proposal: NonEmptyString,
    questions: z.array(z.object({ q: NonEmptyString, isKey: z.boolean() }).strict()),
    milestones: z.array(CaseStudyMilestoneSchema),
    academicOutcome: NonEmptyString,
  })
  .strict();

const ProposalQuestionSchema = z
  .object({
    id: NonEmptyString,
    order: NonEmptyString,
    question: NonEmptyString,
    intent: NonEmptyString,
    scoringTip: NonEmptyString,
  })
  .strict();

const TrainingWorkshopDetailSchema = z
  .object({
    session: NonEmptyString,
    dateStr: NonEmptyString,
    title: NonEmptyString,
    instructor: NonEmptyString,
    focus: NonEmptyString,
    deliverables: StringArray,
  })
  .strict();

const Stage4ChallengeDetailSchema = z
  .object({
    badge: NonEmptyString,
    title: NonEmptyString,
    targetAgent: NonEmptyString,
    baselineScore: NonEmptyString,
    description: NonEmptyString,
    intentionalFlaws: z.array(
      z
        .object({
          id: NonEmptyString,
          name: NonEmptyString,
          risk: NonEmptyString,
          resolution: NonEmptyString,
        })
        .strict()
    ),
    liveIncident: z
      .object({
        title: NonEmptyString,
        scenario: NonEmptyString,
        evaluationCriteria: NonEmptyString,
      })
      .strict(),
  })
  .strict();

const Stage5ScheduleItemSchema = z
  .object({
    time: NonEmptyString,
    activity: NonEmptyString,
    details: NonEmptyString,
    highlight: z.boolean().optional(),
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
        schedulePending: NonEmptyString,
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
        proposalQuestionsCard: z
          .object({
            badge: NonEmptyString,
            title: NonEmptyString,
            subtitle: NonEmptyString,
            questions: z.array(ProposalQuestionSchema),
          })
          .strict()
          .optional(),
        ctaText: NonEmptyString,
      })
      .strict(),
    trainingDetails: z
      .object({
        badge: NonEmptyString,
        title: NonEmptyString,
        subtitle: NonEmptyString,
        workshops: z.array(TrainingWorkshopDetailSchema),
        mentoringCheckpoint: z
          .object({
            dateStr: NonEmptyString,
            title: NonEmptyString,
            desc: NonEmptyString,
          })
          .strict(),
      })
      .strict()
      .optional(),
    stage4Challenge: Stage4ChallengeDetailSchema.optional(),
    stage5RunOfShow: z
      .object({
        badge: NonEmptyString,
        title: NonEmptyString,
        subtitle: NonEmptyString,
        timeline: z.array(Stage5ScheduleItemSchema),
      })
      .strict()
      .optional(),
    organizers: z
      .object({ badge: NonEmptyString, title: NonEmptyString, subtitle: NonEmptyString })
      .strict(),
    philosophyQuote: z
      .object({
        quote: NonEmptyString,
        subMotto: NonEmptyString,
        author: NonEmptyString,
      })
      .strict(),
    stageComparison: z
      .object({
        badge: NonEmptyString,
        title: NonEmptyString,
        subtitle: NonEmptyString,
        intro: NonEmptyString,
        columns: z
          .object({
            aspect: NonEmptyString,
            technicalRound: NonEmptyString,
            finalRound: NonEmptyString,
          })
          .strict(),
        rows: z.array(StageComparisonRowSchema),
        conclusion: NonEmptyString,
      })
      .strict(),
    agentAnatomy: z
      .object({
        badge: NonEmptyString,
        title: NonEmptyString,
        subtitle: NonEmptyString,
        analogy: NonEmptyString,
        layers: z.array(AgentLayerSchema),
        mvpDefinition: z
          .object({
            badge: NonEmptyString,
            title: NonEmptyString,
            description: NonEmptyString,
            conditions: z.array(MvpConditionSchema),
          })
          .strict(),
        nonProducts: z
          .object({
            badge: NonEmptyString,
            title: NonEmptyString,
            rules: z.array(NonProductRuleSchema),
          })
          .strict(),
        finalDeliverables: z
          .object({
            badge: NonEmptyString,
            title: NonEmptyString,
            items: z.array(FinalDeliverableItemSchema),
          })
          .strict(),
      })
      .strict(),
    teamStructure: z
      .object({
        badge: NonEmptyString,
        title: NonEmptyString,
        subtitle: NonEmptyString,
        warningNote: NonEmptyString,
        roles: z.array(TeamRoleGuideSchema),
        fifthMemberNote: NonEmptyString,
        mockDataPrinciple: z
          .object({
            title: NonEmptyString,
            description: NonEmptyString,
          })
          .strict(),
      })
      .strict(),
    caseStudy: z
      .object({
        badge: NonEmptyString,
        title: NonEmptyString,
        subtitle: NonEmptyString,
        data: CaseStudyDataSchema,
      })
      .strict(),
    comprehensiveScoring: z
      .object({
        badge: NonEmptyString,
        title: NonEmptyString,
        subtitle: NonEmptyString,
        formula: NonEmptyString,
        rounds: z.array(ScoringRoundBreakdownSchema),
        principles: z.array(
          z.object({ title: NonEmptyString, description: NonEmptyString }).strict()
        ),
      })
      .strict(),
    footer: z
      .object({
        copyright: NonEmptyString,
        disclaimer: NonEmptyString,
        developerCredit: z
          .object({
            text: NonEmptyString,
            teamName: NonEmptyString,
            logoUrl: NonEmptyString,
            url: NonEmptyString.optional(),
          })
          .optional(),
        links: z
          .object({
            handbook: NonEmptyString,
            rules: NonEmptyString.optional(),
            registration: NonEmptyString,
            fanpage: NonEmptyString,
          })
          .strict(),
      })
      .strict(),
  })
  .strict();
