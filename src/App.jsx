import "./App.css";
import { extend } from "@react-three/fiber";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import DesktopLayout from "./layouts/DesktopLayout";
import MobileLayout from "./layouts/MobileLayout";
import Link2D from "./components/Link2D";

extend({ TextGeometry });

function App() {
  const windowWidth = window.innerWidth;
  return (
    <>
      {windowWidth > 768 ? (
        <DesktopLayout windowWidth={windowWidth} />
      ) : (
        <MobileLayout windowWidth={windowWidth} />
      )}
      <Link2D />
    </>
  );
}

export default App;
