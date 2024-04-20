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
                pt: '10px',
            }}
        >
            <Stack direction='row' alignItems='center' >
                <Stack direction='row' spacing={10} alignItems='center' marginLeft='55px'>
                    <Typography variant="h5">AUTOBAHN</Typography>
                    <HomeButton />
                    <AboutUs />
                    <SellACar />
                </Stack >
                <Box sx={{ flexGrow: 1 }} />
                <Stack marginRight='175px'>
                <Search />
                </Stack>
            </Stack>
        </AppBar>
    );
}
export default Header;