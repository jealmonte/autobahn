import React from "react";
import { Box, Button } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function MakeDD() {
  return (
    <Box>
      <ul style={{paddingLeft:"0px"}}>
      <Button variant="outlined" style={{display: "flex", border: '2px solid', textTransform: 'none', background:'#212121', maxHeight: '40px', minHeight: '40px', minWidth: '100%', maxWidth: '100%'}} sx={{color:'#757575'}} endIcon={<KeyboardArrowDownIcon/>}>
        Make  
        </Button>
      </ul>
    </Box>
  );
}

export default MakeDD;