import styled from "styled-components";
import Link from "next/link";

const StyledName = styled.p`
  margin-right: 3px;
`;
const StyledBotanicalName = styled.p`
  margin-top: 0;
`;

const StyledDiv = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 2px;
  color: grey;
  border-style: solid;
  padding: 5px;
`;
const StyledImg = styled.img`
  border-radius: 5px;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: green;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 10px;
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
