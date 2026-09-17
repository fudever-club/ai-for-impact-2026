import { Locale } from '../content/types';

export function formatDate(
  dateString: string,
  locale: Locale = 'vi',
  options?: Intl.DateTimeFormatOptions
): string {
  try {
    const date = new Date(dateString);
    const defaultOptions: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      ...options,
    };
    return new Intl.DateTimeFormat(locale === 'vi' ? 'vi-VN' : 'en-US', defaultOptions).format(
      date
    );
  } catch {
    return dateString;
  }
}

export function formatDateTime(
  dateString: string,
  locale: Locale = 'vi'
): string {
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale === 'vi' ? 'vi-VN' : 'en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(date);
  } catch {
    return dateString;
  }
}

export function formatCurrencyVND(amount: number, locale: Locale = 'vi'): string {
  if (locale === 'vi') {
    return `${amount.toLocaleString('vi-VN')} VNĐ`;
  }
  return `${amount.toLocaleString('en-US')} VND`;
}
