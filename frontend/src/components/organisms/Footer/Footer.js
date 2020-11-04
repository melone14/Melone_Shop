import React from 'react';
import styled from 'styled-components';
// import { Link } from "react-router-dom";
// import facebook from "../../../assets/icons/facebook.svg";
// import twitter from "../../../assets/icons/twitter.svg";
// import instagram from "../../../assets/icons/instagram.svg";
// import youtube from "../../../assets/icons/youtube.svg";
import Accordion from './Accordion';
import { theCompany, findUsOn } from './links';

const StyledWrapper = styled.footer`
  background: #1b1b1b;
  width: 100%;
  color: #dedfe0;
  display: flex;
  justify-content: space-around;
  @media (max-width: 42.5rem) {
    flex-direction: column;
    justify-content: center;
    padding-left: 1rem;
  }
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
/* ${({ theme }) => theme.mq.md} {
    flex-direction: row;
    justify-content: space-between;
    padding: 40px 0;
  } */
// const StyledList = styled.ul`
//   list-style: none;
// `;

// const StyledMainItem = styled.li`
//   font-weight: bold;
//   font-size: 1.2rem;
//   padding-top: 2rem;
//   padding-bottom: 0.9rem;
// `;

// const StyledItem = styled.li`
//   padding-bottom: 0.5rem;
// `;

// const StyledFacebookLink = styled(Link)`
//   text-decoration: none;
//   color: #dedfe0;

//   &:hover,
//   &:active {
//     color: #2d88ff;
//   }
// `;

// const StyledTwitterLink = styled(Link)`
//   text-decoration: none;
//   color: #dedfe0;

//   &:hover,
//   &:active {
//     color: rgba(29, 161, 242, 1);
//   }
// `;

// const StyledInstagramLink = styled(Link)`
//   text-decoration: none;
//   color: #dedfe0;

//   &:hover,
//   &:active {
//     background: -webkit-linear-gradient(
//       right,
//       #515bd4,
//       #8134af,
//       #dd2a7b,
//       #feda77,
//       #f58529
//     );
//     -webkit-background-clip: text;
//     background-clip: text;
//     -webkit-text-fill-color: transparent;
//   }
// `;

// const StyledYoutubeLink = styled(Link)`
//   text-decoration: none;
//   color: #dedfe0;

//   &:hover,
//   &:active {
//     color: #c4302b;
//   }
// `;

// const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: #dedfe0;
// `;

const StyledRights = styled.p`
  color: gray;
  padding: 1rem;
  padding-top: 3rem;
  margin: 0 auto;
  width: 30vw;
  @media (max-width: 42.5rem) {
    margin: 0;
    width: 100vw;
  }
`;

// const StyledIcon = styled.img`
//   width: 1.5rem;
//   height: 1.5rem;
// `;

const Footer = () => (
  <StyledWrapper>
    <InnerWrapper>
      <Content>
        <Accordion heading="The Company" links={theCompany} />
        <Accordion heading="About us" links={findUsOn} />
      </Content>
      <StyledRights>©2020-2022 Melone S.A. - All rights reserved.</StyledRights>
    </InnerWrapper>
  </StyledWrapper>
);
// const Footer = () => (
//   <StyledWrapper>
//     <StyledList>
//       <StyledMainItem>THE COMPANY</StyledMainItem>
//       <StyledItem>
//         <StyledLink to="/">About Melone</StyledLink>
//       </StyledItem>
//       <StyledItem>
//         <StyledLink to="/">Careers</StyledLink>
//       </StyledItem>
//       <StyledItem>
//         <StyledLink to="/">Legal</StyledLink>
//       </StyledItem>
//       <StyledItem>
//         <StyledLink to="/">Privacy & Cookie Policy</StyledLink>
//       </StyledItem>
//       <StyledItem>
//         <StyledLink to="/">Corporate Information</StyledLink>
//       </StyledItem>
//     </StyledList>
//     <StyledList>
//       <StyledMainItem>DLA DOMU</StyledMainItem>
//       <StyledItem>
//         <StyledLink to="/">Sprzątanie mieszkań</StyledLink>
//       </StyledItem>
//       <StyledItem>
//         <StyledLink to="/">Mycie okien</StyledLink>
//       </StyledItem>
//       <StyledItem>
//         <StyledLink to="/">Sprzątanie kuchni</StyledLink>
//       </StyledItem>
//       <StyledItem>
//         <StyledLink to="/">Sprzątanie pokoju</StyledLink>
//       </StyledItem>
//       <StyledItem>
//         <StyledLink to="/">Sprzątanie łazienki</StyledLink>
//       </StyledItem>
//       <StyledItem>
//         <StyledLink to="/">Sprzątanie garażu</StyledLink>
//       </StyledItem>
//       <StyledItem>
//         <StyledLink to="/">Sprzątanie tarasu/balkonu</StyledLink>
//       </StyledItem>
//     </StyledList>
//     <StyledList>
//       <StyledMainItem>DLA FIRM</StyledMainItem>
//       <StyledItem>
//         <StyledLink to="/">Sprzątanie biur</StyledLink>
//       </StyledItem>
//       <StyledItem>
//         <StyledLink to="/">Dezynfekcja biur</StyledLink>
//       </StyledItem>
//       <StyledItem>
//         <StyledLink to="/">Umów spotkanie</StyledLink>
//       </StyledItem>
//     </StyledList>
//     <StyledList>
//       <StyledMainItem>DOŁĄCZ DO NAS</StyledMainItem>
//       <StyledItem>
//         <StyledLink to="/">Melone Club</StyledLink>
//       </StyledItem>
//       <StyledItem>
//         <StyledLink to="/">Kariera</StyledLink>
//       </StyledItem>
//     </StyledList>
//     <StyledList>
//       <StyledMainItem>OBSERWUJ NAS</StyledMainItem>
//       <StyledItem>
//         <StyledFacebookLink to="/">
//           <StyledIcon src={facebook}></StyledIcon> Facebook
//         </StyledFacebookLink>
//       </StyledItem>
//       <StyledItem>
//         <StyledTwitterLink to="/">
//           <StyledIcon src={twitter}></StyledIcon> Twitter
//         </StyledTwitterLink>
//       </StyledItem>
//       <StyledItem>
//         <StyledInstagramLink to="/">
//           <StyledIcon src={instagram}></StyledIcon> Instagram
//         </StyledInstagramLink>
//       </StyledItem>
//       <StyledItem>
//         <StyledYoutubeLink to="/">
//           <StyledIcon src={youtube}></StyledIcon> Youtube
//         </StyledYoutubeLink>
//       </StyledItem>
//     </StyledList>
//     {/* <StyledLink to='/'>
//       <i className="fas fa-angle-up"></i>
//     </StyledLink> */}
//     <StyledRights>©2020-2022 Melone S.A. - All rights reserved.</StyledRights>
//   </StyledWrapper>
// );

export default Footer;
