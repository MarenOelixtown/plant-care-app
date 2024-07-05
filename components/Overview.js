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
  text-decoration: none;
  width: 20%;
  margin: 10px auto;
  padding: 10px 24px;
  text-align: center;
  display: block;
  border: 1px solid grey;
  border-radius: 0.1rem;
  background-color: #f0f0f0;
  color: black;
  font-size: 0.8rem;
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
  width: 30px;
  height: 30px;
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
