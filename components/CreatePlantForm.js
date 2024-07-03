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
const Fieldset = styled.fieldset`
  border: 3px solid black;
  border-radius: 0.5rem;
`;
const CheckboxContainer = styled.div`
  text-align: center;
`;
const LabelCheckbox = styled.label`
  margin: 1rem;
  font-weight: bold;
`;

const Label = styled.label`
  font-weight: bold;
`;
const Legend = styled.legend`
  font-weight: bold;
`;

export default function CreatPlantForm({
  seasons,
  formName,
  onSubmit,
  onCheckboxChange,
}) {
  return (
    <FormContainer aria-labelledby={formName} onSubmit={onSubmit}>
      <Label htmlFor="name">*Plant Name: </Label>
      <Input id="name" name="name" type="text" required maxLength={150} />
      <Label htmlFor="botanical_name">*Botanical Name</Label>
      <Input
        id="botanical_name"
        name="botanical_name"
        type="text"
        required
        maxLength={150}
      />
      <Label htmlFor="water_need">*Water Needs:</Label>{" "}
      <Select id="water_need" name="water_need" required>
        {" "}
        <option value="">Select water needs</option>{" "}
        <option value="Low">Low</option>{" "}
        <option value="Moderate">Moderate</option>{" "}
        <option value="High">High</option>{" "}
      </Select>{" "}
      <Label htmlFor="light_need">*Light Needs:</Label>{" "}
      <Select id="light_need" name="light_need" required>
        {" "}
        <option value="">Select light needs</option>{" "}
        <option value="Partial shade">Partial shade</option>{" "}
        <option value="Bright">Bright</option>{" "}
        <option value="Shady">Shady</option>{" "}
      </Select>{" "}
      <Fieldset>
        <Legend>Please choose your fertiliser seasons</Legend>
        <CheckboxContainer>
          <LabelCheckbox htmlFor="spring">
            Spring
            <Input
              type="checkbox"
              id="spring"
              name="fertiliser_season"
              value="spring"
              checked={seasons.spring}
              onChange={onCheckboxChange}
            />
          </LabelCheckbox>{" "}
          <LabelCheckbox htmlFor="summer">
            Summer
            <Input
              type="checkbox"
              id="summer"
              name="fertiliser_season"
              value="summer"
              checked={seasons.summer}
              onChange={onCheckboxChange}
            />
          </LabelCheckbox>{" "}
          <LabelCheckbox htmlFor="fall">
            Fall
            <Input
              type="checkbox"
              id="fall"
              name="fertiliser_season"
              value="fall"
              checked={seasons.fall}
              onChange={onCheckboxChange}
            />
          </LabelCheckbox>{" "}
          <LabelCheckbox htmlFor="winter">
            Winter
            <Input
              type="checkbox"
              id="winter"
              name="fertiliser_season"
              value="winter"
              checked={seasons.winter}
              onChange={onCheckboxChange}
            />
          </LabelCheckbox>
        </CheckboxContainer>
      </Fieldset>
      <Label htmlFor="care_instructions">Care Instructions: </Label>
      <Textarea
        name="care_instructions"
        id="care_instructions"
        cols="30"
        rows="10"
        maxLength={150}
      ></Textarea>
      <Label htmlFor="image">*Image Url: </Label>
      <Input id="image" name="image" type="text" required />
      <button type="submit">Create plant</button>
    </FormContainer>
  );
}

/* For Button = {defaultData ? "Update plant" : "Add plant"} */
/* defaultValue={defaultData?.image} */
