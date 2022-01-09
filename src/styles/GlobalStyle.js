import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  html {
    margin: 0;  
    background-color: #fffffb;
    // font-family: -apple-system, Roboto, sans-serif, serif;
    font-family: 'Open Sans', sans-serif;
    scroll-behavior: smooth;
  }
`

export default GlobalStyle