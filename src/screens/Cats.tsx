import React from "react";
import { CircularProgress, Box, Grid } from "@mui/material";
import "./Cats.css";

function Cats() {
  if (true) {
    return (
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // render our page: a simple status message with either a reload button or dropdown
  return (
    <Grid container spacing={5} p={5}>
      Cats
    </Grid>
  );
}

export default Cats;
