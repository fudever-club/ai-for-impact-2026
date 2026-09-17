import { z } from 'zod';

export const StageThemeSchema = z.enum(['impact', 'technical', 'training']);

export const RegistrationStatusSchema = z.enum(['upcoming', 'open', 'closed', 'finished']);

export const CompetitionStageSchema = z.object({
  id: z.string().min(1),
  sequence: z.number().int().positive(),
  startDate: z.string(),
  endDate: z.string().optional(),
  displayDate: z.string().min(1),
  theme: StageThemeSchema,
  title: z.string().min(1),
  shortTitle: z.string().min(1),
  summary: z.string().min(1),
  output: z.string().min(1),
  detailUrl: z.string().url().optional(),
});

export const OrganizerSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  shortName: z.string().min(1),
  role: z.string().min(1),
  logo: z.string().optional(),
});

export const PrizeItemSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  amount: z.number().nonnegative(),
  currency: z.string().min(1),
  formattedAmount: z.string().min(1),
  quantity: z.number().int().positive(),
  description: z.string().min(1),
  badge: z.string().optional(),
});

export const ThemeDomainSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  icon: z.string().min(1),
  examples: z.array(z.string()).optional(),
});

export const FAQItemSchema = z.object({
  id: z.string().min(1),
  question: z.string().min(1),
  answer: z.string().min(1),
  category: z.string().optional(),
});

export const NavAnchorSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  href: z.string().min(1),
});

export const SiteConfigSchema = z.object({
  eventName: z.string().min(1),
  domain: z.string().min(1),
  registrationUrl: z.string().url(),
  handbookUrl: z.string().url(),
  rulesUrl: z.string().url(),
  contactEmail: z.string().email(),
  fanpageUrl: z.string().url(),
  keyDates: z.object({
    registrationStart: z.string(),
    registrationEnd: z.string(),
    videoProposalEnd: z.string(),
    programmingRound: z.string(),
    trainingDates: z.array(z.string()),
    harnessRound: z.string(),
    baselineFreeze: z.string(),
    finalRound: z.string(),
  }),
  prizes: z.object({
    first: z.object({ amount: z.number(), quantity: z.number() }),
    second: z.object({ amount: z.number(), quantity: z.number() }),
    third: z.object({ amount: z.number(), quantity: z.number() }),
    impact: z.object({ amount: z.number(), quantity: z.number() }),
    bestAgent: z.object({ amount: z.number(), quantity: z.number() }),
  }),
  organizers: z.array(OrganizerSchema),
});
