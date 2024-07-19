import MyPlants from "@/components/MyPlants";

export default function MyPlantsPage({
  plants,
  handleToggleMyPlants,
  handleDeletePlant,
  getPlantInfoById,
  handleEditPlant,
  darkMode,
}) {
  return (
    <MyPlants
      plants={plants}
      handleToggleMyPlants={handleToggleMyPlants}
      handleDeletePlant={handleDeletePlant}
      getPlantInfoById={getPlantInfoById}
      handleEditPlant={handleEditPlant}
      darkMode={darkMode}
    />
  );
}
