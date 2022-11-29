import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { Dimension } from "./Category/Dimension";
import {
  setDimension,
  setGender,
  setSpecies,
  setStatus,
  setType,
} from "./Category/FiltersSlice";
import { Gender } from "./Category/Gender";
import { Spieces } from "./Category/Spieces";
import { Status } from "./Category/Status";
import { Type } from "./Category/Type";

const Filters = () => {
  const dispatch = useDispatch();

  const handleClearChange = (event) => {
    dispatch(setGender(""));
    dispatch(setSpecies(""));
    dispatch(setStatus(""));
    dispatch(setType(""));
    dispatch(setDimension(""));
  };

  return (
    <div>
      <Grid
        item
        xs={2}
        style={{
          marginLeft: "25px",
          display: "flex",
          gap: "50px",
          padding: "20px",
          width: "100%",
        }}
      >
        Filters
      </Grid>
      <div
        style={{
          marginLeft: "25px",
        }}
      >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Gender</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Gender />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Speices</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Spieces />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Status</Typography>
          </AccordionSummary>
          <Status />
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Type</Typography>
          </AccordionSummary>
          <Type />
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Dimension</Typography>
          </AccordionSummary>
          <Dimension />
        </Accordion>

        <Button onChange={handleClearChange}>Clear Filters</Button>
      </div>
    </div>
  );
};

export default Filters;
