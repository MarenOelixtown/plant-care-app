import MyPlants from "@/components/MyPlants";

export default function MyPlantsPage({
  plants,
  isMyPlantFunction,
  isUserPlantFunction,
  handleToggleMyPlants,
  handleDeletePlant,
  handleEditPlant,
  seasons,
  setSeasons,
  handleCheckboxChange,
}) {
  return (
    <MyPlants
      plants={plants}
      isMyPlantFunction={isMyPlantFunction}
      isUserPlantFunction={isUserPlantFunction}
      handleToggleMyPlants={handleToggleMyPlants}
      handleDeletePlant={handleDeletePlant}
      handleEditPlant={handleEditPlant}
      seasons={seasons}
      setSeasons={setSeasons}
      handleCheckboxChange={handleCheckboxChange}
    />
  );
}
