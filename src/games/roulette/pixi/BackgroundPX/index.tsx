import { FC } from 'react';
import { Container, Sprite } from '@pixi/react';

import bgRoulette from 'assets/images/roulette/bg-scene.png';

export const BackgroundPX: FC = () => {
  return (
    <Container>
      <Sprite
        image={bgRoulette}
        x={0}
        y={0}
        anchor={{
          x: 0,
          y: 0,
        }}
        scale={1}
      />
    </Container>
  );
};
