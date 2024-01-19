import React, { useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

type CatCardProps = {
  name: string;
  description: string;
  image: string;
}
const CatCard = (props:CatCardProps) => {
  const { name, description, image } = props;
  const [isPet, setPet] = useState(false);

  return (
    <Grid item xs={3}>
      <Card className={`${isPet ? "shaking" : ""}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={`https://cdn2.thecatapi.com/images/${image}.jpg`}
            loading={"lazy"}
            sx={{
              objectFit: "cover",
              objectPosition: "50% 25%",
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => setPet(!isPet)}
          >
            Pet
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default CatCard;