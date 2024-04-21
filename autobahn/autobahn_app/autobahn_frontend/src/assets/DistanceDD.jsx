import * as React from 'react';
import {Box} from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function DistanceDD({distance, setDistance}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDist = (event) => {
    setDistance(event.target.value);
  };

  return (
    <Box>
      <ul style={{paddingLeft:"0px"}}>
      <Button
        variant="outlined" style={{display: "flex", border: '2px solid', textTransform: 'none', background:'#212121', maxHeight: '40px', minHeight: '40px', minWidth: '100%', maxWidth: '100%',}} sx={{color:'#eeeeee'}} endIcon={<KeyboardArrowDownIcon/>}
        onClick={handleClick}
      >
        Mileage
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
            label="Distance"
            value={distance}
            onChange={handleDist}
            type="number"
            variant="standard"
            fullWidth
          />
        </MenuItem>
      </Menu>
    </Box>
  );
}