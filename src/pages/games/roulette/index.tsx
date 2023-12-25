import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'app/router/utils';
import { CoreGameRoulette } from 'games/roulette';

import s from './Roulette.module.scss';

import bgPage from 'assets/images/roulette/bg-page.png';

interface RouletteProps {}

export const Roulette: FC<RouletteProps> = () => {
  return (
    <div className={s.roulette}>
      <div className={s.roulette__content}>
        <Link to={ROUTES.main}>To home</Link>
        <CoreGameRoulette />
      </div>
      <img className={s.roulette__bg} src={bgPage} alt="Page Background" />
    </div>
  );
};
