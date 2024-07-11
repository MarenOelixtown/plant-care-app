import { useState, useEffect } from "react";
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
        {
          id: newPlantWithId.id,
          isMyPlant: true,
          isUserPlant: true,
        },
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

  function handleDeletePlant(id) {
    setPlants(plants.filter((plant) => plant.id !== id));
    setPlantsInfo(plantsInfo.filter((plant) => plant.id !== id));
  }

  function handleAddReminder(id, wateringDate) {
    setPlantsInfo(
      plantsInfo.map((plant) =>
        plant.id === id ? { ...plant, wateringDate } : plant
      )
    );
  }

  const getPlantInfoById = (id) => {
    const plantInfo = plantsInfo.find((info) => info.id === id);
    return plantInfo;
  };

  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component
          {...pageProps}
          plants={plants}
          handleToggleMyPlants={handleToggleMyPlants}
          handleAddPlant={handleAddPlant}
          handleDeletePlant={handleDeletePlant}
          handleAddReminder={handleAddReminder}
          getPlantInfoById={getPlantInfoById}
        />
      </Layout>
    </>
  );
}
