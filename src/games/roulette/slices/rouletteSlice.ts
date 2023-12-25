import { RootState } from 'app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum RouletteLifecycle {
  READY_TO_START = 'start',
  PLAY = 'play',
  FINISHED = 'finished',
  INFO = 'info',
}

export enum RouletteWinOrLose {
  WIN = 'win',
  LOSE = 'lose',
}

interface RouletteState {
  readonly winBet: 36;
  lifecycle: `${RouletteLifecycle}`;
  winOrLose: `${RouletteWinOrLose}` | null;
  activeNumber: number;
  currentBet: number;
}

const initialState: RouletteState = {
  winBet: 36,
  lifecycle: RouletteLifecycle.READY_TO_START,
  winOrLose: null,
  activeNumber: 0,
  currentBet: 0,
};

const rouletteSlice = createSlice({
  name: 'roulette',
  initialState,
  reducers: {
    setActiveNumber: (state, action: PayloadAction<number>) => {
      state.activeNumber = action.payload;
    },

    setCurrentBet: (state, action: PayloadAction<number>) => {
      if (state.currentBet + action.payload < 0) {
        state.currentBet = 0;
      } else {
        state.currentBet = state.currentBet + action.payload;
      }
    },

    setRouletteLifecycle: (state, action: PayloadAction<RouletteLifecycle>) => {
      state.lifecycle = action.payload;
    },

    setRouletteWinOrLose: (
      state,
      action: PayloadAction<RouletteWinOrLose | null>
    ) => {
      state.winOrLose = action.payload;
    },

    clearRoulette: (state) => {
      state.activeNumber = 0;
      state.currentBet = 0;
    },
  },
});

export const {
  setActiveNumber,
  setCurrentBet,
  setRouletteLifecycle,
  setRouletteWinOrLose,
  clearRoulette,
} = rouletteSlice.actions;

export const selectActiveNumber = (state: RootState) =>
  state.roulette.activeNumber;
export const selectCurrentBet = (state: RootState) => state.roulette.currentBet;
export const selectRouletteLifecycle = (state: RootState) =>
  state.roulette.lifecycle;
export const selectRouletteWinBet = (state: RootState) => state.roulette.winBet;
export const selectRouletteWinOrLose = (state: RootState) =>
  state.roulette.winOrLose;

export default rouletteSlice.reducer;
