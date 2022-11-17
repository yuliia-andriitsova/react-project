import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDailyRate = createAsyncThunk(
  'daily/daily-rate',
  async (info, thunkApi) => {
    try {
      const response = await axios.post('/daily-rate', info);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchDailyRatePrivate = createAsyncThunk(
  'daily/daily-rate-private',
  async (info, thunkApi) => {
    try {
      const userId = thunkApi.getState().auth.sid;
      const response = await axios.post('/daily-rate/' + userId, info);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
