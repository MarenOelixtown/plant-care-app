import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import Fuse from "fuse.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchResult from "./SearchResult";

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;
const StyledItem = styled.li`
  display: block;
  align-items: left;
  align-content: space-between;
  margin-bottom: 5px;
  list-style: none;
  border-spacing: 10px;
`;
const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 250px;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 40px 10px 10px;
  border-radius: 15px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: #888;
`;

const fuseOptions = {
  threshold: 0.3,
  keys: ["name"],
};
export default function SearchBar({ plants }) {
  const [results, setResults] = useState([]);
  const [fuse, setFuse] = useState(null);

  useEffect(() => {
    setFuse(new Fuse(plants, fuseOptions));
  }, [plants]);

  function handleSearch(event) {
    if (!fuse) {
      return;
    }
    const searchPattern = event.target.value;
    const searchResult = fuse.search(searchPattern).slice(0, 10);
    // .slice(0, 10) will ensure there will never be more than 10 results

    if (searchResult.length === 0) {
      setResults(["No matches found"]);
    } else {
      setResults(searchResult.map((result) => result.item.name));
    }
  }
  const filteredPlants =
    results.length && results[0] !== "No matches found"
      ? plants.filter((plant) => results.includes(plant.name))
      : [];

  function handleEnter(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      performSearch();
    }
  }
  return (
    <div>
      <SearchContainer>
        <SearchInput
          type="text"
          //value={searchPattern}
          id="search"
          placeholder="Search for plants..."
          onChange={handleSearch}
        />
        <Icon icon={faSearch} />
      </SearchContainer>
      <ul>
        {filteredPlants.length > 0 ? (
          <StyledList>
            {filteredPlants.map((plant) => {
              return (
                <StyledItem key={plant.id}>
                  <SearchResult plant={plant} />
                </StyledItem>
              );
            })}
          </StyledList>
        ) : (
          <p>No matches found</p>
        )}
      </ul>
    </div>
  );
}
