import { createSlice } from "@reduxjs/toolkit";
import { getAllEvents, hostEvent } from "../Actions/eventAction";

const initialState = {
  loading: false,
  error: null,
  success: false,
  successmsg: null,
  eventdetails: null,
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {},
  extraReducers: {
    [hostEvent.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [hostEvent.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true; // registration successful
      state.successmsg = payload;
    },
    [hostEvent.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },


    [getAllEvents.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getAllEvents.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true; // registration successful
      state.eventdetails = payload;
    },
    [getAllEvents.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
// export const userSlice.actions;
export default eventSlice.reducer;
