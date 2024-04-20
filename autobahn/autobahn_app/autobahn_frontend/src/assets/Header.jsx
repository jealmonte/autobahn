import React from "react";
import { AppBar, Box } from "@mui/material";
import AboutUs from "./AboutUs";
import HomeButton from "./HomeButton";
import SellACar from "./SellACar";

function Header() {
  return (
    <AppBar
      sx={{
        position: "fixed",
        backgroundColor: "primary.main",
        height: "70px",
      }}
    >
        
      Hello
      <HomeButton />
      <AboutUs />
      <SellACar />
    </AppBar>
  );
}

export default Header;
