import MyPlants from "@/components/MyPlants";

export default function MyPlantsPage({
  plants,
  handleToggleMyPlants,
  handleDeletePlant,
  getPlantInfoById,
  handleEditPlant,
}) {
  return (
    <MyPlants
      plants={plants}
      handleToggleMyPlants={handleToggleMyPlants}
      handleDeletePlant={handleDeletePlant}
      getPlantInfoById={getPlantInfoById}
      handleEditPlant={handleEditPlant}
    />
  );
}
