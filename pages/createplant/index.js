import CreatPlantForm from "@/components/CreatePlantForm";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

const FormPageContainer = styled.div`
  width: 500px;
  margin: 10px auto;
  padding: 10px;
`;
const Heading = styled.h2`
  text-align: center;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const StyledButton = styled.button`
  display: block;
  width: 100%;
  margin-top: 0.5rem;
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
    spring: false,
    summer: false,
    fall: false,
    winter: false,
  });

  console.log(seasons);

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setSeasons((prevSeasons) => ({
      ...prevSeasons,
      [id]: checked,
    }));
  };
  function addPlant(event) {
    event.preventDefault();
    console.log("form submitted");

    const formData = new FormData(event.target);
    const plantData = Object.fromEntries(formData);
    const newPlant = plantData;
    console.log(newPlant);
    const selectedSeasons = Object.keys(seasons).filter(
      (season) => seasons[season]
    );
    plantData.fertiliser_season = selectedSeasons;
    handleAddPlant(newPlant);

    event.target.reset();
    event.target.name.focus();
    setSuccessMessage("Success! Your plant has been added.");
  }

  return (
    <FormPageContainer>
      <Heading id="create-plant">Create a Plant</Heading>
      <CreatPlantForm
        formName={"create-plant"}
        onSubmit={addPlant}
        seasons={seasons}
        onCheckboxChange={handleCheckboxChange}
      />
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      <StyledLink href="/myplants">
        <StyledButton>Go to my plants</StyledButton>
      </StyledLink>
    </FormPageContainer>
  );
}
