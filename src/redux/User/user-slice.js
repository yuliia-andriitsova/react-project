import { createSlice } from '@reduxjs/toolkit';
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
      state.userData.weight = action.payload.weight;
      state.userData.height = action.payload.height;
      state.userData.age = action.payload.bloodType;
      state.userData.desiredWeight = action.payload.desiredWeight;
      state.userData.dailyRate = action.payload.dailyRate;
      state.userData.notAllowedProducts = action.payload.notAllowedProducts;
    },
    [getUserOperation.rejected](state) {
      state.status = StatusForAll.error;
    },
  },
});
export default userSlice.reducer;
