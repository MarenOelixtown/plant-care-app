import MySchedule from "@/components/Schedule";

export default function MySchedulePage({ plants, getPlantInfoById }) {
  return <MySchedule plants={plants} getPlantInfoById={getPlantInfoById} />;
}
