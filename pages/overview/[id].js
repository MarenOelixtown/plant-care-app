import PlantDetails from "@/components/PlantDetails";

export default function PlantDetailsPage({
  plants,
  handleToggleMyPlants,
  handleDeletePlant,
  getPlantInfoById,
}) {
  return (
    <PlantDetails
      plants={plants}
      handleToggleMyPlants={handleToggleMyPlants}
      handleDeletePlant={handleDeletePlant}
      getPlantInfoById={getPlantInfoById}
    />
  );
}
