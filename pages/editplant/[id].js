import CreatPlantForm from "@/components/CreatePlantForm";
import styled from "styled-components";
import { useState, useEffect } from "react";
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

export default function EditPlantFormPage({
  plants,
  handleEditPlant,
  seasons,
  setSeasons,
  handleCheckboxChange,
}) {
  const [currentPlantData, setCurrentPlantData] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const plant = plants.find((plant) => plant.id === id);
      if (plant) {
        setCurrentPlantData(plant);
        setSeasons({
          Spring: plant.fertiliser_season.includes("Spring"),
          Summer: plant.fertiliser_season.includes("Summer"),
          Fall: plant.fertiliser_season.includes("Fall"),
          Winter: plant.fertiliser_season.includes("Winter"),
        });
      }
    }
  }, [id, plants, setSeasons]);

  function editPlant(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const plantData = Object.fromEntries(formData);
    const selectedSeasons = Object.keys(seasons).filter(
      (season) => seasons[season]
    );
    plantData.fertiliser_season = selectedSeasons;
    const updatedPlant = { id: currentPlantData.id, ...plantData };
    handleEditPlant(updatedPlant);
    event.target.reset();
    event.target.name.focus();
    setSeasons({
      Spring: false,
      Summer: false,
      Fall: false,
      Winter: false,
    });
    setSuccessMessage("Success! Your plant has been updated.");
    setTimeout(() => {
      setSuccessMessage("");
    }, 2000);
  }

  return (
    <FormPageContainer>
      <Heading id="edit-plant">Edit plant</Heading>
      {currentPlantData && (
        <CreatPlantForm
          defaultData={currentPlantData}
          formName={"edit-plant"}
          onSubmit={editPlant}
          seasons={seasons}
          onCheckboxChange={handleCheckboxChange}
        />
      )}

      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
    </FormPageContainer>
  );
}
