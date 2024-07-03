import Link from "next/link";
import PlantPreview from "./PlantPreview";
import styled from "styled-components";

const StyledList = styled.li`
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

const StyledButton = styled.button`
  background: none;
  cursor: pointer;
  padding: 5px;
`;

export default function Overview({
  plants,
  isMyPlantfunction,
  handleToggleMyPlants,
}) {
  return (
    <StyledDiv>
      <h1>Discover Plants</h1>
      <Link href="/myplants">
        <StyledButton>Go to My Plants Page</StyledButton>
      </Link>
      {plants.length === 0 ? (
        <p>No plants available at the moment. Please come back later!</p>
      ) : (
        <ul>
          {plants.map((plant) => {
            return (
              <StyledList key={plant.id}>
                <PlantPreview
                  plant={plant}
                  isMyPlantfunction={isMyPlantfunction}
                  handleToggleMyPlants={handleToggleMyPlants}
                />
              </StyledList>
            );
          })}
        </ul>
      )}
    </StyledDiv>
  );
}
