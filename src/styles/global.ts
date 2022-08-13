import { createGlobalStyle } from 'styled-components';

export const GLobalCSS = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box
  }

  body,html,#__next{
    width: 100%;
    height: 100vh;
    font-size: 1rem;
    font-family: ${({ theme }) => theme.fonts.poppins};
  }

  button{
    cursor: pointer;

  }

  button,input{
    border:0;
    outline: 0;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ul,ol{
    list-style: none;
  }
`;
