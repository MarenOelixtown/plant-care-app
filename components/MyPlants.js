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
export default function MyPlants({ plants, setPlants }) {
  console.log(plants);
  const myPlants = plants.filter((plant) => plant.isMyPlant);

  return (
    <StyledDiv>
      <h1>My Plants</h1>
      {plants.length === 0 ? (
        <p>
          No Plants to show at the moment. Feel free to add your plants here!
        </p>
      ) : (
        <ul>
          {plants.map((plant) => (
            <StyledList key={plant.id}>
              <PlantPreview
                plant={plant}
                plants={myPlants}
                setPlants={setPlants}
                isMyPlant={plant.isMyPlant}
              />
            </StyledList>
          ))}
        </ul>
      )}
    </StyledDiv>
  );
}
