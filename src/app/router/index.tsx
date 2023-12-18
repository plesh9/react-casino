import { createHashRouter } from 'react-router-dom';

import { AuthLayout, GamesLayout, MainLayout } from 'layouts';
import { MainPage } from 'pages';

import { Login } from 'pages/auth/login';
import { Register } from 'pages/auth/register';

import { Roulette } from 'pages/games/roulette';
import { Slots } from 'pages/games/slots';
import { Hummer } from 'pages/games/hummer';

export const router = createHashRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: MainPage,
      },
    ],
  },
  {
    path: 'auth',
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'register',
        Component: Register,
      },
    ],
  },
  {
    path: 'games',
    Component: GamesLayout,
    children: [
      {
        path: 'roulette',
        Component: Roulette,
      },
      {
        path: 'slots',
        Component: Slots,
      },
      {
        path: 'hummer',
        Component: Hummer,
      },
    ],
  },
]);
