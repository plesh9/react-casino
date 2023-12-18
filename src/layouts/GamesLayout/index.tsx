import { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface GamesLayoutProps {}

export const GamesLayout: FC<GamesLayoutProps> = () => {
  return (
    <div>
      <div>Header Game</div>
      <Outlet />
    </div>
  );
};
