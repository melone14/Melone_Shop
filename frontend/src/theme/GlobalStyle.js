import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%; 
  }
  
  body {
    overflow-x: hidden;
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
    background-color: #f9f9f9;
  }
`;

export default GlobalStyle;
