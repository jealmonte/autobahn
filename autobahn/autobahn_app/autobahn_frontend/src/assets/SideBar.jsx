import React from 'react';
import { AppBar, Box } from '@mui/material';
import DistanceDD from './DistanceDD';
import YearDD from './YearDD';
import PriceDD from './PriceDD';

function SideBar(){
    return(
        <AppBar style={{border:"1px"}} position='static' sx={{height:'100vh', width:"250px", padding:"30px", paddingTop:"90px", mr: 1}}>
            <DistanceDD />
            <YearDD/>
            <PriceDD/>
        </AppBar>
    );
}

export default SideBar;