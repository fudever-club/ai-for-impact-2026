import { getCompetitionViewModel } from '../content/view-model';
import { CompetitionViewModel, RegistrationStatus } from '../content/types';

export interface RegistrationCountdown {
  status: RegistrationStatus;
  daysRemaining: number;
  hoursRemaining: number;
  minutesRemaining: number;
  secondsRemaining: number;
  targetDate: string;
}

export function getRegistrationCountdown(
  currentTime?: Date,
  schedule: Pick<CompetitionViewModel, 'registration' | 'event'> = getCompetitionViewModel('vi')
): RegistrationCountdown {
  const now = currentTime ? currentTime.getTime() : Date.now();
  const regStart = new Date(schedule.registration.opensAt).getTime();
  const regEnd = new Date(schedule.registration.closesAt).getTime();
  const finalEnd = new Date(schedule.event.endDate).getTime();

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
  const totalSeconds = Math.floor(diff / 1000);
  const daysRemaining = Math.floor(totalSeconds / (3600 * 24));
  const hoursRemaining = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutesRemaining = Math.floor((totalSeconds % 3600) / 60);
  const secondsRemaining = totalSeconds % 60;

  return {
    status,
    daysRemaining,
    hoursRemaining,
    minutesRemaining,
    secondsRemaining,
    targetDate: new Date(targetTime).toISOString(),
  };
}
