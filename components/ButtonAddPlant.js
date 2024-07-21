import myPlantBlank from "../public/myPlantBlank.png";
import myPlantColored from "../public/myPlantColored.png";
import { StyledButtonImage } from "@/styles";
import { StyledButton } from "@/styles";

export default function ButtonAddPlant({ onToggleMyPlants, isMyPlant, id }) {
  return (
    <>
      <StyledButton
        title="Add to My Plants"
        onClick={() => onToggleMyPlants(id)}
      >
        <StyledButtonImage
          src={isMyPlant ? myPlantColored : myPlantBlank}
          alt="AddMyPlant"
        />
      </StyledButton>
    </>
  );
}
