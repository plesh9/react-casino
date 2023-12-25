import { FC, useState } from 'react';
import { Container, Sprite, useTick } from '@pixi/react';
import { sound } from '@pixi/sound';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import {
  RouletteLifecycle,
  selectRouletteSpinRotationInProgress,
  selectRouletteSpinSpeed,
  setRouletteDegreesRotation,
  setRouletteLifecycle,
  setRouletteSpinSpeed,
} from 'games/roulette/slices';

import { radianToDegrees } from 'shared/lib/degrees';

import externalCircle from 'assets/images/roulette/external-circle.png';
import mediumCircle from 'assets/images/roulette/medium-circle.png';
import internalCircle from 'assets/images/roulette/internal-circle.png';
import arrow from 'assets/images/roulette/arrow.png';
import wheel from 'assets/images/roulette/wheel.png';
import bgRoulette from 'assets/images/roulette/bg-roulette.png';
import { ROULETEE_SOUNDS } from 'games/roulette/scenes/GameScene/config';

interface RouletteSpinPXProps {}

const POSITION_SPIN = {
  x: 264,
  y: 317,
};

const POSITION_ARROW = {
  x: 264,
  y: 190,
  rotation: -0.45,
};

export const RouletteSpinPX: FC<RouletteSpinPXProps> = () => {
  const dispatch = useAppDispatch();

  const speed = useAppSelector(selectRouletteSpinSpeed);
  const rotationInProgress = useAppSelector(
    selectRouletteSpinRotationInProgress
  );
  const [rotationMedium, setRotationMedium] = useState(0);
  const [rotationWheel, setRotationWheel] = useState(0);

  useTick((delta) => {
    if (!rotationInProgress) return;

    const rotation = delta * speed;

    setRotationMedium((prev) => prev + rotation);
    setRotationWheel((prev) => prev - rotation);

    if (speed < 0.005) {
      dispatch(setRouletteSpinSpeed(0));
      dispatch(
        setRouletteDegreesRotation(
          radianToDegrees(rotationMedium % (Math.PI * 2))
        )
      );
      dispatch(setRouletteLifecycle(RouletteLifecycle.FINISHED));
      sound.stop(ROULETEE_SOUNDS.spin);
    } else {
      dispatch(setRouletteSpinSpeed(null));
    }
  });

  return (
    <Container>
      <Sprite image={bgRoulette} x={425} y={530} anchor={1} />
      <Sprite
        image={externalCircle}
        x={POSITION_SPIN.x}
        y={POSITION_SPIN.y}
        anchor={0.5}
      />
      <Sprite
        image={mediumCircle}
        x={POSITION_SPIN.x}
        y={POSITION_SPIN.y}
        rotation={rotationMedium}
        anchor={0.5}
      />
      <Sprite
        image={internalCircle}
        x={POSITION_SPIN.x}
        y={POSITION_SPIN.y}
        anchor={0.5}
      />
      <Sprite
        image={wheel}
        x={POSITION_SPIN.x}
        y={POSITION_SPIN.y}
        rotation={rotationWheel}
        anchor={0.5}
      />
      <Sprite
        image={arrow}
        x={POSITION_ARROW.x}
        y={POSITION_ARROW.y}
        rotation={POSITION_ARROW.rotation}
        anchor={0.5}
      />
    </Container>
  );
};
