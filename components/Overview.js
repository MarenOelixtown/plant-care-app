import PlantPreview from "./PlantPreview";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import { useState, useEffect } from "react";
import Fuse from "fuse.js";

const fuseOptions = {
  isCaseSensitive: false,
  threshold: 0.3,
  keys: [
    "name",
    "botanical_name",
    "water_need",
    "light_need",
    "care_instructions",
  ],
};

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

const StyledParagraph = styled.p`
  margin-top: 1rem;
  color: var(--dark-yellowish);
`;

const StyledPDiv = styled.div`
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 40px;
  margin-top: 20px;
`;

const StyledDiv = styled.div`
  text-align: center;
`;

export default function Overview({
  plants,
  handleToggleMyPlants,
  getPlantInfoById,
}) {
  const [results, setResults] = useState([]);
  const [fuse, setFuse] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFuse(new Fuse(plants, fuseOptions));
  }, [plants]);

  function handleSearch(event) {
    const searchPattern = event.target.value;
    setSearchTerm(searchPattern);
    if (!fuse || searchPattern === "") {
      setResults([]);
      return;
    }
    const searchResult = fuse.search(searchPattern);
    const matchedPlants = searchResult.map((result) => result.item);
    setResults(matchedPlants);
  }

  console.log(results);
  return (
    <StyledDiv>
      <h1>Discover Plants</h1>
      <Searchbar onChange={handleSearch} />
      {plants.length === 0 ? (
        <StyledPDiv>
          <StyledParagraph>
            No plants available at the moment. Please come back later!
          </StyledParagraph>
        </StyledPDiv>
      ) : (
        <>
          {searchTerm !== "" && results.length === 0 && (
            <p>Sorry... No plants match your search.</p>
          )}
          <StyledList>
            {(searchTerm === "" ? plants : results).map((plant) => {
              const isMyPlant = getPlantInfoById(plant.id)?.isMyPlant;
              return (
                <StyledItem key={plant.id}>
                  <PlantPreview
                    plant={plant}
                    isMyPlant={isMyPlant}
                    handleToggleMyPlants={handleToggleMyPlants}
                  />
                </StyledItem>
              );
            })}
          </StyledList>
        </>
      )}
    </StyledDiv>
  );
}
