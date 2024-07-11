import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 /* Import Google Font (example using Poppins) */
 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');


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
   font-family: 'Poppins';
    background:  var(--lightest-green);
    min-height: 100vh;
    color: var(--primary-color);
  }

  /* Main element styles */
  main {
    padding-bottom: 4rem;
  }
`;
