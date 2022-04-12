import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin:0;
  }

  body {
    background: ${({theme}) => theme.bg};
    color: ${({theme}) => theme.text};
    font-family: 'Roboto', sans-serif;
    letter-spacing: .6px;
  }
`;
