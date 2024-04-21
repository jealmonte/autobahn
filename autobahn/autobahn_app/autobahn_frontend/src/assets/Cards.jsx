import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled, Link } from "@mui/material";

export default function Cards({carData}) {
  const HoverCard = styled(Card)(({ theme }) => ({
    transition: theme.transitions.create(["transform", "box-shadow"], {
      duration: theme.transitions.duration.standard,
    }),
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
    },
  }));

  return (
    <>
      {carData.map((car) => (
        <HoverCard key={car.link} sx={{ /* ... */ }}>
          <CardMedia component="img" image={car.image} alt={car.name} sx={{ /* ... */ }} />
          <CardContent>
            <Typography gutterBottom fontFamily="Oswald" variant="h5" component="div" sx={{ fontWeight: "bold" }}>
              {car.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: {car.price}
              <br />
              Mileage: {car.mileage}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" style={{ background: "#eeeeee" }}>
              <Link as="a" href={car.link}>Get More Info</Link>
            </Button>
            <Button size="small">Share</Button>
          </CardActions>
        </HoverCard>
      ))}
    </>
  );
}