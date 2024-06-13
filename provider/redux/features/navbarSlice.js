const { createSlice } = require("@reduxjs/toolkit");

const initialState = true;

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    hamburgerToggle: (state, action) => {
      if (action.payload === false) {
        return true; // tracking outside click
      } else {
        return !state;
      }
    },
  },
});

export const { hamburgerToggle } = navbarSlice.actions;
export default navbarSlice.reducer;
