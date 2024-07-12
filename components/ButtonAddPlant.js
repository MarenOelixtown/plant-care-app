import styled from "styled-components";
import myPlantBlank from "../public/myPlantBlank.png";
import myPlantColored from "../public/myPlantColored.png";
import Image from "next/image";

const StyledButton = styled.button`
  border: 2px solid black;
  font-size: 1em;
  padding: 6px 12px;
  border: 2px solid var(--primary-color);
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  background-color: white;
  margin-right: 30px;
  border-radius: 1rem;
  &:hover {
    border-color: var(--light-green);
  }
`;

const StyledImage = styled(Image)`
  width: 30px;
  height: 30px;
`;

export default function ButtonAddPlant({ onToggleMyPlants, isMyPlant, id }) {
  return (
    <>
      <StyledButton
        title="Add to My Plants"
        onClick={() => onToggleMyPlants(id)}
      >
        <StyledImage
          src={isMyPlant ? myPlantColored : myPlantBlank}
          alt="AddMyPlant"
        />
      </StyledButton>
    </>
  );
}
