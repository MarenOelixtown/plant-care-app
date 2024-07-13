import NavigationBar from "./NavigationBar";
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
