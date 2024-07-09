import PlantPreview from "./PlantPreview";
import styled from "styled-components";

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
  isMyPlantFunction,
  isUserPlantFunction,
  handleToggleMyPlants,
  handleDeletePlant,
}) {
  const myPlants = plants.filter((plant) => isMyPlantFunction(plant.id));

  return (
    <StyledDiv>
      <h1>My Plants</h1>

      {myPlants.length === 0 ? (
        <p>
          No Plants to show at the moment. Feel free to add your plants here!
        </p>
      ) : (
        <StyledList>
          {myPlants.map((plant) => {
            const isUserPlant = isUserPlantFunction(plant.id);
            return (
              <StyledItem key={plant.id}>
                <PlantPreview
                  plant={plant}
                  isUserPlant={isUserPlant}
                  isMyPlant={isMyPlantFunction(plant.id)}
                  handleToggleMyPlants={handleToggleMyPlants}
                  handleDeletePlant={handleDeletePlant}
                />
              </StyledItem>
            );
          })}
        </StyledList>
      )}
    </StyledDiv>
  );
}
