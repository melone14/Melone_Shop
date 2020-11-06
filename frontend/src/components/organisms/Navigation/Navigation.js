import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';
import logo from '../../../assets/icons/logo.png';
import SidebarMenu from './SidebarMenu';
import Backdrop from './Backdrop';

const NavigationWrapper = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  /* max-width: 1500px; */
  height: 10vh;
  z-index: 2;
  padding: 0 5px;
  border-bottom: 0.7px solid gray;
`;

const StyledLogo = styled(Link)`
  display: block;
  width: 45%;
  height: 100%;
  background: url(${logo}) center/cover no-repeat border-box;
  background-size: 100%;
`;

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  const handleHamburgerClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleBackdropClick = () => {
    setOpen(false);
  };

  return (
    <NavigationWrapper>
      <Button hamburger onClick={handleHamburgerClick} />
      <SidebarMenu open={isOpen} />
      {isOpen ? <Backdrop click={handleBackdropClick} /> : null}
      <StyledLogo to="/" />
      <Button basket />
    </NavigationWrapper>
  );
};

export default Navigation;
