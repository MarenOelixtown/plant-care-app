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
  width: 30px;
  height: 30px;
`;

const StyledButton = styled.button`
  background: none;
  cursor: pointer;
  padding: 5px;
  margin-top: 10px;
`;

export default function MyPlants({
  plants,
  isMyPlantFunction,
  handleToggleMyPlants,
}) {
  const myPlants = plants.filter((plant) => isMyPlantFunction(plant.id));
  const handleButtonClick = () => {
    window.location.assign("/createplant");
  };

  return (
    <StyledDiv>
      <h1>My Plants</h1>
      <Link href="/overview">
        <StyledImage src={back} alt="back" />
      </Link>
      <br />
      <StyledButton onClick={handleButtonClick}>Add a new plant</StyledButton>
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
