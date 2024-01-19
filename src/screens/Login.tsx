import React, { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { login, selectError, selectUsername } from "../store/userSlice";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import LoginInput from "../components/LoginInput";

function Login() {
  // setup a constant dispatch to be used for async actions
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // setup shared state variables by retrieving them from the store
  const error = useAppSelector(selectError);
  const isLoggedIn = useAppSelector(selectUsername);

  // setup local state variables
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [stayLoggedIn, setStayLoggedIn] = React.useState(false);

  const handleSubmit = () => {
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/cats");
    }
  }, [isLoggedIn]);

  // render a simple login page with a title, a form with a username and password field, and a submit button
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <LoginInput
            onChange={(val: string) => setUsername(val)}
            value={username}
          />
          <LoginInput
            isPassword
            onChange={(val: string) => setPassword(val)}
            value={password}
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={stayLoggedIn}
                onChange={(e) => setStayLoggedIn(e.target.checked)}
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Login;
