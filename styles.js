import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Image from "next/image";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default createGlobalStyle`
 /* Import Google Font (example using Poppins) */
 @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&display=swap');


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
 /* Import local font */
 @font-face {
    font-family: 'Outfit';
    src: url('/fonts/Outfit-VariableFont_wght.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Marck Script';
    src: url('/fonts/MarckScript-Regular.ttf') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  /* Global styles */
  body {
    margin: 0;
    font-family: ${poppins.style.fontFamily}, sans-serif;
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
    margin-left: 10%;
    margin-right: 10%;
  }

  @media (min-width: 1200px) {
    margin-left: 20%;
    margin-right: 20%;
  }
`;

export const StyledButtonImage = styled(Image)`
  align-items: center;
  width: 25px;
  height: 25px;

  @media (max-width: 900px) {
    align-items: center;
    width: 25px;
    height: 25px;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 10px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 5px;
  }
`;

export const StyledButton = styled.button`
  padding: 4.5px 12px;
  border: 1px solid var(--primary-color);
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  background-color: white;
  margin-right: 10px;
  border-radius: 1rem;
  &:hover {
    border-color: var(--light-green);
  }
  @media (max-width: 900px) {
    border: 0;
    box-shadow: none;
  }
`;

export const StyledPageHeadingDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.darkMode ? "var(--dark-light-green)" : "var(--light-green)"};
`;
