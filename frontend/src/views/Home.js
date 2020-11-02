import React from "react";
import styled from "styled-components";
import Slider from "../components/organisms/Slider/Slider";
import Categories from "../components/molecules/Categories/Categories";

const Wrapper = styled.div`
  margin: 12px;
`;

const Home = () => (
  <main>
    <Slider />
    <Wrapper>
      <Categories />
    </Wrapper>
  </main>
);

export default Home;
