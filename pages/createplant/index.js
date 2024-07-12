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

const ErrorMessage = styled.p`
  font-family: inherit;
  color: red;
  background-color: pink;
  border: 3px red;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export default function CreatePlantFormPage({ handleAddPlant }) {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function addPlant(plantData) {
    console.log("addPlant 1 called with data:", plantData);
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      Object.keys(plantData).forEach((key) => {
        if (key === "images" && Array.isArray(plantData[key])) {
          plantData[key].forEach((file, index) => {
            formData.append(`images_${index}`, file);
          });
        } else {
          formData.append(key, plantData[key]);
        }
      });

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload images");
      }
      console.log("Form Data before uploading:", plantData);
      const { urls } = await response.json();
      plantData.images = urls;

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
      />
    </FormPageContainer>
  );
}
