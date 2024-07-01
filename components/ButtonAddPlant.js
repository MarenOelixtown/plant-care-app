import styled from "styled-components";
import myPlantBlank from "../public/myPlantBlank.png";
import myPlantColored from "../public/myPlantBlank.png";
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
`;
const StyledMessage = styled.p`
  color: #4b7a1c;
  font-family: Inter;
  font-weight: 600;
  font-size: 16px;
  line-height: normal;
`;

export default function ButtonAddPlant({
  isDisabled,
  handleAddToMyPlants,
  plant,
  isPlantInMyPlants,
  message,
}) {
  const isMyPlant = isPlantInMyPlants(plant);
  return (
    <>
      <StyledButton
        disabled={isDisabled}
        title="Add to My Plants"
        onClick={() => handleAddToMyPlants(plant)}
      >
        {isMyPlant ? (
          <Image
            src={myPlantColored}
            alt="AddMyPlant"
            style={{ width: "20px", height: "20px", marginRight: "8px" }}
          />
        ) : (
          <Image
            src={myPlantBlank}
            alt="AddMyPlant"
            style={{ width: "20px", height: "20px", marginRight: "8px" }}
          />
        )}
      </StyledButton>
      {message && <StyledMessage>{message}</StyledMessage>}
    </>
  );
}
