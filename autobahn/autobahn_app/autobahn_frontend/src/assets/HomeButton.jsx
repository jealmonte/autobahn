import React from 'react';
import { Button, Typography } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

function HomeButton({navigate}){

    return(
        <>
        <Button onClick={() => navigate("/Home")} variant="outlined" style={{border: '2px solid', textTransform: 'none', backgroundColor:'#757575',maxHeight: '35px', minHeight: '35px', minWidth: '140px', maxWidth: '140px'}} sx={{color:'#f5f5f5'}} startIcon={<HomeRoundedIcon />}>
            Home
        </Button>
        </>
    );
}

export default HomeButton;