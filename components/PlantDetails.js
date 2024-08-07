import Image from "next/image";
import styled from "styled-components";
import ButtonAddPlant from "./ButtonAddPlant";
import { useRouter } from "next/router";
import ButtonDeletePlant from "./ButtonDeletePlant";
import ButtonEditPlant from "./ButtonEditPlant";
import placeholderimage from "../public/placeholderimage.jpg";
import { useState } from "react";
import Leftarrow from "../components/Icons/Leftarrow.svg";
import Rightarrow from "../components/Icons/Rightarrow.svg";

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
  background-color: ${(props) =>
    props.darkMode ? "var(--dark-light-green)" : "white"};
`;

const StyledHeader = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;

const Heading = styled.h2`
  color: ${(props) =>
    props.darkMode ? "var(--dark-yellowish)" : "var(--primary-color)"};
  font-size: 2rem;
  margin-bottom: 10px;
`;

const SubHeading = styled.h3`
  color: ${(props) => (props.darkMode ? "var(--light-yellow)" : "#607843")};
  font-size: 1.3rem;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  align-self: center;
  margin-top: 10px;
  margin-bottom: 30px;
`;

const ImagesContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px; /* Adjust as needed */
  margin-bottom: 20px;
`;

const StyledImageWrapper = styled.div`
  width: 100%;
  height: 300px; /* Adjust as needed */
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
`;

const LeftButton = styled(NavigationButton)`
  left: 0;
`;

const RightButton = styled(NavigationButton)`
  right: 0;
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
  background-color: ${(props) =>
    props.darkMode ? "var(--dark-light-grey)" : "var(--lightest-green)"};
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
  color: ${(props) =>
    props.darkMode ? "lightgrey" : "var(--dark-light-grey)"};
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
  background-color: ${(props) =>
    props.darkMode ? "var(--dark-light-green)" : "white"};
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
  darkMode,
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
          <StyledPDiv darkMode={darkMode}>
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
    <StyledCard darkMode={darkMode}>
      <StyledHeader>
        <Heading darkMode={darkMode}>{plant.name}</Heading>
        <SubHeading darkMode={darkMode}>{plant.botanical_name}</SubHeading>
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
        {plant.images.length > 1 && (
          <>
            <LeftButton type="button" onClick={handlePreviousButtonClick}>
              <Leftarrow />
            </LeftButton>
            <RightButton type="button" onClick={handleNextButtonClick}>
              <Rightarrow />
            </RightButton>
          </>
        )}
      </ImagesContainer>

      {plant.care_instructions && (
        <StyledDiv>
          <h3>Care Instructions</h3>
          <p>{plant.care_instructions}</p>
        </StyledDiv>
      )}

      <NeedsContainer>
        <NeedItem darkMode={darkMode}>
          <NeedTitle>Water Need</NeedTitle>
          <NeedValue darkMode={darkMode}>{plant.water_need}</NeedValue>
        </NeedItem>
        <NeedItem darkMode={darkMode}>
          <NeedTitle>Fertiliser Cycle</NeedTitle>
          <NeedValue darkMode={darkMode}>
            {plant.fertiliser_season.join(", ")}
          </NeedValue>
        </NeedItem>
        <NeedItem darkMode={darkMode}>
          <NeedTitle>Light Needs</NeedTitle>
          <NeedValue darkMode={darkMode}>{plant.light_need}</NeedValue>
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
              darkMode={darkMode}
              OnDeletePlant={handleDeletePlant}
              id={plant.id}
            />
          </>
        )}
      </ButtonContainer>
    </StyledCard>
  );
}
