import { siteConfig } from '../content/site-config';
import { RegistrationStatus } from '../content/types';

export interface RegistrationCountdown {
  status: RegistrationStatus;
  daysRemaining: number;
  hoursRemaining: number;
  minutesRemaining: number;
  targetDate: string;
}

export function getRegistrationCountdown(currentTime?: Date): RegistrationCountdown {
  const now = currentTime ? currentTime.getTime() : Date.now();
  const regStart = new Date(siteConfig.keyDates.registrationStart).getTime();
  const regEnd = new Date(siteConfig.keyDates.registrationEnd).getTime();
  const finalEnd = new Date(siteConfig.keyDates.finalRound).getTime();

  let status: RegistrationStatus = 'closed';
  let targetTime = regEnd;

  if (now < regStart) {
    status = 'upcoming';
    targetTime = regStart;
  } else if (now <= regEnd) {
    status = 'open';
    targetTime = regEnd;
  } else if (now <= finalEnd) {
    status = 'closed';
    targetTime = finalEnd;
  } else {
    status = 'finished';
    targetTime = finalEnd;
  }

  const diff = Math.max(0, targetTime - now);
  const totalMinutes = Math.floor(diff / (1000 * 60));
  const daysRemaining = Math.floor(totalMinutes / (60 * 24));
  const hoursRemaining = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutesRemaining = totalMinutes % 60;

  return {
    status,
    daysRemaining,
    hoursRemaining,
    minutesRemaining,
    targetDate: new Date(targetTime).toISOString(),
  };
}
