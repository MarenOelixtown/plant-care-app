import styled from "styled-components";
import { useState } from "react";

const StyledSection = styled.section`
  position: relative;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 5%;
  padding: 0 5%;
  border-radius: 30px;
  background: var(--light-green);
  box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
`;

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
  padding: 0;
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
const StyledName = styled.p`
  font-weight: bold;
  color: var(--primary-color);
  background-color: white;
  border-radius: 1rem;
  padding: 0.4rem;
`;
const StyledParagraph = styled.p`
  font-weight: bold;
  background-color: white;
  color: var(--dark-yellowish);
  border-radius: 1rem;
  padding: 0.4rem;
`;

const StyledImg = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin: 0;
`;
const ReminderButton = styled.button`
  margin-top: 2rem;
  background-color: var(--primary-color);
  color: var(--light-yellow);
  border: 2px solid #30482a;
  border-radius: 2rem;
  padding: 10px;
  font-weight: bold;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  margin: 0 20px;

  &:hover {
    background-color: var(--light-green);
    color: var(--primary-color);
  }
`;
const CloseButton = styled.button`
  background-color: transparent;
  border: 2px solid white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  padding: 0;
  position: absolute;
  top: 1rem;
  right: 1rem;

  &:hover {
    border-color: var(--primary-color);
  }

  &:focus {
    border-color: var(--primary-color);
  }

  & > span {
    color: white;
    font-size: 24px;
    line-height: 1;
  }
`;

export default function Reminder({ plants, getPlantInfoById }) {
  const [showReminder, setShowReminder] = useState(false);

  const toggleReminder = () => {
    setShowReminder(!showReminder);
  };

  const plantsWithReminderToday = plants
    .filter((plant) => {
      const plantInfo = getPlantInfoById(plant.id);
      if (plantInfo?.isMyPlant && plantInfo?.wateringDate) {
        const today = new Date();
        const wateringDate = new Date(plantInfo.wateringDate);

        return (
          wateringDate.getFullYear() <= today.getFullYear() &&
          wateringDate.getMonth() <= today.getMonth() &&
          wateringDate.getDate() <= today.getDate()
        );
      }
      return false;
    })
    .map((plant) => {
      const plantInfo = getPlantInfoById(plant.id);
      return {
        ...plant,
        wateringDate: plantInfo?.wateringDate || null,
      };
    });

  return (
    <>
      <ReminderButton onClick={toggleReminder}>To-Do-Today</ReminderButton>
      {showReminder && (
        <StyledSection>
          <CloseButton onClick={toggleReminder}>
            <span>X</span>
          </CloseButton>
          {plantsWithReminderToday.length > 0 && (
            <StyledParagraph>It's watering-time!</StyledParagraph>
          )}
          <StyledList>
            {plantsWithReminderToday.map((plant) => (
              <StyledItem key={plant.id}>
                <StyledPlant>
                  <StyledName>{plant.name}</StyledName>
                  <StyledImg src={plant.images[0]} alt={plant.name} />
                </StyledPlant>
              </StyledItem>
            ))}
          </StyledList>
          {plantsWithReminderToday.length === 0 ? (
            <StyledParagraph>All plants are supplied!</StyledParagraph>
          ) : (
            <StyledParagraph>Please push plant, if done!</StyledParagraph>
          )}
        </StyledSection>
      )}
    </>
  );
}
