import {
  Button,
  CardMedia,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useSelector } from "react-redux";

export default function CharacterDialog({ open, closeDialog, characterID }) {
  const character = useSelector(
    (state) =>
      state.characters.characters.filter(
        (character) => character.id === characterID
      )[0]
  );
  return (
    <Dialog
      open={open}
      onClose={closeDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {character.name}
        <Button onClick={closeDialog}>Close</Button>
      </DialogTitle>
      <DialogContent>
        <CardMedia
          component={"img"}
          image={character.image}
          alt=""
          className=""
        />
      </DialogContent>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Gender: {character.gender}
        </DialogContentText>
        <DialogContentText id="alert-dialog-description">
          Last seen location: {character.location.name}
        </DialogContentText>
        <DialogContentText id="alert-dialog-description">
          Origin: {character.origin.name}
        </DialogContentText>
        <DialogContentText id="alert-dialog-description">
          Species: {character.species}
        </DialogContentText>
        <DialogContentText id="alert-dialog-description">
          Status: {character.status}
        </DialogContentText>
        <DialogContentText id="alert-dialog-description">
          {character.type && <p>Type: {character.type}</p>}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
