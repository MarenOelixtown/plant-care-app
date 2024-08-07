import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import ButtonAddPlant from "./ButtonAddPlant";
import ButtonDeletePlant from "./ButtonDeletePlant";
import ButtonEditPlant from "./ButtonEditPlant";
import placeholderimage from "../public/placeholderimage.jpg";
import { ButtonContainer } from "@/styles";

const StyledName = styled.p`
  margin-right: 5px;
  font-weight: bolder;
  font-size: large;
  color: ${(props) =>
    props.darkMode ? "var(--dark-yellowish)" : "var(--primary-color)"};
  &:hover {
    color: ${(props) =>
      props.darkMode ? "var(--light-green)" : "var(--dark-yellowish)"};
  }
`;

const StyledBotanicalName = styled.p`
  margin-top: -5px;
  font-weight: bold;
`;

const StyledDiv = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 5px;
  border-radius: 0.5rem;
  color: var(--dark-grey);
  padding: 10px;
  margin: 10px;
  background-color: ${(props) =>
    props.darkMode ? "var(--dark-light-green)" : "white"};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;
const StyledImg = styled(Image)`
  border-radius: 0.5rem;
  object-fit: cover;
  margin-top: 5px;
  margin-right: 50px;
  margin-left: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 900px) {
    margin-right: 30px;
    margin-left: 10px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) =>
    props.darkMode ? "var(--dark-yellowish)" : "var(--primary-color)"};
  &:hover {
    color: ${(props) =>
      props.darkMode ? "var(--primary-color)" : "var(--dark-yellowish)"};
  }
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-right: 5px;
`;

export default function PlantPreview({
  plant,
  isMyPlant,
  isUserPlant,
  handleToggleMyPlants,
  handleDeletePlant,
  darkMode,
}) {
  const previewImage =
    plant.images && plant.images.length > 0
      ? plant.images[0]
      : placeholderimage;
  return (
    <StyledDiv darkMode={darkMode}>
      <Link href={`/overview/${plant.id}`} title="Go to plant-details">
        {plant.images.length === 0 ? (
          <StyledImg
            src={placeholderimage}
            width={100}
            height={100}
            alt={`${plant.name}`}
          />
        ) : (
          <StyledImg
            src={plant.images[0]}
            width={100}
            height={100}
            alt={`${plant.name}`}
          />
        )}
      </Link>
      <StyledInfo>
        <StyledLink
          darkMode={darkMode}
          href={`/overview/${plant.id}`}
          title="Go to plant-details"
        >
          <StyledName darkMode={darkMode}>{plant.name}</StyledName>
        </StyledLink>
        <StyledBotanicalName>{plant.botanical_name}</StyledBotanicalName>
      </StyledInfo>
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
    </StyledDiv>
  );
}
