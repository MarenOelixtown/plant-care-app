import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";

const StyledButton = styled.button`
  background-color: var(--primary-color);
  color: var(--light-yellow);
  border: 2px solid #30482a;
  border-radius: 2rem;
  padding: 10px;
  font-family: inherit;
  font-weight: bold;
  cursor: pointer;
  margin: auto;
  max-width: 100px;
  width: 100%;
  &:hover {
    background-color: var(--light-green);
    color: var(--primary-color);
  }
`;

const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
  background-color: var(--light-green);
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
      let wateringDate = new Date(scheduleData.wateringStartDate);
      if (selectedPlantDetails.water_need === "Low") {
        wateringDate.setDate(wateringDate.getDate() + 6); // 6 weeks
      } else if (selectedPlantDetails.water_need === "Moderate") {
        wateringDate.setDate(wateringDate.getDate() + 2); // 3 days
      } else if (selectedPlantDetails.water_need === "High") {
        wateringDate.setDate(wateringDate.getDate() + 1); // 1 day
      }

      handleAddReminder(
        scheduleData.name,
        wateringDate.toISOString().split("T")[0]
      );

      router.push({
        pathname: "/myschedule",
        query: { success: "true" },
      });
    }
  }
  return (
    <FormContainer onSubmit={addSchedule}>
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
      <StyledButton type="submit">Add Schedule</StyledButton>
      <StyledButton type="button" onClick={() => router.push("/myschedule")}>
        Cancel
      </StyledButton>
    </FormContainer>
  );
}
