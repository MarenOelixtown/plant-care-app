import { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import WateringIcon from "../components/Icons/WateringIcon.svg";

const StyledDiv = styled.div`
  text-align: center;
`;

const StyledImg = styled.img`
  border-radius: 5px;
  width: 100px;
  height: 100px;
  margin-right: 10px;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledItem = styled.li`
  display: block;
  align-content: space-between;
  margin-bottom: 5px;
  list-style: none;
  border-spacing: 10px;
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-right: 5px;
`;

const StyledPlant = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 5px;
  color: grey;
  border-style: solid;
  padding: 10px;
  margin: 10px;
`;

const StyledName = styled.p`
  margin-right: 5px;
  font-weight: bold;
  color: black;
`;

const StyledSpan = styled.span`
  margin-right: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-top: 2rem;
  background-color: var(--primary-color);
  color: var(--light-yellow);
  border: 2px solid #30482a;
  border-radius: 2rem;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 20px;

  &:hover {
    background-color: var(--light-green);
    color: var(--primary-color);
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
  background-color: white;
  border-radius: 1rem;
  margin: 20px auto 40px auto;
  max-width: 550px;
  width: 100%;
`;

export default function MySchedule({ plants, getPlantInfoById, darkMode }) {
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
    <StyledDiv>
      <h1>My Schedule</h1>
      {showSuccessMessage && (
        <SuccessMessage>Watering schedule added successfully!</SuccessMessage>
      )}
      {plantsWithReminder.length === 0 ? (
        <StyledPDiv>
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
                <StyledImg src={plant.images[0]} alt={plant.name} />
                <StyledInfo>
                  <StyledName>{plant.name}</StyledName>
                  <p>
                    <StyledSpan>
                      <WateringIcon />
                    </StyledSpan>
                    {plant.wateringDate}
                  </p>
                </StyledInfo>
              </StyledPlant>
            </StyledItem>
          ))}
        </StyledList>
      )}
      <StyledLink href="/scheduleform">Add Watering Schedule</StyledLink>
    </StyledDiv>
  );
}
