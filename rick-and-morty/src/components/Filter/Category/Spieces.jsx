import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setSpecies } from "./FiltersSlice";

export function Spieces() {
  const speciesList = [
    "Alien",
    "Animal",
    "Cronenberg",
    "Disease",
    "Human",
    "Humanoid",
    "Mythological Creature",
    "Poopybutthole",
    "Robot",
    "Unknown",
  ];

  const dispatch = useDispatch();

  const handleSpeciesChange = (event) => {
    event.target.checked &&
      dispatch(setSpecies(event.target.value.toLowerCase()));
  };

  return (
    <div>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          {speciesList.map((item, idx) => (
            <FormControlLabel
              value={item}
              control={<Radio />}
              label={item}
              key={idx}
              onChange={handleSpeciesChange}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}
