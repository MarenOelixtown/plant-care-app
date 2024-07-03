import Link from "next/link";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 20px;
`;

export default function HomePage() {
  return (
    <StyledDiv>
      <h1>Welcome to the Plant Care Companion</h1>
      <Link href="/overview">Go to Plants Overview</Link>
    </StyledDiv>
  );
}
