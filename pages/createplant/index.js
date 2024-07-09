import CreatePlantForm from "@/components/CreatePlantForm";
import styled from "styled-components";
import { useState } from "react";

const FormPageContainer = styled.div`
  width: 500px;
  margin: 10px auto;
  padding: 10px;
`;

const Heading = styled.h2`
  text-align: center;
`;

const SuccessMessage = styled.p`
  font-family: inherit;
  color: green;
  background-color: lightgreen;
  border: 3px solid green;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export default function CreatePlantFormPage({ handleAddPlant }) {
  const [successMessage, setSuccessMessage] = useState("");
  const [seasons, setSeasons] = useState({
    Spring: false,
    Summer: false,
    Fall: false,
    Winter: false,
  });

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setSeasons((prevSeasons) => ({
      ...prevSeasons,
      [id]: checked,
    }));
  };

  async function addPlant(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      console.error("Failed to upload image");
      return;
    }

    const { url } = await response.json();
    const plantData = Object.fromEntries(formData);
    plantData.image = url;

    const selectedSeasons = Object.keys(seasons).filter(
      (season) => seasons[season]
    );

    plantData.fertiliser_season = selectedSeasons;
    handleAddPlant(plantData);

    event.target.reset();
    event.target.name.focus();
    setSeasons({
      Spring: false,
      Summer: false,
      Fall: false,
      Winter: false,
    });

    setSuccessMessage("Plant was created!");

    setTimeout(() => {
      setSuccessMessage("");
    }, 2000);
  }

  return (
    <FormPageContainer>
      <Heading>Add Plant Form</Heading>
      <CreatePlantForm
        formName="Add Plant Form"
        onSubmit={addPlant}
        seasons={seasons}
        onCheckboxChange={handleCheckboxChange}
      />
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
    </FormPageContainer>
  );
}
