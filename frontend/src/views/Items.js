import React from 'react';
import styled from 'styled-components';
import background from '../assets/images/koszulka3.jpg';

const Wrapper = styled.section`
  width: 100vw;
  padding-top: 10vh;
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
  width: 50vw;
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

const Items = () => {
  return (
    <Wrapper>
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
