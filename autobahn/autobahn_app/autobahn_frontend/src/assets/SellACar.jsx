import React from 'react';
import { Button } from '@mui/material';

function SellACar(){
    return(
        <Button variant="outlined" style={{border: '2px solid', textTransform: 'none', background:'#757575', maxHeight: '40px', minHeight: '40px', minWidth: '100px', maxWidth: '100px'}} sx={{color:'#f5f5f5'}}>
            Sell A Car
        </Button>
    );
}

export default SellACar;