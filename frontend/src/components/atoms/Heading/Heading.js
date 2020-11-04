import styled from 'styled-components';
import React from 'react';

const StyledWrapper = styled.div`
  margin: 5%;
  text-align: center;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  font-weight: 500;
`;

const Heading = () => (
  <StyledWrapper>
    <StyledTitle>Best sellers</StyledTitle>
    <p>Top sale in this week</p>
  </StyledWrapper>
);

export default Heading;
