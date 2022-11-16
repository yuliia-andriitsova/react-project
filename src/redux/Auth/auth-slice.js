const { createSlice } = require('@reduxjs/toolkit');
const { StatusForAll } = require('redux/Status');
const {
  registrUserOperation,
  loginUserOperation,
} = require('./auth-operations');

const initialState = {
  email: null,
  username: null,
  id: '',
  token: null,
  status: StatusForAll.init,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registrUserOperation.pending](state) {
      state.status = StatusForAll.loading;
    },
    [registrUserOperation.fulfilled](state, action) {
      state.status = StatusForAll.success;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    [registrUserOperation.rejected](state) {
      state.status = StatusForAll.error;
      state.username = null;
      state.email = null;
      state.token = null;
      state.id = null;
    },
    [loginUserOperation.pending](state) {
      state.status = StatusForAll.loading;
    },
    [loginUserOperation.fulfilled](state, action) {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    [loginUserOperation.rejected](state) {
      state.username = null;
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});
export default authSlice.reducer;
