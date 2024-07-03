import { useState } from "react";
import GlobalStyle from "../styles";
import { initialPlants } from "@/assets/plants";

export default function App({ Component, pageProps }) {
  const [plants, setPlants] = useState(initialPlants);

  function handleToggleMyPlants(id) {
    const foundPlant = plants.find((plant) => plant.id === id);

    if (foundPlant) {
      setPlants(
        plants.map((plant) =>
          plant.id === foundPlant.id
            ? { ...plant, isMyPlant: !plant.isMyPlant }
            : plant
        )
      );
    }
  }

  const isMyPlantfunction = (plant) => {
    const plantInfo = plants.find((info) => info.id === plant.id);
    return plantInfo ? plant.isMyPlant : false;
  };
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        plants={plants}
        isMyPlantfunction={isMyPlantfunction}
        handleToggleMyPlants={handleToggleMyPlants}
      />
    </>
  );
}
