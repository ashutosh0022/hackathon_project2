import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../config";

// register user action for Signup
export const registerUser = createAsyncThunk(
  // action type string
  "/register",
  // callback function
  async ({ ...formdata }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(`${API}/register`, { ...formdata }, config);
      return response.data.message;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// login user action for login
export const userLogin = createAsyncThunk(
  "/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(`${API}/login`, { email, password }, config);
      // store user's token in local storage
      // localStorage.setItem("userToken", data.userToken);
      localStorage.setItem('userToken', data.userToken)
      // console.log(data)
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);


// authenticate user data action
export const getuser = createAsyncThunk(
  '/getuser',
  async (arg, { getState, rejectWithValue }) => {
    try {
      // get user data from store
      const { user } = getState()

      // configure authorization header with user's token
      const config = {
        headers: {
          Authorization: `Bearer ${user.userToken}`,
        },
      }
      const { data } = await axios.get(`${API}/getuser`, config)
      // console.log(data)
      return data
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)
// In the cod block above, we've taken the values from the register form and made a POST request to the register route using Axios. In the event of an error, thunkAPI.rejectWithValue sends the custom error message from the backend as a payload to the reducer. You may notice that the register API is called without referencing the server's base URL. This is possible with the proxy configuration existing in frontend/package.json.
