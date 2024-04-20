import * as React from 'react';
import {Box} from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function YearDD() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [year, setYear] = React.useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleYear = (event) => {
    setYear(event.target.value);
  };

  return (
    <Box>
      <ul style={{paddingLeft:"0px"}}>
      <Button
        variant="outlined" style={{display: "flex", border: '2px solid', textTransform: 'none', background:'#212121', maxHeight: '40px', minHeight: '40px', minWidth: '100%', maxWidth: '100%'}} sx={{color:'#eeeeee'}} endIcon={<KeyboardArrowDownIcon/>}
        onClick={handleClick}
      >
        Year
      </Button>
      </ul>
      <Menu
        sx={
        { mt: "1px", "& .MuiMenu-paper": 
          { backgroundColor: "#eeeeee", }, 
        }}
        id="price-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <TextField
            label="Year"
            value={year}
            onChange={handleYear}
            type="number"
            variant="standard"
            fullWidth
          />
        </MenuItem>
      </Menu>
    </Box>
  );
}