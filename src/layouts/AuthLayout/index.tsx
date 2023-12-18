import { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface AuthLayoutProps {}

export const AuthLayout: FC<AuthLayoutProps> = () => {
  return (
    <div>
      <div>Header Auth</div>
      <Outlet />
    </div>
  );
};
