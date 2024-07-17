import ScheduleForm from "@/components/ScheduleForm";
import styled from "styled-components";
import Link from "next/link";

const FormPageContainer = styled.div`
  width: 300px;
  margin: 10px auto;
  padding: 10px;
`;
const Heading = styled.h2`
  text-align: center;
  margin-bottom: 4rem;
`;

export default function ScheduleFormPage({
  plants,
  handleAddReminder,
  getPlantInfoById,
  calculateNextWateringDate,
}) {
  return (
    <FormPageContainer>
      <Heading>Watering-Schedule</Heading>
      <ScheduleForm
        plants={plants}
        handleAddReminder={handleAddReminder}
        getPlantInfoById={getPlantInfoById}
        calculateNextWateringDate={calculateNextWateringDate}
      />
    </FormPageContainer>
  );
}
