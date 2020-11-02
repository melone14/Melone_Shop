import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "../components/organisms/Navigation/Navigation";
import GlobalStyle from "../theme/GlobalStyle";
import { theme } from "../theme/mainTheme";
import Home from "./Home";
import Heading from "../components/atoms/Heading/Heading";

const Root = () => (
  <BrowserRouter theme={theme}>
    <GlobalStyle />
    <Navigation />
    <Home />
    <Heading />
  </BrowserRouter>
);

export default Root;
