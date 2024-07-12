import styled from "styled-components";

const StyledSearchBox = styled.input`
  background-color: var(--secondary-bg-color);
  border: 3px solid var(--secondary-stroke-color);
  padding: 0.8rem 0.8rem;
  border-radius: 5rem;
  color: white;
  font-weight: bold;
`;

export default function Searchbar({ onChange }) {
  return (
    <>
      <label htmlFor="search"></label>
      <StyledSearchBox
        type="text"
        id="search"
        placeholder="Search . . .🔎"
        onChange={onChange}
      />
    </>
  );
}
