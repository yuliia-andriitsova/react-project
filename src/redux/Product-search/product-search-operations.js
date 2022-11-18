import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { addProduct, deleteDayProduct } from 'services/apiProduct';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const setProductsData = createAsyncThunk(
  'products/setProduct',
  async (body, thunkApi) => {
    try {
      const data = await addProduct(body);
      const anotherDay = {
        date: body.date,
        ...data,
      };
      return anotherDay;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const deleteProductsData = createAsyncThunk(
  'products/deleteProduct',
  async (body, thunkApi) => {
    try {
      const { newDaySummary } = await deleteDayProduct(body);
      const newData = {
        productId: body.eatenProductId,
        ...newDaySummary,
      };
      return newData;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
