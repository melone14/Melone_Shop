import React from 'react';
import styled from 'styled-components';
import Slider from '../components/organisms/Slider/Slider';
import Categories from '../components/molecules/Categories/Categories';
import Newsletter from '../components/molecules/Categories/Newsletter/Newsletter';
import Heading from '../components/atoms/Heading/Heading';

const Wrapper = styled.div`
  margin: 12px;
`;

const Home = () => (
  <main>
    <Slider />
    <Wrapper>
      <Categories />
    </Wrapper>
    <Heading />
    <Newsletter />
  </main>
);

export default Home;
