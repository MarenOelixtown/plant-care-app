import Link from "next/link";
import styled from "styled-components";

/* const StyledDiv = styled.div`
  padding: 20px;
  position: relative;
`;

const StyledPDiv = styled.div`
  padding: 10px;
  background-color: ${(props) =>
    props.darkMode ? "var(--dark-light-green)" : "white"};
  border-radius: 1rem;
  margin-bottom: 40px;
  margin-top: 20px;
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
  margin-left: 20px;

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
`;

export default function HomePage({ darkMode }) {
  return (
    <StyledDiv>
      <h1>Plant Pro</h1>
      <h3>Welcome to your ultimate plant care companion!</h3>
      <StyledPDiv darkMode={darkMode}>
        <StyledParagraph darkMode={darkMode}>
          Your go-to app for all your plant care needs. Whether you are a
          seasoned gardener or just starting out, our app provides detailed care
          instructions, watering schedules, and tips to keep your plants
          thriving.
        </StyledParagraph>
        <StyledParagraph darkMode={darkMode}>
          Explore our extensive plant library to learn about different species,
          discover the best plants for your home or garden, and get personalized
          recommendations.
        </StyledParagraph>
        <StyledParagraph darkMode={darkMode}>
          Additionally, you can easily add your own plants to the app, keeping
          track of their care routines and growth progress.
        </StyledParagraph>
        <StyledParagraph darkMode={darkMode}>
          Start your journey to greener living! Happy Gardening! 🪴
        </StyledParagraph>
      </StyledPDiv>
      <StyledLink darkMode={darkMode} href="/overview">
        Discover New Plants
      </StyledLink>
      <StyledLink darkMode={darkMode} href="/createplant">
        Add Plant
      </StyledLink>
      <StyledLink darkMode={darkMode} href="/myschedule" title="My Schedule">
        Watering Schedules
      </StyledLink>
    </StyledDiv>
  );
} */

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
const StyledAppName = styled.h1`
  text-align: center;
`;
const StyledHeadline = styled.h3`
  text-align: center;
  color: var(--primary-color);
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
  padding: 10px;
  background-color: ${(props) =>
    props.darkMode ? "var(--dark-light-green)" : "white"};
  border-radius: 1rem;
  margin-top: 20px;
`;

const LinksDiv = styled.div`
  ${CommonDivStyles}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-image: url("https://images.unsplash.com/photo-1604762525950-13c07ecdab8b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-position: center;
  padding: 20px;
  border-radius: 1rem;
`;
/* const BottomLinksDiv = styled.div`
  ${CommonDivStyles}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
`; */

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
`;

export default function HomePage({ darkMode }) {
  return (
    <StyledDiv>
      <StyledAppName>Plant Pro</StyledAppName>

      <ContainerDiv>
        <LinksDiv>
          <StyledHeadline>
            Welcome to your ultimate plant care companion!
          </StyledHeadline>
          <StyledLink darkMode={darkMode} href="/overview">
            Discover Plants
          </StyledLink>
        </LinksDiv>
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
          <div>
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
          </div>
        </StyledPDiv>
      </ContainerDiv>
    </StyledDiv>
  );
}
