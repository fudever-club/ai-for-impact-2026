import { Locale } from '../content/types';

export const SUPPORTED_LOCALES: Locale[] = ['vi', 'en'];
export const DEFAULT_LOCALE: Locale = 'vi';

export function isSupportedLocale(locale: string): locale is Locale {
  return SUPPORTED_LOCALES.includes(locale as Locale);
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'vi' ? 'en' : 'vi';
}
