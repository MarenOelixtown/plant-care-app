import CreatPlantForm from "@/components/CreatePlantForm";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import back from "../../public/back.png";
import { useState } from "react";

const FormPageContainer = styled.div`
  width: 500px;
  margin: 10px auto;
  padding: 10px;
  /* background-color: #d4e0ee; */
`;

const Heading = styled.h2`
  text-align: center;
`;
/* const StyledLink = styled(Link)`
  text-decoration: none;
  width: 50%;
  margin: 10px auto;
  padding: 10px 24px;
  text-align: center;
  display: block;
  border: 1px solid grey;
  border-radius: 0.1rem;
  background-color: #f0f0f0;
  color: black;
  font-size: 0.8rem;
`; */

const SuccessMessage = styled.p`
  font-family: inherit;
  color: green;
  background-color: lightgreen;
  border: 3px solid green;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

/* const StyledImage = styled(Image)`
  width: 30px;
  height: 30px;
`; */

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
