import Overview from "@/components/Overview";
import { plants } from "@/assets/plants";

export default function OverviewPage({ myPlants, setMyPlants }) {
  return (
    <Overview plants={plants} myPlants={myPlants} setMyPlants={setMyPlants} />
  );
}
