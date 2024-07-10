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
  const [seasons, setSeasons] = useState({
    Spring: false,
    Summer: false,
    Fall: false,
    Winter: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
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

      setSuccessMessage("Your Plant is added successfully!");
      setErrorMessage("");

      setTimeout(() => {
        setSuccessMessage("");
        setIsSubmitting(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to upload image. Please try again.");
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
      <Heading>Add Plant Form</Heading>
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <CreatePlantForm
        formName="Add Plant Form"
        onSubmit={addPlant}
        seasons={seasons}
        onCheckboxChange={handleCheckboxChange}
        isSubmitting={isSubmitting}
      />
    </FormPageContainer>
  );
}
