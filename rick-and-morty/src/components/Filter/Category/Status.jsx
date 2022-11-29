import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setStatus } from "./FiltersSlice";

export function Status() {
  const statusList = ["Alive", "Dead", "Genderless", "Unknown"];

  const dispatch = useDispatch();

  const handleStatusChange = (event) => {
    event.target.checked &&
      dispatch(setStatus(event.target.value.toLowerCase()));
  };
  return (
    <div>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          {statusList.map((item, idx) => (
            <FormControlLabel
              value={item}
              control={<Radio />}
              label={item}
              key={idx}
              onChange={handleStatusChange}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}
