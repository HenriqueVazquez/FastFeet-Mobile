import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    id: null,
    signed: false,
    loading: false,
    error: '',
    erroLogin: '',
  },
  reducers: {
    signInRequest: (state, action) => {
      state.payload = action.payload;
      state.erroLogin = '';
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.id = action.payload.id;
      state.signed = true;
      state.loading = false;
      state.erroLogin = '';
      state.error = '';
      state.payload = null;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.erroLogin = action.payload.erroLogin;
    },
    signOut: state => {
      state.id = null;
      state.signed = false;
      state.error = '';
      state.erroLogin = '';
    },
  },
});

export const { signInRequest, signInSuccess, signInFailure, signOut } =
  authSlice.actions;

export default authSlice.reducer;
