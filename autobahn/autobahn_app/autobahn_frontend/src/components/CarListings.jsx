import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";

function CarListings({ year, distance, minPrice, maxPrice }) {
  const [listings, setListings] = useState([]);

useEffect(() => {
    axios.get('http://127.0.0.1:8000/autobahn_app/car_listings/')
        .then(response => {
            const filteredListings = response.data.filter(listing => {
                const yearOfCar = parseInt(listing.name.substring(0, 4), 10);
                const mileageOfCar = parseInt(listing.mileage.replace(/,/g, '').split(' ')[0], 10);
                const priceOfCar = parseInt(listing.price.replace(/,/g, ''), 10);
                response.data.forEach(listing => {
                    const rawData = JSON.parse(listing.raw_data);
                    listing.name = rawData.name;
                    listing.image = rawData.image;
                });
                return yearOfCar >= year && mileageOfCar <= distance && priceOfCar >= minPrice && priceOfCar <= maxPrice;
            });
            setListings(filteredListings);
        })
        .catch(error => console.error('Error fetching data: ', error));
}, [year, distance, minPrice, maxPrice]);

useEffect(() => {
    axios.get('http://127.0.0.1:8000/autobahn_app/car_listings/')
        .then(response => {
            // Parse the raw_data field to access the properties
            const updatedListings = response.data.map(listing => {
                const rawData = JSON.parse(listing.raw_data);
                return {
                    ...listing,
                    name: rawData.name,
                    image: rawData.image
                };
            });
            // Sort listings to put entries without a placeholder image at the top
            updatedListings.sort((a, b) => {
                const aIsPlaceholder = a.image.includes('placeholder_10x10');
                const bIsPlaceholder = b.image.includes('placeholder_10x10');
                return aIsPlaceholder - bIsPlaceholder;
            });
            setListings(updatedListings);
        })
        .catch(error => console.error('Error fetching data: ', error));
}, []);
    

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {listings.map((listing) => (
        <Card
        key={listing.id}
        sx={{
          maxWidth: 345,
          minWidth: 345,
          minHeight: 270,
          maxHeight: 350,
          m: 2,
          display: 'flex', // Ensures the card itself is a flex container
          flexDirection: 'column' // Stacks children vertically
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={listing.image}
          alt={listing.name}
        />
        <CardContent style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-between', 
          flex: '1 0 auto' // Takes up all available space
        }}>
          <Typography gutterBottom variant="h5" component="div">
            {listing.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: ${listing.price} - Mileage: {listing.mileage}
          </Typography>
          <Button
            size="small"
            variant="contained"
            style={{ background: "#757575", marginTop: "18px" }}
          >
            <Link href={listing.link} target="_blank" rel="noopener">
              Get More Info
            </Link>
          </Button>
        </CardContent>
      </Card>
      ))}
    </div>
  );
}

export default CarListings;