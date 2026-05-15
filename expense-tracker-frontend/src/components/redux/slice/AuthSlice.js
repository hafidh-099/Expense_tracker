import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user:JSON.parse(localStorage.getItem('user')) || null,
  },
  //reducer
  reducers: {
    loginAction: (state, action) => {
      state.user = action.payload;
    },
    //logout
    logoutAction: (state, action) => {
      state.user = null;
    },
  },
});
//generate actions
export const { loginAction, logoutAction } = authSlice.actions;
//generate reducer
const authReducer = authSlice.reducer;
export default authReducer;
