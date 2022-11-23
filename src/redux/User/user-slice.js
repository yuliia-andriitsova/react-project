import { createSlice } from '@reduxjs/toolkit';
import { loginUserOperation } from 'redux/Auth/auth-operations';
import { fetchDailyRatePrivate } from 'redux/Daily-rate/daily-rate-operations';
import { StatusForAll } from 'redux/Status';
import { getUserOperation } from './user-operation';

const initialState = {
  email: null,
  username: null,
  id: null,
  userData: {
    weight: null,
    height: null,
    age: null,
    bloodType: null,
    desiredWeight: null,
    dailyRate: null,
    notAllowedProducts: [],
  },
  status: StatusForAll.init,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [getUserOperation.pending](state) {
      state.status = StatusForAll.loading;
    },
    [getUserOperation.fulfilled](state, action) {
      state.status = StatusForAll.success;
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.id = action.payload.id;
      state.userData = action.payload.userData;
    },
    [getUserOperation.rejected](state) {
      state.status = StatusForAll.error;
    },
    [fetchDailyRatePrivate.fulfilled](state, action) {
      state.userData.dailyRate = action.payload.dailyRate;
      state.userData.notAllowedProducts = action.payload.notAllowedProducts;
    },
    [loginUserOperation.fulfilled](state, action) {
      state.email = action.payload.user.email;
      state.id = action.payload.user.id;
      state.userData = action.payload.user.userData;
      state.username = action.payload.user.username;
      // state.userData.notAllowedProducts =
      //   action.payload.user.userData.notAllowedProducts;
    },

    // [refreshOperation.pending](state) {
    //   state.status = StatusForAll.loading;
    // },
    // [refreshOperation.rejected](state) {
    //   state.status = StatusForAll.error;
    // },
  },
});
export default userSlice.reducer;
