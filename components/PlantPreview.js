import styled from "styled-components";
import Link from "next/link";
import ButtonAddPlant from "./ButtonAddPlant";
import ButtonDeletePlant from "./ButtonDeletePlant";
import ButtonEditPlant from "./ButtonEditPlant";

const StyledName = styled.p`
  margin-right: 5px;
  font-weight: bold;
`;
const StyledBotanicalName = styled.p`
  margin-top: 0;
`;

const StyledDiv = styled.div`
  display: flex;
  position: relative;
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

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 10px;
`;

export default function PlantPreview({
  plant,
  isMyPlant,
  isUserPlant,
  handleToggleMyPlants,
  handleDeletePlant,
  handleEditPlant,
  seasons,
  setSeasons,
  handleCheckboxChange,
}) {
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
      <ButtonContainer>
        <ButtonAddPlant
          onToggleMyPlants={handleToggleMyPlants}
          isMyPlant={isMyPlant}
          id={plant.id}
        />
        {isUserPlant && (
          <>
            <ButtonDeletePlant
              OnDeletePlant={handleDeletePlant}
              id={plant.id}
            />
            <ButtonEditPlant id={plant.id} />
          </>
        )}
      </ButtonContainer>
    </StyledDiv>
  );
}
