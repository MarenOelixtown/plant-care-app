import PlantPreview from "@/components/PlantPreview";
import useLocalStorageState from "use-local-storage-state";

//import { plants } from "@/assets/plants";
export default function MyPlants() {
  return <PlantPreview plants={plants} />;
}
