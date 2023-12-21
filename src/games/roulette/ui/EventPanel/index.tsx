import { FC } from 'react';
import { useAppDispatch } from 'app/store/hooks';

import { setRouletteSpinStartSpeed } from 'games/roulette/slices';

import s from './EventPanel.module.scss';

interface EventPanelProps {}

export const EventPanel: FC<EventPanelProps> = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setRouletteSpinStartSpeed());
  };

  return (
    <div>
      <button onClick={handleClick} type="button">
        Start
      </button>
    </div>
  );
};
