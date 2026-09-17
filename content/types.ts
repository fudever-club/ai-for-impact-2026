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

export interface StageComparisonRow {
  aspect: string;
  technicalRound: string;
  finalRound: string;
}

export interface AgentLayer {
  layerNumber: number;
  name: string;
  roleQuestion: string;
  description: string;
  deliverable: string;
}

export interface MvpCondition {
  title: string;
  description: string;
}

export interface NonProductRule {
  title: string;
  description: string;
}

export interface FinalDeliverableItem {
  id: string;
  name: string;
  specification: string;
  format: string;
}

export interface TeamRoleGuide {
  role: string;
  focus: string;
  keyQuestion: string;
}

export interface ScoringCriterion {
  name: string;
  points: number;
  description: string;
}

export interface ScoringRoundBreakdown {
  roundId: string;
  title: string;
  weight: string;
  totalPoints: number;
  criteria: ScoringCriterion[];
  notes?: string;
}

export interface CaseStudyMilestone {
  stage: string;
  action: string;
  outcome: string;
}

export interface CaseStudyData {
  teamName: string;
  topic: string;
  targetUsers: string;
  problem: string;
  proposal: string;
  questions: { q: string; isKey: boolean }[];
  milestones: CaseStudyMilestone[];
  academicOutcome: string;
}

export interface ProposalQuestion {
  id: string;
  order: string;
  question: string;
  intent: string;
  scoringTip: string;
}

export interface TrainingWorkshopDetail {
  session: string;
  dateStr: string;
  title: string;
  instructor: string;
  focus: string;
  deliverables: string[];
}

export interface Stage4ChallengeDetail {
  badge: string;
  title: string;
  targetAgent: string;
  baselineScore: string;
  description: string;
  intentionalFlaws: {
    id: string;
    name: string;
    risk: string;
    resolution: string;
  }[];
  liveIncident: {
    title: string;
    scenario: string;
    evaluationCriteria: string;
  };
}

export interface Stage5ScheduleItem {
  time: string;
  activity: string;
  details: string;
  highlight?: boolean;
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
    proposalQuestionsCard?: {
      badge: string;
      title: string;
      subtitle: string;
      questions: ProposalQuestion[];
    };
    ctaText: string;
  };
  trainingDetails?: {
    badge: string;
    title: string;
    subtitle: string;
    workshops: TrainingWorkshopDetail[];
    mentoringCheckpoint: {
      dateStr: string;
      title: string;
      desc: string;
    };
  };
  stage4Challenge?: Stage4ChallengeDetail;
  stage5RunOfShow?: {
    badge: string;
    title: string;
    subtitle: string;
    timeline: Stage5ScheduleItem[];
  };
  organizers: {
    badge: string;
    title: string;
    subtitle: string;
  };
  philosophyQuote: {
    quote: string;
    subMotto: string;
    author: string;
  };
  stageComparison: {
    badge: string;
    title: string;
    subtitle: string;
    intro: string;
    columns: { aspect: string; technicalRound: string; finalRound: string };
    rows: StageComparisonRow[];
    conclusion: string;
  };
  agentAnatomy: {
    badge: string;
    title: string;
    subtitle: string;
    analogy: string;
    layers: AgentLayer[];
    mvpDefinition: {
      badge: string;
      title: string;
      description: string;
      conditions: MvpCondition[];
    };
    nonProducts: {
      badge: string;
      title: string;
      rules: NonProductRule[];
    };
    finalDeliverables: {
      badge: string;
      title: string;
      items: FinalDeliverableItem[];
    };
  };
  teamStructure: {
    badge: string;
    title: string;
    subtitle: string;
    warningNote: string;
    roles: TeamRoleGuide[];
    fifthMemberNote: string;
    mockDataPrinciple: {
      title: string;
      description: string;
    };
  };
  caseStudy: {
    badge: string;
    title: string;
    subtitle: string;
    data: CaseStudyData;
  };
  comprehensiveScoring: {
    badge: string;
    title: string;
    subtitle: string;
    formula: string;
    rounds: ScoringRoundBreakdown[];
    principles: { title: string; description: string }[];
  };
  footer: {
    copyright: string;
    disclaimer: string;
    developerCredit?: {
      text: string;
      teamName: string;
      logoUrl: string;
      url?: string;
    };
    links: {
      handbook: string;
      rules?: string;
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
