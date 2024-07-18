import Image from "next/image";
import styled from "styled-components";
import ButtonAddPlant from "./ButtonAddPlant";
import { useRouter } from "next/router";
import ButtonDeletePlant from "./ButtonDeletePlant";
import ButtonEditPlant from "./ButtonEditPlant";
import placeholderimage from "../public/placeholderimage.jpg";
import { useState } from "react";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 1200px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  background-color: white;
`;
const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
const StyledHeader = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;

const Heading = styled.h2`
  color: #30482a;
  font-size: 2rem;
  margin-bottom: 10px;
`;

const SubHeading = styled.h3`
  color: #607843;
  font-size: 1.3rem;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  align-self: center;
  margin-top: 10px;
  margin-bottom: 30px;
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 20px;
`;

const StyledImageWrapper = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const NeedsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 600px;
  margin: 20px 0;
`;

const NeedItem = styled.div`
  width: 200px;
  height: 150px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 1rem;
  margin-right: 30px;
  text-align: center;
`;

const NeedTitle = styled.h4`
  color: #30482a;
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const NeedValue = styled.p`
  font-size: 1rem;
  color: #555;
`;

const StyledDiv = styled.div`
  text-align: center;
`;

const StyledParagraph = styled.p`
  margin-top: 1rem;
  color: var(--dark-yellowish);
`;

const StyledPDiv = styled.div`
  padding: 10px;
  background-color: white;
  border-radius: 1rem;
  margin: 20px auto 40px auto;
  max-width: 550px;
  width: 100%;
`;

export default function PlantDetails({
  plants,
  handleToggleMyPlants,
  handleDeletePlant,
  getPlantInfoById,
}) {
  const router = useRouter();
  const { id } = router.query;

  const plantsIndex = plants.findIndex((plant) => plant.id === id);
  const plant = plants[plantsIndex];

  const [currentImageId, setCurrentImageId] = useState(0);

  function handleNextButtonClick() {
    const nextImageId = (currentImageId + 1) % plant.images.length;
    setCurrentImageId(nextImageId);
  }

  function handlePreviousButtonClick() {
    const previousImageId =
      currentImageId > 0 ? currentImageId - 1 : plant.images.length - 1;
    setCurrentImageId(previousImageId);
  }

  if (!plant) {
    return (
      <>
        <StyledDiv>
          <h1>No Plants Found!</h1>
          <StyledPDiv>
            <StyledParagraph>
              No plants to show at the moment. Feel free to add your plants
              here!
            </StyledParagraph>
          </StyledPDiv>
        </StyledDiv>
      </>
    );
  }
  const plantInfo = getPlantInfoById(plant.id);
  const { isUserPlant, isMyPlant } = plantInfo || {};

  return (
    <StyledCard>
      <StyledHeader>
        <Heading>{plant.name}</Heading>
        <SubHeading>{plant.botanical_name}</SubHeading>
      </StyledHeader>
      <ImagesContainer>
        {plant.images.length === 0 ? (
          <StyledImageWrapper>
            <StyledImage
              src={placeholderimage}
              width={300}
              height={300}
              alt={`${plant.name}`}
            />
          </StyledImageWrapper>
        ) : (
          <StyledImageWrapper>
            <StyledImage
              src={plant.images[currentImageId]}
              width={300}
              height={300}
              alt={`${plant.name}`}
            />
          </StyledImageWrapper>
        )}
      </ImagesContainer>
      <StyledButtonContainer>
        <button type="button" onClick={handlePreviousButtonClick}>
          &larr;
        </button>
        <button type="button" onClick={handleNextButtonClick}>
          &rarr;
        </button>
      </StyledButtonContainer>

      {plant.care_instructions && (
        <StyledDiv>
          <h3>Care Instructions</h3>
          <p>{plant.care_instructions}</p>
        </StyledDiv>
      )}

      <NeedsContainer>
        <NeedItem>
          <NeedTitle>Water Need</NeedTitle>
          <NeedValue>{plant.water_need}</NeedValue>
        </NeedItem>
        <NeedItem>
          <NeedTitle>Fertiliser Cycle</NeedTitle>
          <NeedValue>{plant.fertiliser_season.join(", ")}</NeedValue>
        </NeedItem>
        <NeedItem>
          <NeedTitle>Light Needs</NeedTitle>
          <NeedValue>{plant.light_need}</NeedValue>
        </NeedItem>
      </NeedsContainer>

      <ButtonContainer>
        <ButtonAddPlant
          onToggleMyPlants={handleToggleMyPlants}
          isMyPlant={isMyPlant}
          id={plant.id}
        />
        {isUserPlant && (
          <>
            <ButtonEditPlant id={plant.id} />
            <ButtonDeletePlant
              OnDeletePlant={handleDeletePlant}
              id={plant.id}
            />
          </>
        )}
      </ButtonContainer>
    </StyledCard>
  );
}
