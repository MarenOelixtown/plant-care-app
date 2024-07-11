import { useState } from "react";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import { initialPlants } from "@/assets/plants";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [plants, setPlants] = useState(initialPlants);
  const [plantsInfo, setPlantsInfo] = useState([]);

  function handleAddPlant(newPlant) {
    // We are using functional updates to ensure the latest state is used.
    const newPlantWithId = { id: uid(), ...newPlant };
    setPlants((plants) => {
      const updatedPlants = [newPlantWithId, ...plants];
      setPlantsInfo((plantsInfo) => [
        { id: newPlantWithId.id, isMyPlant: true, isUserPlant: true },
        ...plantsInfo,
      ]);
      return updatedPlants;
    });
  }
  function handleToggleMyPlants(id) {
    const foundPlant = plantsInfo.find((plant) => plant.id === id);

    if (foundPlant) {
      setPlantsInfo(
        plantsInfo.map((plant) =>
          plant.id === foundPlant.id
            ? { ...plant, isMyPlant: !plant.isMyPlant }
            : plant
        )
      );
    } else {
      setPlantsInfo([...plantsInfo, { id, isMyPlant: true }]);
    }
  }
  const handleEditPlant = (plantToEdit) => {
    setPlants(
      plants.map((plant) => {
        if (plant.id == plantToEdit.id) return plantToEdit;
        return plant;
      })
    );
  };
  function handleDeletePlant(id) {
    setPlants(plants.filter((plant) => plant.id !== id));
    setPlantsInfo(plantsInfo.filter((plant) => plant.id !== id));
  }

  const isUserPlantFunction = (id) =>
    plantsInfo.find((info) => info.id === id)?.isUserPlant;

  const isMyPlantFunction = (id) =>
    plantsInfo.find((info) => info.id === id)?.isMyPlant;

  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component
          {...pageProps}
          plants={plants}
          isMyPlantFunction={isMyPlantFunction}
          isUserPlantFunction={isUserPlantFunction}
          handleToggleMyPlants={handleToggleMyPlants}
          handleAddPlant={handleAddPlant}
          handleEditPlant={handleEditPlant}
          handleDeletePlant={handleDeletePlant}
        />
      </Layout>
    </>
  );
}
