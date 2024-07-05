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
const StyledLink = styled(Link)`
  top: 50px;
  right: 50px;
  border: 3px solid green;
  background-color: lightcyan;
  padding: 0.8rem 1.5rem;
  border-radius: 1rem;
  color: green;
  text-decoration: none;
  font-weight: bold;
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
        <StyledImage src={back} alt="back" />
      </Link>
      <br />
      <StyledLink href="/myplants">Go to My Plants Page</StyledLink>
      {plants.length === 0 ? (
        <p>No plants available at the moment. Please come back later!</p>
      ) : (
        <ul>
          {plants.map((plant) => {
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
