import { FC } from 'react';
import { useAppSelector } from 'app/store/hooks';
import { selectActiveNumber } from 'games/roulette/slices';

import s from './BetPanel.module.scss';

interface BetPanelProps {}

export const BetPanel: FC<BetPanelProps> = () => {
  const activeNumber = useAppSelector(selectActiveNumber);

  return <div className={s.panel}>{activeNumber}</div>;
};
