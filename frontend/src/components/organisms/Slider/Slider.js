import React from 'react';
import styled from 'styled-components';
// import background from '../../../assets/images/background.jpg';
import background from '../../../assets/images/women.jpg';
import Button from '../../atoms/Button/Button';

const StyledWrapper = styled.section`
  width: 100vw;
  height: 99vh;
  background: url(${background}) center/cover no-repeat border-box;
  padding: 0;
  margin: 0;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* border: 2px solid yellow; */
  width: 70%;
  height: 28%;
  position: absolute;
  /* top: 419px; */
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, 0);
  color: white;
  font-size: 20px;
`;

const StyledSliderButton = styled(Button)`
  width: 120px;
  height: 45px;
  background: #dedfe0;
  border-radius: 4px;
  color: #1b1b1b;
  opacity: 0.9;
`;

const Slider = () => (
  <StyledWrapper>
    <StyledButtonWrapper>
      <StyledSliderButton>Women</StyledSliderButton>
      <StyledSliderButton>Men</StyledSliderButton>
      <StyledSliderButton>Children</StyledSliderButton>
    </StyledButtonWrapper>
  </StyledWrapper>
);

export default Slider;
