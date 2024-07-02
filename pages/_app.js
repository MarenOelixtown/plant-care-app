import { useState } from "react";
import GlobalStyle from "../styles";
import { initialPlants } from "@/assets/plants";

export default function App({ Component, pageProps }) {
  const [plants, setPlants] = useState(initialPlants);
  const [plantsInfo, setPlantsInfo] = useState([]);

  function isMyPlantfunction(plant, plantsInfo) {
    plantsInfo.find((plantInfo) => plantInfo.id === plant.id)?.isMyPlant;
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        plants={plants}
        setPlants={setPlants}
        plantsInfo={plantsInfo}
        setPlantsInfo={setPlantsInfo}
        isMyPlantfunction={isMyPlantfunction}
      />
    </>
  );
}
