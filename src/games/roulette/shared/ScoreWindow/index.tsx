import { FC, ReactNode } from 'react';

import BackgroundImg from './images/bg.png';

import s from './ScoreWindow.module.scss';

interface ScoreWindowProps {
  children: ReactNode;
  label: string;
  icon: string;
}

export const ScoreWindow: FC<ScoreWindowProps> = ({
  children,
  label,
  icon,
}) => {
  return (
    <div className={s.window}>
      <span className={s.window__label}>{label}</span>
      <div className={s.window__wrapper}>
        <div className={s.window__content}>{children}</div>
        <div className={s.window__icon}>
          <img src={icon} alt={label} />
        </div>
        <img
          className={s.window__bg}
          src={BackgroundImg}
          alt="Score Background"
        />
      </div>
    </div>
  );
};
