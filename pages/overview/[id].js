import PlantDetails from "@/components/PlantDetails";

export default function PlantDetailsPage({ plants, handleToggleMyPlants }) {
  return (
    <PlantDetails plants={plants} handleToggleMyPlants={handleToggleMyPlants} />
  );
}
