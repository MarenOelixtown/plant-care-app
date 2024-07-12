import styled from "styled-components";
import Fuse from "fuse.js";
import { useState } from "react";
import { useEffect } from "react";

const fuseOptions = {
  // isCaseSensitive: false,
  // includeScore: false,
  // shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  threshold: 0.3,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  // fieldNormWeight: 1,
  keys: [
    "name",
    "botanical_name",
    "water_need",
    "fertiliser_season",
    "light_need",
    "care_instructions",
  ],
};

const StyledSearchBox = styled.input`
  background-color: var(--secondary-bg-color);
  border: 3px solid var(--secondary-stroke-color);
  padding: 0.8rem 0.8rem;
  border-radius: 5rem;
  color: white;
  font-weight: bold;
`;

export default function Searchbar({ plants }) {
  const [results, setResults] = useState([]);
  const [fuse, setFuse] = useState(null);

  useEffect(() => {
    setFuse(new Fuse(plants, fuseOptions));
  }, []);

  function handleSearch(event) {
    if (!fuse) {
      return;
    }
    const searchPattern = event.target.value;
    const searchResult = fuse.search(searchPattern).slice(0, 10);
    // .slice(0, 10) will ensure there will never be more than 10 results

    /* setResults(searchResult.map((result) => result.item.name)); */
    setResults(searchResult.map((result) => result.item));
  }
  return (
    <>
      <label htmlFor="search"></label>
      <StyledSearchBox
        type="text"
        id="search"
        placeholder="Search . . .🔎"
        onChange={handleSearch}
      />
    </>
  );
}
