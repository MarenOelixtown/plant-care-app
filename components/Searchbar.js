import styled from "styled-components";

const StyledSearchBox = styled.input`
  width: 100%;
  max-width: 220px;
  height: 45px;
  padding: 12px;
  border-radius: 12px;
  border: 1.5px solid lightgrey;
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
    border: 2px solid grey;
  }
`;

export default function Searchbar({ onChange }) {
  return (
    <>
      <label htmlFor="search"></label>
      <StyledSearchBox
        type="text"
        id="search"
        placeholder="Search plants. . ."
        onChange={onChange}
      />
    </>
  );
}
