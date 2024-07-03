import { useState } from "react";
import GlobalStyle from "../styles";
import { initialPlants } from "@/assets/plants";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [plants, setPlants] = useState(initialPlants);
  function handleAddPlant(newPlant) {
    setPlants([{ id: uid(), ...newPlant }, ...plants]);
  }
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

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        plants={plants}
        handleToggleMyPlants={handleToggleMyPlants}
        handleAddPlant={handleAddPlant}
      />
    </>
  );
}
