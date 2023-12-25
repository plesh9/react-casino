import { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { selectActiveNumber, setActiveNumber } from 'games/roulette/slices';

import { ROULETTE_TABLE_NUMBERS } from './initData';

import classNames from 'classnames';

import s from './RouletteTable.module.scss';
import { sound } from '@pixi/sound';
import { ROULETEE_SOUNDS } from 'games/roulette/scenes/GameScene/config';

interface RouletteTableProps {}

export const RouletteTable: FC<RouletteTableProps> = () => {
  const dispatch = useAppDispatch();
  const activeNumber = useAppSelector(selectActiveNumber);

  const handleClickNumber = (number: number) => {
    dispatch(setActiveNumber(number));
    sound.play(ROULETEE_SOUNDS.number);
  };

  return (
    <div className={s.table}>
      <ul className={s.table__list}>
        {ROULETTE_TABLE_NUMBERS.map(({ number, color }) => (
          <li key={number}>
            <button
              className={classNames(s.table__number, s[color], {
                [s.active]: activeNumber === number,
              })}
              onClick={() => handleClickNumber(number)}
              type="button"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
