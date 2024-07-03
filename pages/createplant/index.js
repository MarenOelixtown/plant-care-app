import CreatPlantForm from "@/components/CreatePlantForm";
import styled from "styled-components";

import Link from "next/link";

const FormPageContainer = styled.form`
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

export default function CreatPlantFormPage() {
  function createPlant(event) {
    event.preventDefault();
    console.log("form submitted");

    const formData = new FormData(event.target);
    const plantData = Object.fromEntries(formData);
    console.log(plantData);

    event.target.reset();
    event.target.name.focus();
  }

  return (
    <FormPageContainer>
      <Heading id="create-plant">Create a Plant</Heading>
      <CreatPlantForm formName={"create-plant"} onSubmit={createPlant} />
      <StyledLink href="/myplants">
        <StyledButton>Go to my plants</StyledButton>
      </StyledLink>
    </FormPageContainer>
  );
}
