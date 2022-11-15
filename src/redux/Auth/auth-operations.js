import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { postRegistartionUser } from 'services/API';
export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
export const registrUser = createAsyncThunk(
  'auth/registrUser',
  async (user, thunkAPI) => {
    try {
      const response = await postRegistartionUser(user);
      token.set(response.token);
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
