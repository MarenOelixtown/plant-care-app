import styled from "styled-components";
import Image from "next/image";

const WateringIcon = () => (
  <svg
    version="1.1"
    width="10px"
    height="10px"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 415.824 415.824"
    enableBackground="new 0 0 415.824 415.824"
    xmlSpace="preserve"
  >
    <path
      d="M397.305,237.508c-3.711-1.537-7.61-2.284-11.474-2.284c-7.808,0-15.48,3.048-21.22,8.788l-28.59,28.59l-60.005-5
	l45.45-68.31c3.958-5.949,3.171-13.863-1.882-18.916L214.661,75.452c-5.051-5.052-12.965-5.84-18.916-1.882l-13.694,9.111
	c-2.935-14.806-10.17-28.418-21.084-39.331c-14.549-14.55-33.894-22.562-54.47-22.562S66.576,28.8,52.027,43.35
	c-30.034,30.035-30.034,78.905,0,108.941c3.515,3.515,7.324,6.622,11.349,9.351l-41.069,27.325
	c-12.529,8.335-20.569,21.705-22.058,36.678c-1.491,14.975,3.758,29.666,14.398,40.306l114.438,114.438
	c9.451,9.452,22.097,14.648,35.3,14.648c1.661,0,3.332-0.083,5.005-0.249c14.975-1.49,28.344-9.529,36.679-22.058l3.509-5.273
	l126.444-10.537l28.59,28.59c5.739,5.739,13.413,8.788,21.22,8.788c3.865,0,7.762-0.747,11.474-2.284
	c11.21-4.643,18.519-15.583,18.519-27.716v-99.072C415.824,253.091,408.515,242.152,397.305,237.508z M73.24,131.077
	c-18.337-18.338-18.337-48.177,0-66.515c8.884-8.883,20.694-13.775,33.258-13.775c12.563,0,24.373,4.892,33.257,13.776
	c8.884,8.883,13.775,20.694,13.775,33.257c0,1.328-0.067,2.646-0.175,3.955l-61.331,40.807
	C85.017,140.324,78.595,136.432,73.24,131.077z M166.42,364.935c-5.979,0.594-11.864-1.503-16.121-5.76L35.861,244.737
	c-4.256-4.256-6.355-10.132-5.759-16.122c0.595-5.989,3.811-11.336,8.823-14.671l163.211-108.592l87.548,87.549L181.092,356.112
	C177.758,361.124,172.41,364.339,166.42,364.935z M385.824,364.296l-38.429-38.428l-116.613,9.718l26.256-39.462l90.357,7.53
	l38.429-38.429V364.296z"
    />
  </svg>
);
const StyledDiv = styled.div`
  text-align: center;
`;
const StyledImg = styled(Image)`
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
const StyledName = styled.p`
  margin-right: 5px;
  font-weight: bold;
`;
export default function MySchedule({ plantsInfo }) {
  return (
    <StyledDiv>
      <h1>My Schedule</h1>
      {plantsInfo.length === 0 ? (
        <p>No schedule is set. Want to create one?</p>
      ) : (
        <StyledList>
          {plantsInfo.map((plant) => {
            return (
              <StyledItem key={plant.id}>
                <StyledImg src={plant.image} alt={plant.name} />
                <StyledName>{plant.name}</StyledName>
                <WateringIcon />
                <p>Date: {plant.wateringDate}</p>
              </StyledItem>
            );
          })}
        </StyledList>
      )}
    </StyledDiv>
  );
}
