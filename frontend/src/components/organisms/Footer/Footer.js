import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Accordion from './Accordion';
import { theCompany, findUsOn } from './links';
import logo from '../../../assets/icons/logoWhite.png';
import SocialIcon from './SocialIcon';

import facebookIcon from '../../../assets/icons/facebook.svg';
import twitterIcon from '../../../assets/icons/twitter.svg';
import youtubeIcon from '../../../assets/icons/youtube.svg';
import instagramIcon from '../../../assets/icons/instagram.svg';

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
  color: #dedfe0;
  display: block;
  margin: 0 auto;
  font-size: 1.3rem;
  text-align: center;
  padding-bottom: 1.5rem;
  font-weight: 300;
`;

const SocialsWrapper = styled.div`
  position: relative;
  height: 10vh;
  width: 100%;
  margin: 1rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const LogoWrapper = styled.div`
  /* background-color: #dedfe0; */
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
  filter: contrast(160%);
`;

const Footer = () => (
  <Wrapper>
    <InnerWrapper>
      <Content>
        <Accordion heading="The Company" links={theCompany} />
        <Accordion heading="About us" links={findUsOn} />
      </Content>
      <SocialsWrapper>
        <SocialIcon to="/" icon={facebookIcon} />
        <SocialIcon to="/" icon={youtubeIcon} />
        <SocialIcon to="/" icon={twitterIcon} />
        <SocialIcon to="/" icon={instagramIcon} />
      </SocialsWrapper>
      {/* <StyledRights>©2020-2022 Melone S.A. - All rights reserved</StyledRights> */}
      <LogoWrapper>
        <StyledLogo to="/" />
        <StyledRights>©2020-2022 Melone S.A. - All rights reserved</StyledRights>
      </LogoWrapper>
    </InnerWrapper>
  </Wrapper>
);

export default Footer;
