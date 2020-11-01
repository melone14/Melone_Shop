import React from "react";
import { BrowserRouter } from "react-router-dom";
import Heading from "../components/atoms/Button/Heading/Heading";
import Card from "../components/molecules/Card/Card";
import Navigation from "../components/organisms/Navigation/Navigation";
import Slider from "../components/organisms/Slider/Slider";
import GlobalStyle from "../theme/GlobalStyle";
import { theme } from "../theme/mainTheme";

const Root = () => (
  <BrowserRouter theme={theme}>
    <GlobalStyle />
    <Navigation />
    <Slider />
    <Card />
    <Card />
    <Heading />
    <Card />
  </BrowserRouter>
);

export default Root;
