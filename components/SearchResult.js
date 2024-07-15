import styled from "styled-components";
import Link from "next/link";

const StyledName = styled.p`
  margin-right: 3px;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: grey;
`;
const StyledImg = styled.img`
  border-radius: 5px;
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: green;
  }
`;

export default function SearchResult({ plant }) {
  return (
    <StyledDiv>
      <Link href={`/overview/${plant.id}`}>
        <StyledImg src={plant.image} alt={plant.name} />
      </Link>
      <StyledLink href={`/overview/${plant.id}`}>
        <StyledName>{plant.name}</StyledName>
      </StyledLink>
    </StyledDiv>
  );
}
