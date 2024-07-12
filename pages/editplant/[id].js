import CreatePlantForm from "@/components/CreatePlantForm";
import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";

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

export default function EditPlantFormPage({ plants, handleEditPlant }) {
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  if (!id) return;

  const plant = plants.find((plant) => plant.id === id);

  async function editPlant(updatedPlant) {
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      Object.keys(updatedPlant).forEach((key) => {
        formData.append(key, updatedPlant[key]);
      });

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const { url } = await response.json();
      updatedPlant.image = url;

      handleEditPlant({ id, ...updatedPlant });

      setSuccessMessage("Your Plant has been updated successfully!");
      setTimeout(() => {
        setSuccessMessage("");
        setIsSubmitting(false);
      }, 2000);
    } catch (error) {
      console.error(error);
      setSuccessMessage("Failed to upload image. Please try again.");
      setTimeout(() => {
        setSuccessMessage("");
        setIsSubmitting(false);
      }, 3000);
    }
    window.scrollTo(0, 0);
  }

  return (
    <FormPageContainer>
      <Heading id="edit-plant">Edit your plant</Heading>
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      <CreatePlantForm
        defaultData={plant}
        formName={"edit-plant"}
        onSubmit={editPlant}
        isSubmitting={isSubmitting}
      />
    </FormPageContainer>
  );
}
