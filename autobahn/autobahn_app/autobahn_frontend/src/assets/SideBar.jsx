import React from 'react';
import { AppBar, Box } from '@mui/material';
import DropdownMenu from './DropdownMenu';

function SideBar(){
    return(
        <AppBar style={{border:"1px"}} position="left" sx={{height:'86vh', width:"250px", padding:"30px"}}>
            <DropdownMenu category={"Distance"}/>
            <DropdownMenu category={"Make"}/>
            <DropdownMenu category={"Year"}/>
            <DropdownMenu category={"Price"}/>
        </AppBar>
    );
}

export default SideBar;