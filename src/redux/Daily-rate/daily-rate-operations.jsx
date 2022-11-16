import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDailyRate = createAsyncThunk(
  'daily/daily-rate',
  async (info, thunkApi) => {
    try {
      const response = await axios.post('/daily-rate', info);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
