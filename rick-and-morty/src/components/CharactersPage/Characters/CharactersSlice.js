import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const CHARACTERS_URL = `http://rickandmortyapi.com/api/character/`;

const PARAMS_MAP = {
  activePage: (pageNumber) => (pageNumber ? `page=${pageNumber}` : ""),
  nameParam: (name) => (name ? `name=${name}` : ""),
  statusParam: (status) => (status ? `status=${status}` : ""),
  genderParam: (gender) => (gender ? `gender=${gender}` : ""),
  speciesParam: (species) => (species ? `species=${species}` : ""),
};

const initialState = {
  characters: [],
  isLoading: false,
  error: "",
  totalPages: 0,
};
export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",

  async (props) => {
    try {
      const params = Object.entries(PARAMS_MAP)
        .map(([key, value]) => value(props[key]))
        .filter(Boolean)
        .join(`&`);
      const response = await axios.get(`${CHARACTERS_URL}?${params}`);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCharacters.pending]: (state, action) => {
      state.isLoading = true;
    },

    [fetchCharacters.fulfilled]: (state, action) => {
      state.characters = action.payload.results;
      state.totalPages = action.payload.info?.pages;
    },
  },
});

export default charactersSlice.reducer;
