import authOperations from './authOperations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setInitialState(state, { payload }) {
      return payload;
    },
    changeInput(state, { payload }) {
      return { ...state, [payload.name]: payload.value };
      //    state[payload.name]= payload.value;
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
