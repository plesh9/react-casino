import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

interface UserState {
  name: string;
}

const initialState: UserState = {
  name: 'Vadym',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state) => {
      state.name = 'Dima';
    },
  },
});

export const { setName } = userSlice.actions;

export const selectUserName = (state: RootState) => state.user.name;

export default userSlice.reducer;
