import { useState } from "react";
import GlobalStyle from "../styles";
import { initialPlants } from "@/assets/plants";

export default function App({ Component, pageProps }) {
  const [plants, setPlants] = useState(initialPlants);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} plants={plants} setPlants={setPlants} />
    </>
  );
}
