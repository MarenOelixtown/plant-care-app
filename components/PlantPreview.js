import styled from "styled-components";
import Link from "next/link";

const StyledName = styled.p`
  margin-right: 5px;
  font-weight: bold;
`;
const StyledBotanicalName = styled.p`
  margin-top: 0;
`;

const StyledDiv = styled.div`
  display: flex;
  margin-bottom: 5px;
  color: grey;
  border-style: solid;
  padding: 10px;
  margin: 10px;
`;
const StyledImg = styled.img`
  border-radius: 5px;
  width: 100px;
  height: 100 px;
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-right: 5px;
`;

export default function PlantPreview({ plant }) {
  return (
    <StyledDiv>
      <Link href={`/overview/${plant.id}`}>
        <StyledImg
          src="https://img.freepik.com/free-photo/decorative-houseplant-isolated-white-background_157027-3500.jpg?t=st=1719484743~exp=1719488343~hmac=0124cb8c89ad44347e3e49f4b0c7ba1a45a4aeb656af770fb64e7e66567451a9&w=826"
          alt={plant.name}
        />
      </Link>
      <StyledInfo>
        <StyledName>{plant.name}</StyledName>
        <StyledBotanicalName>{plant.botanical_name}</StyledBotanicalName>
      </StyledInfo>
    </StyledDiv>
  );
}
