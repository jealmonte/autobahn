import React from "react";
import Header from "./Header";
import { Box, Grid, Typography } from '@mui/material';

function AboutPage() {
  return (
    <Box sx={{ minWidth: '100vw' }}>
      <Header />
      <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h4" gutterBottom fontFamily='Bungee'>About Us</Typography>
            <Typography variant="body1" paddingLeft='300px' paddingRight='300px' letterSpacing='3px'>
            Purchasing a car can be tedious. From choosing 
            your very first car to finding that perfect daily driver, 
            it can take a lot of dealership visits and website hopping 
            before you find the car that suits you.
            That's why we created Autobahn. Acting as the highway to your 
            first car with no limits, we get rid of all
            of the hassle for you! We've managed to accumulate car listings 
            from every major retailer in the United States 
            just to make everyone's life a little bit easier.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h4" gutterBottom marginBottom='50px' fontFamily='Bungee' >Technologies Used</Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <img className="icon" src="\reactLogo.jpg" alt="React"width="100" height="90" />
              </Grid>
              <Grid item>
                <img className="icon" src="\Python.png" alt="Python" width="100" height="90" />
              </Grid>
              <Grid item>
                <img className="icon" src="\nodelogo.png" alt="Node.js" width="100" height="90" />
              </Grid>
              {/* Add more technology images as needed */}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutPage;