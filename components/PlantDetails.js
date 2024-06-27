import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { plants } from "@/assets/plants";
import { useRouter } from "next/router";

const StyledCare = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const StyledPlantImage = styled.img`
  display: block;
`;

export default function PlantDetails() {
  const router = useRouter();
  const { id } = router.query;

  const plantsIndex = plants.findIndex((plant) => plant.id === id);

  const plant = plants[plantsIndex];

  return (
    <div>
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
        <p>Light</p>
      </StyledCare>

      <p>Care Instructions: </p>
      <Link href="/overview">Back</Link>
    </div>
  );
}
