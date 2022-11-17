import { createSlice } from '@reduxjs/toolkit';
import { StatusForAll } from 'redux/Status';
import { getUserOperation } from './user-operation';

const initialState = {
  user: { username: null, email: null },
  sid: null,
  accessToken: null,
  refreshToken: null,
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
      state.user.email = action.payload.email;
      state.user.username = action.payload.username;
    },
    [getUserOperation.rejected](state) {
      state.status = StatusForAll.error;
    },
  },
});
export default userSlice.reducer;
