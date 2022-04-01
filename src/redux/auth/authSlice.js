import authOperations from './authOperations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: "", email: null, password:null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setInitialState(state, { payload }) {
      console.log(payload)
      return payload;
    },
    changeInput(state, { payload }) {
      console.log(payload)
      return { ...state, [payload.name]: payload.value };
    },
  },
  extraReducers: {
    [authOperations.register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state, { payload }) {
      state = initialState;
    },
  },
});

export default authSlice.reducer;
export const { setInitialState, changeInput } = authSlice.actions;
