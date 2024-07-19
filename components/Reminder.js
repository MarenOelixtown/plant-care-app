import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";
import WateringIcon from "../components/Icons/WateringIcon.svg";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const StyledSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border-radius: 1rem;
  background-color: ${(props) =>
    props.darkMode ? "var(--dark-light-green)" : "var(--light-green)"};
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
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
  margin: 10px;
  list-style: none;
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
  font-size: large;
  color: ${(props) =>
    props.darkMode ? "var(--dark-yellowish)" : "var(--primary-color)"};
  border-radius: 0.5rem;
  padding: 10px;
`;

const StyledParagraph = styled.p`
  font-weight: bold;
  background-color: ${(props) =>
    props.darkMode ? "var(--dark-light-grey)" : "white"};
  border-radius: 0.5rem;
  padding: 10px;
`;

const StyledImg = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  margin: 0;
  cursor: pointer;
`;

const ReminderButton = styled.button`
  margin-top: 2rem;
  background-color: ${(props) =>
    props.darkMode ? "var(--light-green)" : "var(--primary-color)"};
  color: ${(props) =>
    props.darkMode ? "var(--primary-color)" : "var(--light-yellow)"};
  border: 2px solid
    ${(props) =>
      props.darkMode ? "var(--light-green)" : "var(--primary-color)"};
  border-radius: 2rem;
  padding: 8px;
  font-weight: bold;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  margin: 0 20px;

  &:hover {
    background-color: ${(props) =>
      props.darkMode ? "var(--dark-light-green)" : "var(--light-green)"};
    color: ${(props) =>
      props.darkMode ? "var(--light-yellow)" : "var(--primary-color)"};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
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

  &:hover {
    border-color: ${(props) =>
      props.darkMode ? "var(--dark-light-grey)" : "var(--primary-color)"};
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

export default function Reminder({
  plants,
  getPlantInfoById,
  calculateNextWateringDate,
  handleAddReminder,
  darkMode,
}) {
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

  function newSchedule(plantId, waterNeed) {
    const today = new Date();
    const nextWateringDate = calculateNextWateringDate(today, waterNeed);
    handleAddReminder(plantId, nextWateringDate.toISOString().split("T")[0]);
  }

  return (
    <>
      <ReminderButton darkMode={darkMode} onClick={toggleReminder}>
        <WateringIcon style={{ fill: "var(--dark-yellowish)" }} /> To Do Today
      </ReminderButton>
      {showReminder && (
        <Overlay>
          <StyledSection darkMode={darkMode}>
            <CloseButton darkMode={darkMode} onClick={toggleReminder}>
              <span>X</span>
            </CloseButton>
            {plantsWithReminderToday.length > 0 && (
              <StyledParagraph darkMode={darkMode}>
                It&apos;s Watering Time!
              </StyledParagraph>
            )}
            <StyledList>
              {plantsWithReminderToday.map((plant) => (
                <StyledItem key={plant.id}>
                  <StyledPlant>
                    <StyledName darkMode={darkMode}>{plant.name}</StyledName>
                    <StyledImg
                      src={plant.images[0]}
                      alt={plant.name}
                      width={100}
                      height={100}
                      title="Set new watering-date"
                      onClick={() => newSchedule(plant.id, plant.water_need)}
                    />
                  </StyledPlant>
                </StyledItem>
              ))}
            </StyledList>
            {plantsWithReminderToday.length === 0 ? (
              <StyledParagraph darkMode={darkMode}>
                No pending tasks!
              </StyledParagraph>
            ) : (
              <StyledParagraph darkMode={darkMode}>
                Please tap the plant to mark it as done!
              </StyledParagraph>
            )}
          </StyledSection>
        </Overlay>
      )}
    </>
  );
}
