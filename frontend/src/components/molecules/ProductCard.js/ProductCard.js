import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import heart from '../../../assets/icons/heart.svg';

const ItemWrapper = styled.div`
  position: relative;
  width: 95vw;
  height: 70vh;
  margin: 5px auto;
`;

const Image = styled.img`
  width: 100%;
  max-height: 452px;
`;

const ProductDetails = styled.h1`
  margin-top: 1rem;
  font-size: 2.2rem;
  font-weight: 300;
  text-align: center;
  line-height: 1.4;
  span {
    font-size: 1.9rem;
    font-weight: 400;
  }
`;

const HeartWrapper = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  height: 34px;
  width: 34px;
  background: white;
  border-radius: 50%;
  padding: 7px;
`;

const Heart = styled.div`
  width: 100%;
  height: 100%;
  background: url(${heart}) center/cover no-repeat border-box;
`;

const ProductCard = ({ link, image }) => {
  return (
    <ItemWrapper key={link}>
      <HeartWrapper>
        <Heart />
      </HeartWrapper>
      <Link to={`/items/${link}`}>
        <Image src={image} />
      </Link>
      <ProductDetails>
        T-Shirt Oversize Crystal
        <br />
        <span>$ 100</span>
      </ProductDetails>
    </ItemWrapper>
  );
};

ProductCard.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductCard;
