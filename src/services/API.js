import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';
export async function postRegistartionUser(user) {
  const { data } = await axios.post('/auth/register/', user);
  return data;
}

const dailyRate = createAsyncThunk(
  'daily/daily-rate',
  async (info, thunkApi) => {
    try {
      const response = await axios.post('/daily-rate', info);
      console.log(response.data);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export default dailyRate;
