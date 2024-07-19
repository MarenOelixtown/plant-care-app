import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.darkMode ? "var(--dark-primary-color)" : "var(--primary-color)"};
  color: ${(props) =>
    props.darkMode ? "var(--dark-light-green)" : "var(--light-yellow)"};
  border: 2px solid
    ${(props) =>
      props.darkMode ? "var(--dark-primary-color)" : "var(--primary-color)"};
  border-radius: 2rem;
  padding: 10px;
  font-family: inherit;
  font-weight: bold;
  cursor: pointer;
  margin: auto;
  max-width: 100px;
  width: 100%;
  &:hover {
    background-color: ${(props) =>
      props.darkMode ? "var(--dark-light-green)" : "var(--light-green)"};
    color: ${(props) =>
      props.darkMode ? "var(--dark-primary-color)" : "var(--primary-color)"};
  }
`;

const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
  background-color: ${(props) =>
    props.darkMode ? "var(--dark-light-grey)" : "var(--light-green)"};
  padding: 20px;
  border-radius: 2rem;
`;
const Label = styled.label`
  font-weight: bold;
`;
const Select = styled.select`
  width: 100%;
  border: 3px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
`;
const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 3px solid black;
  border-radius: 0.5rem;
  margin: 0.5rem 0;
`;

export default function ScheduleForm({
  plants,
  handleAddReminder,
  getPlantInfoById,
  darkMode,
  calculateNextWateringDate,
}) {
  const [selectedPlant, setSelectedPlant] = useState("");
  const [wateringStartDate, setWateringStartDate] = useState("");
  const myPlants = plants.filter(
    (plant) => getPlantInfoById(plant.id)?.isMyPlant
  );
  const router = useRouter();

  function addSchedule(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const scheduleData = Object.fromEntries(formData);

    const selectedPlantDetails = plants.find(
      (plant) => plant.id === scheduleData.name
    );
    if (selectedPlantDetails) {
      const nextWateringDate = calculateNextWateringDate(
        scheduleData.wateringStartDate,
        selectedPlantDetails.water_need
      );

      handleAddReminder(
        scheduleData.name,
        nextWateringDate.toISOString().split("T")[0]
      );

      router.push({
        pathname: "/myschedule",
        query: { success: "true" },
      });
    }
  }
  return (
    <FormContainer onSubmit={addSchedule} darkMode={darkMode}>
      <Label htmlFor="name">Select Plant:</Label>
      <Select
        id="name"
        name="name"
        value={selectedPlant}
        onChange={(event) => setSelectedPlant(event.target.value)}
        required
      >
        <option value="">Select your plant</option>
        {myPlants.map((plant) => (
          <option key={plant.id} value={plant.id}>
            {plant.name}
          </option>
        ))}
      </Select>
      <Label htmlFor="wateringDate">Set Watering Date:</Label>
      <Input
        id="wateringStartDate"
        type="date"
        name="wateringStartDate"
        required
        value={wateringStartDate}
        onChange={(event) => setWateringStartDate(event.target.value)}
      />
      <StyledButton darkMode={darkMode} type="submit">
        Add Schedule
      </StyledButton>
      <StyledButton
        darkMode={darkMode}
        type="button"
        onClick={() => router.push("/myschedule")}
      >
        Cancel
      </StyledButton>
    </FormContainer>
  );
}
