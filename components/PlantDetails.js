import Image from "next/image";
import styled from "styled-components";
import back from "../public/back.png";
import ButtonAddPlant from "./ButtonAddPlant";
import Link from "next/link";
import { useRouter } from "next/router";
import ButtonDeletePlant from "./ButtonDeletePlant";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 500px;
  margin: 10px auto;
  padding: 10px;
`;
const StyledCare = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  max-width: 600px;
  margin: 20px 0;
  text-align: center;

  p {
    border: 2px solid black;
    border-radius: 50%;
    padding: 10px;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledImage = styled(Image)`
  width: 20px;
  height: 20px;
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

const StyledDiv = styled.div`
  padding: 10px;
  margin-top: 20px;
`;

export default function PlantDetails({
  plants,
  isMyPlantFunction,
  isUserPlantFunction,
  handleToggleMyPlants,
  handleDeletePlant,
}) {
  const router = useRouter();
  const { id } = router.query;

  const plantsIndex = plants.findIndex((plant) => plant.id === id);

  const plant = plants[plantsIndex];
  if (!plant) {
    return (
      <StyledDiv>
        <h1>Plant Not Found!</h1>
        <StyledLink href="/overview">
          <p>Go to Plants Overview Page and discover new plants.</p>
        </StyledLink>
      </StyledDiv>
    );
  }
  const isMyPlant = isMyPlantFunction(plant.id);
  const isUserPlant = isUserPlantFunction(plant.id);
  return (
    <StyledCard>
      <ButtonAddPlant
        OnToggleMyPlants={handleToggleMyPlants}
        isMyPlant={isMyPlant}
        id={plant.id}
      />
      <h2>{plant.name}</h2>
      <h3>{plant.botanical_name}</h3>
      <Image src={plant.image} width={300} height={300} alt={plant.name} />
      <StyledCare>
        <p>Water Need: {plant.water_need}</p>
        <p>Fertiliser Cycle: {plant.fertiliser_season.join(", ")}</p>
        <p>Light: {plant.light_need}</p>
      </StyledCare>

      <p>Care Instructions: </p>
      <p>{plant.care_instructions}</p>
      <Link href="/overview">
        <BackButton>
          <StyledImage src={back} alt="back" />
        </BackButton>
      </Link>
      <Link href="/myplants">
        <StyledButton>Go to My Plants Page</StyledButton>
      </Link>
      {isUserPlant && (
        <ButtonDeletePlant OnDeletePlant={handleDeletePlant} id={plant.id} />
      )}
    </StyledCard>
  );
}
