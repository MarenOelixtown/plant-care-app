import styled from "styled-components";

const StyledSearchBox = styled.input`
  width: 100%;
  max-width: 220px;
  height: 45px;
  padding: 12px;
  border-radius: 12px;
  color: ${(props) => (props.darkMode ? "var(--dark-grey)" : "black")};
  background-color: ${(props) =>
    props.darkMode ? "var(--dark-light-green)" : "white"};
  border: 1.5px solid
    ${(props) =>
      props.darkMode
        ? "var(--dark-success-border-color)"
        : "var(--light-grey)"};
  border-radius: 0.5rem;
  outline: none;
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  box-shadow: 0px 0px 20px -18px;
  &:hover {
    border: 2px solid lightgrey;
    box-shadow: 0px 0px 20px -17px;
  }
  &:active {
    transform: scale(0.95);
  }

  &:focus {
    border: 2px solid var(--dark-grey);
  }
`;

export default function Searchbar({ onChange, darkMode }) {
  return (
    <>
      <label htmlFor="search"></label>
      <StyledSearchBox
        type="text"
        id="search"
        placeholder="Search plants. . ."
        onChange={onChange}
        darkMode={darkMode}
      />
    </>
  );
}
