import React, { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Cards from "./Cards";
import { Stack, Box } from "@mui/material";
import CarListings from '../components/CarListings';

function Home() {

    const [year, setYear] = useState(0);
    const [distance, setDistance] = React.useState(100000);
    const [minPrice, setMinPrice] = React.useState(0);
    const [maxPrice, setMaxPrice] = React.useState(100000);

    return(
        <>
            <Header />
            <Stack direction="row" sx={{ width: '100%', overflow: 'hidden' }}>
            <SideBar year={year} setYear={setYear} distance={distance} setDistance={setDistance} minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice}/>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', flexGrow: 1, mt: 13, ml: 30 }}>
                    <CarListings year={year} setYear={setYear} distance={distance} setDistance={setDistance} minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice}/>
                </Box>
            </Stack>
        </>
    );
}

export default Home;