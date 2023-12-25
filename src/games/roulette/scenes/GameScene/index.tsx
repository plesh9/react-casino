import { FC, useEffect, useState } from 'react';
import { sound } from '@pixi/sound';
import * as PIXI from 'pixi.js';
import { ROULETEE_SOUNDS, SOUND_SEQUENCE } from './config';
import { Stage } from 'app/config/contextBridge';
import { BackgroundPX, RouletteSpinPX } from 'games/roulette/pixi';

import { GameSceneActionsProvider } from './GameSceneActionsProvider';
import { GameSceneUI } from './GameSceneUI';

import spinSound from 'assets/sounds/roulette/spin.mp3';
import betSound from 'assets/sounds/roulette/bet.wav';
import numberSound from 'assets/sounds/roulette/number.wav';
import sceneSound_1 from 'assets/sounds/roulette/scene-1.mp3';
import sceneSound_2 from 'assets/sounds/roulette/scene-2.mp3';
import sceneSound_3 from 'assets/sounds/roulette/scene-3.mp3';
import sceneSound_4 from 'assets/sounds/roulette/scene-4.mp3';

import s from './GameScene.module.scss';

interface RouletteGameSceneProps {}

const [width, height] = [1220, 560];

export const RouletteGameScene: FC<RouletteGameSceneProps> = () => {
  sound.add(ROULETEE_SOUNDS.spin, spinSound);
  sound.add(ROULETEE_SOUNDS.bet, betSound);
  sound.add(ROULETEE_SOUNDS.number, numberSound);
  sound.add(ROULETEE_SOUNDS.scene_1, sceneSound_1);
  sound.add(ROULETEE_SOUNDS.scene_2, sceneSound_2);
  sound.add(ROULETEE_SOUNDS.scene_3, sceneSound_3);
  sound.add(ROULETEE_SOUNDS.scene_4, sceneSound_4);
  sound.disableAutoPause = true;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const playSound = async (index: number) => {
      const currentSound = SOUND_SEQUENCE[index];

      await PIXI.Assets.load(currentSound);

      sound.volume(currentSound, 0.05);

      sound.play(currentSound, {
        complete: () => {
          const nextIndex = (index + 1) % SOUND_SEQUENCE.length;

          setCurrentIndex(nextIndex);
          playSound(nextIndex);
        },
      });
    };

    playSound(currentIndex);

    return () => {
      sound.stop(SOUND_SEQUENCE[currentIndex]);
    };
  }, [currentIndex]);

  return (
    <div className={s.scene}>
      <div>Title games</div>
      <GameSceneActionsProvider>
        <GameSceneUI>
          <Stage
            width={width}
            height={height}
            options={{
              backgroundAlpha: 0,
            }}
          >
            <BackgroundPX />
            <RouletteSpinPX />
          </Stage>
        </GameSceneUI>
      </GameSceneActionsProvider>
    </div>
  );
};
