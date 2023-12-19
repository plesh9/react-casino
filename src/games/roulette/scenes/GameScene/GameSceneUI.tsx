import { RouletteTable } from 'games/roulette/ui';
import { FC, ReactNode } from 'react';

import s from './GameScene.module.scss';

interface GameSceneUIProps {
  children: ReactNode;
}

export const GameSceneUI: FC<GameSceneUIProps> = ({ children }) => {
  return (
    <div className={s.scene__ui}>
      <div className={s.scene__table}>
        <RouletteTable />
      </div>
      {children}
    </div>
  );
};
