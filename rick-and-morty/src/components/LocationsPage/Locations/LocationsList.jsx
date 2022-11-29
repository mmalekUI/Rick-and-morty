import { Grid } from "@mui/material";
import { LocationCard } from "../Card/LocationCard";

export const LocationsList = ({ locationStore }) => {
  console.log(locationStore);
  return (
    <Grid item xs={9} container spacing={2}>
      {locationStore.locations.length &&
        locationStore.locations.map((item) => {
          return (
            <Grid item xs={4} key={item.id}>
              <LocationCard
                locationName={item.name}
                type={item.type}
                dimension={item.dimension}
              />
            </Grid>
          );
        })}
    </Grid>
  );
};
