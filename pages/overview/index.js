import Overview from "@/components/Overview";

export default function OverviewPage({ plants, handleToggleMyPlants }) {
  return (
    <Overview plants={plants} handleToggleMyPlants={handleToggleMyPlants} />
  );
}
