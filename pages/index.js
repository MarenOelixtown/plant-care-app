import Link from "next/link";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-top: 2rem;
  background-color: #c3dbab;
  color: #30482a;
  border: 2px solid #30482a;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #a3a75c;
  }
`;

const StyledParagraph = styled.p`
  margin-top: 1rem;
  font-size: 1.2rem;
  color: var(--dark-yellowish);
`;

export default function HomePage() {
  return (
    <StyledDiv>
      <h1>Welcome to the Plant Care Companion</h1>
      <StyledParagraph>
        Your go-to app for all your plant care needs. Whether you are a seasoned
        gardener or just starting out, our app provides detailed care
        instructions, watering schedules, and tips to keep your plants thriving.
      </StyledParagraph>
      <StyledParagraph>
        Explore our extensive plant library to learn about different species,
        discover the best plants for your home or garden, and get personalized
        recommendations.
      </StyledParagraph>
      <StyledLink href="/overview">Go to Plants Overview</StyledLink>
    </StyledDiv>
  );
}
