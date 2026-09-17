import { SiteConfig } from './types';

export const siteConfig: SiteConfig = {
  eventName: 'AI for Impact 2026 – Agentic Innovation Challenge',
  domain: 'AI.Impact.fptu.vn',
  contactEmail: 'icpdp.dn@fe.edu.vn',
  fanpageUrl: 'https://www.facebook.com/profile.php?id=61565495577626',
  registration: {
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSfWys6lCg430a08f7vWUai4fPlv8EaN966XmC5f5LQbR2fAsA/viewform',
    opensAt: '2026-09-14T00:00:00+07:00',
    closesAt: '2026-09-23T23:59:00+07:00',
  },
  documents: {
    handbook: {
      url: 'https://docs.google.com/document/d/e/2PACX-1vT-AIForImpact2026-Handbook/pub',
      approval: 'withheld',
    },
    rules: {
      url: 'https://docs.google.com/document/d/e/2PACX-1vT-AIForImpact2026-Rules/pub',
      approval: 'withheld',
    },
  },
  stages: [
    {
      id: 'stage-1',
      sequence: 1,
      startsAt: '2026-09-14T00:00:00+07:00',
      endsAt: '2026-09-23T23:59:00+07:00',
      theme: 'impact',
      approval: 'approved',
    },
    {
      id: 'stage-2',
      sequence: 2,
      startsAt: '2026-10-02T08:00:00+07:00',
      endsAt: '2026-10-02T12:00:00+07:00',
      theme: 'technical',
      approval: 'approved',
    },
    {
      id: 'stage-3',
      sequence: 3,
      startsAt: '2026-10-07T14:00:00+07:00',
      endsAt: '2026-10-09T17:00:00+07:00',
      theme: 'training',
      approval: 'withheld',
    },
    {
      id: 'stage-4',
      sequence: 4,
      startsAt: '2026-10-17T08:00:00+07:00',
      endsAt: '2026-10-17T12:00:00+07:00',
      theme: 'technical',
      approval: 'approved',
    },
    {
      id: 'stage-5',
      sequence: 5,
      startsAt: '2026-10-31T08:00:00+07:00',
      theme: 'impact',
      approval: 'approved',
    },
  ],
  programmingChallenge: {
    location: 'Trường Đại học FPT Đà Nẵng',
    qualifiedTeams: 24,
  },
  disputedFacts: {
    videoProposalEnd: {
      value: '2026-09-28T23:59:00+07:00',
      approval: 'withheld',
    },
    finalistTeamCount: {
      value: 15,
      approval: 'withheld',
    },
    finalDurationHours: {
      value: 2,
      approval: 'withheld',
    },
    baselineFreeze: {
      value: '2026-10-28T23:59:00+07:00',
      approval: 'withheld',
    },
    trainingDates: {
      value: [
        '2026-10-07T14:00:00+07:00',
        '2026-10-08T14:00:00+07:00',
        '2026-10-09T14:00:00+07:00',
      ],
      approval: 'withheld',
    },
  },
  prizes: {
    first: { amount: 5000000, currency: 'VND', quantity: 1, approval: 'withheld' },
    second: { amount: 3000000, currency: 'VND', quantity: 1, approval: 'withheld' },
    third: { amount: 2000000, currency: 'VND', quantity: 1, approval: 'withheld' },
    impact: { amount: 1000000, currency: 'VND', quantity: 1, approval: 'withheld' },
    'best-agent': { amount: 1000000, currency: 'VND', quantity: 1, approval: 'withheld' },
  },
  organizers: [
    {
      id: 'fptu',
      name: 'Trường Đại học FPT Đà Nẵng',
      shortName: 'FPT University Đà Nẵng',
      role: 'Đơn vị chỉ đạo & đăng cai tổ chức',
      logo: '/brand/fpt-university.png',
      approval: 'withheld',
    },
    {
      id: 'icpdp',
      name: 'Phòng Hợp tác Quốc tế & Phát triển Cá nhân',
      shortName: 'ICPDP FPTU',
      role: 'Đơn vị đồng tổ chức & điều phối sự kiện',
      logo: '/brand/icpdp.png',
      approval: 'withheld',
    },
    {
      id: 'bm-se',
      name: 'Bộ môn Kỹ thuật Phần mềm',
      shortName: 'BM SE FPTU',
      role: 'Hội đồng chuyên môn & Trưởng ban đề thi',
      approval: 'withheld',
    },
    {
      id: 'bm-cf',
      name: 'Bộ môn CF',
      shortName: 'BM CF FPTU',
      role: 'Hội đồng chuyên môn phối hợp',
      approval: 'withheld',
    },
  ],
};
