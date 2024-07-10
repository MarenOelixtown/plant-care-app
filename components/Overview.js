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

export default function Overview({
  plants,
  isMyPlantFunction,
  handleToggleMyPlants,
}) {
  return (
    <StyledDiv>
      <h1>Discover Plants</h1>

      {plants.length === 0 ? (
        <p>No plants available at the moment. Please come back later!</p>
      ) : (
        <StyledList>
          {plants.map((plant) => {
            return (
              <StyledItem key={plant.id}>
                <PlantPreview
                  plant={plant}
                  isMyPlant={isMyPlantFunction(plant.id)}
                  handleToggleMyPlants={handleToggleMyPlants}
                />
              </StyledItem>
            );
          })}
        </StyledList>
      )}
    </StyledDiv>
  );
}
