import { FC } from 'react';
import { useAppSelector } from 'app/store/hooks';
import { selectActiveNumber, selectCurrentBet } from 'games/roulette/slices';

import s from './InfoPanel.module.scss';
import { selectBalance } from 'entities/wallet/slices';

interface InfoPanelProps {}

const ITEMS = [
  {
    id: 'balance',
    title: 'Balance',
    icon: '',
  },
  {
    id: 'winBet',
    title: 'Win Bet',
    icon: '',
  },
  {
    id: 'currentBet',
    title: 'Bet',
    icon: '',
  },
  {
    id: 'activeNumber',
    title: 'Bet Number',
    icon: '',
  },
];

export const InfoPanel: FC<InfoPanelProps> = () => {
  const activeNumber = useAppSelector(selectActiveNumber);
  const currentBet = useAppSelector(selectCurrentBet);
  const balance = useAppSelector(selectBalance);

  return (
    <div className={s.info}>
      <ul className={s.info__list}>
        {ITEMS.map(({ id, title, icon }) => (
          <li className={s.item} key={id}>
            <span className={s.item__title}>{title}</span>
            <div className={s.item__block}>
              <span>
                {
                  {
                    balance,
                    activeNumber,
                    currentBet,
                  }[id]
                }
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
