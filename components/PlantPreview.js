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

export default function PlantPreview({ plant, plants, setPlants }) {
  const [message, setMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  function handleAddToMyPlants(plant) {
    setPlants([...plants, { ...plant, isMyPlant: true }]);
    setIsDisabled(true);
    setMessage("Done!");
    setTimeout(() => setMessage(""), 2000);
  }
  /*   function isPlantInMyPlants(plant) {
    return myPlants.some(
      (myplant) => myplant.id === plant.id && myplant.isMyPlant
    );
  } */
  const isMyPlant = plants.some(
    (myplant) => myplant.id === plant.id && myplant.isMyPlant
  );

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

      {plant.isMyPlant ? (
        <StyledButton>Remove from My Plants</StyledButton>
      ) : (
        <ButtonAddPlant
          isDisabled={isDisabled}
          handleAddToMyPlants={handleAddToMyPlants}
          isMyPlant={isMyPlant}
          plant={plant}
          message={message}
        />
      )}
    </StyledDiv>
  );
}
