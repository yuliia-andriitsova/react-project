import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { addProduct } from 'services/apiProduct';

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
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
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
