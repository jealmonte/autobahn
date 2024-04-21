// CarListings.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";

function CarListings() {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/autobahn_app/car_listings/')
            .then(response => {
                setListings(response.data);
            })
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <div>
            {listings.map(listing => (
                <Card key={listing.id} sx={{ maxWidth: 345, m: 2 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={listing.image || "default_image_url_here"}
                        alt={listing.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {listing.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Price: {listing.price} - Mileage: {listing.mileage}
                        </Typography>
                        <Button size="small" variant="contained">
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
