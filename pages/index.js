import Link from "next/link";
import styled from "styled-components";
import { Marck_Script } from "@next/font/google";
import { Outfit } from "@next/font/google";
import LogoLeaf from "../public/LogoLeaf.png";
import Image from "next/image";

const marckScript = Marck_Script({
  weight: "400",
  subsets: ["latin"],
});
const outfit = Outfit({
  weight: "400",
  subsets: ["latin"],
});
const StyledH1Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  background-color: ${(props) =>
    props.darkMode ? "var(--dark-light-green)" : "var(--light-green)"};
`;
const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
`;
const StyledDiv = styled.div`
  padding: 20px;
  position: relative;
  width: 100%;
`;

const StyledHeadline = styled.h3`
  text-align: center;
  color: var(--primary-color);
  font-family: ${marckScript.style.fontFamily}, sans-serif;
  font-size: 24px;
`;

const CommonDivStyles = `
  width: 100%;
  height: 50vh; 
  box-sizing: border-box; 
  
  @media (min-width: 900px) {
    width: 50%; 
    min-height: 50vh;
  }
`;

const StyledPDiv = styled.div`
  ${CommonDivStyles}
  padding: 30px 10px 10px 10px;
  background-color: ${(props) =>
    props.darkMode ? "var(--dark-light-green)" : "white"};
  border-radius: 0px 0px 10px 10px;
`;
const StyledAppName = styled.h1`
  font-family: ${outfit.style.fontFamily}, sans-serif;
  font-weight: 400;
  text-align: center;
  font-size: 40px;
  margin-bottom: 0;
`;
const HeadlineDiv = styled.div`
  ${CommonDivStyles}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-image: url("https://images.unsplash.com/photo-1604762525950-13c07ecdab8b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-position: center;
  padding: 20px;
  border-radius: 10px 10px 0px 0px;
`;

const BottomLinksDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
  width: 100%;
  margin-top: 3rem;

  @media (max-width: 900px) {
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 1rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-top: 2rem;
  background-color: ${(props) =>
    props.darkMode ? "var(--light-green)" : "var(--primary-color)"};
  color: ${(props) =>
    props.darkMode ? "var(--primary-color)" : "var(--light-yellow)"};
  border: 2px solid
    ${(props) =>
      props.darkMode ? "var(--light-green)" : "var(--primary-color)"};
  border-radius: 2rem;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 0;

  &:hover {
    background-color: ${(props) =>
      props.darkMode ? "var(--dark-light-green)" : "var(--light-green)"};
    color: ${(props) =>
      props.darkMode ? "var(--light-yellow)" : "var(--primary-color)"};
  }
`;

const StyledParagraph = styled.p`
  margin-top: 1rem;
  color: ${(props) =>
    props.darkMode ? "var(--dark-light-grey)" : "var(--dark-yellowish)"};
  font-size: 14px;
`;

export default function HomePage({ darkMode }) {
  return (
    <StyledDiv>
      <StyledH1Div darkMode={darkMode}>
        <Image src={LogoLeaf} alt="Logo" width={60} height={80} />
        <StyledAppName>Plant Pro</StyledAppName>
      </StyledH1Div>
      <ContainerDiv>
        <HeadlineDiv>
          <StyledHeadline>
            Welcome to your ultimate plant care companion!
          </StyledHeadline>
          <StyledLink darkMode={darkMode} href="/overview">
            Discover Plants
          </StyledLink>
        </HeadlineDiv>
        <StyledPDiv darkMode={darkMode}>
          <StyledParagraph darkMode={darkMode}>
            Your go-to app for all your plant care needs. Whether you are a
            seasoned gardener or just starting out, our app provides detailed
            care instructions, watering schedules, and tips to keep your plants
            thriving.
          </StyledParagraph>
          <StyledParagraph darkMode={darkMode}>
            Explore our extensive plant library to learn about different
            species, discover the best plants for your home or garden, and get
            personalized recommendations.
          </StyledParagraph>
          <StyledParagraph darkMode={darkMode}>
            Additionally, you can easily add your own plants to the app, keeping
            track of their care routines and growth progress.
          </StyledParagraph>
          <StyledParagraph darkMode={darkMode}>
            Start your journey to greener living! Happy Gardening! 🪴
          </StyledParagraph>
          <BottomLinksDiv>
            <StyledLink darkMode={darkMode} href="/createplant">
              Add Plant
            </StyledLink>
            <StyledLink
              darkMode={darkMode}
              href="/myschedule"
              title="My Schedule"
            >
              Watering Schedules
            </StyledLink>
          </BottomLinksDiv>
        </StyledPDiv>
      </ContainerDiv>
    </StyledDiv>
  );
}
