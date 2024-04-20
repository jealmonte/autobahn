import React from 'react';
import { Button } from '@mui/material';

function HomeButton(){
    return(
        <Button variant="outlined" style={{border: '2px solid', textTransform: 'none', backgroundColor:'#757575',maxHeight: '40px', minHeight: '40px', minWidth: '100px', maxWidth: '100px'}} sx={{color:'#f5f5f5'}}>
            Home
        </Button>
    );
}

export default HomeButton;