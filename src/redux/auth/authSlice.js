import authOperations from './authOperations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: "", email: "", password:"" },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setInitialState(state, { payload }) {
      // console.log(payload)
      return payload;
    },
    changeInput(state, { payload }) {
      // console.log(payload)
      return{
        ...state,
        user: { ...state.user, [payload.name]: payload.value },
      };
    },
  },
  extraReducers: {
    [authOperations.register.fulfilled](state, { payload }) {
      console.log(payload)
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = initialState.user;  
      state.token = null;
      state.isLoggedIn = false;   
    },
  },
});

export default authSlice.reducer;
export const { setInitialState, changeInput } = authSlice.actions;
