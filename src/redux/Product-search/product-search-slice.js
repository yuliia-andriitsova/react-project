import { createSlice } from '@reduxjs/toolkit';
import { fetchDaySummary } from 'redux/Day/day-operations';
import { StatusForAll } from 'redux/Status';
import {
  deleteProductsData,
  setProductsData,
} from './product-search-operations';

const initialState = {
  id: '',
  eatenProducts: [],
  date: '',
  daySummary: {
    kcalLeft: 0,
    kcalConsumed: 0,
    dailyRate: 0,
    percentsOfDailyRate: 0,
  },
  status: StatusForAll.init,
};

const daySlice = createSlice({
  name: 'day',
  initialState,
  extraReducers: {
    [setProductsData.pending](state) {
      state.status = StatusForAll.loading;
    },
    [setProductsData.fulfilled](state, action) {
      console.log(action.payload);
      state.status = StatusForAll.success;
      state.id = action.payload.day?.id || action.payload.eatenProduct?.id;
      state.eatenProducts = action.payload.day?.eatenProducts || [];
      state.date = action.payload.day?.date;
      state.daySummary = action.payload?.daySummary;
    },
    [setProductsData.rejected](state) {
      state.status = StatusForAll.error;
    },
    [fetchDaySummary.pending](state) {
      state.status = StatusForAll.loading;
    },
    [fetchDaySummary.fulfilled](state, action) {
      // if (action.payload.eatenProducts) {
      console.log(action.payload);
      state.eatenProducts = action.payload.eatenProducts || [];
      state.id = action.payload.id || '';
      state.date = action.payload.date || state.date;
      state.daySummary.kcalLeft =
        action.payload?.daySummary?.kcalLeft || action.payload?.kcalLeft;
      state.daySummary.kcalConsumed =
        action.payload?.daySummary?.kcalConsumed || 0;
      state.daySummary.dailyRate =
        action.payload?.daySummary?.dailyRate || action.payload?.dailyRate;
      state.daySummary.percentsOfDailyRate =
        action.payload?.daySummary?.percentsOfDailyRate || 0;
      // }
    },
    [fetchDaySummary.rejected](state) {
      state.status = StatusForAll.error;
    },
    [deleteProductsData.pending](state) {
      state.status = StatusForAll.loading;
    },
    [deleteProductsData.fulfilled](state, action) {
      state.eatenProducts = state.eatenProducts.filter(
        product => product.id !== action.payload.productId
      );
      state.daySummary.kcalLeft = action.payload.kcalLeft;
      state.daySummary.kcalConsumed = action.payload.kcalConsumed;
      state.daySummary.percentsOfDailyRate = action.payload.percentsOfDailyRate;
    },
    [deleteProductsData.rejected](state) {
      state.status = StatusForAll.error;
    },
  },
});

export const dayReducer = daySlice.reducer;