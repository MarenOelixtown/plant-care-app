import NavigationBar from "./NavigationBar/NavigationBar";
import NavigationAddPlant from "./NavigationAddPlant";

export default function Layout({ children }) {
  return (
    <>
      <NavigationAddPlant />
      <main>{children}</main>
      <NavigationBar />
    </>
  );
}
