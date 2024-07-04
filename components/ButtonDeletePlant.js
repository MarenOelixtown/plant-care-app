import styled from "styled-components";
import trash from "../public/trash.png";
import Image from "next/image";
import { useState } from "react";

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

const ConfirmationDialog = styled.div`
  position: absolute;
  bottom: 50px;
  right: 10px;
  background: white;
  border: 2px solid black;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  z-index: 10;
`;

const DialogButton = styled.button`
  margin: 5px;
`;

export default function ButtonDeletePlant({ OnDeletePlant, id }) {
  const [isConfirming, setIsConfirming] = useState(false);

  const handleDeleteClick = () => {
    setIsConfirming(true);
  };

  const handleConfirmDelete = () => {
    OnDeletePlant(id);
    setIsConfirming(false);
  };

  const handleCancelDelete = () => {
    setIsConfirming(false);
  };

  return (
    <>
      {isConfirming && (
        <ConfirmationDialog>
          <p>Are you sure you want to delete this plant?</p>
          <DialogButton onClick={handleConfirmDelete}>Yes</DialogButton>
          <DialogButton onClick={handleCancelDelete}>No</DialogButton>
        </ConfirmationDialog>
      )}
      <StyledButton title="Delete from My Plants" onClick={handleDeleteClick}>
        <StyledImage src={trash} alt="DeleteMyPlant" />
      </StyledButton>
    </>
  );
}
