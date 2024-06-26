import styled from "styled-components";
import Link from "next/link";

const StyledName = styled.p`
  margin-right: 5px;
  font-weight: bold;
`;
const StyledBotanicalName = styled.p`
  margin-top: 0;
`;

const StyledDiv = styled.div`
  display: flex;
  margin-bottom: 5px;
  color: grey;
  border-style: solid;
  padding: 10px;
  margin: 10px;
`;
const StyledImg = styled.img`
  border-radius: 5px;
  width: 100px;
  height: 100px;
  margin-right: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: green;
  }
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-right: 5px;
`;

export default function PlantPreview({ plant }) {
  return (
    <StyledDiv>
      <Link href={`/overview/${plant.id}`}>
        <StyledImg src={plant.image} alt={plant.name} />
      </Link>
      <StyledInfo>
        <StyledLink href={`/overview/${plant.id}`}>
          <StyledName>{plant.name}</StyledName>
        </StyledLink>
        <StyledBotanicalName>{plant.botanical_name}</StyledBotanicalName>
      </StyledInfo>
    </StyledDiv>
  );
}
