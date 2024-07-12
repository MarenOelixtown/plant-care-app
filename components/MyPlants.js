import PlantPreview from "./PlantPreview";
import styled from "styled-components";
import Link from "next/link";
import CalendarIcon from "../components/Icons/CalendarIcon.svg";

const StyledLink = styled(Link)`
  position: absolute;
  top: 2.8rem;
  left: 2rem;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;
const StyledItem = styled.li`
  display: block;
  align-items: left;
  align-content: space-between;
  margin-bottom: 5px;
  list-style: none;
  border-spacing: 10px;
`;

const StyledDiv = styled.div`
  text-align: center;
`;

export default function MyPlants({
  plants,
  handleToggleMyPlants,
  handleDeletePlant,
  getPlantInfoById,
  handleEditPlant,
}) {
  const myPlants = plants.filter(
    (plant) => getPlantInfoById(plant.id)?.isMyPlant
  );

  return (
    <StyledDiv>
      <h1>My Plants</h1>
      <StyledLink href="/myschedule" title="My Schedule">
        <CalendarIcon />
      </StyledLink>

      {myPlants.length === 0 ? (
        <p>
          No Plants to show at the moment. Feel free to add your plants here!
        </p>
      ) : (
        <StyledList>
          {myPlants.map((plant) => {
            const plantInfo = getPlantInfoById(plant.id);
            const { isUserPlant, isMyPlant } = plantInfo;
            return (
              <StyledItem key={plant.id}>
                <PlantPreview
                  plant={plant}
                  isUserPlant={isUserPlant}
                  isMyPlant={isMyPlant}
                  handleToggleMyPlants={handleToggleMyPlants}
                  handleDeletePlant={handleDeletePlant}
                  handleEditPlant={handleEditPlant}
                />
              </StyledItem>
            );
          })}
        </StyledList>
      )}
    </StyledDiv>
  );
}
