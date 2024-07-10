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

  function addPlant(newPlant) {
    handleAddPlant(newPlant);

    setSuccessMessage("Success! Your plant has been added.");

    setTimeout(() => {
      setSuccessMessage("");
    }, 2000);
  }

  return (
    <FormPageContainer>
      <Heading id="create-plant">Add a new plant</Heading>
      <CreatPlantForm formName={"create-plant"} onSubmit={addPlant} />

      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
    </FormPageContainer>
  );
}
