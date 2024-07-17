import Link from "next/link";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 20px;
`;

const StyledPDiv = styled.div`
  padding: 10px;
  background-color: ${(props) =>
    props.darkMode ? "var(--dark-card-bg)" : "white"};
  border-radius: 1rem;
  margin-bottom: 40px;
  margin-top: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-top: 2rem;
  background-color: ${(props) =>
    props.darkMode ? "var(--dark-secondary)" : "var(--primary-color)"};
  color: ${(props) =>
    props.darkMode ? "var(--dark-text)" : "var(--light-yellow)"};
  border: 2px solid
    ${(props) => (props.darkMode ? "var(--dark-secondary)" : "#30482a")};
  border-radius: 2rem;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 20px;

  &:hover {
    background-color: ${(props) =>
      props.darkMode ? "var(--dark-primary)" : "var(--light-green)"};
    color: ${(props) =>
      props.darkMode ? "var(--dark-bg)" : "var(--primary-color)"};
  }
`;

const StyledParagraph = styled.p`
  margin-top: 1rem;
  color: ${(props) =>
    props.darkMode ? "var(--dark-secondary)" : "var(--dark-yellowish)"};
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
    </StyledDiv>
  );
}
