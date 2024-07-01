import PlantPreview from "./PlantPreview";
import styled from "styled-components";
import { plants } from "@/assets/plants";

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
export default function MyPlants({ plants, myPlants, setMyPlants }) {
  console.log(myPlants);
  return (
    <StyledDiv>
      <h1>My Plants</h1>
      {myPlants.length === 0 ? (
        <p>
          No Plants to show at the moment. Feel free to add your plants here!
        </p>
      ) : (
        <ul>
          {myPlants.map((myplant) => (
            <StyledList key={myplant.id}>
              <PlantPreview
                plant={myplant}
                myPlants={myPlants}
                setMyPlants={setMyPlants}
              />
            </StyledList>
          ))}
        </ul>
      )}
    </StyledDiv>
  );
}
