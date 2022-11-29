import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "Filters",
  initialState: {
    gender: "",
    status: "",
    species: "",
    dimension: "",
    type: "",
  },
  reducers: {
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setSpecies: (state, action) => {
      state.species = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setDimension: (state, action) => {
      state.dimension = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setStatus, setGender, setSpecies, setType, setDimension } = filtersSlice.actions;

export default filtersSlice.reducer;
