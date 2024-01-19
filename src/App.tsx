import React from "react";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Cats from "./screens/Cats";
import Login from "./screens/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useAppSelector } from "./store/hooks";
import { selectTheme } from "./store/userSlice";

const InnerApp = () => {
  const theme = useAppSelector(selectTheme);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cats" element={<Cats />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <InnerApp />
    </Provider>
  );
};

export default App;
