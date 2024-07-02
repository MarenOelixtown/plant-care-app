import PlantDetails from "@/components/PlantDetails";

export default function PlantDetailsPage({
  plants,
  setPlants,
  plantsInfo,
  setPlantsInfo,
  isMyPlantfunction,
}) {
  return (
    <PlantDetails
      plants={plants}
      setPlants={setPlants}
      plantsInfo={plantsInfo}
      setPlantsInfo={setPlantsInfo}
      isMyPlantfunction={isMyPlantfunction}
    />
  );
}
