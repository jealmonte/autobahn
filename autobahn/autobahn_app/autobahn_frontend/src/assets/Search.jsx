import React from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

function Search() {
    return (
        <TextField style={{borderRadius: '5px', textTransform: 'none', background:'#757575', width: '30vh'}} sx={{color:'#f5f5f5'}} label="Search" variant="filled" id="filled-basic">
        </TextField>
    );
}

export default Search;