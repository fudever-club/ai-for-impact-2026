import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Locale } from '../../content/types';
import { isSupportedLocale } from '../../lib/locale';
import { viContent } from '../../content/locales/vi';
import { enContent } from '../../content/locales/en';
import { siteConfig } from '../../content/site-config';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { HeroSection } from '../../components/sections/HeroSection';
import { AboutSection } from '../../components/sections/AboutSection';
import { JourneySection } from '../../components/sections/JourneySection';
import { ProgrammingChallengeSection } from '../../components/sections/ProgrammingChallengeSection';
import { ThemesSection } from '../../components/sections/ThemesSection';
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
  const content = params.locale === 'vi' ? viContent : enContent;

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
  };
}

export default function LocalePage({ params }: LocalePageProps) {
  if (!isSupportedLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const content = locale === 'vi' ? viContent : enContent;

  // JSON-LD Structured Data for Event SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: siteConfig.eventName,
    description: content.meta.description,
    startDate: siteConfig.keyDates.registrationStart,
    endDate: siteConfig.keyDates.finalRound,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'Trường Đại học FPT Đà Nẵng',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Đà Nẵng',
        addressCountry: 'VN',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Trường Đại học FPT Đà Nẵng',
      url: 'https://ai.impact.fptu.vn',
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
        <ThemesSection locale={locale} content={content} />
        <EvaluationSection locale={locale} content={content} />
        <PrizesSection locale={locale} content={content} />
        <FAQSection locale={locale} content={content} />
        <RegisterSection locale={locale} content={content} />
        <OrganizersSection locale={locale} content={content} />
      </main>
      <SiteFooter locale={locale} content={content} />
    </>
  );
}
