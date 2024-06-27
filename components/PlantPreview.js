import styled from "styled-components";

const StyledBody = styled.div`
  margin: 10px;
`;

const StyledP = styled.p`
  margin-right: 5px;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  align-content: space-between
  margin-bottom: 5px;
`;

export default function PlantPreview({ name, botanical_name }) {
  return (
    <StyledBody>
      <StyledDiv>
        <StyledP>{name}</StyledP>
        <StyledP>{botanical_name}</StyledP>
      </StyledDiv>
    </StyledBody>
  );
}
