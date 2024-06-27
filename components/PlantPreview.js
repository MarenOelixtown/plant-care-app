import styled from "styled-components";

const StyledBody = styled.div`
  margin: 10px;
`;

const StyledP = styled.p`
  margin-right: 5px;
`;

const StyledDiv = styled.div`
  display: flex;
  margin-bottom: 5px;
  color: grey;
  border-style: solid;
  padding: 10px;
`;
const StyledImg = styled.img`
  border-radius: 5px;
  width: 100px;
  height: 100 px;
`;

export default function PlantPreview({ name, botanical_name }) {
  return (
    <StyledBody>
      <StyledDiv>
        <StyledImg
          src="https://img.freepik.com/free-photo/decorative-houseplant-isolated-white-background_157027-3500.jpg?t=st=1719484743~exp=1719488343~hmac=0124cb8c89ad44347e3e49f4b0c7ba1a45a4aeb656af770fb64e7e66567451a9&w=826"
          alt={name}
        />
        <>
          <StyledP>{name}</StyledP>
          <StyledP>{botanical_name}</StyledP>
        </>
      </StyledDiv>
    </StyledBody>
  );
}
