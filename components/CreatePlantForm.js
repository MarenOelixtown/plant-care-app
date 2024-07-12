import styled from "styled-components";
import { useRouter } from "next/router";
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

const Select = styled.select`
  border: 3px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

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

const StyledFileInput = styled(Input).attrs({
  type: "file",
})`
  padding: 8px;
  border: none;
  &:focus {
    border-color: #0056b3;
    outline: none;
  }
`;

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

export default function CreatePlantForm({
  defaultData,
  formName,
  onSubmit,
  isSubmitting,
}) {
  const router = useRouter();
  const [waterNeed, setWaterNeed] = useState(defaultData?.water_need);
  const [lightNeed, setLightNeed] = useState(defaultData?.light_need);
  const [seasons, setSeasons] = useState(
    {
      Spring: defaultData?.fertiliser_season.includes("Spring"),
      Summer: defaultData?.fertiliser_season.includes("Summer"),
      Fall: defaultData?.fertiliser_season.includes("Fall"),
      Winter: defaultData?.fertiliser_season.includes("Winter"),
    } || {}
  );

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setSeasons((prevSeasons) => ({
      ...prevSeasons,
      [id]: checked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const plantData = Object.fromEntries(formData);
    const selectedSeasons = Object.keys(seasons).filter(
      (season) => seasons[season]
    );
    plantData.fertiliser_season = selectedSeasons;
    onSubmit(plantData);
  };

  return (
    <FormContainer
      aria-labelledby={formName}
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <Label htmlFor="name">*Plant Name: </Label>
      <Input
        id="name"
        name="name"
        type="text"
        required
        maxLength={150}
        defaultValue={defaultData?.name}
      />
      <Label htmlFor="botanical_name">*Botanical Name</Label>
      <Input
        id="botanical_name"
        name="botanical_name"
        type="text"
        required
        maxLength={150}
        defaultValue={defaultData?.botanical_name}
      />
      <Label htmlFor="water_need">*Water Needs:</Label>
      <Select
        id="water_need"
        name="water_need"
        required
        value={waterNeed}
        onChange={(event) => setWaterNeed(event.target.value)}
      >
        <option value="">Select water needs</option>
        <option value="Low">Low</option>
        <option value="Moderate">Moderate</option>
        <option value="High">High</option>
      </Select>
      <Label htmlFor="light_need">*Light Needs:</Label>
      <Select
        id="light_need"
        name="light_need"
        required
        value={lightNeed}
        onChange={(event) => setLightNeed(event.target.value)}
      >
        <option value="">Select light needs</option>
        <option value="Shady">Shady</option>
        <option value="Partial shade">Partial shade</option>
        <option value="Bright">Bright</option>
      </Select>
      <Fieldset>
        <Legend>Please choose your fertiliser seasons</Legend>
        <CheckboxContainer>
          <LabelCheckbox htmlFor="spring">
            Spring
            <Input
              type="checkbox"
              id="Spring"
              name="fertiliser_season"
              value="Spring"
              defaultChecked={seasons.Spring}
              onChange={handleCheckboxChange}
            />
          </LabelCheckbox>{" "}
          <LabelCheckbox htmlFor="summer">
            Summer
            <Input
              type="checkbox"
              id="Summer"
              name="fertiliser_season"
              value="Summer"
              defaultChecked={seasons.Summer}
              onChange={handleCheckboxChange}
            />
          </LabelCheckbox>{" "}
          <LabelCheckbox htmlFor="fall">
            Fall
            <Input
              type="checkbox"
              id="Fall"
              name="fertiliser_season"
              value="Fall"
              defaultChecked={seasons.Fall}
              onChange={handleCheckboxChange}
            />
          </LabelCheckbox>{" "}
          <LabelCheckbox htmlFor="winter">
            Winter
            <Input
              type="checkbox"
              id="Winter"
              name="fertiliser_season"
              value="Winter"
              defaultChecked={seasons.Winter}
              onChange={handleCheckboxChange}
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
        defaultValue={defaultData?.care_instructions}
      ></Textarea>
      <Label htmlFor="photo">Add Photo:</Label>
      <StyledFileInput name="photo" id="photo" accept="image/*" required />
      <StyledButton type="submit" disabled={isSubmitting}>
        {defaultData ? "Update Plant" : "+ Plant"}
      </StyledButton>
      <StyledButton type="button" onClick={() => router.back()}>
        Cancel
      </StyledButton>
    </FormContainer>
  );
}
