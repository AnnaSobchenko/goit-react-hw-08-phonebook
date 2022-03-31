import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/user/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logIn = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/user/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logOut = createAsyncThunk('auth/logout', async credentials => {
  try {
    const { data } = await axios.post('/user/logout', credentials);
    token.unset();
    return data;
  } catch (error) {}
});

const operations={
    register,
    logIn,
    logOut
};

export default operations;