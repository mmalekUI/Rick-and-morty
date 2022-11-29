import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const LOCATIONS_URL = `http://rickandmortyapi.com/api/location/`;

const PARAMS_MAP = {
  activePage: (pageNumber) => (pageNumber ? `page=${pageNumber}` : ""),
  nameParam: (name) => (name ? `name=${name}` : ""),
  typeParam: (type) => (type ? `type=${type}` : ""),
  dimensionParam: (dimension) => (dimension ? `dimension=${dimension}` : ""),
};

const initialState = {
  locations: [],
  isLoading: false,
  error: "",
  totalPages: 0,
};
export const fetchLocations = createAsyncThunk(
  "locations/fetchLocations",

  async (props) => {
    try {
      const params = Object.entries(PARAMS_MAP)
        .map(([key, value]) => value(props[key]))
        .filter(Boolean)
        .join(`&`);
      const response = await axios.get(`${LOCATIONS_URL}?${params}`);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchLocations.pending]: (state, action) => {
      state.isLoading = true;
    },

    [fetchLocations.fulfilled]: (state, action) => {
      state.locations = action.payload.results;
      state.totalPages = action.payload.info.pages;
    },
  },
});

export default locationsSlice.reducer;
