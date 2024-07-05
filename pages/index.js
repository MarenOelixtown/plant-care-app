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

export default function HomePage() {
  return (
    <StyledDiv>
      <h1>Welcome to the Plant Care Companion</h1>
      <Link href="/overview">
        <StyledButton>Go to Plants Overview</StyledButton>
      </Link>
    </StyledDiv>
  );
}
