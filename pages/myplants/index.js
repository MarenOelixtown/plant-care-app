import MyPlants from "@/components/MyPlants";

export default function MyPlantsPage({
  plants,
  setPlants,
  isMyPlantfunction,
  handleToggleMyPlants,
}) {
  return (
    <MyPlants
      plants={plants}
      setPlants={setPlants}
      isMyPlantfunction={isMyPlantfunction}
      handleToggleMyPlants={handleToggleMyPlants}
    />
  );
}
