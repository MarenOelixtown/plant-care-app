import Overview from "@/components/Overview";

export default function OverviewPage({
  plants,
  setPlants,
  isMyPlantfunction,
  handleToggleMyPlants,
}) {
  return (
    <Overview
      plants={plants}
      setPlants={setPlants}
      isMyPlantfunction={isMyPlantfunction}
      handleToggleMyPlants={handleToggleMyPlants}
    />
  );
}
