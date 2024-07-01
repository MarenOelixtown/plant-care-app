import styled from "styled-components";

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
  return (
    <>
      <StyledButton
        title="Add to My Plants"
        disabled={isDisabled || isPlantInMyPlants(plant)}
        onClick={() => handleAddToMyPlants(plant)}
      >
        Add to My Plants
      </StyledButton>
      {message && <StyledMessage>{message}</StyledMessage>}
    </>
  );
}
