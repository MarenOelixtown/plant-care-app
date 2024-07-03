import Image from "next/image";
import styled from "styled-components";
import back from "../public/back.png";
import ButtonAddPlant from "./ButtonAddPlant";
import Link from "next/link";
import { useRouter } from "next/router";

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

export default function PlantDetails({ plants, handleToggleMyPlants }) {
  const router = useRouter();
  const { id } = router.query;

  const plantsIndex = plants.findIndex((plant) => plant.id === id);

  const plant = plants[plantsIndex];
  if (!plant) {
    return <h1>No Plant found</h1>;
  }

  return (
    <StyledCard>
      <ButtonAddPlant
        OnToggleMyPlants={handleToggleMyPlants}
        isMyPlant={plant.isMyPlant}
        id={id}
      />
      <h2>{plant.name}</h2>
      <h3>{plant.botanical_name}</h3>
      <Image src={plant.image} width={300} height={300} alt={plant.name} />
      <StyledCare>
        <p>Water Need: {plant.water_need}</p>
        <p>
          Fertiliser Cycle: {plant.fertiliser_season[0]}{" "}
          {plant.fertiliser_season[1]}{" "}
        </p>
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
    </StyledCard>
  );
}
