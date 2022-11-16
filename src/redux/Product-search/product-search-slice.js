import { createSlice } from '@reduxjs/toolkit';

import {
  deleteProductsData,
  getProductsData,
  setProductsData,
} from './product-search-operations';

const Status = {
  init: 'INIT',
  loading: 'LOADING',
  success: 'SUCCESS',
  error: 'ERROR',
};
const initialState = {
  items: [],
  isLoading: false,
  error: null,
  status: Status.init,
  // accessToken: ,
};
export const productSearchSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getProductsData.pending, state => {
        state.status = Status.loading;
      })
      .addCase(getProductsData.fulfilled, (state, action) => {
        state.status = Status.success;
        state.items = [...action.payload];
        state.accessToken = action.payload.accessToken;
      })
      .addCase(getProductsData.rejected, (state, action) => {
        state.status = Status.error;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(setProductsData.pending, state => {
        state.status = Status.loading;
      })
      .addCase(setProductsData.fulfilled, (state, action) => {
        state.status = Status.success;
        state.items = [...action.payload];
      })
      .addCase(setProductsData.rejected, state => {
        state.status = Status.error;
        console.log(state.accessToken);
      })
      .addCase(deleteProductsData.pending, state => {
        state.status = Status.loading;
      })
      .addCase(deleteProductsData.fulfilled, (state, action) => {
        state.status = Status.success;
        state.items = [...action.payload];
      })
      .addCase(deleteProductsData.rejected, state => {
        state.status = Status.error;
      });
  },
});

export default productSearchSlice.reducer;
