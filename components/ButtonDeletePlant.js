import styled from "styled-components";
import trash from "../public/trash.png";
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

const ConfirmationDialog = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) =>
    props.darkMode ? "var(--light-green)" : "var(dark-grey)"};
  background-color: ${(props) => (props.darkMode ? "#333" : "#fff")};
  border: 2px solid darkgray;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  z-index: 10;
  width: 300px;
  text-align: center;
`;

const DialogButton = styled.button`
  margin: 5px;
  padding: 6px 12px;
  border: none;
  border-radius: 0.5rem;
  background-color: ${(props) => (props.darkMode ? "#555" : "#ddd")};
  color: ${(props) => (props.darkMode ? "var(--light-green)" : "black")};
  &:hover {
    background-color: ${(props) => (props.darkMode ? "#777" : "#bbb")};
  }
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

export default function ButtonDeletePlant({ OnDeletePlant, id, darkMode }) {
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
        <ConfirmationDialog darkMode={darkMode}>
          <p>Are you sure you want to delete this plant?</p>
          <DialogButton darkMode={darkMode} onClick={handleConfirmDelete}>
            Yes
          </DialogButton>
          <DialogButton darkMode={darkMode} onClick={handleCancelDelete}>
            No
          </DialogButton>
        </ConfirmationDialog>
      )}
      <StyledButton title="Delete from My Plants" onClick={handleDeleteClick}>
        <StyledImage src={trash} alt="DeleteMyPlant" />
      </StyledButton>
    </>
  );
}
