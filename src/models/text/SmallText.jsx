import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import courier from "../../assets/fonts/Courier Prime_Regular.json";

extend({ TextGeometry });

function SmallText({ position, text, windowWidth }) {
  const font = new FontLoader().parse(courier);
  const fontSize = windowWidth > 768 ? 1.1 : 1;

  return (
    <mesh position={position}>
      <textGeometry args={[text, { font, size: fontSize, height: 0.2 }]} />
      <meshPhysicalMaterial attach="material" color={"black"} />
    </mesh>
  );
}
export default SmallText;
