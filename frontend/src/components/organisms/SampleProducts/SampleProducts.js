import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Wrapper = styled.section`
  margin: 1rem;
  background: gray;
  padding: 1rem;
`;

const StyledDiv = styled.div`
  width: 60vw;
  height: 50vh;
  background-color: green;
  border: 2px solid black;
  /* margin-right: x; */

  img {
    height: 100%;
  }
`;

const SampleProducts = () => {
  return (
    <Wrapper>
      <Carousel itemClass="slides" responsive={responsive} arrows={false} partialVisbile>
        <StyledDiv>1</StyledDiv>
        <StyledDiv>2</StyledDiv>
        <StyledDiv>3</StyledDiv>
        <StyledDiv>4</StyledDiv>
        <StyledDiv>4</StyledDiv>
        <StyledDiv>4</StyledDiv>
        <StyledDiv>4</StyledDiv>
      </Carousel>
    </Wrapper>
  );
};

export default SampleProducts;
