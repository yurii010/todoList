import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserData = createAsyncThunk("user/getdata", async (token, { rejectWithValue }) => {
  try {
    const response = await axios.post(process.env.REACT_APP_USER_API_GET_DATA, { token });
    return response.data.user;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const getAuth = createAsyncThunk("user/authorization", async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(process.env.REACT_APP_USER_API_AUTHORIZATION, data);
    return response.data.token;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const getRegistration = createAsyncThunk("user/registration", async (info, { rejectWithValue }) => {
  try {
    const response = await axios.post(process.env.REACT_APP_USER_API_REGISTRATION, info);
    return response.data.message;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const userLogout = createAsyncThunk("user/logout", async (token, { rejectWithValue }) => {
  try {
    await axios.delete(`${process.env.REACT_APP_USER_API_LOGOUT}?token=${token}`);
    localStorage.removeItem("token");
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    user: {},
    status: "idle",
    error: null,
  },
  reducers: {
    removeUserData: (state, action) => {
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserData.pending, (state) => {
        state.status = "get user data loading";
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.status = "get user data succeeded";
        state.user = action.payload;
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.status = "get user data failed";
        state.error = action.error.message;
      })
      .addCase(userLogout.fulfilled, (state, action) => {
        state.status = "logout succeeded";
      });
  },
});

export const { removeUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
