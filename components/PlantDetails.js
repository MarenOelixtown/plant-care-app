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
  width: 80%;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
`;

const StyledHeader = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;

const Heading = styled.h2`
  color: #30482a;
  font-size: 2rem;
  margin-bottom: 10px;
`;

const SubHeading = styled.h3`
  color: #607843;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const StyledImage = styled(Image)`
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledCare = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  margin: 20px 0;
  text-align: center;

  p {
    border: 2px solid black;
    border-radius: 50%;
    padding: 20px;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: fit-content;
  margin: 20px auto;
  padding: 10px 24px;
  text-align: center;
  display: block;
  border: 1px solid grey;
  border-radius: 0.5rem;
  background-color: #30482a;
  color: white;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3e5e35;
  }
`;

const StyledDiv = styled.div`
  padding: 20px;
  margin-top: 20px;
  text-align: center;
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
        <Heading>Plant Not Found!</Heading>
        <StyledLink href="/overview">
          <p>Go to Plants Overview Page and discover new plants.</p>
        </StyledLink>
      </StyledDiv>
    );
  }

  const isUserPlant = isUserPlantFunction(plant.id);

  return (
    <StyledCard>
      <StyledHeader>
        <Heading>{plant.name}</Heading>
        <SubHeading>{plant.botanical_name}</SubHeading>
      </StyledHeader>
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
      <ImagesContainer>
        {plant.images.map((image, index) => (
          <StyledImage
            key={index}
            src={image}
            width={300}
            height={300}
            alt={`${plant.name} image ${index + 1}`}
          />
        ))}
      </ImagesContainer>
      <StyledCare>
        <p>Water Need: {plant.water_need}</p>
        <p>Fertiliser Cycle: {plant.fertiliser_season.join(", ")}</p>
        <p>Light: {plant.light_need}</p>
      </StyledCare>
      <StyledDiv>
        <p>Care Instructions:</p>
        <p>{plant.care_instructions}</p>
      </StyledDiv>
    </StyledCard>
  );
}
