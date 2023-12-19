import { configureStore } from '@reduxjs/toolkit';

import { userSlice } from 'entities/user/slices';
import { userApi } from 'entities/user/api';
import { rouletteSlice } from 'games/roulette/slices';

export const store = configureStore({
  reducer: {
    user: userSlice,
    roulette: rouletteSlice,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
