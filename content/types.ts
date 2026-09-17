export type Locale = 'vi' | 'en';

export type StageTheme = 'impact' | 'technical' | 'training';

export type RegistrationStatus = 'upcoming' | 'open' | 'closed' | 'finished';

export interface CompetitionStage {
  id: string;
  sequence: number;
  startDate: string;
  endDate?: string;
  displayDate: string;
  theme: StageTheme;
  title: string;
  shortTitle: string;
  summary: string;
  output: string;
  detailUrl?: string;
}

export interface Organizer {
  id: string;
  name: string;
  shortName: string;
  role: string;
  logo?: string;
}

export interface PrizeItem {
  id: string;
  title: string;
  amount: number;
  currency: string;
  formattedAmount: string;
  quantity: number;
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
  registrationUrl: string;
  handbookUrl: string;
  rulesUrl: string;
  contactEmail: string;
  fanpageUrl: string;
  keyDates: {
    registrationStart: string;
    registrationEnd: string;
    videoProposalEnd: string;
    programmingRound: string;
    trainingDates: string[];
    harnessRound: string;
    baselineFreeze: string;
    finalRound: string;
  };
  prizes: {
    first: { amount: number; quantity: number };
    second: { amount: number; quantity: number };
    third: { amount: number; quantity: number };
    impact: { amount: number; quantity: number };
    bestAgent: { amount: number; quantity: number };
  };
  organizers: Organizer[];
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
      prizePool: string;
      duration: string;
      stages: string;
    };
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    description: string[];
    pillars: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  journey: {
    badge: string;
    title: string;
    subtitle: string;
    stages: CompetitionStage[];
    ctaText: string;
  };
  programmingChallenge: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    metaCards: {
      date: string;
      dateVal: string;
      duration: string;
      durationVal: string;
      location: string;
      locationVal: string;
      qualification: string;
      qualificationVal: string;
    };
    rulesList: string[];
    topicsTitle: string;
    topics: string[];
    languagesTitle: string;
    languages: {
      name: string;
      version: string;
      compiler: string;
    }[];
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
    weights: {
      stage: string;
      percent: string;
      summary: string;
    }[];
    principles: {
      title: string;
      description: string;
    }[];
    baselineRuleNotice: {
      title: string;
      content: string;
      deadline: string;
    };
    allowedToolsNotice: {
      title: string;
      content: string;
    };
  };
  prizes: {
    badge: string;
    title: string;
    subtitle: string;
    totalPool: string;
    items: PrizeItem[];
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
    steps: {
      step: string;
      title: string;
      desc: string;
    }[];
    ctaText: string;
    deadlineNotice: string;
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
      label: string;
      href: string;
    }[];
  };
}
