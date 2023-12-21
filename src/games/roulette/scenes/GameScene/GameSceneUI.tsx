import { FC, ReactNode } from 'react';
import { BetsPanel, InfoPanel, RouletteTable } from 'games/roulette/ui';

import s from './GameScene.module.scss';
import { EventPanel } from 'games/roulette/ui/EventPanel';

interface GameSceneUIProps {
  children: ReactNode;
}

export const GameSceneUI: FC<GameSceneUIProps> = ({ children }) => {
  return (
    <div className={s.scene__ui}>
      <div className={s.scene__info}>
        <InfoPanel />
      </div>
      <div className={s.scene__event}>
        <EventPanel />
      </div>
      <div className={s.scene__table}>
        <RouletteTable />
      </div>
      <div className={s.scene__bets}>
        <BetsPanel />
      </div>
      {children}
    </div>
  );
};
