import { createSlice } from '@reduxjs/toolkit';
import { deleteProductsData, setProductsData } from './daile-rate-operations';
import { getProductsData } from './day-operations';

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
        state.items = action.payload;
      })
      .addCase(getProductsData.rejected, state => {
        state.status = Status.error;
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
