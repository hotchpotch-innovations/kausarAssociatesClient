import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// initial state
const initialState = {
  loading: true,
  data: null,
  error: null,
};

// defining thunk for fetching data asyncronously
/*
 *  @params => queryParams arguments is the original query for sending in the backend api
 */
export const fetchLicenseCatData = createAsyncThunk(
  "licenseCatData/fetchLicenseCatData",
  async (queryParams) => {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_LICENSE_BACKEND_API
      ); //
      console.log(response, "response");
      return response.data;
    } catch (error) {
      throw Error("Failed to fetch data");
    }
  }
);

const licenseCatDataSlice = createSlice({
  name: "licenseCatData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLicenseCatData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLicenseCatData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchLicenseCatData.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message;
      });
  },
});

export default licenseCatDataSlice.reducer;

export const {} = licenseCatDataSlice.actions;
