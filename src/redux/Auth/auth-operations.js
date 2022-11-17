import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  getUserdata,
  getUserRefresh,
  postLogin,
  postLogout,
} from 'services/API';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
export const loginUserOperation = createAsyncThunk(
  'auth/loginUser',
  async (body, thunkAPI) => {
    try {
      const response = await postLogin(body);
      token.set(response.accessToken);
      return response;
    } catch (error) {
      if (error.response.status === 403) {
        alert('Email doesn`t exist or Password is wrong.');
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const logoutUserOperation = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const response = await postLogout();
      token.unset(response.accessToken);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const refreshOperation = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      if (state.auth.accessToken) {
        token.set(state.auth.refreshToken);
        const response = await getUserRefresh(state.auth.sid);
        token.set(response.newAccessToken);
        thunkAPI.dispatch(getUserOperation());
        return response;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getUserOperation = createAsyncThunk(
  'auth/getUser',
  async (_, thunkAPI) => {
    try {
      const response = await getUserdata();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
