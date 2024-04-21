import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Cards from "./Cards";
import { Stack, Box } from "@mui/material";
import CarListings from '../components/CarListings';

function Home() {
    return(
        <>
            <Header />
            <Stack direction="row" sx={{ width: '100%', overflow: 'hidden' }}>
            <SideBar />
                <Box sx={{ display: 'flex', flexWrap: 'wrap', flexGrow: 1, mt: 13 }}>
                    <CarListings />
                </Box>
            </Stack>
        </>
    );
}

export default Home;