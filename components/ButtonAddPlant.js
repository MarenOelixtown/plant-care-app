import styled from "styled-components";
import myPlantBlank from "../public/myPlantBlank.png";
import myPlantColored from "../public/myPlantColored.png";
import Image from "next/image";

const StyledButton = styled.button`
  border: 2px solid black;
  font-size: 1em;
  padding: 6px 12px;
  border-radius: 10%;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: white;
`;

const StyledImage = styled(Image)`
  width: 25px;
  height: 25px;
`;

export default function ButtonAddPlant({ OnToggleMyPlants, id, isMyPlant }) {
  return (
    <>
      <StyledButton
        title="Add to My Plants"
        onClick={() => OnToggleMyPlants(id)}
      >
        <StyledImage
          src={isMyPlant ? myPlantColored : myPlantBlank}
          alt="AddMyPlant"
        />
      </StyledButton>
    </>
  );
}
