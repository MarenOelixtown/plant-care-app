import CreatPlantForm from "@/components/CreatePlantForm";
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
  const router = useRouter();
  const { id } = router.query;
  if (!id) return;

  const plant = plants.find((plant) => plant.id === id);

  function editPlant(updatedPlant) {
    handleEditPlant({ id, ...updatedPlant });

    setSuccessMessage("Success! Your plant has been updated.");
    setTimeout(() => {
      setSuccessMessage("");
    }, 2000);
  }

  return (
    <FormPageContainer>
      <Heading id="edit-plant">Edit plant</Heading>
      <CreatPlantForm
        defaultData={plant}
        formName={"edit-plant"}
        onSubmit={editPlant}
      />

      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
    </FormPageContainer>
  );
}
