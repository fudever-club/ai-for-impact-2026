'use client';

import { Locale } from '../../content/types';

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = () => {
  // Language switching disabled per design requirements - single Vietnamese interface
  return null;
};
