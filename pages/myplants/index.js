import MyPlants from "@/components/MyPlants";

export default function MyPlantsPage({ plants, handleToggleMyPlants }) {
  return (
    <MyPlants plants={plants} handleToggleMyPlants={handleToggleMyPlants} />
  );
}
