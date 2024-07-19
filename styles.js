import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

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

    --dark-bg: #121212;
    --dark-primary: #bb86fc;
    --dark-secondary: #03dac6;
    --dark-text: #ffffff;
    --dark-card-bg: #1e1e1e;
    --dark-light-green: #30322d;
    --dark-primary-color: #e6ece0;
    --dark-light-grey: #949790;
  }

  /* Global styles */
  body {
    margin: 0;
    font-family: 'Poppins, sans-serif';
    background: ${(props) =>
      props.darkMode ? "var(--dark-bg)" : "var(--lightest-green)"};
    color: ${(props) =>
      props.darkMode ? "var(--dark-primary-color)" : "var(--primary-color)"};
    min-height: 100vh;
  }

  /* Main element styles */
  main {
    padding-bottom: 4rem;
  }
`;
export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: 5%;
  margin-right: 5%;

  @media (min-width: 900px) {
    margin-left: 20%;
    margin-right: 20%;
  }

  @media (min-width: 1200px) {
    margin-left: 30%;
    margin-right: 30%;
  }

  /* @media (min-width: 1600px) {
    margin-left: 30%;
    margin-right: 40%;
  } */
`;
