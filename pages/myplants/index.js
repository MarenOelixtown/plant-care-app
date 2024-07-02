import MyPlants from "@/components/MyPlants";

export default function MyPlantsPage({
  plants,
  setPlants,
  plantsInfo,
  setPlantsInfo,
  isMyPlantfunction,
}) {
  return (
    <MyPlants
      plants={plants}
      setPlants={setPlants}
      plantsInfo={plantsInfo}
      setPlantsInfo={setPlantsInfo}
      isMyPlantfunction={isMyPlantfunction}
    />
  );
}
