import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import koszulka3 from '../../../assets/images/koszulka1.jpg';
import koszulka2 from '../../../assets/images/koszulka2.jpg';
import koszulka1 from '../../../assets/images/koszulka3.jpg';
import koszulka4 from '../../../assets/images/koszulka4.jpg';
import ProductCard from '../../molecules/ProductCard.js/ProductCard';

const StyledCarusel = styled(Carousel)`
  .slides {
    padding-right: 16px;
    /* width: 60vw; */
    /* background: ; */
    /* margin: 1rem 0; */
  }
`;

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 3,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 2,
    partialVisibilityGutter: 80,
  },
};

const Wrapper = styled.section`
  /* margin: 1rem; */
  /* padding: 1rem; */
  /* margin: 0 16px 30px; */
  /* margin: 0 16px 30px; */
`;

// const StyledDiv = styled.div`
//   width: 60vw;
//   height: 50vh;
//   background-color: green;
//   border: 2px solid black;
//   /* margin-right: x; */

//   img {
//     height: 100%;
//   }
// `;

const initialProducts = [
  { image: koszulka1, id: 1 },
  { image: koszulka2, id: 2 },
  { image: koszulka3, id: 3 },
  { image: koszulka4, id: 4 },
];

const SampleProducts = () => {
  return (
    <Wrapper>
      <StyledCarusel itemClass="slides" responsive={responsive} arrows={false} partialVisbile>
        {initialProducts.map((item) => (
          <ProductCard link={item.link} image={item.image} />
        ))}
      </StyledCarusel>
    </Wrapper>
  );
};

export default SampleProducts;
