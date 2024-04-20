import React from 'react';
import { Button } from '@mui/material';

function HomeButton(){
    return(
        <Button variant="outlined" style={{border: '2px solid', textTransform: 'none', backgroundColor:'#757575'}} sx={{color:'#f5f5f5'}}>
            Home
        </Button>
    );
}

export default HomeButton;