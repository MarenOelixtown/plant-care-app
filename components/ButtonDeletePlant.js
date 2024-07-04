import styled from "styled-components";
import trash from "../public/trash.png";
import Image from "next/image";

const StyledButton = styled.button`
  border: 2px solid black;
  font-size: 1em;
  padding: 6px 12px;
  border-radius: 10%;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: white;
`;

const StyledImage = styled(Image)`
  align-items: center;
  width: 25px;
  height: 25px;
`;

export default function ButtonDeletePlant({ OnDeletePlant, id }) {
  return (
    <>
      <StyledButton
        title="Delete from My Plants"
        onClick={() => OnDeletePlant(id)}
      >
        <StyledImage src={trash} alt="DeleteMyPlant" />
      </StyledButton>
    </>
  );
}
