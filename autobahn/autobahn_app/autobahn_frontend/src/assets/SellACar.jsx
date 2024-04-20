import React from 'react';
import { Button } from '@mui/material';
import DirectionsCarFilledRoundedIcon from '@mui/icons-material/DirectionsCarFilledRounded';

function SellACar({navigate}){
    return(
        <Button onClick={() => navigate("/SellForm")} variant="outlined" style={{border: '2px solid', textTransform: 'none', background:'#757575', maxHeight: '35px', minHeight: '35px', minWidth: '150px', maxWidth: '150px', lineHeight: 1}} sx={{color:'#f5f5f5'}} startIcon={<DirectionsCarFilledRoundedIcon />}>
            Sell A Car
        </Button>
    );
}

export default SellACar;