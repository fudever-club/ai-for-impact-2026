export type Locale = 'vi' | 'en';

export type ApprovalState = 'approved' | 'withheld';

export type StageTheme = 'impact' | 'technical' | 'training';

export type RegistrationStatus = 'upcoming' | 'open' | 'closed' | 'finished';

export interface ApprovedUrl {
  url: string;
  approval: ApprovalState;
}

export interface CompetitionStageConfig {
  id: string;
  sequence: number;
  startsAt: string;
  endsAt?: string;
  theme: StageTheme;
  approval: ApprovalState;
  scheduleApproval: ApprovalState;
}

export interface CompetitionStage extends Omit<CompetitionStageConfig, 'approval' | 'scheduleApproval' | 'startsAt' | 'endsAt'> {
  startDate?: string;
  endDate?: string;
  displayDate: string;
  title: string;
  shortTitle: string;
  summary: string;
  output: string;
}

export interface OrganizerConfig {
  id: string;
  name: string;
  shortName: string;
  role: string;
  logo?: string;
  approval: ApprovalState;
}

export type Organizer = Omit<OrganizerConfig, 'approval'>;

export interface PrizeConfig {
  amount: number;
  currency: string;
  quantity: number;
  approval: ApprovalState;
}

export interface PrizeItem extends Omit<PrizeConfig, 'approval'> {
  id: string;
  title: string;
  formattedAmount: string;
  description: string;
  badge?: string;
}

export interface ThemeDomain {
  id: string;
  title: string;
  description: string;
  icon: string;
  examples?: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface NavAnchor {
  id: string;
  label: string;
  href: string;
}

export interface SiteConfig {
  eventName: string;
  domain: string;
  eventLocation: string;
  contactEmail: string;
  fanpageUrl: string;
  registration: {
    url: string;
    opensAt: string;
    closesAt: string;
  };
  documents: {
    handbook: ApprovedUrl;
    rules: ApprovedUrl;
  };
  stages: CompetitionStageConfig[];
  programmingChallenge: {
    qualifiedTeams: number;
  };
  disputedFacts: {
    videoProposalEnd: { value: string; approval: 'withheld' };
    finalistTeamCount: { value: number; approval: 'withheld' };
    finalDurationHours: { value: number; approval: 'withheld' };
    baselineFreeze: { value: string; approval: 'withheld' };
    trainingDates: { value: string[]; approval: 'withheld' };
  };
  prizes: Record<string, PrizeConfig>;
  organizers: OrganizerConfig[];
}

export interface LocalizedStageContent {
  title: string;
  shortTitle: string;
  summary: string;
  output: string;
}

export interface LocalizedPrizeContent {
  title: string;
  description: string;
  badge?: string;
}

export interface CompetitionContent {
  locale: Locale;
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  nav: {
    links: NavAnchor[];
    registerCta: string;
  };
  hero: {
    endorsement: string;
    eyebrow: string;
    title: string;
    tagline: string;
    subTagline: string;
    statusBadge: {
      upcoming: string;
      open: string;
      closed: string;
      finished: string;
    };
    daysLeftText: string;
    registerCta: string;
    journeyCta: string;
    quickStats: {
      teams: string;
      duration: string;
      stages: string;
    };
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    description: string[];
    pillars: { title: string; description: string; icon: string }[];
  };
  journey: {
    badge: string;
    title: string;
    subtitle: string;
    schedulePending: string;
    stages: Record<string, LocalizedStageContent>;
    ctaText: string;
  };
  programmingChallenge: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    metaCards: {
      date: string;
      duration: string;
      location: string;
      qualification: string;
    };
    rulesList: string[];
    topicsTitle: string;
    topics: string[];
    languagesTitle: string;
    languages: { name: string; version: string; compiler: string }[];
    handbookCta: string;
  };
  themes: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    items: ThemeDomain[];
  };
  evaluation: {
    badge: string;
    title: string;
    subtitle: string;
    weights: { stage: string; percent: string; summary: string }[];
    principles: { title: string; description: string }[];
    baselineRuleNotice: { title: string; content: string };
    allowedToolsNotice: { title: string; content: string };
  };
  prizes: {
    badge: string;
    title: string;
    subtitle: string;
    items: Record<string, LocalizedPrizeContent>;
    additionalBenefits: string[];
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: FAQItem[];
    moreHelp: string;
    contactBtn: string;
  };
  register: {
    badge: string;
    title: string;
    subtitle: string;
    steps: { step: string; title: string; desc: string }[];
    ctaText: string;
  };
  organizers: {
    badge: string;
    title: string;
    subtitle: string;
  };
  footer: {
    copyright: string;
    disclaimer: string;
    links: {
      handbook: string;
      rules: string;
      registration: string;
      fanpage: string;
    };
  };
}

export interface CompetitionViewModel
  extends Omit<
    CompetitionContent,
    'journey' | 'programmingChallenge' | 'evaluation' | 'prizes' | 'register' | 'organizers' | 'footer'
  > {
  event: {
    name: string;
    domain: string;
    location: string;
    startDate: string;
    endDate: string;
  };
  registration: SiteConfig['registration'];
  contact: {
    email: string;
    fanpageUrl: string;
  };
  documents: {
    handbookUrl?: string;
    rulesUrl?: string;
  };
  journey: Omit<CompetitionContent['journey'], 'stages'> & {
    stages: CompetitionStage[];
  };
  programmingChallenge: Omit<CompetitionContent['programmingChallenge'], 'metaCards'> & {
    metaCards: CompetitionContent['programmingChallenge']['metaCards'] & {
      dateVal: string;
      durationVal: string;
      locationVal: string;
      qualificationVal: string;
    };
  };
  evaluation: Omit<CompetitionContent['evaluation'], 'baselineRuleNotice'> & {
    baselineRuleNotice?: CompetitionContent['evaluation']['baselineRuleNotice'] & {
      deadline: string;
    };
  };
  prizes: Omit<CompetitionContent['prizes'], 'items'> & {
    totalPool?: string;
    items: PrizeItem[];
  };
  register: CompetitionContent['register'] & {
    deadlineNotice: string;
  };
  organizers: CompetitionContent['organizers'] & {
    items: Organizer[];
  };
  footer: Omit<CompetitionContent['footer'], 'links'> & {
    links: { id: string; label: string; href: string }[];
  };
}
