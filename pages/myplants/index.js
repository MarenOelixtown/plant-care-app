import MyPlants from "@/components/MyPlants";
import { plants } from "@/assets/plants";

export default function MyPlantsPage({ plants, myPlants, setMyPlants }) {
  return (
    <MyPlants plants={plants} myPlants={myPlants} setMyPlants={setMyPlants} />
  );
}
