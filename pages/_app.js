import { useState } from "react";
import GlobalStyle from "../styles";
import { initialPlants } from "@/assets/plants";

export default function App({ Component, pageProps }) {
  const [plants, setPlants] = useState(initialPlants);
  const [plantsInfo, setPlantsInfo] = useState(
    plants.map((plant) => ({ ...plant, isMyPlant: false }))
  );

  const handleToggleMyPlants = (plant) => {
    const updatedPlantsInfo = plantsInfo.map((info) =>
      info.id === plant.id ? { ...info, isMyPlant: !info.isMyPlant } : info
    );
    console.log(updatedPlantsInfo);
    setPlantsInfo(updatedPlantsInfo);
  };

  const isMyPlantfunction = (plant) => {
    const plantInfo = plantsInfo.find((info) => info.id === plant.id);
    return plantInfo ? plantInfo.isMyPlant : false;
  };
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        plants={plants}
        plantsInfo={plantsInfo}
        setPlantsInfo={setPlantsInfo}
        isMyPlantfunction={isMyPlantfunction}
        handleToggleMyPlants={handleToggleMyPlants}
      />
    </>
  );
}
