import React from 'react';
import { Button } from '@mui/material';
import DirectionsCarFilledRoundedIcon from '@mui/icons-material/DirectionsCarFilledRounded';

function SellACar(){
    return(
        <Button variant="outlined" style={{border: '2px solid', textTransform: 'none', background:'#757575', maxHeight: '50px', minHeight: '50px', minWidth: '140px', maxWidth: '140px', lineHeight: 1}} sx={{color:'#f5f5f5'}} startIcon={<DirectionsCarFilledRoundedIcon />}>
            Sell A Car
        </Button>
    );
}

export default SellACar;