import styled from "styled-components";
import React, { Component } from "react";
import Button from "../../atoms/Button/Button";

const StyledWrapper = styled.div`
  height: 25vh;
  width: 95%;
  min-height: 200px;
  overflow: hidden;
  background-color: blue;
  margin: 4% auto;
  position: relative;
`;

const StyledButton = styled(Button)`
  border-radius: 5px;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -5%);
`;

class Card extends Component {
  state = {
    redirect: false,
  };

  render() {
    return (
      <StyledWrapper>
        <StyledButton>{this.props.items}</StyledButton>
      </StyledWrapper>
    );
  }
}

export default Card;
