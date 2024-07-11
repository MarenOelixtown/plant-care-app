import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";

const StyledButton = styled.button`
  display: block;
  width: 50%;
  margin: 10px auto;
  padding: 10px 24px;
  border: 3px solid var(--secondary-stroke-color);
  background-color: var(--secondary-bg-color);
  border-radius: 1rem;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    color: var(--secondary-stroke-color);
    background-color: white;
  }
`;
const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
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
  isMyPlantFunction,
}) {
  const [selectedPlant, setSelectedPlant] = useState("");
  const [wateringStartDate, setWateringStartDate] = useState("");
  const myPlants = plants.filter((plant) => isMyPlantFunction(plant.id));
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
      <Label htmlFor="name">Plant:</Label>
      <Select
        id="name"
        name="name"
        value={selectedPlant}
        onChange={(e) => setSelectedPlant(e.target.value)}
        required
      >
        <option value="">Select your plant</option>
        {myPlants.map((plant) => (
          <option key={plant.id} value={plant.id}>
            {plant.name}
          </option>
        ))}
      </Select>
      <Label htmlFor="wateringDate">Start Watering:</Label>
      <Input
        id="wateringStartDate"
        type="date"
        name="wateringStartDate"
        value={wateringStartDate}
        onChange={(e) => setWateringStartDate(e.target.value)}
      />
      <StyledButton type="submit">+ Schedule</StyledButton>
    </FormContainer>
  );
}
