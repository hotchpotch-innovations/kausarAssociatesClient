const { createSlice } = require("@reduxjs/toolkit");

const initialState = true;

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    hamburgerToggle: (state) => (state = !state),
  },
});

export const { hamburgerToggle } = navbarSlice.actions;
export default navbarSlice.reducer;
