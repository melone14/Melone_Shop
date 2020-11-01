import React from "react";
import { BrowserRouter } from "react-router-dom";
import Heading from "../components/atoms/Heading/Heading";
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
    <Card items="Shoes" />
    <Card items="T-shirts" />
    <Card items="Hoodies" />
    <Heading />
  </BrowserRouter>
);

export default Root;
