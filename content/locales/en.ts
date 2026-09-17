import { CompetitionContent } from '../types';

export const enContent: CompetitionContent = {
  locale: 'en',
  meta: {
    title: 'AI for Impact 2026 | Agentic Innovation Challenge – FPT University Da Nang',
    description:
      'Premier academic AI Agent competition hosted by FPT University Da Nang. From algorithmic programming to building real-world AI Agent solutions creating tangible social impact.',
    keywords: [
      'AI for Impact',
      'AI Agent',
      'FPT University Da Nang',
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
    endorsement: 'FPT UNIVERSITY DA NANG • ICPDP & SOFTWARE ENGINEERING DEPT',
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
      prizePool: '12,000,000+ VND',
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
      'FPT University Da Nang hosts AI for Impact 2026 to provide an intensive academic playground for students to master the newest wave of technology: Agentic AI and Harness Engineering.',
      'Participants embark on a comprehensive engineering journey: starting with rigorous algorithmic qualification following international ICPC standards, followed by 3 intensive training workshops with industry leaders, fixing real faulty agent harnesses under automated evaluation, and culminating in a 2-hour sprint with surprise live constraints.',
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
      'A 7-week intensive journey (14/09 – 31/10/2026). At each milestone, teams receive resources and deliver concrete outputs.',
    ctaText: 'Read the Complete Participant Handbook',
    stages: [
      {
        id: 'stage-1',
        sequence: 1,
        startDate: '2026-09-14T00:00:00+07:00',
        endDate: '2026-09-23T23:59:00+07:00',
        displayDate: '14/09 – 23/09/2026',
        theme: 'impact',
        title: 'Registration & Idea Proposal',
        shortTitle: 'Registration & Idea',
        summary:
          'Teams register (3–5 members) via the official Google Form and submit an idea pitch video (≤ 3 minutes) before the final deadline of 28/09/2026.',
        output: 'Team Profile + 1 Video Pitch ≤ 3 min (Problem, Target Users, AI Architecture, Social Impact).',
      },
      {
        id: 'stage-2',
        sequence: 2,
        startDate: '2026-10-02T08:00:00+07:00',
        endDate: '2026-10-02T12:00:00+07:00',
        displayDate: 'Friday, 02/10/2026 (08:00 – 12:00)',
        theme: 'technical',
        title: 'Qualification – Programming Thinking Challenge',
        shortTitle: 'Algorithmic Challenge',
        summary:
          'A 240-minute in-person algorithmic contest adhering to ICPC Global 2024 standards. Exactly 1 laptop per team. Automated scoring on hidden/public tests.',
        output: 'Real-time live scoreboard. Top 24 teams qualify for the Training phase and Technical Round.',
      },
      {
        id: 'stage-3',
        sequence: 3,
        startDate: '2026-10-07T14:00:00+07:00',
        endDate: '2026-10-09T17:00:00+07:00',
        displayDate: '07/10, 08/10 & 09/10/2026',
        theme: 'training',
        title: 'Intensive Training & Workshop Series',
        shortTitle: 'Intensive Training',
        summary:
          '3 hands-on workshops with university faculty and enterprise mentors: Baseline Agent debugging, Evaluation & Security, Mock Run & Deployment.',
        output: '8 test cases, 2 security tests, 1 timeout test, trace report, and 1 deployed accessible online demo.',
      },
      {
        id: 'stage-4',
        sequence: 4,
        startDate: '2026-10-17T08:00:00+07:00',
        endDate: '2026-10-17T12:00:00+07:00',
        displayDate: 'Saturday, 17/10/2026',
        theme: 'technical',
        title: 'Technical Round – Harness Engineering Challenge',
        shortTitle: 'Harness Engineering',
        summary:
          'Student Support Resolution Agent challenge: Fix context leaks, security flaws, and approval gates in a faulty baseline agent repository.',
        output: '70% automated test score + 30% Engineering Review. Top 15 advance; baseline freeze at 23:59 on 28/10.',
      },
      {
        id: 'stage-5',
        sequence: 5,
        startDate: '2026-10-31T08:00:00+07:00',
        endDate: '2026-10-31T17:00:00+07:00',
        displayDate: 'Saturday, 31/10/2026',
        theme: 'impact',
        title: 'Grand Finale – 2-Hour Build Sprint & Demo Day',
        shortTitle: 'Grand Finale & Demo Day',
        summary:
          'A 2-hour on-site sprint on top of frozen baseline with live surprise constraints, followed by afternoon Demo Day pitches and award ceremony.',
        output: 'Functional production MVP, impact report, AI evaluation artifacts, video demo, pitch deck & awards.',
      },
    ],
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
      dateVal: 'Friday, 02/10/2026',
      duration: 'Duration',
      durationVal: '240 minutes (08:00 – 12:00)',
      location: 'Venue',
      locationVal: 'FPT University Da Nang Campus',
      qualification: 'Advancement Threshold',
      qualificationVal: 'Top 24 Highest-Ranked Teams',
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
      deadline: '23:59 on 28/10/2026',
      content:
        'Finalist teams may develop foundations at home but must freeze and push all code to official repositories labeled "baseline" by 23:59 on 28/10/2026. On 31/10 morning, a surprise live constraint is revealed. Judges inspect Git diffs to award the dedicated 20/100 points for on-site execution.',
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
      'Cash awards combined with direct incubation opportunities at FPT University Startup Incubator.',
    totalPool: 'Total Cash Prize Pool: 12,000,000 VND',
    items: [
      {
        id: 'first',
        title: '1st Place Winner',
        amount: 5000000,
        currency: 'VND',
        formattedAmount: '5,000,000 VND',
        quantity: 1,
        description: 'Championship Trophy + FPT University Certificate + Startup Incubation Grant',
        badge: 'Champion',
      },
      {
        id: 'second',
        title: '2nd Place Winner',
        amount: 3000000,
        currency: 'VND',
        formattedAmount: '3,000,000 VND',
        quantity: 1,
        description: 'Medal + FPT University Certificate + Tech Hardware Gifts',
        badge: 'Runner-up',
      },
      {
        id: 'third',
        title: '3rd Place Winner',
        amount: 2000000,
        currency: 'VND',
        formattedAmount: '2,000,000 VND',
        quantity: 1,
        description: 'Medal + FPT University Certificate',
        badge: 'Third Place',
      },
      {
        id: 'impact',
        title: 'Best "AI for Impact" Award',
        amount: 1000000,
        currency: 'VND',
        formattedAmount: '1,000,000 VND',
        quantity: 1,
        description: 'Honoring the most impressive and measurable social community impact',
        badge: 'Social Impact',
      },
      {
        id: 'best-agent',
        title: 'Best Agent Engineering Award',
        amount: 1000000,
        currency: 'VND',
        formattedAmount: '1,000,000 VND',
        quantity: 1,
        description: 'Honoring the most sophisticated Agent & Harness architecture design',
        badge: 'Engineering Excellence',
      },
    ],
    additionalBenefits: [
      'Official FPT University Da Nang Certificates of Participation awarded to all finalists.',
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
          'All university and college students across Da Nang city are eligible. Priority is given to Information Technology, Software Engineering, and AI disciplines. Multidisciplinary teams combining tech with Business, Media, or Design are highly encouraged.',
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
          'To cultivate team synergy and tactical role distribution similar to international ICPC contests, each team may operate only 1 active laptop during the 240-minute contest. One standby backup machine is permitted on site if certified by a proctor.',
      },
      {
        id: 'faq-6',
        question: 'How does the Technical Round differ from the Grand Finale?',
        answer:
          'In the Technical Round (17/10), you DO NOT build your own project. You receive a buggy benchmark agent created by the organizers and must diagnose and fix its harness. In the Grand Finale (31/10), you build and pitch your own team project.',
      },
      {
        id: 'faq-7',
        question: 'How does the Baseline Freeze work for the Grand Finale?',
        answer:
          'The Finale lasts 2 continuous hours. To ensure fairness, teams push pre-built frameworks to official Git repos labeled "baseline" before 23:59 on 28/10. On contest morning, surprise constraints are revealed, and judges review diff logs to score the 20/100 on-site component.',
      },
      {
        id: 'faq-8',
        question: 'Where can I read the full Participant Handbook and Regulations?',
        answer:
          'All authoritative documents (Official Plan, Participant Handbook, Technical Regulations) are accessible via the top navigation bar links on this website.',
      },
    ],
  },
  register: {
    badge: 'JOIN TODAY',
    title: 'Ready to Tackle the AI Agent Challenge?',
    subtitle:
      'Form your team today and embark on a transformative 7-week journey at FPT University Da Nang.',
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
        desc: 'Record a concise video (≤ 3 min) pitching problem, user group, and AI concept before 28/09.',
      },
    ],
    ctaText: 'Open Official Registration Form',
    deadlineNotice: 'Registration closes at 23:59 on 23/09/2026',
  },
  organizers: {
    badge: 'ORGANIZING COMMITTEE',
    title: 'Steering Committee & Faculty Boards',
    subtitle: 'Collaboration between University Administration, Engineering Faculty, and Tech Community',
  },
  footer: {
    copyright: '© 2026 AI for Impact. FPT University Da Nang. All rights reserved.',
    disclaimer:
      'AI for Impact 2026 is an official academic competition jointly organized by ICPDP, Software Engineering Department, and CF Department at FPT University Da Nang.',
    links: [
      { label: 'Participant Handbook', href: 'https://docs.google.com/document/d/e/2PACX-1vT-AIForImpact2026-Handbook/pub' },
      { label: 'Official Rules', href: 'https://docs.google.com/document/d/e/2PACX-1vT-AIForImpact2026-Rules/pub' },
      { label: 'Registration Form', href: 'https://docs.google.com/forms/d/e/1FAIpQLSfWys6lCg430a08f7vWUai4fPlv8EaN966XmC5f5LQbR2fAsA/viewform' },
      { label: 'Official Fanpage', href: 'https://www.facebook.com/profile.php?id=61565495577626' },
    ],
  },
};
