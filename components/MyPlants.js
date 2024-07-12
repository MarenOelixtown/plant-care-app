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

const StyledParagraph = styled.p`
  margin-top: 1rem;
  color: var(--dark-yellowish);
`;

const StyledPDiv = styled.div`
  padding: 10px;
  background-color: white;
  border-radius: 1rem;
  margin: 20px auto 40px auto;
  max-width: 550px;
  width: 100%;
`;

export default function MyPlants({
  plants,
  isMyPlantFunction,
  isUserPlantFunction,
  handleToggleMyPlants,
  handleDeletePlant,
  handleEditPlant,
}) {
  const myPlants = plants.filter((plant) => isMyPlantFunction(plant.id));

  return (
    <StyledDiv>
      <h1>My Plants</h1>

      {myPlants.length === 0 ? (
        <StyledPDiv>
          <StyledParagraph>
            No plants to show at the moment. Feel free to add your plants here!
          </StyledParagraph>
        </StyledPDiv>
      ) : (
        <StyledList>
          {myPlants.map((plant) => {
            return (
              <StyledItem key={plant.id}>
                <PlantPreview
                  plant={plant}
                  isUserPlant={isUserPlantFunction(plant.id)}
                  isMyPlant={isMyPlantFunction(plant.id)}
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
