import PlantPreview from "./PlantPreview";
import styled from "styled-components";
import Link from "next/link";
import { StyledList } from "@/styles";

const StyledLink = styled(Link)`
  position: fixed;
  top: 2rem;
  right: 7.8rem;
  color: var(--light-yellow);
  background-color: var(--primary-color);
  padding: 0.8rem 0.8rem;
  border-radius: 2rem;
  border: 2px solid var(--primary-color);
  text-decoration: none;
  font-weight: bold;
  z-index: 1000;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease,
    opacity 0.3s ease;

  &:hover {
    color: var(--primary-color);
    background-color: var(--light-green);
    border-color: var(--primary-color);
  }
`;

/* const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`; */
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

const StyledParagraph = styled.p`
  margin-top: 1rem;
  color: var(--dark-yellowish);
`;

const StyledPDiv = styled.div`
  padding: 10px;
  background-color: ${(props) =>
    props.darkMode ? "var(--dark-light-green)" : "white"};
  border-radius: 1rem;
  margin: 20px auto 40px auto;
  max-width: 550px;
  width: 100%;
`;

export default function MyPlants({
  plants,
  handleToggleMyPlants,
  handleDeletePlant,
  getPlantInfoById,
  handleEditPlant,
  darkMode,
}) {
  const myPlants = plants.filter(
    (plant) => getPlantInfoById(plant.id)?.isMyPlant
  );

  return (
    <StyledDiv>
      <h1>My Plants</h1>
      {myPlants.length > 0 && (
        <StyledLink href="/myschedule" title="My Schedule">
          Watering Schedules
        </StyledLink>
      )}

      {myPlants.length === 0 ? (
        <StyledPDiv darkMode={darkMode}>
          <StyledParagraph>
            No plants to show at the moment. Feel free to add your plants here!
          </StyledParagraph>
        </StyledPDiv>
      ) : (
        <StyledList>
          {myPlants.map((plant) => {
            const plantInfo = getPlantInfoById(plant.id);
            const { isUserPlant, isMyPlant } = plantInfo || {};
            return (
              <StyledItem key={plant.id}>
                <PlantPreview
                  plant={plant}
                  isUserPlant={isUserPlant}
                  isMyPlant={isMyPlant}
                  handleToggleMyPlants={handleToggleMyPlants}
                  handleDeletePlant={handleDeletePlant}
                  handleEditPlant={handleEditPlant}
                  darkMode={darkMode}
                />
              </StyledItem>
            );
          })}
        </StyledList>
      )}
    </StyledDiv>
  );
}
