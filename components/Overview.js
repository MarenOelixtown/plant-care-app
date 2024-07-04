import Link from "next/link";
import PlantPreview from "./PlantPreview";
import styled from "styled-components";
import back from "../public/back.png";
import Image from "next/image";

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
  margin-top: 10px;
`;
const BackButton = styled.button`
  background: none;
  cursor: pointer;
`;

const StyledImage = styled(Image)`
  width: 20px;
  height: 20px;
`;

export default function Overview({
  plants,
  isMyPlantFunction,
  handleToggleMyPlants,
}) {
  return (
    <StyledDiv>
      <h1>Discover Plants</h1>
      <Link href="/">
        <BackButton>
          <StyledImage src={back} alt="back" />
        </BackButton>
      </Link>
      <br />
      <Link href="/myplants">
        <StyledButton>Go to My Plants Page</StyledButton>
      </Link>
      {plants.length === 0 ? (
        <p>No plants available at the moment. Please come back later!</p>
      ) : (
        <ul>
          {plants.map((plant) => {
            const isMyPlant = isMyPlantFunction(plant.id);
            return (
              <StyledList key={plant.id}>
                <PlantPreview
                  plant={plant}
                  isMyPlant={isMyPlant}
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
