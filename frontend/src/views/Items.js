import React from 'react';
import styled from 'styled-components';
import koszulka1 from '../assets/images/koszulka1.jpg';
import koszulka2 from '../assets/images/koszulka2.jpg';
import koszulka3 from '../assets/images/koszulka3.jpg';
import koszulka4 from '../assets/images/koszulka4.jpg';
import koszulka5 from '../assets/images/koszulka5.jpg';
import koszulka6 from '../assets/images/koszulka6.jpg';
import koszulka7 from '../assets/images/koszulka7.jpg';
import koszulka8 from '../assets/images/koszulka8.jpg';
import heart from '../assets/icons/heart.svg';

const Wrapper = styled.section`
  width: 100vw;
  padding: 10vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-template-rows: 1fr; */
  grid-gap: 1px;
  width: 99vw;
  margin: 0 auto;
`;

const Item = styled.div`
  position: relative;
  width: 49.5vw;
  height: 35vh;
  margin: 0 auto;
  background: url(${({ background }) => background}) center/cover no-repeat border-box;
`;

const Price = styled.p`
  position: absolute;
  display: block;
  width: 70px;
  height: 20px;
  text-align: center;
  bottom: 2%;
  left: 30%;
  font-weight: 300;
  color: #4b4b4b;
`;

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

const Heart = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  height: 25px;
  width: 25px;
  background: url(${heart}) center/cover no-repeat border-box;
`;

const initialProducts = [
  { image: koszulka1 },
  { image: koszulka2 },
  { image: koszulka3 },
  { image: koszulka4 },
  { image: koszulka5 },
  { image: koszulka6 },
  { image: koszulka7 },
  { image: koszulka8 },
];

const Items = () => {
  return (
    <Wrapper>
      <Heading>T-Shirts</Heading>
      <FilterBtn>Filter by</FilterBtn>
      <ItemsWrapper>
        {initialProducts.map((item) => (
          <Item background={item.image}>
            <Heart />
            <Price>$ 100</Price>
          </Item>
        ))}
      </ItemsWrapper>
    </Wrapper>
  );
};

export default Items;
