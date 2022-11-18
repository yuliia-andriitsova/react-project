import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDaySummary = createAsyncThunk(
  'daily/day',
  async (body, thunkApi) => {
    try {
      const response = await axios.post('/day/info', body);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
