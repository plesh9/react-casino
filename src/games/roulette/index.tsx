import { FC } from 'react';
import { RouletteGameScene } from './scenes';

interface CoreGameRouletteProps {}

export const CoreGameRoulette: FC<CoreGameRouletteProps> = () => {
  return (
    <div>
      <RouletteGameScene />
    </div>
  );
};
