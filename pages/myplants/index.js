import MyPlants from "@/components/MyPlants";

export default function MyPlantsPage({
  plantsInfo,
  setPlantsInfo,
  isMyPlantfunction,
  handleToggleMyPlants,
}) {
  console.log(plantsInfo);
  return (
    <MyPlants
      plantsInfo={plantsInfo}
      setPlantsInfo={setPlantsInfo}
      isMyPlantfunction={isMyPlantfunction}
      handleToggleMyPlants={handleToggleMyPlants}
    />
  );
}
