import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import courier from "../../assets/fonts/Courier Prime_Regular.json";

extend({ TextGeometry });

function NameText({ position }) {
  const font = new FontLoader().parse(courier);
  const fontSize = 1.4;
  const textLineOne = "Hi, I'm";
  const textLineTwo = "Ernestas";

  return (
    <group position={position}>
      <mesh>
        <textGeometry
          args={[textLineOne, { font, size: fontSize, height: 0.2 }]}
        />
        <meshPhysicalMaterial attach="material" color={"black"} />
      </mesh>
      <mesh position={[0, -1.5, 0]}>
        <textGeometry
          args={[textLineTwo, { font, size: fontSize, height: 0.2 }]}
        />
        <meshPhysicalMaterial attach="material" color={"black"} />
      </mesh>
    </group>
  );
}
export default NameText;
