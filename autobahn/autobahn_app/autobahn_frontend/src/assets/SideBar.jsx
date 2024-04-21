import React from 'react';
import { AppBar, Box } from '@mui/material';
import DistanceDD from './DistanceDD';
import YearDD from './YearDD';
import PriceDD from './PriceDD';

function SideBar({year, setYear, distance, setDistance, minPrice, setMinPrice, maxPrice, setMaxPrice}){
    return(
        <AppBar style={{ border: "1px" }} position='fixed' sx={{
            height: '100vh',
            width: "250px",
            padding: "30px",
            paddingTop: "90px",
            top: 0, 
            left: 0,
            zIndex: 0,
        }}>
            <DistanceDD distance={distance} setDistance={setDistance}/>
            <YearDD year={year} setYear={setYear}/>
            <PriceDD minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice}/>
        </AppBar>
    );
}

export default SideBar;