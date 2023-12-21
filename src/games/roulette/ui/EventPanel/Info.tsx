import { FC } from 'react';
import { useAppSelector } from 'app/store/hooks';
import {
  RouletteWinOrLose,
  selectRouletteSpinCurrentNumber,
  selectRouletteWinOrLose,
} from 'games/roulette/slices';

interface InfoProps {}

export const Info: FC<InfoProps> = () => {
  const winOrLose = useAppSelector(selectRouletteWinOrLose);
  const currentNumber = useAppSelector(selectRouletteSpinCurrentNumber);

  return (
    <>
      {winOrLose && (
        <div>
          {
            {
              [RouletteWinOrLose.WIN]: <div>Win</div>,
              [RouletteWinOrLose.LOSE]: <div>Lose</div>,
            }[winOrLose]
          }
          <div>{currentNumber}</div>
        </div>
      )}
    </>
  );
};
