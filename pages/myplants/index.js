import MyPlants from "@/components/MyPlants";

export default function MyPlantsPage({
  plants,
  isMyPlantFunction,
  isUserPlantFunction,
  handleToggleMyPlants,
  handleDeletePlant,
  handleEditPlant,
}) {
  return (
    <MyPlants
      plants={plants}
      isMyPlantFunction={isMyPlantFunction}
      isUserPlantFunction={isUserPlantFunction}
      handleToggleMyPlants={handleToggleMyPlants}
      handleDeletePlant={handleDeletePlant}
      handleEditPlant={handleEditPlant}
    />
  );
}
