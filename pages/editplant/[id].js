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

export default function EditPlantFormPage({ plants, handleEditPlant }) {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
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
      setErrorMessage("Failed to upload image. Please try again.");
      setTimeout(() => {
        setErrorMessage("");
        setIsSubmitting(false);
      }, 3000);
    }
    window.scrollTo(0, 0);
  }

  ///////////////////////////////////////

  //     if (!response.ok) {
  //       throw new Error("Failed to update plant");
  //     }

  //     const imageUrls = await response.json();
  //     updatedPlant.images = imageUrls;

  //     handleEditPlant({ id, ...updatedPlant });

  //     setSuccessMessage("Your Plant has been updated successfully!");
  //     setTimeout(() => {
  //       setSuccessMessage("");
  //       setIsSubmitting(false);
  //     }, 2000);
  //   } catch (error) {
  //     console.error(error);
  //     setErrorMessage("Failed to upload images. Please try again.");
  //     setSuccessMessage("");
  //     setTimeout(() => {
  //       setErrorMessage("");
  //       setIsSubmitting(false);
  //     }, 3000);
  //   }
  //   window.scrollTo(0, 0);
  // }

  return (
    <FormPageContainer>
      <Heading id="edit-plant">Edit your plant</Heading>
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <CreatePlantForm
        defaultData={plant}
        formName={"edit-plant"}
        onSubmit={editPlant}
        isSubmitting={isSubmitting}
      />
    </FormPageContainer>
  );
}
