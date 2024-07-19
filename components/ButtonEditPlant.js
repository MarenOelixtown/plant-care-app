import styled from "styled-components";
import edit from "../public/edit.png";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { StyledButtonImage } from "@/styles";
import { StyledButton } from "@/styles";

export default function ButtonEditPlant({ id }) {
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  const handleEditClick = () => {
    setIsEditing(false);
    router.push(`/editplant/${id}`);
  };

  return (
    <StyledButton title="Edit My Plant" onClick={handleEditClick}>
      <StyledButtonImage src={edit} alt="Edit My Plant" />
    </StyledButton>
  );
}
