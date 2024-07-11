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
  align-items: left;
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
`;
const SuccessMessage = styled.p`
  display: inline-block;
  width: 90%;
  color: green;
  background-color: lightgreen;
  border: 3px solid green;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;
const AddSchedule = styled.p`
  display: inline-block;
  border: 3px solid var(--secondary-stroke-color);
  background-color: var(--secondary-bg-color);
  margin-top: 2rem;
  padding: 0.8rem 0.8rem;
  border-radius: 1rem;
  color: white;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: var(--secondary-stroke-color);
    background-color: white;
  }
`;
export default function MySchedule({ plants, getPlantInfoById }) {
  const router = useRouter();
  const successMessage = router.query.success
    ? "Watering-Schedule added successfully!"
    : null;

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
      <StyledLink href="/scheduleform">
        <AddSchedule>+ Watering-Schedule</AddSchedule>
      </StyledLink>
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      {plantsWithReminder.length === 0 ? (
        <p>No schedule is set. Want to create one?</p>
      ) : (
        <StyledList>
          {plantsWithReminder.map((plant) => {
            return (
              <StyledItem key={plant.id}>
                <StyledPlant>
                  <StyledImg src={plant.image} alt={plant.name} />
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
            );
          })}
        </StyledList>
      )}
    </StyledDiv>
  );
}
