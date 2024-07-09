import PlantPreview from "./PlantPreview";
import styled from "styled-components";
import back from "../public/back.png";
import Image from "next/image";
import Link from "next/link";

const CalenderIcon = () => (
  <svg
    fill="#000000"
    width="70px"
    height="70px"
    viewBox="-3 0 19 19"
    xmlns="http://www.w3.org/2000/svg"
    className="cf-icon-svg"
  >
    <title>Schedule</title>
    <path d="M11.882 3.187a.476.476 0 0 1 .475.475v11.063a.476.476 0 0 1-.475.475H1.118a.476.476 0 0 1-.475-.475V3.662a.476.476 0 0 1 .475-.475h1.328v.721a1.425 1.425 0 0 0 2.85 0v-.72H7.71v.72a1.425 1.425 0 0 0 2.85 0v-.72zm-.634 3.37H1.752v7.535h9.496zm-7.384.821H2.621V8.67h1.243zm0 2.292H2.621v1.292h1.243zm0 2.292H2.621v1.291h1.243zm.561-8.054V2.475a.554.554 0 1 0-1.108 0v1.433a.554.554 0 1 0 1.108 0zm1.613 3.47H4.794V8.67h1.244zm0 2.292H4.794v1.292h1.244zm0 2.292H4.794v1.291h1.244zm2.174-4.584H6.968V8.67h1.244zm0 2.292H6.968v1.292h1.244zm0 2.292H6.968v1.291h1.244zm1.477-8.054V2.475a.554.554 0 0 0-1.108 0v1.433a.554.554 0 0 0 1.108 0zm.696 3.47H9.142V8.67h1.243zm0 2.292H9.142v1.292h1.243zm0 2.292H9.142v1.291h1.243z" />
  </svg>
);
const StyledLink = styled(Link)`
  position: fixed;
  top: 2.5rem;
  left: 2rem;
`;
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

export default function MyPlants({
  plants,
  isMyPlantFunction,
  isUserPlantFunction,
  handleToggleMyPlants,
  handleDeletePlant,
}) {
  const myPlants = plants.filter((plant) => isMyPlantFunction(plant.id));

  return (
    <StyledDiv>
      <h1>My Plants</h1>
      <StyledLink href="/" title="My Schedule">
        <CalenderIcon />
      </StyledLink>
      {myPlants.length === 0 ? (
        <p>
          No Plants to show at the moment. Feel free to add your plants here!
        </p>
      ) : (
        <StyledList>
          {myPlants.map((plant) => {
            const isUserPlant = isUserPlantFunction(plant.id);
            return (
              <StyledItem key={plant.id}>
                <PlantPreview
                  plant={plant}
                  isUserPlant={isUserPlant}
                  isMyPlant={isMyPlantFunction(plant.id)}
                  handleToggleMyPlants={handleToggleMyPlants}
                  handleDeletePlant={handleDeletePlant}
                />
              </StyledItem>
            );
          })}
        </StyledList>
      )}
    </StyledDiv>
  );
}
