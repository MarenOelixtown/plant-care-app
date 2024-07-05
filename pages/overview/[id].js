import PlantDetails from "@/components/PlantDetails";

export default function PlantDetailsPage({
  plants,
  isMyPlantFunction,
  isUserPlantFunction,
  handleToggleMyPlants,
  handleDeletePlant,
}) {
  return (
    <PlantDetails
      plants={plants}
      isMyPlantFunction={isMyPlantFunction}
      isUserPlantFunction={isUserPlantFunction}
      handleToggleMyPlants={handleToggleMyPlants}
      handleDeletePlant={handleDeletePlant}
    />
  );
}
