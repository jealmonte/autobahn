// CarListings.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";

function CarListings({year, setYear}) {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/autobahn_app/car_listings/')
            .then(response => {
                const filteredListings = response.data.filter(listing => {
                    const yearOfCar = parseInt(listing.name.substring(0, 4), 10);
                    return yearOfCar >= year;
                });
                setListings(filteredListings);
            })
            .catch(error => console.error('Error fetching data: ', error));
    }, [year]);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            {listings.map(listing => (
                <Card key={listing.id} sx={{ maxWidth: 345, minWidth: 345, minHeight: 270, maxHeight: 320, m: 2 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={listing.image || "default_image_url_here"}
                        alt={listing.raw_data.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {listing.raw_data.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Price: {listing.price} - Mileage: {listing.mileage}
                        </Typography>
                        <Button size="small" variant="contained" style={{background:"#757575", marginTop:"18px"}}>
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