import { useState } from "react";
import GlobalStyle from "../styles";
import { initialPlants } from "@/assets/plants";
import Overview from "@/components/Overview";
import MyPlants from "@/components/MyPlants";

export default function App({ Component, pageProps }) {
  const [plants, setPlants] = useState(initialPlants);
  const [plantsInfo, setPlantsInfo] = useState(
    plants.map((plant) => ({ ...plant, isMyPlant: false }))
  );

  /*const togglePlantInMyPlants = (plant) => {
    if (myPlants.some((myPlant) => myPlant.id === plant.id)) {
      setMyPlants(myPlants.filter((myPlant) => myPlant.id !== plant.id));
    } else {
      setMyPlants([...myPlants, plant]);
    }
  };*/

  /*function isMyPlantfunction(plant) {
    return plantsInfo.find((plantInfo) => plantInfo.id === plant.id)?.isMyPlant;
  }*/
  const isMyPlantfunction = (plant) => {
    const plantInfo = plantsInfo.find((info) => info.id === plant.id);
    return plantInfo ? plantInfo.isMyPlant : false;
  };
  console.log(plantsInfo);
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        plants={plants}
        plantsInfo={plantsInfo}
        setPlantsInfo={setPlantsInfo}
        isMyPlantfunction={isMyPlantfunction}
      />
    </>
  );
}
