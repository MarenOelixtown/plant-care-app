import Image from "next/image";
import styled from "styled-components";
import ButtonAddPlant from "./ButtonAddPlant";
import Link from "next/link";
import { useRouter } from "next/router";
import ButtonDeletePlant from "./ButtonDeletePlant";
import ButtonEditPlant from "./ButtonEditPlant";

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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 50%;
  margin: 10px auto;
  padding: 10px 24px;
  text-align: center;
  display: block;
  border: 1px solid grey;
  border-radius: 0.1rem;
  background-color: #f9f9f9;
  color: black;
  font-size: 0.8rem;
`;

const StyledDiv = styled.div`
  padding: 10px;
  margin-top: 20px;
`;
const StyledBackButton = styled.button`
  border: 1px solid #81a081;
  font-size: 1em;
  padding: 6px 12px;
  border-radius: 10%;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  background-color: white;
  margin-right: 10px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
    background-color: #81a081;
    color: white;
  }
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

  const isUserPlant = isUserPlantFunction(plant.id);

  return (
    <StyledCard>
      <StyledBackButton type="button" onClick={() => router.back()}>
        Back
      </StyledBackButton>
      <h2>{plant.name}</h2>
      <h3>{plant.botanical_name}</h3>
      <ButtonContainer>
        <ButtonAddPlant
          onToggleMyPlants={handleToggleMyPlants}
          isMyPlant={isMyPlantFunction(plant.id)}
          id={plant.id}
        />
        {isUserPlant && (
          <>
            <ButtonDeletePlant
              OnDeletePlant={handleDeletePlant}
              id={plant.id}
            />
            <ButtonEditPlant id={plant.id} />
          </>
        )}
      </ButtonContainer>
      <Image src={plant.image} width={300} height={300} alt={plant.name} />
      <StyledCare>
        <p>Water Need: {plant.water_need}</p>
        <p>Fertiliser Cycle: {plant.fertiliser_season.join(", ")}</p>
        <p>Light: {plant.light_need}</p>
      </StyledCare>
      <p>Care Instructions: </p>
      <p>{plant.care_instructions}</p>
    </StyledCard>
  );
}
