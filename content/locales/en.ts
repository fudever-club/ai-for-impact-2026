import { CompetitionContent } from '../types';

export const enContent: CompetitionContent = {
  locale: 'en',
  meta: {
    title: 'AI for Impact 2026 | Agentic Innovation Challenge',
    description:
      'Premier academic AI Agent challenge. From algorithmic programming to building real-world AI Agent solutions creating tangible social impact.',
    keywords: [
      'AI for Impact',
      'AI Agent',
      'AI Competition',
      'Harness Engineering',
      'ICPC',
      'Agentic AI',
      'Hackathon Da Nang',
    ],
  },
  nav: {
    links: [
      { id: 'about', label: 'About', href: '#about' },
      { id: 'journey', label: '5-Stage Journey', href: '#journey' },
      { id: 'challenge', label: 'Thinking Challenge', href: '#challenge' },
      { id: 'themes', label: 'Themes', href: '#themes' },
      { id: 'evaluation', label: 'Evaluation', href: '#evaluation' },
      { id: 'prizes', label: 'Prizes', href: '#prizes' },
      { id: 'faq', label: 'FAQ', href: '#faq' },
    ],
    registerCta: 'Register Now',
  },
  hero: {
    endorsement: 'AGENTIC AI INNOVATION CHALLENGE 2026',
    eyebrow: 'AGENTIC INNOVATION CHALLENGE 2026',
    title: 'AI FOR IMPACT 2026',
    tagline: 'From Prompting to Building Impactful Solutions',
    subTagline:
      'Shift from merely using AI to creating measurable social impact with AI Agents. Master algorithmic thinking, harness engineering, and production-grade agentic problem solving.',
    statusBadge: {
      upcoming: 'Registration Opening Soon',
      open: 'City-wide Registration Open',
      closed: 'Registration Closed',
      finished: 'Competition Completed',
    },
    daysLeftText: 'Time remaining to apply',
    registerCta: 'Register Your Team',
    journeyCta: 'Explore the 5 Stages',
    quickStats: {
      teams: '40–50 Teams',
      duration: '7 Weeks Journey',
      stages: '5 Milestones',
    },
  },
  about: {
    badge: 'CORE PHILOSOPHY',
    title: 'From "Knowing AI" to "Creating Impact with AI Agents"',
    subtitle:
      'AI for Impact 2026 is not about superficial slide decks or copied code. We look for young engineers capable of building reliable, verifiable, and responsible AI Agents.',
    description: [
      'AI for Impact 2026 provides an intensive academic playground for students to master the newest wave of technology: Agentic AI and Harness Engineering.',
      'Participants embark on a comprehensive engineering journey: starting with rigorous algorithmic qualification following international ICPC standards, followed by intensive training workshops with industry leaders, fixing real faulty agent harnesses under automated evaluation, and culminating in a sprint with surprise live constraints.',
      'Every project must address 1 of 5 urgent societal problem domains, identifying concrete beneficiaries and verifiable impact metrics.',
    ],
    pillars: [
      {
        title: 'Rigorous Algorithmic Foundation',
        description:
          'Kicks off with an ICPC Global 2024 standard qualification to test core computational thinking, data structures, and optimization.',
        icon: 'Code2',
      },
      {
        title: 'Mastering Harness Engineering',
        description:
          'Learn to design robust guardrails, manage contextual retrieval, automate evaluations, and implement resilient error recovery.',
        icon: 'Cpu',
      },
      {
        title: 'Measurable Community Impact',
        description:
          'Final deliverables are production MVPs running on realistic data, addressing clear human beneficiaries with transparent metrics.',
        icon: 'Sparkles',
      },
    ],
  },
  journey: {
    badge: 'COMPETITION JOURNEY',
    title: '5 Stages from Conception to Grand Finale',
    subtitle:
      'At each milestone, teams receive resources and deliver concrete outputs.',
    schedulePending: 'Schedule pending organizer confirmation',
    ctaText: 'Read the Complete Participant Handbook',
    stages: {
      'stage-1': {
        title: 'Registration & Idea Proposal',
        shortTitle: 'Registration & Idea',
        summary:
          'Teams register via the official Google Form and prepare an idea pitch video following organizer guidance.',
        output: 'Team Profile + 1 Video Pitch ≤ 3 min (Problem, Target Users, AI Architecture, Social Impact).',
      },
      'stage-2': {
        title: 'Qualification – Programming Thinking Challenge',
        shortTitle: 'Algorithmic Challenge',
        summary:
          'A {duration} in-person algorithmic contest adhering to ICPC Global 2024 standards. Exactly 1 laptop per team. Automated scoring on hidden/public tests.',
        output: 'Real-time live scoreboard. Top {qualifiedTeams} teams qualify for the Training phase and Technical Round.',
      },
      'stage-3': {
        title: 'Intensive Training & Workshop Series',
        shortTitle: 'Intensive Training',
        summary:
          '3 hands-on workshops with university faculty and enterprise mentors: Baseline Agent debugging, Evaluation & Security, Mock Run & Deployment.',
        output: '8 test cases, 2 security tests, 1 timeout test, trace report, and 1 deployed accessible online demo.',
      },
      'stage-4': {
        title: 'Technical Round – Harness Engineering Challenge',
        shortTitle: 'Harness Engineering',
        summary:
          'Student Support Resolution Agent challenge: Fix context leaks, security flaws, and approval gates in a faulty baseline agent repository.',
        output: 'Automated test results and the Engineering Review determine which teams advance to the Grand Finale.',
      },
      'stage-5': {
        title: 'Grand Finale – Build Sprint & Demo Day',
        shortTitle: 'Grand Finale & Demo Day',
        summary:
          'An on-site sprint on top of a frozen baseline with live surprise constraints, followed by Demo Day pitches and the award ceremony.',
        output: 'Functional production MVP, impact report, AI evaluation artifacts, video demo, pitch deck & awards.',
      },
    },
  },
  programmingChallenge: {
    badge: 'STAGE 2: ALGORITHMIC SPOTLIGHT',
    title: 'International Standard Programming Thinking Challenge',
    subtitle:
      'The opening competitive round of AI for Impact 2026 – rigorous algorithmic problem-solving following ICPC Global 2024 standards.',
    description:
      'High-performance AI Agents cannot be engineered without rock-solid algorithmic competence. This round directly evaluates logical deduction, data structures, and computational optimization under strict time limits.',
    metaCards: {
      date: 'Contest Date',
      duration: 'Duration',
      location: 'Venue',
      qualification: 'Advancement Threshold',
    },
    rulesList: [
      'In-person participation on campus, 3–5 members per team.',
      'Strict 1-laptop rule: Each team is permitted only 1 active laptop equipped with coding IDEs and standard web browsers (Chrome, Firefox, Edge). Backup laptop allowed on standby.',
      'Automated real-time grading against hidden and public test cases. Problems only score when passing 100% of test cases.',
      'Live dynamic scoreboard serves as the sole authoritative basis for advancing to the next round.',
    ],
    topicsTitle: '10 Core Algorithmic Domains',
    topics: [
      'Sorting',
      'Searching',
      'Numerical Methods',
      'Dynamic Programming (DP)',
      'Tree Structures',
      'Graph Theory',
      'Number Theory',
      'Computational Geometry',
      'Greedy Algorithms',
      'Game Theory',
    ],
    languagesTitle: 'Supported Languages & Compilers (ICPC 2024)',
    languages: [
      { name: 'C', version: 'gcc 14.2.0', compiler: 'gcc -std=c99 -Wall -O2 -lm -s' },
      { name: 'C++', version: 'g++ 14.2.0', compiler: 'g++ -std=c++20 -Wall -O2 -lm -s' },
      { name: 'Java 8', version: 'javac 1.8.0', compiler: 'javac8 -encoding UTF-8 -profile compact1' },
      { name: 'Java 19', version: 'javac 19.0.2', compiler: 'javac19 -encoding UTF-8' },
      { name: 'Python 3', version: '3.12.6', compiler: 'python3 -m compileall -q' },
    ],
    handbookCta: 'Read Full Technical Rules',
  },
  themes: {
    badge: 'PROBLEM DOMAINS',
    title: '5 Impact-Driven Focus Themes',
    subtitle:
      'Teams select 1 of 5 critical societal challenge domains to tackle with intelligent AI Agents.',
    description:
      'Freedom of creativity is welcomed, provided AI serves as the core functional engine addressing real stakeholders.',
    items: [
      {
        id: 'edu',
        title: 'Education & Learning Support',
        description:
          'Personalized learning assistants, AI-driven intelligent tutoring systems, automated assignment grading aids, and barrier-free educational access.',
        icon: 'GraduationCap',
        examples: ['Adaptive algorithm tutor', 'Course syllabus intelligence agent', 'Visually-impaired student assistant'],
      },
      {
        id: 'health',
        title: 'Health, Wellbeing & Quality of Life',
        description:
          'First-aid decision support, student mental health companion, automated medication schedules, and clinic-patient connection workflows.',
        icon: 'HeartPulse',
        examples: ['Campus mental wellness companion', 'Smart prescription parsing & reminders', 'Elderly home-care support agent'],
      },
      {
        id: 'tourism',
        title: 'Smart Tourism & Cultural Heritage',
        description:
          'Localized AI tour guides for Da Nang, cultural heritage digitization, culinary navigation, and eco-friendly tourist itinerary optimization.',
        icon: 'Compass',
        examples: ['Multilingual Da Nang AI travel guide', 'Folk culture & myth heritage preserver', 'Green travel footprint planner'],
      },
      {
        id: 'environment',
        title: 'Environment, Smart Cities & Sustainability',
        description:
          'Automated waste categorization, smart building energy optimization, urban flood early warnings, and carbon footprint tracking.',
        icon: 'Leaf',
        examples: ['Real-time urban flood alert agent', 'Smart garbage collection routing', 'Campus air quality monitor'],
      },
      {
        id: 'business',
        title: 'Enterprise Support & Productivity',
        description:
          'Workflow automation for local SMEs, intelligent invoice parsing, omnichannel customer service, and secure internal workflow agents.',
        icon: 'Briefcase',
        examples: ['Automated invoice reconciliation agent', 'Candidate resume parsing assistant', 'Omnichannel customer support bot'],
      },
    ],
  },
  evaluation: {
    badge: 'EVALUATION FRAMEWORK',
    title: 'Transparent, Rigorous & Evidence-Based',
    subtitle:
      'Scoring synthesizes automated test suites, engineering peer review, and on-site implementation verification.',
    weights: [
      {
        stage: 'Stage 1: Idea Proposal',
        percent: '15%',
        summary: 'Problem urgency, solution originality, proposed AI architecture, and pitch video clarity.',
      },
      {
        stage: 'Stage 4: Technical Round (Harness)',
        percent: '15%',
        summary: '70% automated hidden test verification + 30% Engineering Review explaining traces and test design.',
      },
      {
        stage: 'Stage 5: Grand Finale & Demo Day',
        percent: '70%',
        summary: 'Working MVP, architectural depth, 20-point on-site diff verification, community impact, and live pitching.',
      },
    ],
    principles: [
      {
        title: 'Graded by Hidden Test Suites',
        description:
          'Eliminating subjectivity: Technical rounds execute hidden test cases with identical business logic but alternate data to test true generalization.',
      },
      {
        title: 'Trace Review & Code Ownership',
        description:
          'The panel randomly selects 2 execution traces for teams to explain step-by-step, proving authentic comprehension rather than blind code generation.',
      },
      {
        title: 'Real Working Software Required',
        description:
          'Judges directly interact with live deployed prototypes. Entries consisting merely of conceptual slides without runnable systems are penalized heavily.',
      },
    ],
    baselineRuleNotice: {
      title: 'Mandatory Baseline Freeze Protocol',
      content:
        'The baseline freeze deadline and source-comparison procedure will be published after organizer confirmation.',
    },
    allowedToolsNotice: {
      title: 'AI Coding Agent Regulations',
      content:
        'Teams are explicitly encouraged to leverage modern AI Coding Agents (Cursor, Claude Code, GitHub Copilot). Mandatory prompt logs and clean Git commit histories must be maintained. Pre-existing third-party complete software is strictly prohibited.',
    },
  },
  prizes: {
    badge: 'PRIZES & OPPORTUNITIES',
    title: 'Rewarding Excellence & Fostering Innovation',
    subtitle:
      'Cash awards combined with direct project-incubation opportunities.',
    items: {
      first: {
        title: '1st Place Winner',
        description: 'Championship Trophy + Certificate + Startup Incubation Grant',
        badge: 'Champion',
      },
      second: {
        title: '2nd Place Winner',
        description: 'Medal + Certificate + Tech Hardware Gifts',
        badge: 'Runner-up',
      },
      third: {
        title: '3rd Place Winner',
        description: 'Medal + Certificate',
        badge: 'Third Place',
      },
      impact: {
        title: 'Best "AI for Impact" Award',
        description: 'Honoring the most impressive and measurable social community impact',
        badge: 'Social Impact',
      },
      'best-agent': {
        title: 'Best Agent Engineering Award',
        description: 'Honoring the most sophisticated Agent & Harness architecture design',
        badge: 'Engineering Excellence',
      },
    },
    additionalBenefits: [
      'Official Certificates of Participation awarded to all finalists.',
      'Direct interview and internship connection opportunities with leading technology enterprises in Da Nang.',
      'High-potential projects receive faculty mentorship for Research-Based Learning (RBL) or Graduation Capstone Theses.',
    ],
  },
  faq: {
    badge: 'GOT QUESTIONS?',
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know before registering for the challenge',
    moreHelp: 'Need personal assistance?',
    contactBtn: 'Contact Organizers',
    items: [
      {
        id: 'faq-1',
        question: 'Who is eligible to participate in AI for Impact 2026?',
        answer:
          'All university and college students across Da Nang city are eligible. Priority is given to Information Technology, Software Development, and AI disciplines. Multidisciplinary teams combining tech with Business, Media, or Design are highly encouraged.',
      },
      {
        id: 'faq-2',
        question: 'What is the team size? Can I apply individually?',
        answer:
          'Each team must have 3 to 5 official members, nominating 1 team leader as the primary contact. If you do not have a team yet, join the competition Discord/Facebook community to connect and match with fellow peers.',
      },
      {
        id: 'faq-3',
        question: 'Can students without deep AI Agent experience join?',
        answer:
          'Absolutely yes! Stage 3 provides 3 comprehensive hands-on training workshops taught by university faculty and industry experts covering models, tool calling, harness architecture, and security from scratch. A solid programming foundation is all you need.',
      },
      {
        id: 'faq-4',
        question: 'Are AI code assistance tools (Cursor, Copilot, Claude) permitted?',
        answer:
          'Yes! The contest encourages using modern AI Coding Agents to maximize productivity. However, teams must maintain transparent prompt logs and Git history. Judges will conduct technical reviews to verify genuine code mastery.',
      },
      {
        id: 'faq-5',
        question: 'What is the 1-Laptop Rule in Stage 2 (Thinking Challenge)?',
        answer:
          'To cultivate team synergy and tactical role distribution similar to international ICPC contests, each team may operate only 1 active laptop during the {duration} contest. One standby backup machine is permitted on site if certified by a proctor.',
      },
      {
        id: 'faq-6',
        question: 'How does the Technical Round differ from the Grand Finale?',
        answer:
          'In the Technical Round, you DO NOT build your own project. You receive a buggy benchmark agent created by the organizers and must diagnose and fix its harness. In the Grand Finale, you build and pitch your own team project.',
      },
      {
        id: 'faq-7',
        question: 'How does the Baseline Freeze work for the Grand Finale?',
        answer:
          'The organizer will publish the baseline freeze deadline and source-comparison procedure after the official details are confirmed.',
      },
      {
        id: 'faq-8',
        question: 'Where can I read the full Participant Handbook and Regulations?',
        answer:
          'The Participant Handbook and Technical Regulations will be published after the official content is confirmed.',
      },
    ],
  },
  register: {
    badge: 'JOIN TODAY',
    title: 'Ready to Tackle the AI Agent Challenge?',
    subtitle:
      'Form your team today and embark on a transformative 7-week journey.',
    steps: [
      {
        step: '01',
        title: 'Assemble Your Team',
        desc: 'Gather 3–5 dedicated teammates, appoint a team lead, and choose an impactful name.',
      },
      {
        step: '02',
        title: 'Complete Registration Form',
        desc: 'Submit official details and contact channels via the external Google Form.',
      },
      {
        step: '03',
        title: 'Submit Video Pitch',
        desc: 'Record a video ≤ 3 minutes submitted via Google Drive by 23:59 on September 28 addressing 6 core questions.',
      },
    ],
    proposalQuestionsCard: {
      badge: 'PROPOSAL VIDEO STANDARDS',
      title: '6 Core Questions for Your Idea Video (Stage 1)',
      subtitle:
        'Deadline 23:59 on September 28, 2026. The ≤ 3-minute video must decisively address these 6 questions for evaluation:',
      questions: [
        {
          id: 'q1',
          order: '01',
          question: 'What is the problem and who is suffering from it?',
          intent: 'Identify specific target beneficiaries and verified real-world pain points',
          scoringTip:
            'Avoid generic statements; provide a concrete user persona and situational context.',
        },
        {
          id: 'q2',
          order: '02',
          question: 'How are they managing the problem today?',
          intent: 'Analyze current workarounds and workflow bottlenecks',
          scoringTip:
            'Highlight the specific limitations of manual or traditional processes that the AI Agent resolves.',
        },
        {
          id: 'q3',
          order: '03',
          question: 'What concrete actions will the Agent execute (and what tools are needed)?',
          intent: '[Key Technical Rubric] Detail the tool catalog and operational loop',
          scoringTip:
            'High scoring area: Do not just say "AI does everything". List 5–7 specific APIs/tools and state transitions.',
        },
        {
          id: 'q4',
          order: '04',
          question: 'What must the Agent NEVER be allowed to do?',
          intent: '[Key Safety Rubric] Establish safety bounds and Harness Guardrails',
          scoringTip:
            'High scoring area: State clear barriers (never delete student records, never commit without explicit approval).',
        },
        {
          id: 'q5',
          order: '05',
          question: 'If the Agent fails or hallucinates, what are the user consequences?',
          intent: 'Operational risk awareness and damage mitigation architecture',
          scoringTip:
            'Demonstrate graceful fallback, confidence scoring, and seamless human-in-the-loop escalation.',
        },
        {
          id: 'q6',
          order: '06',
          question: 'Where is data sourced, and how trustworthy is it?',
          intent: 'Data provenance, privacy constraints, and validity checks',
          scoringTip:
            'Enforce 100% Mock Data for sensitive records and include an automatic TTL filter for outdated rules.',
        },
      ],
    },
    ctaText: 'Open Official Registration Form',
  },
  trainingDetails: {
    badge: 'INTENSIVE TRAINING PROGRAM',
    title: '3 Hands-on Engineering Workshops with Expert Mentors',
    subtitle:
      'Stage 3 builds rigorous skills in Harness Engineering, Agent security hardening, and production deployment.',
    workshops: [
      {
        session: 'Workshop 1',
        dateStr: '14:00 – 17:00 | Wednesday, Oct 07, 2026',
        title: 'Deconstructing and Repairing an AI Agent',
        instructor: 'MSc. Tran Thi To Tam',
        focus:
          'Master the 5 layers: Model - Tool - Agent Loop - Harness - Evaluation. Debug a flawed baseline Agent to boost performance by at least 15 percentage points.',
        deliverables: [
          'Source code patch for the first 2 flaws',
          'Benchmark report demonstrating ≥ 15% baseline gain',
        ],
      },
      {
        session: 'Workshop 2',
        dateStr: '14:00 – 17:00 | Thursday, Oct 08, 2026',
        title: 'Evaluation, Security & Incident Recovery',
        instructor: 'Technical Advisory Board (learnharness.org)',
        focus:
          'Guard against Prompt Injection, protect sensitive data, handle API timeouts, apply bounded retries, and instrument structured traces.',
        deliverables: [
          '08 Custom domain test cases',
          '02 Security & prompt injection test cases',
          '01 Automated timeout/retry recovery test',
          '01 Structured Execution Trace Report',
        ],
      },
      {
        session: 'Workshop 3',
        dateStr: '14:00 – 17:00 | Friday, Oct 09, 2026',
        title: 'Mock Run & Cloud Deployment',
        instructor: 'MSc. Le Thien Nhat Quang & Mentorship Team',
        focus:
          'Simulated mock contest run with automated grading; containerization, live demo deployment, and pitch rehearsal.',
        deliverables: [
          '01 Valid submission on the mock grading platform',
          '01 Functional online demo (Live URL)',
        ],
      },
    ],
    mentoringCheckpoint: {
      dateStr: 'Oct 21 – Oct 22, 2026',
      title: '1-on-1 Deep-Dive Mentoring for Top 15',
      desc: 'Each finalist team gets 45 minutes of direct architecture review with industry mentors to unblock technical hurdles before Demo Day.',
    },
  },
  stage4Challenge: {
    badge: 'STAGE 4 TECHNICAL CHALLENGE',
    title: 'Harness Engineering Challenge',
    targetAgent: 'Student Support Resolution Agent',
    baselineScore: '~42.5 / 100 points',
    description:
      'Teams receive source code for an Agent with 6 intentional business logic and security bugs. The mission is to establish a robust Harness, patch flaws, write independent tests, and survive a Live Incident.',
    intentionalFlaws: [
      {
        id: 'flaw-1',
        name: 'Outdated Regulations Retrieval',
        risk: 'Agent quotes expired institutional rules, misinforming students on exam eligibility.',
        resolution: 'Add temporal validity metadata and status filters to the retrieval pipeline.',
      },
      {
        id: 'flaw-2',
        name: 'Unprotected Mutation Gate',
        risk: 'Agent mutates student records or files appeals without human-in-the-loop confirmation.',
        resolution: 'Require explicit user approval gates before invoking state-changing tools.',
      },
      {
        id: 'flaw-3',
        name: 'Infinite Loop on Tool Error',
        risk: 'External API 500 errors cause runaway retry loops that rapidly exhaust token budgets.',
        resolution: 'Implement Max Retries = 3 with a Circuit Breaker and operator fallback notification.',
      },
      {
        id: 'flaw-4',
        name: 'Cross-Student Data Leakage',
        risk: 'User queries cross boundaries and access other students private records in the same session.',
        resolution: 'Enforce strict Session ID scoping, PII tokenization, and context isolation.',
      },
      {
        id: 'flaw-5',
        name: 'Prompt Injection Vulnerability',
        risk: 'Adversarial user inputs override system directives and execute unauthorized tools.',
        resolution: 'Isolate system instructions from untrusted user content with input guardrails.',
      },
      {
        id: 'flaw-6',
        name: 'Missing Execution Traces',
        risk: 'Lack of execution logs prevents verification and automated regression testing.',
        resolution: 'Emit structured JSON traces with token metrics for every tool invocation.',
      },
    ],
    liveIncident: {
      title: 'Live Incident Scenario',
      scenario:
        'During the contest, the committee will trigger a coordinated network incident (mass API timeouts) to evaluate resilience.',
      evaluationCriteria:
        'The Agent must gracefully degrade, avoid unhandled crashes, notify the student, and escalate to staff without failing silently.',
    },
  },
  stage5RunOfShow: {
    badge: 'OCTOBER 31 GRAND FINAL SCHEDULE',
    title: 'Grand Final Run-of-Show Timeline',
    subtitle:
      'High-tempo, fully transparent execution featuring the on-site 2-hour Build Sprint and 20-point Git Diff audit.',
    timeline: [
      {
        time: '08:00 – 08:10',
        activity: 'Check-in & Opening Ceremony',
        details: 'Teams take their assigned stations, establish network connectivity, and verify dev environments.',
      },
      {
        time: '08:10',
        activity: 'On-Site Constraint Reveal',
        details:
          'The Academic Board unveils surprise constraints (special user persona requirements or degraded input streams).',
        highlight: true,
      },
      {
        time: '08:10 – 10:10',
        activity: '2-Hour Live Build Sprint',
        details:
          '120 minutes of continuous on-site programming to integrate surprise constraints into the baseline locked on Oct 28. Evaluated via Git Diff!',
        highlight: true,
      },
      {
        time: '10:10',
        activity: 'Code Freeze & Full Submission',
        details:
          'Repositories are frozen. Teams submit GitHub Link, Web Demo, Impact Report, ≤ 3m Demo Video, and Presentation Slides.',
      },
      {
        time: '10:10 – 10:30',
        activity: 'Intermission & Stage Setup',
        details: 'Technical team checks stage projection and display feeds for pitching teams.',
      },
      {
        time: '10:30 – 12:00',
        activity: 'Demo Day & Technical Defense',
        details:
          'Each team delivers an 8-minute live demo + 4-minute defense answering probing questions from the Judging Committee.',
        highlight: true,
      },
      {
        time: '12:00 – 12:15',
        activity: 'Judges Deliberation & Scoring Tally',
        details:
          'Secretariat computes combined scores across all 3 rounds: 15% Round 1 + 15% Round 2 + 70% Round 3.',
      },
      {
        time: '12:15 – 12:45',
        activity: 'Award Ceremony & Closing',
        details:
          'Announcing the AI for Impact 2026 Champion, presenting cash prizes, and awarding official University certificates.',
        highlight: true,
      },
    ],
  },
  organizers: {
    badge: 'ORGANIZING BODIES',
    title: 'Governing, Executive & Academic Board',
    subtitle: 'Institutional partnerships ensuring academic rigor, transparency, and high competition standards.',
  },
  philosophyQuote: {
    quote:
      'An Agent that speaks eloquently but makes mistakes is more dangerous than an Agent that says nothing. Your job is not to make the AI answer fluently, but to ensure it only asserts what it has verified.',
    subMotto: 'What will you have to build, and what will you finally deliver?',
    author: 'Core Philosophy – AI for Impact 2026 Handbook',
  },
  stageComparison: {
    badge: 'CLEAR DISTINCTION',
    title: 'Two Different Products – Do Not Confuse',
    subtitle: 'The fundamental difference between the Technical Challenge and the Grand Final',
    intro:
      'In the Technical Challenge, teams do not build a product from scratch. Instead, they receive a pre-built flawed AI Agent and must diagnose and fix it. Only in the Grand Final do teams build their own solution.',
    columns: {
      aspect: 'Comparison Metric',
      technicalRound: 'Technical Challenge (Oct 17)',
      finalRound: 'Grand Final & Demo Day (Oct 31)',
    },
    rows: [
      {
        aspect: 'Problem Domain',
        technicalRound:
          'Universal for all teams: Student Support Resolution Agent (academic regulations & ticket triage).',
        finalRound: 'Unique to each team, based on the proposal registered in Stage 1.',
      },
      {
        aspect: 'Starting Point',
        technicalRound:
          'A working private repository containing at least 6 deliberate bugs (baseline score ~42.5/100).',
        finalRound: 'A baseline prepared at home and locked at 23:59 on October 28.',
      },
      {
        aspect: 'Core Objective',
        technicalRound:
          'Diagnose bugs, repair the agent control harness, harden security, handle API timeouts, and verify with metrics.',
        finalRound:
          'During a 2-hour Build Sprint: finalize the MVP and integrate an unannounced surprise constraint on-site.',
      },
      {
        aspect: 'Deliverables',
        technicalRound:
          'Fixed repository + at least 10 custom automated test cases + trace report + 6-metric improvement report.',
        finalRound:
          '4-part submission package: Functional MVP link + Impact Report + AI Evaluation Evidence + Video (≤ 3m) & Slide deck.',
      },
      {
        aspect: 'Evaluation Method',
        technicalRound:
          '70% automated hidden test suite + 30% Engineering Review (defending 2 randomly designated execution traces).',
        finalRound:
          '100% Academic Jury evaluation across 6 criteria, including 20 points reserved for on-site work via git diff.',
      },
      {
        aspect: 'Scoring Weight',
        technicalRound:
          '15% of total competition score (Qualifying Top 15 teams to the Grand Final).',
        finalRound:
          '70% of total competition score (Determining the Champion with same-day awards ceremony).',
      },
    ],
    conclusion:
      'The Technical Challenge exists for a practical reason: if you have never repaired a broken Agent, you will not know where your own Agent breaks when building from scratch.',
  },
  agentAnatomy: {
    badge: 'SYSTEM ANATOMY',
    title: 'The Five Mandatory Layers of an AI Agent',
    subtitle:
      'Most teams build only layers 1 and 2 and stop. Reliability, security, and winning points reside in layers 4 and 5.',
    analogy:
      'A simple analogy: Model is the engine, Agent is the car, while Harness represents the steering wheel, brakes, sensors, navigation map, and vehicle inspection system. No one hands over a car with just an engine.',
    layers: [
      {
        layerNumber: 1,
        name: 'Model (Engine)',
        roleQuestion: 'Who understands and articulates language?',
        description:
          'Foundation model selection and system prompt engineering. Equal API quota is provided by the organizers to all teams.',
        deliverable:
          'Standardized system instructions, calibrated temperature settings, and structured output formatting.',
      },
      {
        layerNumber: 2,
        name: 'Tools (Action Capabilities)',
        roleQuestion: 'What concrete actions can the Agent execute?',
        description:
          '5–7 concrete tool functions: query, retrieve data, create records, hand off to human. Each has explicit schemas, permissions, and error handling.',
        deliverable:
          'Strict tool schemas, validated input parameters, and resilient exception handling.',
      },
      {
        layerNumber: 3,
        name: 'Agent Loop (Decision Cycle)',
        roleQuestion: 'How does the Agent decide the next step?',
        description:
          'Operational cycle: receive input, parse intent, select tool, interpret output, determine subsequent action, verify, and respond or escalate.',
        deliverable:
          'Multi-step orchestration loop, timely termination conditions, and infinite-loop prevention.',
      },
      {
        layerNumber: 4,
        name: 'Harness (Protective Guardrails & Control)',
        roleQuestion: 'Who prevents the Agent from misbehaving or corrupting data?',
        description:
          'Filters expired regulations, blocks indirect prompt injections, enforces human approval gates before data mutation, limits retries, and records full execution traces.',
        deliverable:
          'Deterministic safety guardrails, idempotent timeout recovery, and granular structured execution logging.',
      },
      {
        layerNumber: 5,
        name: 'Evaluation (Measurement & Benchmarking)',
        roleQuestion: 'How do you prove the Agent is correct and better than the baseline?',
        description:
          'Comprehensive automated test suite executed before and after optimizations, yielding quantifiable comparison scorecards.',
        deliverable:
          'At least 10 automated test cases, benchmark metric reports, and confusion/accuracy matrices.',
      },
    ],
    mvpDefinition: {
      badge: 'DELIVERABLE STANDARDS',
      title: 'What Constitutes a "Functional" Product?',
      description:
        'The Jury will directly interact with your live demo URL. A product is deemed functional only when satisfying all 5 criteria simultaneously:',
      conditions: [
        {
          title: 'Autonomous Usability',
          description:
            'External users can open the link and operate the interface immediately without team members providing verbal instructions.',
        },
        {
          title: 'Authentic Data Mutation',
          description:
            'The Agent invokes real tools and changes persistent state in the mock database rather than printing canned text responses.',
        },
        {
          title: 'Clarifying on Ambiguity',
          description:
            'When user input is incomplete or ambiguous, the Agent actively seeks clarification rather than hallucinating assumptions.',
        },
        {
          title: 'Graceful Error Integrity',
          description:
            'When tools or upstream APIs fail, the Agent never falsely claims "task completed", but handles exceptions or escalates appropriately.',
        },
        {
          title: 'Verifiable Citations',
          description:
            'Every assertion regarding rules, numbers, or policies must cite active, verifiable document identifiers and sources.',
        },
      ],
    },
    nonProducts: {
      badge: 'SCORING PENALTIES',
      title: 'Items That DO NOT Qualify as Products',
      rules: [
        {
          title: 'Figma Mockups or UI Screenshots',
          description:
            'Regardless of graphic elegance, static designs without executable backend logic receive zero product points.',
        },
        {
          title: 'Generic ChatGPT API Wrappers',
          description:
            'A basic chat window forwarding prompts to LLMs without custom domain tools, proprietary data, or verification guardrails.',
        },
        {
          title: 'Pre-rendered Scripted Videos',
          description:
            'Screen recordings simulating functional behavior while the actual production deployment is unreachable or broken.',
        },
        {
          title: 'Systems Lacking Automated Tests',
          description:
            'Software running without automated verification test suites demonstrating behavioral correctness under edge cases.',
        },
        {
          title: 'Zero Changes from October 28 Baseline',
          description:
            'Solutions showing no git diff modifications or failure to integrate the on-site surprise constraint on October 31.',
        },
      ],
    },
    finalDeliverables: {
      badge: 'FINAL DOSSIER',
      title: 'Four Mandatory Deliverables for Final Submission',
      items: [
        {
          id: 'item-1',
          name: '1. Functional Prototype or MVP',
          specification:
            'End-to-end AI Agent executing core workflow with on-site constraint integration and verified citations.',
          format: 'Publicly accessible live demo URL + Official private repository.',
        },
        {
          id: 'item-2',
          name: '2. Social Impact Report',
          specification:
            '3–5 page dossier outlining target beneficiaries, quantifiable impact KPIs, pilot user testing, and empirical results.',
          format: 'Standardized PDF document.',
        },
        {
          id: 'item-3',
          name: '3. Data Provenance & AI Evaluation Evidence',
          specification:
            'Curated datasets, custom automated test suites, prompt/agent execution audit logs, and quantitative benchmark scores.',
          format: 'Repository directory + Tabular evaluation scorecard.',
        },
        {
          id: 'item-4',
          name: '4. Video Walkthrough & Presentation Pitch Deck',
          specification:
            'Live screen recording of real system in action (≤ 3 minutes). Pitch deck designed for 8-minute presentation and 4-minute Q&A.',
          format: 'Google Drive video link + Presentation deck (PDF/PPTX).',
        },
      ],
    },
  },
  teamStructure: {
    badge: 'TEAM DYNAMICS',
    title: 'Recommended 4–5 Member Team Roles',
    subtitle:
      'Teams relying on a single star engineer fail during Engineering Review, as judges interview every member individually.',
    warningNote:
      'During Engineering Review and Demo Day, judges inspect 2 random execution traces and interview each member based on assigned responsibility.',
    roles: [
      {
        role: '1. Agent & Tools Engineer',
        focus:
          'Constructs domain tools, schema validation, and choreographs the core Agent decision loop.',
        keyQuestion:
          '“Why did the Agent choose to call this specific tool first instead of the alternative?”',
      },
      {
        role: '2. Data & Context Engineer',
        focus:
          'Manages data ingestion, RAG retrieval quality, and algorithmic pruning of deprecated policies.',
        keyQuestion:
          '“Where does this specific regulatory policy originate, and how do you ensure it is still active?”',
      },
      {
        role: '3. Evaluation & Safety Engineer',
        focus:
          'Develops automated test harnesses, configures security guardrails, and measures quantitative deltas.',
        keyQuestion:
          '“How do you empirically prove this release version is safer and more accurate than the baseline?”',
      },
      {
        role: '4. Product & Impact Lead',
        focus:
          'Validates end-user requirements, authors impact reports, designs demo flows, and leads oral pitch defense.',
        keyQuestion:
          '“Who directly benefits from this solution, and exactly what portion was engineered on-site today?”',
      },
    ],
    fifthMemberNote:
      'For 5-member teams: The fifth engineer focuses on UI design, client-side API integration, and cloud demo packaging.',
    mockDataPrinciple: {
      title: 'Mandatory Policy: 100% Mock Data Isolation',
      description:
        'All technical rounds and benchmarking strictly utilize synthetic mock datasets. Accessing real student records or live institutional systems is strictly prohibited.',
    },
  },
  caseStudy: {
    badge: 'REALISTIC SCENARIO',
    title: 'Following Team "Di Cung" – From Concept to Research',
    subtitle:
      'A hypothetical journey of 4 third-year university students tackling Smart Tourism & Cultural Preservation in Da Nang.',
    data: {
      teamName: 'Team Di Cung',
      topic: 'Accessible Smart Tourism & Community Inclusion in Da Nang',
      targetUsers: 'Wheelchair travelers and elderly citizens with mobility challenges',
      problem:
        'Wheelchair tourists visiting Da Nang cannot find verified accessibility data regarding ramps, elevators, and wide doorways. Available information online is scattered and unverified.',
      proposal:
        'Build an AI Agent recommending verified itineraries and candidly answering "No verified accessibility data available" for unconfirmed locations rather than hallucinating.',
      questions: [
        { q: 'What is the exact problem and who suffers from it?', isKey: false },
        { q: 'How do users currently cope with this challenge today?', isKey: false },
        {
          q: 'What concrete actions can the Agent perform (what tools are required)?',
          isKey: true,
        },
        { q: 'What must the Agent strictly NEVER do under any circumstance?', isKey: true },
        { q: 'What are the real-world consequences if the Agent provides incorrect advice?', isKey: false },
        { q: 'Where is data sourced from, and what is its verifiable reliability?', isKey: false },
      ],
      milestones: [
        {
          stage: 'Stage 1 (Concept)',
          action: 'Answered 6 core questions and submitted a 3-minute video outlining Agent tool boundaries.',
          outcome:
            'Praised by judges for explicitly defining safety boundaries and refusing unverified claims.',
        },
        {
          stage: 'Stage 2 (Programming)',
          action: 'Collaborated on a single laptop for {duration} solving ICPC algorithm challenges.',
          outcome: 'Achieved high scoreboard standing and qualified into the Top {qualifiedTeams} teams.',
        },
        {
          stage: 'Stage 3 (Training)',
          action: 'Attended 3 hands-on workshops, fixed 3 baseline bugs, and submitted required test suites.',
          outcome:
            'Elevated baseline score by over 15 percentage points, securing technical round eligibility.',
        },
        {
          stage: 'Stage 4 (Technical Round)',
          action:
            'Received flawed agent (42.5/100), repaired 6 bugs in priority sequence, handled live API timeout.',
          outcome:
            'Reached 91.50/100 public score, defended 2 traces, and qualified into the Top 15 Grand Final.',
        },
        {
          stage: 'Stage 5 (Grand Final)',
          action:
            'Locked baseline at 23:59 Oct 28. On Oct 31, integrated surprise constraint: conflicting destination data and elderly personas.',
          outcome: 'Completed on-site integration in 2 hours, delivered compelling pitch, and won top podium award.',
        },
      ],
      academicOutcome:
        'Following the contest, the team was connected with faculty advisors to evolve the solution into an official RBL research thesis and startup project.',
    },
  },
  comprehensiveScoring: {
    badge: 'SCORING MATRIX',
    title: 'Comprehensive & Empirical Evaluation Rubric',
    subtitle:
      'Harmonizing automated hidden test execution, technical engineering review, and on-site sprint capability.',
    formula: 'Final Score = (15% × Concept Round) + (15% × Technical Challenge) + (70% × Grand Final)',
    rounds: [
      {
        roundId: 'round-1',
        title: 'Stage 1: Concept Proposal & Video Pitch',
        weight: '15% overall weight',
        totalPoints: 100,
        criteria: [
          {
            name: 'Urgency & clarity of problem statement',
            points: 25,
            description: 'Authentic real-world issue with clearly defined target beneficiaries.',
          },
          {
            name: 'Creativity & technical feasibility',
            points: 25,
            description: 'Novel approach whose development scope is well calibrated to contest timeline.',
          },
          {
            name: 'Core AI Agent architecture depth',
            points: 25,
            description: 'AI plays a central decision-making role rather than superficial decorative feature.',
          },
          {
            name: 'Projected societal impact & KPIs',
            points: 15,
            description: 'Empirical measurement metrics and practical verification methods.',
          },
          {
            name: 'Presentation quality (Video ≤ 3m)',
            points: 10,
            description: 'Coherent video answering the 6 mandatory questions with persuasive logic.',
          },
        ],
      },
      {
        roundId: 'round-4',
        title: 'Stage 4: Technical Challenge (Harness Engineering)',
        weight: '15% overall weight',
        totalPoints: 100,
        notes:
          'Technical Round Score = (70% × Automated Hidden Tests) + (30% × Engineering Review). Selects Top 15 teams.',
        criteria: [
          {
            name: 'Automated hidden test suite performance (70%)',
            points: 70,
            description:
              'Task completion accuracy, active policy citation, write approval gates, injection defense, timeout resilience, token efficiency.',
          },
          {
            name: 'Defense of 2 random execution traces (Review)',
            points: 10,
            description:
              'Entire team articulates the Agent reasoning chain and tool selection decisions in detail.',
          },
          {
            name: 'Suite of ≥ 10 custom automated test cases (Review)',
            points: 8,
            description:
              'Test coverage across happy paths, boundary conditions, error recovery, and security vectors.',
          },
          {
            name: 'Quantitative metric improvement report (Review)',
            points: 7,
            description:
              'Tabular comparison tracking the 6 benchmark metrics relative to the initial baseline.',
          },
          {
            name: 'Technical depth and individual member contribution (Review)',
            points: 5,
            description:
              'Every member proves mastery of the codebase without reliance on a single author.',
          },
        ],
      },
      {
        roundId: 'round-5',
        title: 'Stage 5: Grand Final – 2-Hour Sprint & Demo Day',
        weight: '70% overall weight',
        totalPoints: 100,
        notes:
          'Baseline locked at 23:59 on October 28. Judges inspect git diffs to award 20 points reserved for on-site implementation.',
        criteria: [
          {
            name: 'Functional Product (Working Prototype / MVP)',
            points: 20,
            description:
              'Executes core workflow seamlessly on public URL with persistent state mutation.',
          },
          {
            name: 'AI Agent technical depth & architecture',
            points: 20,
            description:
              'Intelligent context management, deterministic guardrails, and robust error recovery.',
          },
          {
            name: 'On-site execution quality (Git diff audit)',
            points: 20,
            description:
              'Quality of source code committed during the 2-hour sprint and integration of surprise constraint.',
          },
          {
            name: 'Data provenance & AI evaluation evidence',
            points: 15,
            description:
              'Reliability of data sources, automated test execution logs, and prompt audit traces.',
          },
          {
            name: 'Societal impact report & beneficiary validation',
            points: 15,
            description:
              'Substantive impact report with empirical user survey feedback or pilot testing metrics.',
          },
          {
            name: 'Live demonstration & Q&A defense (8m pitch + 4m Q&A)',
            points: 10,
            description:
              'Persuasive oral delivery on live software with confident answers to jury cross-examination.',
          },
        ],
      },
    ],
    principles: [
      {
        title: 'Hidden Test Validation',
        description:
          'Eliminates hardcoded branching: Hidden tests share identical business logic but use randomized identifiers and inputs.',
      },
      {
        title: 'Independent Trace Audit',
        description:
          'Prevents uncomprehended AI code generation: Judges require engineers to trace decision cycles step-by-step.',
      },
      {
        title: 'On-Site Git Diff Verification',
        description:
          'Guarantees absolute fairness: Judges inspect exact commits authored during the 2-hour sprint on October 31.',
      },
    ],
  },
  footer: {
    copyright: '© 2026 AI for Impact. All rights reserved.',
    disclaimer:
      'AI for Impact 2026 is an academic Agentic AI challenge. All competition rules, technical standards, and procedures are officially published in the Participant Handbook.',
    developerCredit: {
      text: 'Developed by',
      teamName: 'FU-DEVER',
      logoUrl: '/brand/logo-dever.png',
      url: 'https://fudever.com',
    },
    links: {
      handbook: 'Contestant Handbook & Rules',
      registration: 'Registration Form',
      fanpage: 'Official Fanpage',
    },
  },
};
