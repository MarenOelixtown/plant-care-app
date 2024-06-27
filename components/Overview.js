import { plants } from "@/assets/plants";
import PlantPreview from "./PlantPreview";
import styled from "styled-components";

const StyledList = styled.li`
  display: block;
  align-items: left;
  align-content: space-between
  margin-bottom: 5px;
  list-style: none;
  border-spacing: 10px;
`;
export default function Overview() {
  return (
    <div>
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
    </div>
  );
}
