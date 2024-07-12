import Overview from "@/components/Overview";

export default function OverviewPage({
  plants,
  handleToggleMyPlants,
  getPlantInfoById,
}) {
  return (
    <Overview
      plants={plants}
      handleToggleMyPlants={handleToggleMyPlants}
      getPlantInfoById={getPlantInfoById}
    />
  );
}
