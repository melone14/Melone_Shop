import styled from "styled-components";

const StyledWrapper = styled.div`
  margin: 5%;
  text-align: center;
`;

const Heading = () => (
  <StyledWrapper>
    <h1>Best sellers</h1>
    <p>Top sale in this week</p>
  </StyledWrapper>
);

export default Heading;
