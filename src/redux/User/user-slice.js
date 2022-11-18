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
      state.userData = action.payload.userData;
    },
    [getUserOperation.rejected](state) {
      state.status = StatusForAll.error;
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
