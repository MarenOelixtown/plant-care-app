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
  color: var(--light-green);
  background-color: var(--primary-color);
  border: 3px solid var(--light-green);
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

const ErrorMessage = styled.p`
  font-family: inherit;
  color: var(--secondary-stroke-color);
  background-color: var(--light-pink);
  border: 3px solid var(--secondary-stroke-color);
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export default function CreatePlantFormPage({ handleAddPlant, darkMode }) {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function addPlant(plantData) {
    setIsSubmitting(true);

    try {
      handleAddPlant(plantData);

      setSuccessMessage("Your Plant has been added successfully!");
      setErrorMessage("");

      setTimeout(() => {
        setSuccessMessage("");
        setIsSubmitting(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to upload images. Please try again.");
      setSuccessMessage("");

      setTimeout(() => {
        setErrorMessage("");
        setIsSubmitting(false);
      }, 3000);
    }
    window.scrollTo(0, 0);
  }

  return (
    <FormPageContainer>
      <Heading id="create-plant">Add a new plant</Heading>
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <CreatePlantForm
        formName="Add Plant Form"
        onSubmit={addPlant}
        isSubmitting={isSubmitting}
        darkMode={darkMode}
      />
    </FormPageContainer>
  );
}
