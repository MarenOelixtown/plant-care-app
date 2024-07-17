import NavigationBar from "./NavigationBar";
import NavigationAddPlant from "./NavigationAddPlant";

export default function Layout({ children, darkMode, onToggleDarkMode }) {
  return (
    <>
      <NavigationAddPlant />
      <main>{children}</main>
      <NavigationBar darkMode={darkMode} onToggleDarkMode={onToggleDarkMode} />
    </>
  );
}
