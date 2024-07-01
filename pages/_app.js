import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [myPlants, setMyPlants] = useLocalStorageState("myPlants", {
    defaultValue: [],
  });

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} myPlants={myPlants} setMyPlants={setMyPlants} />
    </>
  );
}
