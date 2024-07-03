import styled from "styled-components";
import { useState } from "react";

const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
`;
const Select = styled.select``;

const Textarea = styled.textarea`
  font-family: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
`;
const Legend = styled.legend`
  font-weight: bold;
`;

export default function CreatPlantForm({ formName, onSubmit }) {
  const [selectedSeasons, setSelectedSeasons] = useState([]);

  console.log(selectedSeasons);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedSeasons((prevSelectedSeasons) => [
        ...prevSelectedSeasons,
        value,
      ]);
    } else {
      setSelectedSeasons((prevSelectedSeasons) =>
        prevSelectedSeasons.filter((season) => season !== value)
      );
    }
  };
  return (
    <FormContainer aria-labelledby={formName} onSubmit={onSubmit}>
      <Label htmlFor="name">Plant Name: </Label>
      <Input
        id="name"
        name="name"
        type="text"
        required
        maxLength={150}
        /* defaultValue={defaultData?.name} */
      />
      <Label htmlFor="botanical_name">Botanical Name</Label>
      <Input
        id="botanical_name"
        name="botanical_name"
        type="text"
        required
        maxLength={150}
        /* defaultValue={defaultData?.botanical_name} */
      />
      <Label htmlFor="water_need">Water Needs:</Label>{" "}
      <Select
        id="water_need"
        name="water_need"
        /* value={selectedOption} */
        /* onChange={handleDropdownChange} */
        /* defaultValue={defaultData?.water_need} */
      >
        {" "}
        <option value="">Select water needs</option>{" "}
        <option value="Low">Low</option>{" "}
        <option value="Moderate">Moderate</option>{" "}
        <option value="High">High</option>{" "}
      </Select>{" "}
      <Label htmlFor="light_need">Light Needs:</Label>{" "}
      <Select
        id="light_need"
        name="light_need"
        /* value={selectedOption} */
        /* onChange={handleDropdownChange} */
        /* defaultValue={defaultData?.water_need} */
      >
        {" "}
        <option value="">Select light needs</option>{" "}
        <option value="Partial shade">Partial shade</option>{" "}
        <option value="Bright">Bright</option>{" "}
        <option value="Shady">Shady</option>{" "}
      </Select>{" "}
      <fieldset>
        <Legend>Please choose your fertiliser seasons</Legend>
        <Label htmlFor="spring">
          Spring
          <Input
            type="checkbox"
            id="spring"
            name="fertiliser_season[]"
            value="spring"
            checked={selectedSeasons.includes("spring")}
            onChange={handleCheckboxChange}
          />
        </Label>{" "}
        <Label htmlFor="summer">
          Summer
          <Input
            type="checkbox"
            id="summer"
            name="fertiliser_season[]"
            value="summer"
            checked={selectedSeasons.includes("summer")}
            onChange={handleCheckboxChange}
          />
        </Label>{" "}
        <Label htmlFor="fall">
          Fall
          <Input
            type="checkbox"
            id="fall"
            name="fertiliser_season[]"
            value="fall"
            checked={selectedSeasons.includes("fall")}
            onChange={handleCheckboxChange}
          />
        </Label>{" "}
        <Label htmlFor="winter">
          Winter
          <Input
            type="checkbox"
            id="winter"
            name="fertiliser_season[]"
            value="winter"
            checked={selectedSeasons.includes("winter")}
            onChange={handleCheckboxChange}
          />
        </Label>
      </fieldset>
      <Label htmlFor="care_instructions">Care Instructions: </Label>
      <Textarea
        name="care_instructions"
        id="care_instructions"
        cols="30"
        rows="10"
        maxLength={150}
        /* defaultValue={defaultData?.care_instructions} */
      ></Textarea>
      <Label htmlFor="image">Image Url: </Label>
      <Input
        id="image"
        name="image"
        type="text"
        required
        /* defaultValue={defaultData?.image} */
      />
      <button type="submit">Create plant</button>
    </FormContainer>
  );
}

/* For Button = {defaultData ? "Update plant" : "Add plant"} */
