import MyPlants from "@/components/MyPlants";

export default function MyPlantsPage({
  plants,
  isMyPlantFunction,
  handleToggleMyPlants,
}) {
  return (
    <MyPlants
      plants={plants}
      isMyPlantFunction={isMyPlantFunction}
      handleToggleMyPlants={handleToggleMyPlants}
    />
  );
}
