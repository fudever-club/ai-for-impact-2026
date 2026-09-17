import { PrizeItem } from '../../content/types';

export interface PrizePodium {
  first?: PrizeItem;
  second?: PrizeItem;
  third?: PrizeItem;
}

export function selectPrizePodium(items: PrizeItem[]): PrizePodium {
  return {
    first: items.find((prize) => prize.id === 'first'),
    second: items.find((prize) => prize.id === 'second'),
    third: items.find((prize) => prize.id === 'third'),
  };
}
