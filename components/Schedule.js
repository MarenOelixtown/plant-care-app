import { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import WateringIcon from "../components/Icons/WateringIcon.svg";
import Reminder from "./Reminder";
import Image from "next/image";

const StyledDiv = styled.div`
  text-align: center;
`;

const StyledImg = styled(Image)`
  border-radius: 1rem;
  object-fit: cover;
  margin: 0;
`;

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
  margin: 20px 0;
  padding: 0 5%;
`;

const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  list-style: none;
  border-spacing: 10px;
`;

const StyledPlant = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: grey;
  padding: 10px;
`;

const StyledName = styled.h3`
  font-weight: bold;
  color: var(--primary-color);
  background-color: white;
  border-radius: 1rem;
  padding: 10px;
`;
const StyledDate = styled.p`
  background-color: white;
  border-radius: 1rem;
  padding: 10px;
`;
const StyledSpan = styled.span`
  margin-right: 0.4rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-top: 2rem;
  background-color: ${(props) =>
    props.darkMode ? "var(--light-green)" : "var(--primary-color)"};
  color: ${(props) =>
    props.darkMode ? "var(--primary-color)" : "var(--light-yellow)"};
  border: 2px solid
    ${(props) =>
      props.darkMode ? "var(--light-green)" : "var(--primary-color)"};
  border-radius: 2rem;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 20px;

  &:hover {
    background-color: ${(props) =>
      props.darkMode ? "var(--dark-light-green)" : "var(--light-green)"};
    color: ${(props) =>
      props.darkMode ? "var(--light-yellow)" : "var(--primary-color)"};
  }
`;

const SuccessMessage = styled.p`
  font-family: inherit;
  color: var(--light-green);
  background-color: var(--primary-color);
  border: 3px solid var(--light-green);
  border-radius: 0.5rem;
  padding: 0.25rem;
  display: inline-block;
  margin-top: 1rem;
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

export default function MySchedule({
  plants,
  getPlantInfoById,
  calculateNextWateringDate,
  handleAddReminder,
  darkMode,
}) {
  const router = useRouter();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    if (router.query.success) {
      setShowSuccessMessage(true);
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [router.query.success]);

  const plantsWithReminder = plants
    .filter((plant) => {
      const plantInfo = getPlantInfoById(plant.id);
      return plantInfo?.isMyPlant && plantInfo?.wateringDate;
    })
    .map((plant) => {
      const plantInfo = getPlantInfoById(plant.id);
      return {
        ...plant,
        wateringDate: plantInfo?.wateringDate || null,
      };
    })
    .toSorted((a, b) => new Date(a.wateringDate) - new Date(b.wateringDate));

  return (
    <StyledDiv darkMode={darkMode}>
      <h1>My Schedule</h1>

      {showSuccessMessage && (
        <SuccessMessage>Watering schedule added successfully!</SuccessMessage>
      )}
      <div>
        <StyledLink darkMode={darkMode} href="/scheduleform">
          Add Watering Schedule
        </StyledLink>
        <Reminder
          plants={plants}
          getPlantInfoById={getPlantInfoById}
          calculateNextWateringDate={calculateNextWateringDate}
          handleAddReminder={handleAddReminder}
          darkMode={darkMode}
        />
      </div>
      {plantsWithReminder.length === 0 ? (
        <StyledPDiv darkMode={darkMode}>
          <StyledParagraph>
            You currently do not have a schedule set. Would you like to create
            one now?
          </StyledParagraph>
        </StyledPDiv>
      ) : (
        <StyledList>
          {plantsWithReminder.map((plant) => (
            <StyledItem key={plant.id}>
              <StyledPlant>
                <StyledName>{plant.name}</StyledName>
                <Link
                  href={`/overview/${plant.id}`}
                  title="Go to plant-details"
                >
                  <StyledImg
                    src={plant.images[0]}
                    alt={plant.name}
                    width={200}
                    height={200}
                  />
                </Link>
                <StyledDate>
                  <StyledSpan>
                    <WateringIcon />
                  </StyledSpan>
                  {plant.wateringDate}
                </StyledDate>
              </StyledPlant>
            </StyledItem>
          ))}
        </StyledList>
      )}
    </StyledDiv>
  );
}
