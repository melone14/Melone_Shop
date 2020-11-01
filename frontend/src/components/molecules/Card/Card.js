import styled from "styled-components";
import React, { Component } from "react";

const StyledWrapper = styled.div`
  height: 25vh;
  width: 95%;
  min-height: 200px;
  overflow: hidden;
  background-color: blue;
  margin: 4% auto;
`;

class Card extends Component {
  state = {
    redirect: false,
  };

  render() {
    return (
      <StyledWrapper>
        <h1>Siema</h1>
      </StyledWrapper>
    );
  }
}

export default Card;
