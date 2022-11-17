import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDaySummary = createAsyncThunk(
  'daily/day',
  async (info, thunkApi) => {
    try {
      const response = await axios.post('/day/info', info);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
