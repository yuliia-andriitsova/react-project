const { createSlice } = require('@reduxjs/toolkit');
const { StatusForAll } = require('redux/Status');
const { registrUser } = require('./auth-operations');

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
    [registrUser.pending](state) {
      state.status = StatusForAll.loading;
    },
    [registrUser.fulfilled](state, action) {
      state.status = StatusForAll.success;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    [registrUser.rejected](state) {
      state.status = StatusForAll.error;
      state.username = null;
      state.email = null;
      state.token = null;
    },
  },
});
export default authSlice.reducer;
