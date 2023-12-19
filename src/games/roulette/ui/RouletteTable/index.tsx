import { FC } from 'react';
import { ROULETTE_TABLE_NUMBERS } from './initData';

import classNames from 'classnames';

import s from './RouletteTable.module.scss';

interface RouletteTableProps {}

export const RouletteTable: FC<RouletteTableProps> = () => {
  return (
    <div className={s.table}>
      <ul className={s.table__list}>
        {ROULETTE_TABLE_NUMBERS.map(({ number, color }) => (
          <li key={number}>
            <button
              className={classNames(s.table__number, s[color])}
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
