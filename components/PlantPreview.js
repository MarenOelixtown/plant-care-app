import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import ButtonAddPlant from "./ButtonAddPlant";

const StyledName = styled.p`
  margin-right: 5px;
  font-weight: bold;
`;
const StyledBotanicalName = styled.p`
  margin-top: 0;
`;

const StyledDiv = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 5px;
  color: grey;
  border-style: solid;
  padding: 10px;
  margin: 10px;
`;
const StyledImg = styled.img`
  border-radius: 5px;
  width: 100px;
  height: 100px;
  margin-right: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: green;
  }
`;
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
const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-right: 5px;
`;
/* const StyledMessage = styled.p`
  color: #4b7a1c;
  font-family: Inter;
  font-weight: 600;
  font-size: 16px;
  line-height: normal;
`; */

export default function PlantPreview({
  plant,
  plantsInfo,
  setPlantsInfo,
  isMyPlantfunction,
}) {
  const [message, setMessage] = useState("");

  const handleToggleMyPlants = () => {
    const updatedPlantsInfo = plantsInfo.map((info) =>
      info.id === plant.id ? { ...info, isMyPlant: !info.isMyPlant } : info
    );
    console.log(updatedPlantsInfo);
    setPlantsInfo(updatedPlantsInfo);
    setMessage(isMyPlantfunction(plant) ? "Removed!" : "Added!");
    setTimeout(() => setMessage(""), 2000);
  };
  const isMyPlant = isMyPlantfunction(plant);
  /*function handleToggleMyPlants(id) {
    const foundPlant = plantsInfo.find((plant) => plant.id === id);

    if (foundPlant) {
      setPlantsInfo(
        plantsInfo.map((plant) =>
          plant.id === foundPlant.id
            ? { ...plant, isMyPlant: !plant.isMyPlant }
            : plant
        )
      );
    } else {
      setPlantsInfo([...plantsInfo, { id, isMyPlant: true }]);
      setMessage("Added!");
      setTimeout(() => setMessage(""), 2000);
    }
  }
  */
  return (
    <StyledDiv>
      <Link href={`/overview/${plant.id}`}>
        <StyledImg src={plant.image} alt={plant.name} />
      </Link>
      <StyledInfo>
        <StyledLink href={`/overview/${plant.id}`}>
          <StyledName>{plant.name}</StyledName>
        </StyledLink>
        <StyledBotanicalName>{plant.botanical_name}</StyledBotanicalName>
      </StyledInfo>
      <ButtonAddPlant
        OnToggleMyPlants={handleToggleMyPlants}
        isMyPlant={isMyPlant}
        plant={plant}
        message={message}
      />
    </StyledDiv>
  );
}
