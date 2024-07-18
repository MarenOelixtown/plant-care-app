import MySchedule from "@/components/Schedule";

export default function MySchedulePage({ plants, getPlantInfoById, darkMode }) {
  return (
    <MySchedule
      darkMode={darkMode}
      plants={plants}
      getPlantInfoById={getPlantInfoById}
    />
  );
}
