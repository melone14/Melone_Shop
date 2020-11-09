import React from 'react';
import styled from 'styled-components';
import background from '../assets/images/koszulka3.jpg';

const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
  padding-top: 10vh;
`;

const ItemsWrapper = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 1px;
  width: 99vw;
  margin: 0 auto;
`;

const Item = styled.div`
  width: 49vw;
  height: 35vh;
  background: url(${background}) center/cover no-repeat border-box;
`;

const Items = () => {
  return (
    <Wrapper>
      <ItemsWrapper>
        <Item>$100</Item>
        <Item>$100</Item>
        <Item>$100</Item>
      </ItemsWrapper>
    </Wrapper>
  );
};

export default Items;
