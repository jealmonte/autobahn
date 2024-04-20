import React from 'react';
import TextField from '@mui/material/TextField';

function Search() {
  return (
    <TextField
      style={{
        borderRadius: '5px',
        textTransform: 'none',
        background: '#757575',
        width: '350px',
      }}
      sx={{
        color: '#f5f5f5',
        border: 'solid',
        "& label": {
          color: '#f5f5f5',
          "&.Mui-focused": {
            color: '#f5f5f5'
          }
        },
        "& .MuiInputBase-input": {
          color: '#f5f5f5',
          height: '15px', // Adjusted height
        },
      }}
      label="Search"
      variant="filled"
      id="filled-basic"
      size='small'
    >
    </TextField>
  );
}

export default Search;

