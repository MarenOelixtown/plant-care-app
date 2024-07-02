import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";
import back from "../public/back.png";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export default function PlantDetails({ plants }) {
  const router = useRouter();
  const { id } = router.query;

  const plantsIndex = plants.findIndex((plant) => plant.id === id);

  const plant = plants[plantsIndex];
  if (!plant) {
    return <h1>No Plant found</h1>;
  }

  const handleBackButton = () => {
    router.back();
  };
  return (
    <StyledCard>
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
      <button onClick={handleBackButton}>
        <Image
          src={back}
          alt="back"
          style={{ width: "20px", height: "20px", marginRight: "8px" }}
        />
      </button>
    </StyledCard>
  );
}
