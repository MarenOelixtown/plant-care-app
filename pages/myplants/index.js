import MyPlants from "@/components/MyPlants";

export default function MyPlantsPage({ plants, myPlants, setMyPlants }) {
  return (
    <MyPlants plants={plants} myPlants={myPlants} setMyPlants={setMyPlants} />
  );
}
