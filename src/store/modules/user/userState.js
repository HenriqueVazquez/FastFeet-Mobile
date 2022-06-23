import { createSlice } from '@reduxjs/toolkit';
import { signInSuccess, signOut } from '../auth/authState';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: null,
  },
  reducers: {},
  extraReducers: {
    [signInSuccess]: (state, action) => {
      state.profile = action.payload;
    },
    [signOut]: state => {
      state.profile = null;
    },
  },
});

export default userSlice.reducer;
