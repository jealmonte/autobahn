import React from 'react';
import { Button } from '@mui/material';

function SellACar(){
    return(
        <Button variant="outlined" style={{border: '2px solid', textTransform: 'none', background:'#757575'}} sx={{color:'#f5f5f5'}}>
            Sell A Car
        </Button>
    );
}

export default SellACar;