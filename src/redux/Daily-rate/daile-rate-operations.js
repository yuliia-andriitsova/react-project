import { createAsyncThunk } from '@reduxjs/toolkit';
import { addProduct, getProduct } from 'services/apiProduct';

export const getProductsData = createAsyncThunk(
  'products/getAllProducts',
  async (_, thunkApi) => {
    try {
      const { data } = await getProduct();
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
export const setProductsData = createAsyncThunk(
  'products/setProduct',
  async (product, thunkApi) => {
    try {
      const { data } = await addProduct(product);
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
//       return data;
//     } catch (e) {
//       return thunkApi.rejectWithValue(e.message);
//     }
//   }
// );
