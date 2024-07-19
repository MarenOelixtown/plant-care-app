import PlantDetails from "@/components/PlantDetails";

export default function PlantDetailsPage({
  plants,
  handleToggleMyPlants,
  handleDeletePlant,
  getPlantInfoById,
  darkMode,
}) {
  return (
    <PlantDetails
      plants={plants}
      handleToggleMyPlants={handleToggleMyPlants}
      handleDeletePlant={handleDeletePlant}
      getPlantInfoById={getPlantInfoById}
      darkMode={darkMode}
    />
  );
}
