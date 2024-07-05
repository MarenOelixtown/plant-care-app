import PlantPreview from "./PlantPreview";
import styled from "styled-components";
import back from "../public/back.png";
import Image from "next/image";
import Link from "next/link";

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

const StyledImage = styled(Image)`
  width: 20px;
  height: 20px;
`;

const StyledButton = styled.button`
  background: none;
  cursor: pointer;
  padding: 5px;
  margin-top: 10px;
`;

const BackButton = styled.button`
  background: none;
  cursor: pointer;
`;

export default function MyPlants({
  plants,
  isMyPlantFunction,
  handleToggleMyPlants,
}) {
  const myPlants = plants.filter((plant) => isMyPlantFunction(plant.id));

  return (
    <StyledDiv>
      <h1>My Plants</h1>
      <Link href="/overview">
        <BackButton>
          <StyledImage src={back} alt="back" />
        </BackButton>
      </Link>
      <br />
      <Link href="/createplant">
        <StyledButton>Add a new plant</StyledButton>
      </Link>

      {myPlants.length === 0 ? (
        <p>
          No Plants to show at the moment. Feel free to add your plants here!
        </p>
      ) : (
        <ul>
          {myPlants.map((plant) => {
            return (
              <StyledList key={plant.id}>
                <PlantPreview
                  plant={plant}
                  isMyPlant={isMyPlantFunction(plant.id)}
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
