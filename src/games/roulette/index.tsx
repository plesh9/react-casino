import { FC } from 'react';
import { RouletteGameScene } from './scenes/GameScene';

interface CoreGameRouletteProps {}

export const CoreGameRoulette: FC<CoreGameRouletteProps> = () => {
  return (
    <div>
      <RouletteGameScene />
    </div>
  );
};
