import styled from "styled-components";
import trash from "../public/trash.png";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

const StyledButton = styled.button`
  border: 2px solid black;
  font-size: 1em;
  padding: 6px 12px;
  border-radius: 10%;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  background-color: white;
  margin-right: 10px;
`;

const StyledImage = styled(Image)`
  align-items: center;
  width: 25px;
  height: 25px;
`;

const ConfirmationDialog = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border: 2px solid black;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  z-index: 10;
  width: 300px;
  text-align: center;
`;

const DialogButton = styled.button`
  margin: 5px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9;
`;

export default function ButtonDeletePlant({ OnDeletePlant, id }) {
  const [isConfirming, setIsConfirming] = useState(false);
  const router = useRouter();

  const handleDeleteClick = () => {
    setIsConfirming(true);
  };

  const handleConfirmDelete = () => {
    OnDeletePlant(id);
    setIsConfirming(false);
    router.push("/myplants");
  };

  const handleCancelDelete = () => {
    setIsConfirming(false);
  };

  return (
    <>
      {isConfirming && <Overlay onClick={handleCancelDelete} />}
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
