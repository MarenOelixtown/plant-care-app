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
const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  text-decoration: none;
`;
const CancelSchedule = styled.p`
  display: block;
  width: 50%;
  text-align: center;
  border: 3px solid var(--secondary-stroke-color);
  background-color: var(--secondary-bg-color);
  margin-top: 0;
  padding: 0.6rem 0.6rem;
  border-radius: 1rem;
  color: white;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: var(--secondary-stroke-color);
    background-color: white;
  }
`;

export default function ScheduleFormPage({
  plants,
  handleAddReminder,
  getPlantInfoById,
}) {
  return (
    <FormPageContainer>
      <Heading>Watering-Schedule</Heading>
      <ScheduleForm
        plants={plants}
        handleAddReminder={handleAddReminder}
        getPlantInfoById={getPlantInfoById}
      />
      <StyledLink href="/myschedule">
        <CancelSchedule>Cancel</CancelSchedule>
      </StyledLink>
    </FormPageContainer>
  );
}
