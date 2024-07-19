import MySchedule from "@/components/Schedule";

export default function MySchedulePage({
  plants,
  getPlantInfoById,
  calculateNextWateringDate,
  handleAddReminder,
  darkMode,
}) {
  return (
    <MySchedule
      plants={plants}
      getPlantInfoById={getPlantInfoById}
      calculateNextWateringDate={calculateNextWateringDate}
      handleAddReminder={handleAddReminder}
      darkMode={darkMode}
    />
  );
}
