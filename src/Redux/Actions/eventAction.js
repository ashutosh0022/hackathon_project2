import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../config";
export const hostEvent = createAsyncThunk(
  "/hostevent",
  async (formData, { rejectWithValue }) => {
    // console.log("Calling auytrepi")
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      // console.log("Calling api")
      // console.log(formData);
      const response = await axios.post(`${API}/hostevent`, formData, config);
      // console.log(response)
      return response.data.message;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getAllEvents = createAsyncThunk("/getallevents", async () => {

  try {
    // console.log("hello");
    const response = await axios.get(`${API}/getallevents`);
    // console.log("hello");
    // console.log(response);
    return response.data
  } catch (error) {
    if (error.response && error.response.data.message) {
      return error.response.data.message;
    } else {
      return error.message;
    }
  }
});
