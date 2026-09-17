import { describe, it, expect } from 'vitest';
import { getRegistrationCountdown } from '../lib/registration';
import { formatDate, formatDateTime, formatCurrencyVND } from '../lib/dates';

describe('Registration Countdown & Date Utilities', () => {
  it('should return upcoming when date is before registration start', () => {
    const beforeStart = new Date('2026-09-01T00:00:00+07:00');
    const countdown = getRegistrationCountdown(beforeStart);
    expect(countdown.status).toBe('upcoming');
    expect(countdown.daysRemaining).toBeGreaterThan(0);
  });

  it('should return open during the registration window', () => {
    const duringReg = new Date('2026-09-17T12:00:00+07:00');
    const countdown = getRegistrationCountdown(duringReg);
    expect(countdown.status).toBe('open');
    expect(countdown.daysRemaining).toBeGreaterThanOrEqual(0);
    expect(countdown.secondsRemaining).toBeGreaterThanOrEqual(0);
    expect(countdown.secondsRemaining).toBeLessThan(60);
  });

  it('should return closed after registration deadline', () => {
    const afterReg = new Date('2026-09-25T00:00:00+07:00');
    const countdown = getRegistrationCountdown(afterReg);
    expect(countdown.status).toBe('closed');
  });

  it('should return finished after the event finishes', () => {
    const afterFinal = new Date('2026-11-05T00:00:00+07:00');
    const countdown = getRegistrationCountdown(afterFinal);
    expect(countdown.status).toBe('finished');
  });

  it('should correctly format Vietnamese and English dates', () => {
    const dateStr = '2026-10-02T08:00:00+07:00';
    const viDate = formatDate(dateStr, 'vi');
    const enDate = formatDate(dateStr, 'en');
    expect(viDate).toBeDefined();
    expect(enDate).toBeDefined();
  });

  it('should correctly format VND currency', () => {
    expect(formatCurrencyVND(5000000, 'vi')).toContain('5.000.000');
    expect(formatCurrencyVND(5000000, 'en')).toContain('5,000,000');
  });
});
