import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserdata } from 'services/API';

export const getUserOperation = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const response = await getUserdata();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
