import React from "react";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";
import { Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <TextField
        style={{
          borderRadius: "5px",
          textTransform: "none",
          background: "#757575",
          width: "350px",
        }}
        sx={{
          color: "#f5f5f5",
          border: "solid",
          "& label": {
            color: "#f5f5f5",
            "&.Mui-focused": {
              color: "#f5f5f5",
            },
          },
          "& .MuiInputBase-input": {
            color: "#f5f5f5",
            height: "15px",
          },
        }}
        label="Search"
        variant="filled"
        id="filled-basic"
        size="small"
      ></TextField>
      <Button
        type="submit"
        variant="outlined"
        style={{
          border: "2px solid",
          textTransform: "none",
          background: "#757575",
          maxHeight: "46px",
          minHeight: "46px",
          minWidth: "100px",
          maxWidth: "100px",
        }}
        sx={{ color: "#f5f5f5" }}
      >
        <SearchIcon />
      </Button>
    </form>
  );
}

export default Search;
