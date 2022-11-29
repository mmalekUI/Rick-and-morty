import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setType } from "./FiltersSlice";

export function Type() {
  const typesList = [
    "Acid Plant",
    "Arcade",
    "Artificially generated world",
    "Asteroid",
    "Base",
    "Box",
    "Cluster",
    "Consciousness",
    "Convention",
    "Country",
    "Customs",
    "Daycare",
    "Death Star",
    "Diegesis",
    "Dimension",
    "Dream",
    "Dwarf planet (Celestial Dwarf)",
    "Elemental Rings",
    "Fantasy town",
    "Game",
    "Hell",
    "Human",
    "Liquid",
    "Machine",
    "Memory",
    "Menagerie",
    "Microverse",
    "Miniverse",
    "Mount",
    "Nightmare",
    "Non-Diegetic Alternative Reality",
    "Planet",
    "Police Department",
    "Quadrant",
    "Quasar",
    "Reality",
    "Resort",
    "Spa",
    "Space",
    "Space station",
    "Spacecraft",
    "Teenyverse",
    "TV",
    "unknown",
    "Woods",
  ];
  const dispatch = useDispatch();

  const handleTypeChange = (event) => {
    event.target.checked && dispatch(setType(event.target.value.toLowerCase()));
  };

  return (
    <div>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          {typesList.map((item, idx) => (
            <FormControlLabel
              value={item}
              control={<Radio />}
              label={item}
              key={idx}
              onChange={handleTypeChange}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}
