import React from 'react';
import { AppBar, Box } from '@mui/material'

function Header(){
    return(
        <AppBar sx={{position: 'fixed', backgroundColor: 'primary.main', height: '70px'}}>
            Hello
        </AppBar>
    );
}

export default Header;