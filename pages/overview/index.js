import Overview from "@/components/Overview";

export default function OverviewPage({
  plants,
  plantsInfo,
  setPlantsInfo,
  isMyPlantfunction,
}) {
  return (
    <Overview
      plants={plants}
      plantsInfo={plantsInfo}
      setPlantsInfo={setPlantsInfo}
      isMyPlantfunction={isMyPlantfunction}
    />
  );
}
