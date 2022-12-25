import "./Components/List/style.css";
import { BrowserRouter, Route, RouterProvider } from "react-router-dom";
import "antd/dist/antd.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import authService from "./auth/auth.service";
import { useState, useEffect } from "react";
import Router from "./routes/Router";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";
import { Provider } from "react";
import store from "./store/store";
const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#C92127",
      light: "#C92127",
    },
    secondary: {
      main: "#11cb5f",
    },
  },
});

function App() {
  return (
    <div className="App bg-[#f0f0f0]">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Route
            render={() => (
              <div>
                <Navbar />
                <Router />
                <Footer />
              </div>
            )}
          />{" "}
        </ThemeProvider>{" "}
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
