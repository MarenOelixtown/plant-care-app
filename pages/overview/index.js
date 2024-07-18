import Overview from "@/components/Overview";

export default function OverviewPage({
  plants,
  handleToggleMyPlants,
  getPlantInfoById,
  darkMode,
}) {
  return (
    <Overview
      plants={plants}
      handleToggleMyPlants={handleToggleMyPlants}
      getPlantInfoById={getPlantInfoById}
      darkMode={darkMode}
    />
  );
}
