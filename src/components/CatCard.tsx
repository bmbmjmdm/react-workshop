import React from "react";
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
};
const CatCard = (props: CatCardProps) => {
  return (
    <Grid item xs={3}>
      <Card className={`${true ? "shaking" : ""}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={`https://cdn2.thecatapi.com/images/${123}.jpg`}
            loading={"lazy"}
            sx={{
              objectFit: "cover",
              objectPosition: "50% 25%",
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {"Cat name"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {"Cat description"}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Pet
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CatCard;
