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
export default function Overview({ plants, myPlants, setMyPlants }) {
  return (
    <StyledDiv>
      <h1>Discover Plants</h1>
      {plants.length === 0 ? (
        <p>No plants available at the moment. Please come back later!</p>
      ) : (
        <ul>
          {plants.map((plant) => (
            <StyledList key={plant.id}>
              <PlantPreview
                plant={plant}
                myPlants={myPlants}
                setMyPlants={setMyPlants}
              />
            </StyledList>
          ))}
        </ul>
      )}
      <Link href="/myplants">Go to My Plants Page</Link>
    </StyledDiv>
  );
}
