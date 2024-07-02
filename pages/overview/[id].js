import PlantDetails from "@/components/PlantDetails";

export default function PlantDetailsPage({
  plants,
  isMyPlantfunction,
  handleToggleMyPlants,
}) {
  return (
    <PlantDetails
      plants={plants}
      isMyPlantfunction={isMyPlantfunction}
      handleToggleMyPlants={handleToggleMyPlants}
    />
  );
}
