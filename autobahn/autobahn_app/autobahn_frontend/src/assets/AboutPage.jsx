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
            <Typography variant="h4" gutterBottom>About Us</Typography>
            <Typography variant="body1">
              We are a company dedicated to providing high-quality products and services.
              Our mission is to deliver exceptional value to our customers.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h5" gutterBottom>Technologies Used</Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <img src="\reactLogo.jpg" alt="React"width="100" height="90" />
              </Grid>
              <Grid item>
                <img src="\Python.png" alt="Python" width="100" height="90" />
              </Grid>
              <Grid item>
                <img src="\nodelogo.png" alt="Node.js" width="100" height="90" />
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