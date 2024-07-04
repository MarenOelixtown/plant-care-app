import PlantDetails from "@/components/PlantDetails";

export default function PlantDetailsPage({
  plants,
  isMyPlantFunction,
  handleToggleMyPlants,
}) {
  return (
    <PlantDetails
      plants={plants}
      isMyPlantFunction={isMyPlantFunction}
      handleToggleMyPlants={handleToggleMyPlants}
    />
  );
}
