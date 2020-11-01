import React from "react";
import styled from "styled-components";
import background from "../../../assets/background.jpg";
import Button from "../../atoms/Button/Button";

const StyledWrapper = styled.section`
  width: 100vw;
  height: 80vh;
  background: url(${background}) center/cover no-repeat border-box;
  padding: 0;
  margin: 0;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 2px solid yellow;
  width: 70%;
  height: 20%;
  position: absolute;
  top: 375px;
  left: 55px;
  color: white;
  font-size: 20px;
  font-family: "Montserrat";
`;

const StyledSliderButton = styled(Button)`
  width: 100px;
  height: 50px;
  background: #1b1b1b;
  text-transform: uppercase;
  border-radius: 12px;
  color: #dedfe0;
`;

const StyledTitle = styled.h1`
  font-weight: ${({ theme }) => theme.light};
  color: orange;
  display: block;
  width: 100%;
`;

const Slider = () => (
  <StyledWrapper>
    <StyledButtonWrapper>
      <StyledTitle>Black Friday</StyledTitle>
      <StyledSliderButton>Shop Women</StyledSliderButton>
      <StyledSliderButton>Shop Men</StyledSliderButton>
    </StyledButtonWrapper>
  </StyledWrapper>
);

export default Slider;
