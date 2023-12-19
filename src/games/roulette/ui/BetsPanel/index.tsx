import { FC } from 'react';

import bet50 from 'assets/images/roulette/bet-50.png';
import bet100 from 'assets/images/roulette/bet-100.png';
import bet200 from 'assets/images/roulette/bet-200.png';
import bet400 from 'assets/images/roulette/bet-400.png';
import bet800 from 'assets/images/roulette/bet-800.png';

import s from './BetsPanel.module.scss';
import { useAppDispatch } from 'app/store/hooks';
import { setCurrentBet } from 'games/roulette/slices';

interface BetsPanelProps {}

const BETS = [
  {
    value: 50,
    image: bet50,
  },
  {
    value: 100,
    image: bet100,
  },
  {
    value: 200,
    image: bet200,
  },
  {
    value: 400,
    image: bet400,
  },
  {
    value: 800,
    image: bet800,
  },
];

export const BetsPanel: FC<BetsPanelProps> = () => {
  const dispatch = useAppDispatch();

  const handlePickBet = (value: number) => {
    dispatch(setCurrentBet(value));
  };

  return (
    <div className={s.bets}>
      <div>
        <ul className={s.bets__list}>
          {BETS.map(({ value, image }) => (
            <li key={value}>
              <button
                className={s.bets__item}
                onClick={() => handlePickBet(value)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  handlePickBet(-value);
                }}
                type="button"
              >
                <img src={image} alt={`bet-${value}`} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
