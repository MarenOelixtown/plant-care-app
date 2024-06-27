import { plants } from "@/assets/plants";
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
export default function Overview() {
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
                name={plant.name}
                botanical_name={plant.botanical_name}
              />
            </StyledList>
          ))}
        </ul>
      )}
    </StyledDiv>
  );
}
