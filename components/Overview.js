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

const StyledParagraph = styled.p`
  margin-top: 1rem;
  color: var(--dark-yellowish);
`;

const StyledPDiv = styled.div`
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 40px;
  margin-top: 20px;
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

      {plants.length === 0 ? (
        <StyledPDiv>
          <StyledParagraph>
            No plants available at the moment. Please come back later!
          </StyledParagraph>
        </StyledPDiv>
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
