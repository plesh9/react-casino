import { RootState } from 'app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ROULETTE_NUMBERS } from './numbers';

interface RouletteSpinState {
  readonly rouletteNumbers: number[];
  readonly stepCircle: number;
  speed: number;
  rotationInProgress: boolean;
  degreesRotation: number;
  currentNumber: number;
}

const initialState: RouletteSpinState = {
  rouletteNumbers: ROULETTE_NUMBERS,
  stepCircle: 360 / ROULETTE_NUMBERS.length,
  speed: 0,
  rotationInProgress: false,
  degreesRotation: 0,
  currentNumber: 0,
};

const rouletteSpinSlice = createSlice({
  name: 'rouletteSpin',
  initialState,
  reducers: {
    setRouletteSpinStartSpeed: (state) => {
      const randomSpeed = 1 + Math.random() * 0.1;

      state.speed = randomSpeed;
      state.rotationInProgress = true;
    },

    setRouletteSpinSpeed: (state, action: PayloadAction<number | null>) => {
      const speed = action.payload;

      if (speed === 0) {
        state.rotationInProgress = false;
        state.speed = 0;
      } else {
        state.speed = state.speed - state.speed / 150;
      }
    },

    setRouletteDegreesRotation: (state, action: PayloadAction<number>) => {
      state.degreesRotation = action.payload;
      const deltaIndex = Math.floor(
        (action.payload + state.stepCircle / 2) / state.stepCircle
      );
      const currentIndex = state.rouletteNumbers.length - deltaIndex;

      state.currentNumber = state.rouletteNumbers[currentIndex];
    },
  },
});

export const {
  setRouletteSpinSpeed,
  setRouletteSpinStartSpeed,
  setRouletteDegreesRotation,
} = rouletteSpinSlice.actions;

export const selectRouletteSpinSpeed = (state: RootState) =>
  state.rouletteSpin.speed;
export const selectRouletteSpinRotationInProgress = (state: RootState) =>
  state.rouletteSpin.rotationInProgress;

export default rouletteSpinSlice.reducer;
