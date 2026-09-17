import { SiteConfig } from './types';

export const siteConfig: SiteConfig = {
  eventName: 'AI for Impact 2026 – Agentic Innovation Challenge',
  domain: 'AI.Impact.fptu.vn',
  registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfWys6lCg430a08f7vWUai4fPlv8EaN966XmC5f5LQbR2fAsA/viewform',
  handbookUrl: 'https://docs.google.com/document/d/e/2PACX-1vT-AIForImpact2026-Handbook/pub',
  rulesUrl: 'https://docs.google.com/document/d/e/2PACX-1vT-AIForImpact2026-Rules/pub',
  contactEmail: 'icpdp.dn@fe.edu.vn',
  fanpageUrl: 'https://www.facebook.com/profile.php?id=61565495577626',
  keyDates: {
    registrationStart: '2026-09-14T00:00:00+07:00',
    registrationEnd: '2026-09-23T23:59:00+07:00',
    videoProposalEnd: '2026-09-28T23:59:00+07:00',
    programmingRound: '2026-10-02T08:00:00+07:00',
    trainingDates: [
      '2026-10-07T14:00:00+07:00',
      '2026-10-08T14:00:00+07:00',
      '2026-10-09T14:00:00+07:00',
    ],
    harnessRound: '2026-10-17T08:00:00+07:00',
    baselineFreeze: '2026-10-28T23:59:00+07:00',
    finalRound: '2026-10-31T08:00:00+07:00',
  },
  prizes: {
    first: { amount: 5000000, quantity: 1 },
    second: { amount: 3000000, quantity: 1 },
    third: { amount: 2000000, quantity: 1 },
    impact: { amount: 1000000, quantity: 1 },
    bestAgent: { amount: 1000000, quantity: 1 },
  },
  organizers: [
    {
      id: 'fptu',
      name: 'Trường Đại học FPT Đà Nẵng',
      shortName: 'FPT University Đà Nẵng',
      role: 'Đơn vị chỉ đạo & đăng cai tổ chức',
      logo: '/brand/fpt-university.png',
    },
    {
      id: 'icpdp',
      name: 'Phòng Hợp tác Quốc tế & Phát triển Cá nhân',
      shortName: 'ICPDP FPTU',
      role: 'Đơn vị đồng tổ chức & điều phối sự kiện',
      logo: '/brand/icpdp.png',
    },
    {
      id: 'bm-se',
      name: 'Bộ môn Kỹ thuật Phần mềm',
      shortName: 'BM SE FPTU',
      role: 'Hội đồng chuyên môn & Trưởng ban đề thi',
    },
    {
      id: 'bm-cf',
      name: 'Bộ môn CF',
      shortName: 'BM CF FPTU',
      role: 'Hội đồng chuyên môn phối hợp',
    },
  ],
};
