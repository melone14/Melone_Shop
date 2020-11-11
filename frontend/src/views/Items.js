import React from 'react';
import styled from 'styled-components';
import background from '../assets/images/koszulka3.jpg';

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
  width: 49.5vw;
  height: 35vh;
  margin: 0 auto;
  background: url(${background}) center/cover no-repeat border-box;
`;

const Price = styled.p`
  position: relative;
  display: block;
  width: 70px;
  height: 20px;
  text-align: center;
  top: 90%;
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

const Items = () => {
  return (
    <Wrapper>
      <Heading>T-Shirts</Heading>
      <FilterBtn>Filter by</FilterBtn>
      <ItemsWrapper>
        <Item>
          <Price>$ 100</Price>
        </Item>
        <Item>
          <Price>$ 100</Price>
        </Item>
        <Item>
          <Price>$ 100</Price>
        </Item>
        <Item>
          <Price>$ 100</Price>
        </Item>
        <Item>
          <Price>$ 100</Price>
        </Item>
        <Item>
          <Price>$ 100</Price>
        </Item>
      </ItemsWrapper>
    </Wrapper>
  );
};

export default Items;
