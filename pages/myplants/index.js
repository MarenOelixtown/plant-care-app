import MyPlants from "@/components/MyPlants";

export default function MyPlantsPage({
  plants,
  handleToggleMyPlants,
  handleDeletePlant,
}) {
  return (
    <MyPlants
      plants={plants}
      handleToggleMyPlants={handleToggleMyPlants}
      handleDeletePlant={handleDeletePlant}
    />
  );
}
