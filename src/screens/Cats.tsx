import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  selectCats,
  selectError,
  selectLoading,
  fetchCats,
} from "../store/catSlice";
import { CircularProgress, Box, Grid } from "@mui/material";
import "./Cats.css";
import { selectUsername } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import CatCard from "../components/CatCard";

function Cats() {
  // setup a constant dispatch to be used for async actions
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // setup shared state variables by retrieving them from the store
  const isLoading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const cats = useAppSelector(selectCats);
  const isLoggedIn = useAppSelector(selectUsername);

  // on initial page load, initiate a fetch for our cats
  // we use a ref to doubly ensure this only happens once (can't rely on useEffect for logic)
  const firstFetchCalled = useRef(false);
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else if (!firstFetchCalled.current) {
      firstFetchCalled.current = true;
      dispatch(fetchCats());
    }
  }, []);

  if (isLoading) {
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
      {cats.map((cat) => (
        <CatCard
          key={cat.id}
          name={cat.name}
          description={cat.description}
          image={cat.reference_image_id}
        />
      ))}
    </Grid>
  );
}

export default Cats;
