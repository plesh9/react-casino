import { FC } from 'react';
import { Stage } from '@pixi/react';
import { RouletteSpinPX } from 'games/roulette/pixi';
import { GameSceneUI } from './GameSceneUI';

import s from './GameScene.module.scss';

interface RouletteGameSceneProps {}

const [width, height] = [1100, 500];

export const RouletteGameScene: FC<RouletteGameSceneProps> = () => {
  return (
    <div className={s.scene}>
      <div>Title games</div>
      <GameSceneUI>
        <Stage
          width={width}
          height={height}
          options={{
            background: 'green',
          }}
        >
          <RouletteSpinPX />
        </Stage>
      </GameSceneUI>
    </div>
  );
};
