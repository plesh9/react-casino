import { FC } from 'react';
import { sound } from '@pixi/sound';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import {
  RouletteLifecycle,
  selectRouletteLifecycle,
  setRouletteLifecycle,
  setRouletteSpinStartSpeed,
} from 'games/roulette/slices';
import { RouletteStartButton } from 'games/roulette/shared/RouletteStartButton';
import { Info } from './Info';
import { ROULETEE_SOUNDS } from 'games/roulette/scenes/GameScene/config';

import s from './EventPanel.module.scss';

interface EventPanelProps {}

export const EventPanel: FC<EventPanelProps> = () => {
  const dispatch = useAppDispatch();
  const lifecycle = useAppSelector(selectRouletteLifecycle);

  const handleStart = () => {
    sound.play(ROULETEE_SOUNDS.spin);
    dispatch(setRouletteSpinStartSpeed());
    dispatch(setRouletteLifecycle(RouletteLifecycle.PLAY));
  };

  return (
    <div>
      {
        {
          [RouletteLifecycle.READY_TO_START]: (
            <RouletteStartButton onClick={handleStart} />
          ),
          [RouletteLifecycle.PLAY]: <div>Playing...</div>,
          [RouletteLifecycle.FINISHED]: <div>Calculating</div>,
          [RouletteLifecycle.INFO]: <Info />,
        }[lifecycle]
      }
    </div>
  );
};
