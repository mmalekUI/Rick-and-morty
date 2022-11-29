import { createSlice } from "@reduxjs/toolkit";

export const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    pageNumber: 1,
  },
  reducers: {
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPageNumber } = paginationSlice.actions;

export default paginationSlice.reducer;
