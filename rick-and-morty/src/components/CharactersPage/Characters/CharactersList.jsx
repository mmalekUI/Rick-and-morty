import { Grid, Typography } from "@mui/material";
import { CharacterCard } from "../Card/CharacterCard";

export const CharactersList = ({ characterStore }) => {
  return (
    <Grid item xs={9} container spacing={2}>
      {characterStore.characters?.length ? (
        characterStore.characters.map((item) => (
          <Grid item xs={4} key={item.id}>
            <CharacterCard
              characterName={item.name}
              characterStatus={item.status}
              image={item.image}
              location={item.location.name}
              id={item.id}
            />
          </Grid>
        ))
      ) : (
        <Typography>No characters found :c</Typography>
      )}
    </Grid>
  );
};
