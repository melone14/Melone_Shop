import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Accordion from './Accordion';
import { theCompany, findUsOn } from './links';
import logo from '../../../assets/icons/logo.png';

const Wrapper = styled.footer`
  background: #1b1b1b;
  color: #dedfe0;
`;

const InnerWrapper = styled.div`
  margin: 0 auto;
  max-width: 1500px;
  padding: 15px 15px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledRights = styled.p`
  color: #1b1b1b;
  display: block;
  margin: 0 auto;
  font-size: 1.3rem;
  text-align: center;
  padding-bottom: 1.5rem;
`;

const LogoWrapper = styled.div`
  background-color: #dedfe0;
  height: 20vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLogo = styled(Link)`
  display: block;
  width: 45%;
  height: 100%;
  background: url(${logo}) center/cover no-repeat border-box;
  background-size: 100%;
`;

const Footer = () => (
  <Wrapper>
    <InnerWrapper>
      <Content>
        <Accordion heading="The Company" links={theCompany} />
        <Accordion heading="About us" links={findUsOn} />
      </Content>
    </InnerWrapper>
    <LogoWrapper>
      <StyledLogo to="/" />
      <StyledRights>©2020-2022 Melone S.A. - All rights reserved</StyledRights>
    </LogoWrapper>
  </Wrapper>
);

export default Footer;
