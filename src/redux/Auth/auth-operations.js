import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { postLogin, postRegistartionUser } from 'services/API';
export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
export const registrUserOperation = createAsyncThunk(
  'auth/registrUser',
  async (user, thunkAPI) => {
    try {
      const response = await postRegistartionUser(user);
      token.set(response.token);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const loginUserOperation = createAsyncThunk(
  'auth/loginUser',
  async (body, thunkAPI) => {
    try {
      const response = await postLogin(body);
      token.set(response.token);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
