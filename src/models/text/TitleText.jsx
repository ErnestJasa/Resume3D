import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import courier from "../../assets/fonts/Courier Prime_Regular.json";

extend({ TextGeometry });

function TitleText({ position }) {
  const font = new FontLoader().parse(courier);
  const fontSize = 0.6;
  const text = " Software Developer";

  return (
    <group position={position}>
      <mesh position={[0.2, 0.2, 0.1]}>
        <boxGeometry args={[0.13, 0.8, 0.15]} />
        <meshStandardMaterial attach="material" color={"rgb(59,130,246)"} />
      </mesh>
      <mesh>
        <textGeometry args={[text, { font, size: fontSize, height: 0.2 }]} />
        <meshPhysicalMaterial attach="material" color={"black"} />
      </mesh>
    </group>
  );
}
export default TitleText;
