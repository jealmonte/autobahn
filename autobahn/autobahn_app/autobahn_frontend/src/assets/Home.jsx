import React, { useEffect, useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Cards from "./Cards";
import { Stack, Box } from "@mui/material";

function Home() {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    fetch("/scrape_listings/")
      .then((response) => response.json())
      .then((data) => setCarData(data))
      .catch((error) => console.error("Error fetching car data:", error));
  }, []);

  return (
    <>
      <Header />
      <Stack direction="row" sx={{ width: "100%", overflow: "hidden" }}>
        <SideBar />
        <Box sx={{ display: "flex", flexWrap: "wrap", flexGrow: 1, mt: 13 }}>
            <Cards carData={carData} />
        </Box>
      </Stack>
    </>
  );
}

export default Home;
