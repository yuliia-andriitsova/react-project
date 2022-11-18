import { createSlice } from '@reduxjs/toolkit';
import { fetchDaySummary } from 'redux/Day/day-operations';
import { StatusForAll } from 'redux/Status';
import { setProductsData } from './product-search-operations';

const initialState = {
  id: '',
  eatenProducts: [],
  date: '',
  daySummary: '',
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
      return { status: StatusForAll.success, ...action.payload.newDay };
    },
    [setProductsData.rejected](state) {
      state.status = StatusForAll.error;
    },
    [fetchDaySummary.pending](state) {
      state.status = StatusForAll.loading;
    },
    [fetchDaySummary.fulfilled](state, action) {
      if (action.payload.eatenProducts) {
        state.eatenProducts = action.payload.eatenProducts;
        state.id = action.payload.id;
        state.date = action.payload.date;
        state.daySummary = action.payload.daySummary;
      }
    },
    [fetchDaySummary.rejected](state) {
      state.status = StatusForAll.error;
    },
  },
});

export const dayReducer = daySlice.reducer;
