import React from "react";
import { AppBar, Box, Stack, Typography } from "@mui/material";
import AboutUs from "./AboutUs";
import HomeButton from "./HomeButton";
import SellACar from "./SellACar";
import Search from "./Search";

function Header() {
    return (
        <AppBar
            sx={{
                position: "fixed",
                backgroundColor: "primary.main",
                height: "70px",
                
            }}
        >
            <Stack direction='row' spacing={5} alignItems='center' marginLeft='20px'>
                <Typography variant="h5">AUTOBAHN</Typography>
                <HomeButton />
                <AboutUs />
                <SellACar />
                <Search />
            </Stack>
        </AppBar>
    );
}

export default Header;
