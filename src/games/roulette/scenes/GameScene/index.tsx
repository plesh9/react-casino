import { FC } from 'react';
import { Stage } from '@pixi/react';
import { RouletteSpinPX } from 'games/roulette/pixi/RouletteSpin';

interface RouletteGameSceneProps {}

const [width, height] = [1000, 500];

export const RouletteGameScene: FC<RouletteGameSceneProps> = () => {
  return (
    <div>
      <div>Title games</div>
      <Stage
        width={width}
        height={height}
        options={{
          background: 'green',
        }}
      >
        <RouletteSpinPX />
      </Stage>
    </div>
  );
};
