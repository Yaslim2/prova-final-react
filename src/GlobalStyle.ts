import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    list-style: none;
  }

  body {
    font-family: "Poppins", sans-serif;
    font-style: italic;
    background-color: #f7f7f7;
    color: #707070;
  }
`;
