import Link from "next/link";
import styled from "styled-components";
//import SearchBar from "@/components/SearchBar";

const StyledDiv = styled.div`
  padding: 20px;
`;

const StyledLink = styled(Link)`
  top: 50px;
  right: 50px;
  padding: 0.8rem 1.5rem;
  color: green;
  text-decoration: none;
  font-weight: bold;
`;
export default function HomePage({ plants }) {
  return (
    <StyledDiv>
      <h1>Plant Prosper</h1>
      {/*    <SearchBar plants={plants} /> */}
      <StyledLink href="/overview">Welcome to explore...</StyledLink>
    </StyledDiv>
  );
}
