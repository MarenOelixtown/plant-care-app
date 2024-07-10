import styled from "styled-components";
import edit from "../public/edit.png";
import Image from "next/image";
import Link from "next/link";

const StyledEditImage = styled(Image)`
  width: 25px;
  height: 25px;
`;
const StyledLink = styled(Link)`
  border: 2px solid black;
  font-size: 1em;
  padding: 6px 12px;
  border-radius: 10%;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  background-color: white;
`;
export default function ButtonEditPlant({ id }) {
  return (
    <StyledLink href={`/editplant/${id}`}>
      <StyledEditImage src={edit} alt="Edit My Plant" />
    </StyledLink>
  );
}
