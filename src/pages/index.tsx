import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'app/router/utils';
import { useAppSelector } from 'app/store/hooks';
import { selectUserName } from 'entities/user/slices/userSlice';

interface MainPageProps {}

export const MainPage: FC<MainPageProps> = () => {
  const userName = useAppSelector(selectUserName);

  return (
    <div>
      <Link to={ROUTES.games.roulette}>Roulette</Link>
      <Link to={ROUTES.games.slots}>Slots</Link>
      <Link to={ROUTES.games.hummer}>Hummer</Link>

      <div>{userName}</div>
    </div>
  );
};
