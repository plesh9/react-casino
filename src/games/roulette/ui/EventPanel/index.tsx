import { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';

import {
  RouletteLifecycle,
  selectRouletteLifecycle,
  setRouletteLifecycle,
  setRouletteSpinStartSpeed,
} from 'games/roulette/slices';

import { Info } from './Info';

import s from './EventPanel.module.scss';

interface EventPanelProps {}

export const EventPanel: FC<EventPanelProps> = () => {
  const dispatch = useAppDispatch();
  const lifecycle = useAppSelector(selectRouletteLifecycle);

  const handleStart = () => {
    dispatch(setRouletteSpinStartSpeed());
    dispatch(setRouletteLifecycle(RouletteLifecycle.PLAY));
  };

  return (
    <div>
      {
        {
          [RouletteLifecycle.READY_TO_START]: (
            <button onClick={handleStart} type="button">
              Start
            </button>
          ),
          [RouletteLifecycle.PLAY]: <div>Playing...</div>,
          [RouletteLifecycle.FINISHED]: <div>Calculating</div>,
          [RouletteLifecycle.INFO]: <Info />,
        }[lifecycle]
      }
    </div>
  );
};
