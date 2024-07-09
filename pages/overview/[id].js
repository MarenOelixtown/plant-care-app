import PlantDetails from "@/components/PlantDetails";

export default function PlantDetailsPage({
  plants,
  isMyPlantFunction,
  isUserPlantFunction,
  handleToggleMyPlants,
  handleDeletePlant,
  seasons,
  setSeasons,
  handleCheckboxChange,
}) {
  return (
    <PlantDetails
      plants={plants}
      isMyPlantFunction={isMyPlantFunction}
      isUserPlantFunction={isUserPlantFunction}
      handleToggleMyPlants={handleToggleMyPlants}
      handleDeletePlant={handleDeletePlant}
      seasons={seasons}
      setSeasons={setSeasons}
      handleCheckboxChange={handleCheckboxChange}
    />
  );
}
