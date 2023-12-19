import { RootState } from 'app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RouletteState {
  activeNamber: number;
  currentBet: number;
}

const initialState: RouletteState = {
  activeNamber: 0,
  currentBet: 0,
};

const rouletteSlice = createSlice({
  name: 'roulette',
  initialState,
  reducers: {
    setActiveNumber: (state, action: PayloadAction<number>) => {
      state.activeNamber = action.payload;
    },
    setCurrentBet: (state, action: PayloadAction<number>) => {
      if (state.currentBet + action.payload < 0) {
        state.currentBet = 0;
      } else {
        state.currentBet = state.currentBet + action.payload;
      }
    },
  },
});

export const { setActiveNumber, setCurrentBet } = rouletteSlice.actions;

export const selectActiveNumber = (state: RootState) =>
  state.roulette.activeNamber;

export const selectCurrentBet = (state: RootState) => state.roulette.currentBet;

export default rouletteSlice.reducer;
