import React from 'react';
import { Button } from '@mui/material';

function AboutUs(){
    return(
        <Button variant="outlined" style={{border: '2px solid', textTransform: 'none', margin: '25px', background:'#757575'}} sx={{color:'#f5f5f5'}}>
            About us
        </Button>
    );
}

export default AboutUs;