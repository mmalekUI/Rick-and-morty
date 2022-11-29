import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "../features/pagination/paginationSlice";
import searchReducer from "../features/search/searchSlice";
import charactersReducer from "../components/CharactersPage/Characters/CharactersSlice";
import locationsReducer from "../components/LocationsPage/Locations/LocationsSlice";
import filtersReducer from "../components/Filter/Category/FiltersSlice";

export default configureStore({
  reducer: {
    pagination: paginationReducer,
    search: searchReducer,
    characters: charactersReducer,
    locations: locationsReducer,
    filters: filtersReducer,
  },
});
