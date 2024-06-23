import  {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"

// initial state
const initialState = {
    loading: true,
    data: null,
    error: null,
}

// defining thunk for fetching data asyncronously
/*
    *  @params => queryParams arguments is the original query for sending in the backend api
*/
export const fetchSubCatData = createAsyncThunk('subCatData/fetchSubCatData', async(queryParams) => {
    try {
        const response = await axios.get(process.env.NEXT_PUBLIC_SERVICE_BACKEND_API); //
        return response.data
       } catch (error) {
        throw Error ("Failed to fetch data")
    }
})

const subCatDataSlice = createSlice({
    name: "subCatData",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSubCatData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSubCatData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchSubCatData.rejected, (state, action) => {
                state.loading = false;
                state.data = null;
                state.error = action.error.message;
            });
    },
})

export default subCatDataSlice.reducer

export const {} = subCatDataSlice.actions