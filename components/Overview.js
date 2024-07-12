import PlantPreview from "./PlantPreview";
import styled from "styled-components";
import Searchbar from "./Searchbar";

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
  handleToggleMyPlants,
  getPlantInfoById,
}) {
  return (
    <StyledDiv>
      <h1>Discover Plants</h1>
      <Searchbar plants={plants} />
      {plants.length === 0 ? (
        <p>No plants available at the moment. Please come back later!</p>
      ) : (
        <StyledList>
          {plants.map((plant) => {
            const isMyPlant = getPlantInfoById(plant.id)?.isMyPlant;
            return (
              <StyledItem key={plant.id}>
                <PlantPreview
                  plant={plant}
                  isMyPlant={isMyPlant}
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
