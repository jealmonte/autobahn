import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled, Link } from "@mui/material";

export default function Cards() {
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
    <HoverCard
      sx={{
        maxWidth: 350,
        minWidth: 250,
        maxHeight: 450,
        minHeight: 350,
        mb: 5,
        mx: 3,
        borderRadius: 3,
      }}
    >
      <CardMedia
        component="img"
        image="https://media.istockphoto.com/id/1189903200/photo/red-generic-sedan-car-isolated-on-white-background-3d-illustration.jpg?s=612x612&w=0&k=20&c=uRu3o_h5FVljLQHS9z0oyz-XjXzzXN_YkyGXwhdMrjs="
        alt="red generic sedan car"
        sx={{ height: 200, objectFit: 'contain' }}
      />
      <CardContent>
        <Typography
          gutterBottom
          fontFamily="Oswald"
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" style={{background:"#eeeeee"}}>
          <Link as="a" href="https://www.carmax.com/car/25653851">Get More Info</Link>
        </Button>
        <Button size="small">Share</Button>
      </CardActions>
    </HoverCard>
  );
}
