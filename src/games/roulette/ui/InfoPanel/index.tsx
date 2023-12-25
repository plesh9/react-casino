import { FC } from 'react';
import { useAppSelector } from 'app/store/hooks';
import { selectBalance } from 'entities/wallet/slices';
import { selectActiveNumber, selectCurrentBet } from 'games/roulette/slices';
import { ScoreWindow } from 'games/roulette/shared/ScoreWindow';

import Balance from 'assets/images/roulette/balance.png';
import WinBet from 'assets/images/roulette/win-bet.png';
import Bet from 'assets/images/roulette/bet.png';
import BetNumber from 'assets/images/roulette/bet-number.png';

import s from './InfoPanel.module.scss';

interface IScoreItem {
  id: 'balance' | 'winBet' | 'currentBet' | 'activeNumber';
  title: string;
  icon: string;
}

const ITEMS: IScoreItem[] = [
  {
    id: 'balance',
    title: 'Balance',
    icon: Balance,
  },
  {
    id: 'winBet',
    title: 'Win Bet',
    icon: WinBet,
  },
  {
    id: 'currentBet',
    title: 'Bet',
    icon: Bet,
  },
  {
    id: 'activeNumber',
    title: 'Bet Number',
    icon: BetNumber,
  },
];

export const InfoPanel: FC = () => {
  const activeNumber = useAppSelector(selectActiveNumber);
  const currentBet = useAppSelector(selectCurrentBet);
  const balance = useAppSelector(selectBalance);
  const winBet = 144;

  return (
    <div className={s.info}>
      <ul className={s.info__list}>
        {ITEMS.map(({ id, title, icon }) => (
          <li key={id}>
            <ScoreWindow label={title} icon={icon}>
              {
                {
                  balance,
                  activeNumber,
                  currentBet,
                  winBet,
                }[id]
              }
            </ScoreWindow>
          </li>
        ))}
      </ul>
    </div>
  );
};
