import CreatPlantForm from "@/components/CreatePlantForm";
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

export default function CreatPlantFormPage({ handleAddPlant }) {
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
  function addPlant(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const plantData = Object.fromEntries(formData);
    const newPlant = plantData;

    const selectedSeasons = Object.keys(seasons).filter(
      (season) => seasons[season]
    );

    plantData.fertiliser_season = selectedSeasons;
    handleAddPlant(newPlant);

    event.target.reset();
    event.target.name.focus();
    setSeasons({
      Spring: false,
      Summer: false,
      Fall: false,
      Winter: false,
    });
    setSuccessMessage("Success! Your plant has been added.");

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  }

  return (
    <FormPageContainer>
      <Heading id="create-plant">Add a new plant</Heading>
      <CreatPlantForm
        formName={"create-plant"}
        onSubmit={addPlant}
        seasons={seasons}
        onCheckboxChange={handleCheckboxChange}
      />

      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
    </FormPageContainer>
  );
}
