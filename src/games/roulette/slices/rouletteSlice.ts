import { RootState } from 'app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RouletteState {
  activeNamber: number;
}

const initialState: RouletteState = {
  activeNamber: 0,
};

const rouletteSlice = createSlice({
  name: 'roulette',
  initialState,
  reducers: {
    setActiveNumber: (state, action: PayloadAction<number>) => {
      state.activeNamber = action.payload;
    },
  },
});

export const { setActiveNumber } = rouletteSlice.actions;

export const selectActiveNumber = (state: RootState) =>
  state.roulette.activeNamber;

export default rouletteSlice.reducer;
