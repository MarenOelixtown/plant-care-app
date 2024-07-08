import Link from "next/link";
import PlantPreview from "./PlantPreview";
import styled from "styled-components";
import back from "../public/back.png";
import Image from "next/image";

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
/* const StyledLink = styled(Link)`
  text-decoration: none;
  width: 20%;
  margin: 10px auto;
  padding: 10px 24px;
  text-align: center;
  display: block;
  border: 1px solid grey;
  border-radius: 0.1rem;
  background-color: #f9f9f9;
  color: black;
  font-size: 0.8rem;
`; */

/* const StyledImage = styled(Image)`
  width: 30px;
  height: 30px;
`; */

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
