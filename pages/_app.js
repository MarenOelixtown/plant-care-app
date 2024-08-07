import { useState, useEffect } from "react";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import { initialPlants } from "@/assets/plants";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import LoadingWrapper from "@/components/LoadingWrapper";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [plants, setPlants] = useLocalStorageState("plants", {
    defaultValue: initialPlants,
  });
  const [plantsInfo, setPlantsInfo] = useLocalStorageState("plantsInfo", {
    defaultValue: [],
  });

  useEffect(() => {
    if (plants && plantsInfo) {
      setIsInitialized(true);
    }
  }, [plants, plantsInfo]);

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

  function handleAddReminder(id, wateringDate) {
    setPlantsInfo(
      plantsInfo.map((plant) =>
        plant.id === id ? { ...plant, wateringDate } : plant
      )
    );
  }
  const calculateNextWateringDate = (wateringStartDate, waterNeed) => {
    let wateringDate = new Date(wateringStartDate);
    if (waterNeed === "Low") {
      wateringDate.setDate(wateringDate.getDate() + 6); // 6 days
    } else if (waterNeed === "Moderate") {
      wateringDate.setDate(wateringDate.getDate() + 2); // 3 days
    } else if (waterNeed === "High") {
      wateringDate.setDate(wateringDate.getDate() + 1); // 1 day
    }
    return wateringDate;
  };

  const getPlantInfoById = (id) => {
    const plantInfo = plantsInfo.find((info) => info.id === id);
    return plantInfo;
  };

  useEffect(() => {
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(systemPrefersDark);
  }, []);

  function handleToggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  if (!isInitialized) {
    return <LoadingWrapper />;
  }

  return (
    <>
      <GlobalStyle darkMode={darkMode} />
      <Layout darkMode={darkMode} onToggleDarkMode={handleToggleDarkMode}>
        <Component
          {...pageProps}
          darkMode={darkMode}
          plants={plants}
          handleToggleMyPlants={handleToggleMyPlants}
          handleAddPlant={handleAddPlant}
          handleEditPlant={handleEditPlant}
          handleDeletePlant={handleDeletePlant}
          handleAddReminder={handleAddReminder}
          getPlantInfoById={getPlantInfoById}
          calculateNextWateringDate={calculateNextWateringDate}
        />
      </Layout>
    </>
  );
}
