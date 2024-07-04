import Overview from "@/components/Overview";

export default function OverviewPage({
  plants,
  isMyPlantFunction,
  handleToggleMyPlants,
}) {
  return (
    <Overview
      plants={plants}
      isMyPlantFunction={isMyPlantFunction}
      handleToggleMyPlants={handleToggleMyPlants}
    />
  );
}
