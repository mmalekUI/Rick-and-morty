import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setGender } from "./FiltersSlice";

export function Gender() {
  const gendersList = ["Female", "Genderless", "Male", "Unknown"];
  const dispatch = useDispatch();

  const handleGenderChange = (event) => {
    event.target.checked &&
      dispatch(setGender(event.target.value.toLowerCase()));
  };

  return (
    <div>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          {gendersList.map((item, idx) => (
            <FormControlLabel
              value={item}
              control={<Radio />}
              label={item}
              key={idx}
              onChange={handleGenderChange}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}
