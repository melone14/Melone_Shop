import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';
import shoes from '../../../assets/images/shoes.jpg';
import hoodies from '../../../assets/images/hoodies.jpg';
import tshirts from '../../../assets/images/tshirts.jpg';

const StyledWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;
`;

const StyledCategory = styled.div`
  flex-basis: 100%;
  position: relative;
  transition: 0.2s;
  margin-top: 12px;
  overflow: hidden;
`;

const CategoryImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  transition: transform 0.7s;
`;

const StyledButton = styled(Button)`
  position: absolute;
  /* position: relative; */
  bottom: 5%;
  left: 50%;
  transform: translate(-57%, -40%);
  z-index: 1;
  box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.1);
  transition: 0.35s;
  opacity: 0.85;
  text-transform: none;

  width: 140px;
  height: 40px;
  background: #dedfe0;
  border-radius: 4px;
  color: #1b1b1b;
`;

const StyledLink = styled(Link)`
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(53, 129, 200, 0.2), rgba(2, 15, 32, 0.2)) no-repeat center;
    z-index: 1;
  }
  &:hover > ${CategoryImage} {
    transform: scale3d(1.1, 1.1, 1);
    cursor: pointer;
  }
  &:hover > ${StyledButton} {
    opacity: 1;
  }
`;

const Categories = () => {
  return (
    <StyledWrapper>
      <StyledCategory>
        <StyledLink to="/items">
          <CategoryImage src={shoes} alt="shoes" />
          <StyledButton>Shoes</StyledButton>
        </StyledLink>
      </StyledCategory>
      <StyledCategory>
        <StyledLink to="/items">
          <CategoryImage src={tshirts} alt="t-shirts" />
          <StyledButton>T-Shirts</StyledButton>
        </StyledLink>
      </StyledCategory>
      <StyledCategory>
        <StyledLink to="/items">
          <CategoryImage src={hoodies} alt="hoodies" />
          <StyledButton>Hoodies</StyledButton>
        </StyledLink>
      </StyledCategory>
    </StyledWrapper>
  );
};

export default Categories;
