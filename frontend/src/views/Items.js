import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import koszulka3 from '../assets/images/koszulka1.jpg';
import koszulka2 from '../assets/images/koszulka2.jpg';
import koszulka1 from '../assets/images/koszulka3.jpg';
import koszulka4 from '../assets/images/koszulka4.jpg';
// import heart from '../assets/icons/heart.svg';
import ProductCard from '../components/molecules/ProductCard.js/ProductCard';

const Wrapper = styled.section`
  width: 100vw;
  padding: 10vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const ItemWrapper = styled.div`
//   position: relative;
//   width: 95vw;
//   height: 70vh;
//   margin: 5px auto;
// `;

// const Image = styled.img`
//   width: 100%;
//   max-height: 452px;
// `;

// const ProductDetails = styled.h1`
//   margin-top: 1rem;
//   font-size: 2.2rem;
//   font-weight: 300;
//   text-align: center;
//   line-height: 1.4;
//   span {
//     font-size: 1.9rem;
//     font-weight: 400;
//   }
// `;

const Heading = styled.h1`
  font-weight: 500;
  font-size: 2.5rem;
  text-align: center;
  padding: 4rem 0 2rem 0;
`;

const FilterBtn = styled.button`
  border: 3px solid black;
  padding: 1rem;
  font-size: 2rem;
  background: white;
  color: black;
  width: 80%;
  margin: 1rem 0;
  outline: none;
`;

// const HeartWrapper = styled.div`
//   position: absolute;
//   right: 15px;
//   top: 15px;
//   height: 34px;
//   width: 34px;
//   background: white;
//   border-radius: 50%;
//   padding: 7px;
// `;

// const Heart = styled.div`
//   width: 100%;
//   height: 100%;
//   background: url(${heart}) center/cover no-repeat border-box;
// `;

const initialProducts = [
  { image: koszulka1, id: 1 },
  { image: koszulka2, id: 2 },
  { image: koszulka3, id: 3 },
  { image: koszulka4, id: 4 },
];

const Items = () => {
  return (
    <Wrapper>
      <Heading>T-Shirts</Heading>
      <FilterBtn>Filter by</FilterBtn>
      {initialProducts.map((item) => (
        <ProductCard link={item.id} image={item.image} />
        // <ItemWrapper key={item.id}>
        //   <HeartWrapper>
        //     <Heart />
        //   </HeartWrapper>
        //   <Link to={`/items/${item.id}`}>
        //     <Image src={item.image} />
        //   </Link>
        //   <ProductDetails>
        //     T-Shirt Oversize Crystal
        //     <br />
        //     <span>$ 100</span>
        //   </ProductDetails>
        // </ItemWrapper>
      ))}
    </Wrapper>
  );
};

export default Items;
