import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../atoms/Button/Button";
import logo from "../../../assets/icons/logo.png";

const NavigationWrapper = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  max-width: 1500px;
  height: 10vh;
  z-index: 2;
  padding: 0 5px;
  border-bottom: 0.7px solid gray;
`;

const StyledLogo = styled(Link)`
  display: block;
  width: 45%;
  height: 100%;
  background: url(${logo}) center/cover no-repeat border-box;
  background-size: 100%;
`;

const Navigation = () => (
  <NavigationWrapper>
    <Button hamburger />
    <StyledLogo to="/" />
    <Button basket />
  </NavigationWrapper>
);

export default Navigation;
