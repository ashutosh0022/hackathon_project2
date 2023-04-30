import { createSlice } from "@reduxjs/toolkit";
import { registerUser, userLogin, getuser } from "../Actions/userAction";

const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;
const initialState = {
  loading: false,
  userInfo: null, // for user object
  userToken, // for storing tokens
  error: null,
  successmsg: null,
  success: false, // for monitoring the registration process.
  // isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("userToken"); // deletes token from storage
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
      state.success = false;
      // state.isAuthenticated = false;
    },
  },
  extraReducers: {
    //--------------- register user--------------
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true; // registration successful
      state.successmsg = payload;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // -------------login reducers-------------
    [userLogin.pending]: (state) => {
      state.loading = true;
      // isAuthenticated = false;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      // state.userInfo = payload.userdata;
      // isAuthenticated = true;
      state.userToken = payload.userToken;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      // isAuthenticated = false;
      state.error = payload;
    },

    //-------------------getuser reducers------------
    [getuser.pending]: (state) => {
      state.loading = true;
    },
    [getuser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
    },
    [getuser.rejected]: (state, { payload }) => {
      state.loading = false;
    },
  },
});
export const { logout } = userSlice.actions;
export default userSlice.reducer;
