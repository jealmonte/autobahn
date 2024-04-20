import * as React from 'react';
import {Box} from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function PriceDD() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [minPrice, setMinPrice] = React.useState('');
  const [maxPrice, setMaxPrice] = React.useState('');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  return (
    <Box>
      <ul style={{paddingLeft:"0px"}}>
      <Button
        variant="outlined" style={{display: "flex", border: '2px solid', textTransform: 'none', background:'#212121', maxHeight: '40px', minHeight: '40px', minWidth: '100%', maxWidth: '100%'}} sx={{color:'#eeeeee'}} endIcon={<KeyboardArrowDownIcon/>}
        onClick={handleClick}
      >
        Price
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
            label="Min Price"
            value={minPrice}
            onChange={handleMinPriceChange}
            type="number"
            variant="standard"
            fullWidth
          />
        </MenuItem>
        <MenuItem>
          <TextField
            label="Max Price"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            type="number"
            variant="standard"
            fullWidth
          />
        </MenuItem>
      </Menu>
    </Box>
  );
}