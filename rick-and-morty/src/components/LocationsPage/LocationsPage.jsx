import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filters from "../Filter/Filter";
import SitePagination from "../Pagination/Pagination";
import Search from "../Search/Search";
import { LocationsList } from "./Locations/LocationsList";
import { fetchLocations } from "./Locations/LocationsSlice";

function LocationsPage() {
  const dispatch = useDispatch();
  const pageNumber = useSelector((state) => state.pagination.pageNumber);
  const search = useSelector((state) => state.search.search);
  const type = useSelector((state) => state.filters.type);
  const dimension = useSelector((state) => state.filters.dimension);
  const locationStore = useSelector((state) => state.locations);

  useEffect(() => {
    dispatch(
      fetchLocations({
        activePage: pageNumber,
        nameParam: search,
        typeParam: type,
        dimensionParam: dimension,
      })
    );
    dispatch(fetchLocations({ pageNumber: pageNumber }));
  }, [dispatch, pageNumber, search, type, dimension]);

  return (
    <div>
      <Search search={search} />
      <Grid container spacing={2}>
        <Filters />
        <LocationsList locationStore={locationStore} />
      </Grid>
      <SitePagination pages={locationStore.totalPages} />
    </div>
  );
}

export default LocationsPage;
