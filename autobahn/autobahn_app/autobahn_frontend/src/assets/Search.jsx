import React from 'react';
import TextField from '@mui/material/TextField';

function Search() {
    return (
        <TextField style={{borderRadius: '5px', textTransform: 'none', background:'#757575', width: '30vh'}} sx={{color:'#f5f5f5', 
        border: 'solid', "& label": { 
            "&.Mui-focused": {
              color: '#f5f5f5'
            }
          }}} label="Search" variant="filled" id="filled-basic" size='small'>
        </TextField>
    );
}

export default Search;