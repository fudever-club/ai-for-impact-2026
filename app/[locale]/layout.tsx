import React from 'react';
import { notFound } from 'next/navigation';
import { SUPPORTED_LOCALES, isSupportedLocale } from '../../lib/locale';
import { Locale } from '../../content/types';

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  if (!isSupportedLocale(params.locale)) {
    notFound();
  }

  return (
    <div lang={params.locale} className="min-h-screen flex flex-col">
      {children}
    </div>
  );
}
