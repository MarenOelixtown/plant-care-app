import MySchedule from "@/components/Schedule";

export default function MySchedulePage({
  plants,
  isMyPlantWithReminder,
  plantsInfo,
}) {
  return (
    <MySchedule
      plants={plants}
      isMyPlantWithReminder={isMyPlantWithReminder}
      plantsInfo={plantsInfo}
    />
  );
}
