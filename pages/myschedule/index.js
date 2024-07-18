import MySchedule from "@/components/Schedule";

export default function MySchedulePage({
  plants,
  getPlantInfoById,
  calculateNextWateringDate,
  handleAddReminder,
}) {
  return (
    <MySchedule
      plants={plants}
      getPlantInfoById={getPlantInfoById}
      calculateNextWateringDate={calculateNextWateringDate}
      handleAddReminder={handleAddReminder}
    />
  );
}
