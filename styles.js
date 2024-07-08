import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    /* background-color: #f0f0f0; */
    font-family: sans-serif;
    background: linear-gradient(0deg, rgba(18,68,69,1) 0%, rgba(132,167,100,1) 35%, rgba(255,255,255,1) 100%);
    min-height: 100vh;
    
  }
  main {    
    padding-bottom: 4rem;
    
  }
`;
