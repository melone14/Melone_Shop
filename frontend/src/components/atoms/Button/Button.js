import styled, { css } from "styled-components";
import bars from "../../../assets/icons/bars.svg";
import cart from "../../../assets/icons/cart.svg";

const Button = styled.button`
  outline: none;
  margin: 0 10px;
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: "Balsamiq Sans";
  /* font-weight: ${({ theme }) => theme.light}; */
  font-size: 16px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  ${({ hamburger }) =>
    hamburger &&
    css`
      width: 10%;
      height: 100%;
      background: url(${bars}) no-repeat center;
      background-size: 100%;
      filter: invert(1);
    `};
  ${({ basket }) =>
    basket &&
    css`
      margin: 0 20px;
      width: 8%;
      height: 100%;
      background: url(${cart}) no-repeat center;
      background-size: 100%;
      filter: invert(1);
    `}
`;

export default Button;
