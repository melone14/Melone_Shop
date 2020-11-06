import React from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';
import { theCompany, findUsOn } from './links';

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
  color: gray;
  display: block;
  margin: 0 auto;
  font-size: 1.3rem;
  text-align: center;
  @media (max-width: 42.5rem) {
    margin: 0;
  }
`;

const Footer = () => (
  <Wrapper>
    <InnerWrapper>
      <Content>
        <Accordion heading="The Company" links={theCompany} />
        <Accordion heading="About us" links={findUsOn} />
      </Content>
      <StyledRights>©2020-2022 Melone S.A. - All rights reserved</StyledRights>
    </InnerWrapper>
  </Wrapper>
);

export default Footer;
