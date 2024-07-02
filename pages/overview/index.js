import Overview from "@/components/Overview";

export default function OverviewPage({
  plants,
  plantsInfo,
  setPlantsInfo,
  isMyPlantfunction,
  handleToggleMyPlants,
}) {
  return (
    <Overview
      plants={plants}
      plantsInfo={plantsInfo}
      setPlantsInfo={setPlantsInfo}
      isMyPlantfunction={isMyPlantfunction}
      handleToggleMyPlants={handleToggleMyPlants}
    />
  );
}
