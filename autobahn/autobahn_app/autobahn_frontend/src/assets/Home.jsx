import React, { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Cards from "./Cards";
import { Stack, Box } from "@mui/material";
import CarListings from '../components/CarListings';

function Home() {

    const [year, setYear] = useState(0);
    const [distance, setDistance] = React.useState(10000000);

    return(
        <>
            <Header />
            <Stack direction="row" sx={{ width: '100%', overflow: 'hidden' }}>
            <SideBar year={year} setYear={setYear} distance={distance} setDistance={setDistance}/>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', flexGrow: 1, mt: 13 }}>
                    <CarListings year={year} setYear={setYear} distance={distance} setDistance={setDistance}/>
                </Box>
            </Stack>
        </>
    );
}

export default Home;