import Overview from "@/components/Overview";

export default function OverviewPage({
  plants,
  setPlants,
  plantsInfo,
  setPlantsInfo,
  isMyPlantfunction,
}) {
  return (
    <Overview
      plants={plants}
      setPlants={setPlants}
      plantsInfo={plantsInfo}
      setPlantsInfo={setPlantsInfo}
      isMyPlantfunction={isMyPlantfunction}
    />
  );
}
