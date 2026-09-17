'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Locale } from '../../content/types';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLocale }) => {
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (targetLocale: Locale) => {
    if (targetLocale === currentLocale) return;

    // Get current hash if any
    const hash = typeof window !== 'undefined' ? window.location.hash : '';

    // Replace locale in path: /vi/... -> /en/...
    let newPath = pathname;
    if (pathname.startsWith('/vi')) {
      newPath = pathname.replace(/^\/vi/, `/${targetLocale}`);
    } else if (pathname.startsWith('/en')) {
      newPath = pathname.replace(/^\/en/, `/${targetLocale}`);
    } else {
      newPath = `/${targetLocale}`;
    }

    router.push(`${newPath}${hash}`);
  };

  return (
    <div className="inline-flex items-center rounded-lg p-0.5 bg-navy-800/80 border border-brand-cyan/20">
      <button
        type="button"
        onClick={() => switchLocale('vi')}
        className={`px-2.5 py-1 rounded-md text-xs font-mono font-semibold transition-all ${
          currentLocale === 'vi'
            ? 'bg-brand-blue text-white shadow-sm'
            : 'text-brand-muted hover:text-white'
        }`}
        aria-label="Chuyển sang tiếng Việt"
      >
        VI
      </button>
      <button
        type="button"
        onClick={() => switchLocale('en')}
        className={`px-2.5 py-1 rounded-md text-xs font-mono font-semibold transition-all ${
          currentLocale === 'en'
            ? 'bg-brand-blue text-white shadow-sm'
            : 'text-brand-muted hover:text-white'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
};
