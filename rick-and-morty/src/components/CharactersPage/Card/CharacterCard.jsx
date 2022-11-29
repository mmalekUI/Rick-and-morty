import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CharacterDialog from "../Modal/CharacterDialog";

export const CharacterCard = ({
  id,
  characterName,
  characterStatus,
  image,
  location,
}) => {
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  };
  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <Card key={id} positions="relative">
      <CardActionArea onClick={openDialog}>
        <CardMedia component={"img"} image={image} alt="" className="" />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            {characterName}
          </Typography>
          <Typography variant="body3" color="text.secondary">
            Last seen location:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {location}
          </Typography>
          <Chip
            variant="outlined"
            color={
              characterStatus === "Dead"
                ? "error"
                : characterStatus === "Alive"
                ? "primary"
                : "secondary"
            }
            label={characterStatus}
          />
        </CardContent>
      </CardActionArea>
      <CharacterDialog open={open} closeDialog={closeDialog} characterID={id} />
    </Card>
  );
};
