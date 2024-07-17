import styled from "styled-components";
import edit from "../public/edit.png";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

const StyledButton = styled.button`
  padding: 6px 12px;
  border: 2px solid var(--primary-color);
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  background-color: white;
  margin-right: 10px;
  border-radius: 1rem;
  &:hover {
    border-color: var(--light-green);
  }
`;

const StyledImage = styled(Image)`
  align-items: center;
  width: 25px;
  height: 25px;
`;

export default function ButtonEditPlant({ id }) {
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  const handleEditClick = () => {
    setIsEditing(false);
    router.push(`/editplant/${id}`);
  };

  return (
    <StyledButton title="Edit My Plant" onClick={handleEditClick}>
      <StyledImage src={edit} alt="Edit My Plant" />
    </StyledButton>
  );
}
