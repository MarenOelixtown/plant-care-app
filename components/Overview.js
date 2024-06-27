import { plants } from "@/assets/plants";
import PlantPreview from "./PlantPreview";

export default function Overview() {
  return (
    <div>
      <ul>
        {plants.map((plant) => (
          <li key={plant.id}>
            <PlantPreview
              name={plant.name}
              botanical_name={plant.botanical_name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
