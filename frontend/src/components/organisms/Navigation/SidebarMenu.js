import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Navigation = styled.nav`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 400px;
  height: 100vh;
  z-index: 200;
  background-color: #dedfe0;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;

  ul {
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  li {
    margin: 0.5rem 0;
  }

  a {
    color: #1b1b1b;
    text-decoration: none;
    font-size: 2rem;
  }
`;

const SidebarMenu = ({ open }) => {
  return (
    <Navigation className={open ? 'open' : ''}>
      <ul>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Hoodies</a>
        </li>
      </ul>
    </Navigation>
  );
};

SidebarMenu.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default SidebarMenu;
