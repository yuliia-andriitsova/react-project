import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { selectDailyRate } from 'redux/Daily-rate/daily-rate-selectors';
import { fetchDaySummary } from './day-operations';

// const dailyRate = useSelector(selectDailyRate);

const initialState = {
  isLoading: false,
  error: null,
  date: null,
  kcalLeft: null,
  kcalConsumed: null,
  percentsOfDailyRate: null,

  dailyRate: null,
  //   notAllowedProducts: [],
};

const daySummarySlice = createSlice({
  name: 'daySum',
  initialState,
  extraReducers: {
    [fetchDaySummary.pending](state) {
      state.isLoading = true;
    },
    [fetchDaySummary.fulfilled](state, action) {
      state.isLoading = false;
      state.kcalLeft = action.payload.kcalLeft;
      state.dailyRate = action.payload.dailyRate;
      state.kcalConsumed = action.payload.kcalConsumed;
      state.percentsOfDailyRate = action.payload.percentsOfDailyRate;
    },

    [fetchDaySummary.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const daySummaryReducer = daySummarySlice.reducer;

export default daySummaryReducer;
