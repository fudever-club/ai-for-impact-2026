import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Locale } from '../../content/types';
import { isSupportedLocale } from '../../lib/locale';
import { getCompetitionViewModel } from '../../content/view-model';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { HeroSection } from '../../components/sections/HeroSection';
import { AboutSection } from '../../components/sections/AboutSection';
import { JourneySection } from '../../components/sections/JourneySection';
import { AgentAnatomySection } from '../../components/sections/AgentAnatomySection';
import { ProgrammingChallengeSection } from '../../components/sections/ProgrammingChallengeSection';
import { ThemesSection } from '../../components/sections/ThemesSection';
import { TeamRolesSection } from '../../components/sections/TeamRolesSection';
import { EvaluationSection } from '../../components/sections/EvaluationSection';
import { PrizesSection } from '../../components/sections/PrizesSection';
import { FAQSection } from '../../components/sections/FAQSection';
import { RegisterSection } from '../../components/sections/RegisterSection';
import { OrganizersSection } from '../../components/sections/OrganizersSection';
import { SiteFooter } from '../../components/layout/SiteFooter';

interface LocalePageProps {
  params: {
    locale: string;
  };
}

export function generateMetadata({ params }: LocalePageProps): Metadata {
  if (!isSupportedLocale(params.locale)) return {};
  const content = getCompetitionViewModel(params.locale);

  return {
    title: content.meta.title,
    description: content.meta.description,
    keywords: content.meta.keywords,
    alternates: {
      canonical: `https://ai.impact.fptu.vn/${params.locale}`,
      languages: {
        vi: 'https://ai.impact.fptu.vn/vi',
        en: 'https://ai.impact.fptu.vn/en',
      },
    },
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      url: `https://ai.impact.fptu.vn/${params.locale}`,
      siteName: 'AI for Impact 2026',
      images: [
        {
          url: '/brand/hero-banner.jpg',
          width: 1200,
          height: 630,
          alt: 'AI for Impact 2026',
        },
      ],
      locale: params.locale === 'vi' ? 'vi_VN' : 'en_US',
      type: 'website',
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icon.svg', type: 'image/svg+xml' },
        { url: '/icon.png', type: 'image/png', sizes: '64x64' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '256x256' },
      ],
    },
  };
}

export default function LocalePage({ params }: LocalePageProps) {
  if (!isSupportedLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const content = getCompetitionViewModel(locale);

  // JSON-LD Structured Data for Event SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: content.event.name,
    description: content.meta.description,
    startDate: content.event.startDate,
    endDate: content.event.endDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: content.event.location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Đà Nẵng',
        addressCountry: 'VN',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader locale={locale} content={content} />
      <main className="flex-1">
        <HeroSection locale={locale} content={content} />
        <AboutSection locale={locale} content={content} />
        <JourneySection locale={locale} content={content} />
        <ProgrammingChallengeSection locale={locale} content={content} />
        <AgentAnatomySection locale={locale} content={content} />
        <ThemesSection locale={locale} content={content} />
        <TeamRolesSection locale={locale} content={content} />
        <EvaluationSection locale={locale} content={content} />
        {content.prizes.items.length > 0 && (
          <PrizesSection locale={locale} content={content} />
        )}
        <RegisterSection locale={locale} content={content} />
        <FAQSection locale={locale} content={content} />
        {content.organizers.items.length > 0 && (
          <OrganizersSection locale={locale} content={content} />
        )}
      </main>
      <SiteFooter locale={locale} content={content} />
    </>
  );
}
