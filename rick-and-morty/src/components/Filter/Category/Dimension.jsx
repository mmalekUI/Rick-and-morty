import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setDimension } from "./FiltersSlice";

export function Dimension() {
  const dimensionsList = [
    "Chair Dimension",
    "Cromulon Dimension",
    "Cronenberg Dimension",
    "Dimension C-137",
    "Dimension C-35",
    "Dimension C-500A",
    "Dimension D-99",
    "Dimension D716",
    "Dimension D716-B",
    "Dimension D716-C",
    "Dimension J19ζ7",
    "Dimension J-22",
    "Dimension K-22",
    "Dimension K-83",
    "Dimension 5-126",
    "Eric Stoltz Mask Dimension",
    `Evil Rick's Target Dimension`,
    "Fascist Dimension",
    "Fascist Shrimp Dimension",
    "Fascist Teddy Bear Dimension",
    "Fantasy Dimension",
    "Giant Telepathic Spiders Dimension",
    "Magic Dimension",
    "Merged Dimension",
    "Phone Dimension",
    "Pizza Dimension",
    "Post-Apocalyptic Dimension",
    "Replacement Dimension",
    "Testicle Monster Dimension",
    "Tusk Dimension",
    "unknown",
    "Unknown dimension",
    "Wasp Dimension",
  ];
  const dispatch = useDispatch();

  const handleDimensionChange = (event) => {
    event.target.checked &&
      dispatch(setDimension(event.target.value.toLowerCase()));
  };

  return (
    <div>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          {dimensionsList.map((item, idx) => (
            <FormControlLabel
              value={item}
              control={<Radio />}
              label={item}
              key={idx}
              onChange={handleDimensionChange}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}
