import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'app/router/utils';

interface MainPageProps {}

export const MainPage: FC<MainPageProps> = () => {
  return (
    <div>
      <Link to={ROUTES.games.roulette}>Roulette</Link>
      <Link to={ROUTES.games.slots}>Slots</Link>
      <Link to={ROUTES.games.hummer}>Hummer</Link>
    </div>
  );
};
