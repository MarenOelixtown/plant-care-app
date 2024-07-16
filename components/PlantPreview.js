import styled from "styled-components";
import Link from "next/link";
import ButtonAddPlant from "./ButtonAddPlant";
import ButtonDeletePlant from "./ButtonDeletePlant";
import ButtonEditPlant from "./ButtonEditPlant";

const StyledName = styled.p`
  margin-right: 5px;
  font-weight: bolder;
  font-size: large;
`;

const StyledBotanicalName = styled.p`
  margin-top: -5px;
  font-weight: bold;
`;

const StyledDiv = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 5px;
  border-radius: 0.5rem;
  color: var(--dark-grey);
  padding: 10px;
  margin: 10px;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;
const StyledImg = styled.img`
  border-radius: 0.5rem;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 50px;
  margin-left: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--primary-color);
  &:hover {
    color: var(--dark-yellowish);
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
}) {
  return (
    <StyledDiv>
      <Link href={`/overview/${plant.id}`}>
        <StyledImg src={plant.images[0]} alt={plant.name} />
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
            <ButtonEditPlant id={plant.id} />
            <ButtonDeletePlant
              OnDeletePlant={handleDeletePlant}
              id={plant.id}
            />
          </>
        )}
      </ButtonContainer>
    </StyledDiv>
  );
}
