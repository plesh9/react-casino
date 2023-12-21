import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { IWallet } from './../model/Wallet';

const initialState: IWallet = {
  gameBalance: 5000,
};

const walletSlice = createSlice({
  initialState,
  name: 'wallet',
  reducers: {
    setBalance: (state, action: PayloadAction<number>) => {
      state.gameBalance = state.gameBalance + action.payload;
    },
  },
});

export const { setBalance } = walletSlice.actions;

export const selectBalance = (state: RootState) => state.wallet.gameBalance;

export default walletSlice.reducer;
