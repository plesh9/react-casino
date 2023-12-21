import { FC, ReactNode, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { setBalance } from 'entities/wallet/slices';
import {
  clearRoulette,
  clearRouletteSpin,
  RouletteLifecycle,
  RouletteWinOrLose,
  selectActiveNumber,
  selectCurrentBet,
  selectRouletteLifecycle,
  selectRouletteSpinCurrentNumber,
  selectRouletteWinBet,
  setRouletteLifecycle,
  setRouletteWinOrLose,
} from 'games/roulette/slices';

interface GameSceneActionsProviderProps {
  children: ReactNode;
}

export const GameSceneActionsProvider: FC<GameSceneActionsProviderProps> = ({
  children,
}) => {
  const dispatch = useAppDispatch();
  const lifecycle = useAppSelector(selectRouletteLifecycle);
  const activeNumber = useAppSelector(selectActiveNumber);
  const currentNumber = useAppSelector(selectRouletteSpinCurrentNumber);
  const currentBet = useAppSelector(selectCurrentBet);
  const winBet = useAppSelector(selectRouletteWinBet);

  useEffect(() => {
    if (lifecycle === RouletteLifecycle.FINISHED) {
      if (activeNumber === currentNumber) {
        dispatch(setBalance(currentBet * winBet));
        dispatch(setRouletteWinOrLose(RouletteWinOrLose.WIN));
      } else {
        dispatch(setBalance(-currentBet));
        dispatch(setRouletteWinOrLose(RouletteWinOrLose.LOSE));
      }

      dispatch(setRouletteLifecycle(RouletteLifecycle.INFO));
    }
  }, [lifecycle, currentBet, winBet, dispatch, activeNumber, currentNumber]);

  useEffect(() => {
    if (lifecycle === RouletteLifecycle.INFO) {
      setTimeout(() => {
        dispatch(setRouletteLifecycle(RouletteLifecycle.READY_TO_START));
        dispatch(clearRoulette());
        dispatch(clearRouletteSpin());
      }, 3000);
    }
  }, [lifecycle, dispatch]);

  return <>{children}</>;
};
