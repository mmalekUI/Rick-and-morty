import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filters from "../Filter/Filter";
import SitePagination from "../Pagination/Pagination";
import Search from "../Search/Search";
import { CharactersList } from "./Characters/CharactersList";
import { fetchCharacters } from "./Characters/CharactersSlice";

function CharactersPage() {
  const dispatch = useDispatch();
  const pageNumber = useSelector((state) => state.pagination.pageNumber);
  const search = useSelector((state) => state.search.search);
  const gender = useSelector((state) => state.filters.gender);
  const species = useSelector((state) => state.filters.species);
  const status = useSelector((state) => state.filters.status);
  const characterStore = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(
      fetchCharacters({
        activePage: pageNumber,
        nameParam: search,
        genderParam: gender,
        speciesParam: species,
        statusParam: status,
      })
    );
    // dispatch(fetchLocations({ pageNumber: pageNumber }));
  }, [dispatch, pageNumber, search, gender, species, status]);

  return (
    <div>
      <Search search={search} />
      <Grid container spacing={2}>
        <Filters />

        <CharactersList characterStore={characterStore} />
        {/* <LocationsList locationStore={locationStore} /> */}
      </Grid>
      <SitePagination pages={characterStore.totalPages} />
    </div>
  );
}

export default CharactersPage;
