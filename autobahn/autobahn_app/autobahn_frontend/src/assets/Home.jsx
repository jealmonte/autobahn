import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Cards from "./Cards";
import { Stack, Box } from "@mui/material";

function Home() {
    return(
        <>
            <Header />
            <Stack direction="row" sx={{ width: '100%', overflow: 'hidden' }}>
                <SideBar />
                <Box sx={{ display: 'flex', flexWrap: 'wrap', flexGrow: 1 }}>
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                </Box>
            </Stack>
        </>
    );
}

export default Home;