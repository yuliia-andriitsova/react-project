import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getProduct } from 'services/API';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const getProductsData = createAsyncThunk(
  'products/getAllProducts',
  async (product, thunkApi) => {
    try {
      const { data } = await getProduct(product);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

// export const setProductsData = createAsyncThunk(
//   'products/setProduct',
//   async (product, thunkApi) => {
//     try {
//       const data = await addProduct(product);
//       console.log('data', data);
//       return data;
//     } catch (e) {
//       return thunkApi.rejectWithValue(e.message);
//     }
//   }
// );
// export const deleteProductsData = createAsyncThunk(
//   'products/deleteProduct',
//   async (id, thunkApi) => {
//     try {
//       const { data } = await getProduct(id);
//       token.unset(data.accessToken);
//       return data;
//     } catch (e) {
//       return thunkApi.rejectWithValue(e.message);
//     }
//   }
// );
