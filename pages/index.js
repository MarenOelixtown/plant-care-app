import Link from "next/link";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 20px;
`;

const StyledButton = styled.button`
  background: none;
  cursor: pointer;
  padding: 5px;
  margin-top: 10px;
`;

const StyledLink = styled(Link)`
  top: 50px;
  right: 50px;
  border: 3px solid green;
  background-color: lightcyan;
  padding: 0.8rem 1.5rem;
  border-radius: 1rem;
  color: green;
  text-decoration: none;
  font-weight: bold;
`;
export default function HomePage() {
  return (
    <StyledDiv>
      <h1>Welcome to the Plant Care Companion</h1>
      <StyledLink href="/overview">Go to Plants Overview</StyledLink>
    </StyledDiv>
  );
}
