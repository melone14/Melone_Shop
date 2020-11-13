import React from 'react';
import styled from 'styled-components';
import koszulka1 from '../assets/images/koszulka1.jpg';

const Wrapper = styled.section`
  width: 100vw;
  padding: 10vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImagesWrapper = styled.div`
  width: 100%;
  height: 60vh;
  /* background: green; */
  padding: 20px;
`;

const Image = styled.img`
  width: 100%;
`;

const Details = () => {
  return (
    <Wrapper>
      <h1>Tshirts</h1>
      <ImagesWrapper>
        <Image src={koszulka1} alt="sdasdas" />
      </ImagesWrapper>
    </Wrapper>
  );
};

export default Details;
