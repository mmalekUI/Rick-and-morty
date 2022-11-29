import { Button, TextField, Container } from "@mui/material";
import React from "react";
import { setPageNumber } from "../../features/pagination/paginationSlice";
import { setSearch } from "../../features/search/searchSlice";
import { useDispatch } from "react-redux";

function Search({ search }) {
  const dispatch = useDispatch();
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "50px",
        padding: "20px",
        width: "100%",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Search for a character"
        type="text"
        className=""
        style={{ width: "50%" }}
        onChange={(e) => {
          dispatch(setSearch(e.target.value));
        }}
      >
        {search}
      </TextField>
      <Button
        variant="contained"
        onClick={(e) => {
          dispatch(setPageNumber(1));
          dispatch(setSearch(e.target.value));
        }}
      >
        Search
      </Button>
    </Container>
  );
}

export default Search;
