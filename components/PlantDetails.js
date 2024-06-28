import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { plants } from "@/assets/plants";
import { useRouter } from "next/router";
import back from "../public/back.png";

const StyledCare = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export default function PlantDetails() {
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
      <Image
        src="https://img.freepik.com/free-photo/decorative-houseplant-isolated-white-background_157027-3500.jpg?t=st=1719484743~exp=1719488343~hmac=0124cb8c89ad44347e3e49f4b0c7ba1a45a4aeb656af770fb64e7e66567451a9&w=826"
        width={300}
        height={300}
        alt={plant.name}
      />
      <StyledCare>
        <p>Water-Need: {plant.water_need}</p>
        <p>Fertiliser-Cicle:{plant.fertiliser_season}</p>
        <p>Light: {plant.light_need}</p>
      </StyledCare>

      <p>Care Instructions: {plant.care_instructions}</p>
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
