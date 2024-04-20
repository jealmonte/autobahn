import React from "react";
import { AppBar, Box, Stack, Typography } from "@mui/material";
import AboutUs from "./AboutUs";
import HomeButton from "./HomeButton";
import SellACar from "./SellACar";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
  return (
    <>
      <AppBar
        style={{position: "fixed"}}
        sx={{
          backgroundColor: "primary.main",
          height: "70px",
          pt: "10px",
        }}
      >
        <Stack direction="row" alignItems="center">
          <Stack
            direction="row"
            spacing={10}
            alignItems="center"
            marginLeft="55px"
          >
            <Typography variant="h5" fontFamily="Bebas Neue" sx={{ letterSpacing: '0.37em'}}>AUTOBAHN</Typography>
            <HomeButton navigate={navigate}/>
            <AboutUs navigate={navigate}/>
            <SellACar navigate={navigate}/>
          </Stack>
          <Box sx={{ flexGrow: 1 }} />
          <Stack marginRight="130px">
            <Search />
          </Stack>
        </Stack>
      </AppBar>
    </>
  );
}
export default Header;
