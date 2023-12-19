import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'app/router/utils';
import { CoreGameRoulette } from 'games/roulette';

interface RouletteProps {}

export const Roulette: FC<RouletteProps> = () => {
  return (
    <div>
      <Link to={ROUTES.main}>To home</Link>
      <CoreGameRoulette />
    </div>
  );
};
