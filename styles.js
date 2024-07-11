import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Root variables */
  :root {
    --lightest-green: #e4ebdc;
    --primary-color: #30482a; //dark green
    --light-yellow: #c6be80;
    --light-green: #c3dbab; //light green
    --dark-yellowish: #a3a75c;
    --secondary-stroke-color: #8a4c47;  //maroon
    --dark-grey: #a3aca4;
    --light-grey: #bbc4bc;
    --light-pink: #dea2a4; 
  }

  /* Global styles */
  body {
    margin: 0;
    font-family: sans-serif;
    background:  var(--lightest-green);
    min-height: 100vh;
    color: var(--primary-color);
  }

  /* Main element styles */
  main {
    padding-bottom: 4rem;
  }
`;
