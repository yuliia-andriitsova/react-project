import { createSlice } from '@reduxjs/toolkit';
import { StatusForAll } from 'redux/Status';
import { getProductsData } from './product-search-operations';

const initialState = {
  products: [],
  _id: null,
  categories: [],
  title: {},
  error: null,
  status: StatusForAll.init,
}

export const productSearchSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [getProductsData.pending](state) {
      state.status = StatusForAll.loading;
    },
    [getProductsData.fulfilled](state, action) {
      state.status = StatusForAll.success;
      state._id = action.payload._id;
      state.title = action.payload.title.ua;
      state.products = action.payload;
    },
    [getProductsData.rejected](state) { 
    state.status = StatusForAll.error;
  },
  }
});

export default productSearchSlice.reducer;

